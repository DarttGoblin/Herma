const herma_section = document.querySelector('.herma-section');
const start_consulting = document.querySelector('.start-consulting');
const chat_container = document.querySelector('.chat-container');
const chat_intro_container = document.querySelector('.chat-intro-container');
const messages_container = document.querySelector('.messages-container');
const chat_buttons_container = document.querySelector('.chat-buttons-container');
const chat_button = document.querySelectorAll('.chat-button');

let user_responses = [];
const typing_speed = 0;
let question_index = 0;

start_consulting.onclick = SendPrompt;
// InitialiseChat
UserAnswer();

function SendPrompt() {
    user_responses = [
        4, 4, 4, 4, 4, 0, 0, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
    ];
    
    fetch('http://localhost:3069', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ user_responses }),
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            console.log('success');
            console.log(data.probabilities);
            console.log(data.probabilities[0]);
            console.log(data.probabilities[1]);
            GenerateResponse(data.result, data.probabilities);
        } else {
            console.log('failure');
            alert('There was an error generating the respone! please try again or refresh the page.')
        }
    })
    .catch(err => {
        console.log('failure');
        alert('There was an error in the server! please try again or refresh the page.')
    });
}


function InitialiseChat() {
    const welcome_user = "I'm here to help you gain insights into your relationship dynamics. Let's begin by \
    assessing your responses to a series of statements. Answer honestly to receive a personalized analysis. 💡";

    DisableButtons();
    chat_container.style.display = 'flex';
    chat_intro_container.style.display = 'none';

    const bot_message = document.createElement('span');
    const message_to_letter = welcome_user.split("");
    bot_message.classList.add('message');
    bot_message.classList.add('bot-message');
    messages_container.appendChild(bot_message);
    messages_container.scrollTo({ top: messages_container.scrollHeight, behavior: 'smooth' });
    
    for (var i = 0; i < message_to_letter.length; i++) {
        (function (index) {
            setTimeout(() => { bot_message.textContent += message_to_letter[index]; }, typing_speed * index);
        })(i);
    }

    setTimeout(() => {CreateBotMessage(questions[question_index]);}, 0);
}

function UserAnswer() {
    chat_button.forEach((button, index) => {
        button.onclick = function() {
            const answer = button.textContent;
            user_responses[question_index] = index;
            CreateUserMessage(answer);
            if (question_index == questions.length) {
                console.log('ready to send');
                SendPrompt();
            } else {CreateBotMessage(questions[question_index]);}
        }
    });
}
