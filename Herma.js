const herma_section = document.querySelector('.herma-section');
const start_consulting = document.querySelector('.start-consulting');
const lang_select = document.querySelector('.lang-select');
const chat_container = document.querySelector('.chat-container');
const chat_intro_container = document.querySelector('.chat-intro-container');
const messages_container = document.querySelector('.messages-container');
const chat_buttons_container = document.querySelector('.chat-buttons-container');
const chat_button = document.querySelectorAll('.chat-button');

let statements = statements_english;
let welcome_user = welcome_user_english;
let results = results_english;
let divorce_prediction = divorce_prediction_english;
let by = by_english;
let divorce_stable = divorce_stable_english;
let user_responses = [];
let typing_speed = 0;
let question_index = 0;

lang_select.disabled = true;
start_consulting.onclick = InitialiseChat;
lang_select.onchange = function() {ChangeLanguage(lang_select.value);}
UserAnswer();

function SendPrompt(user_responses) {
    fetch('https://web-production-81d4.up.railway.app/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ user_responses }),
        credentials: 'omit'
    })
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        if (data.success) {
            console.log('Success:', data);
            GenerateResponse(data.result, data.probabilities);
            lang_select.style.cursor = 'not-allowed';
            lang_select.disabled = true;
        } else {
            console.error('Model failure:', data.error);
            alert('There was an error generating the response! Please try again or refresh the page.');
        }
    })
    .catch(err => {
        console.error('Server failure:', err);
        alert('There was an error connecting to the server! Please try again or refresh the page.');
    });
}


function InitialiseChat() {
    DisableButtons();
    lang_select.disabled = false;
    lang_select.style.cursor = 'pointer';
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

    setTimeout(() => {CreateBotMessage(statements[question_index]);}, 5000);
}

function UserAnswer() {
    chat_button.forEach((button, index) => {
        button.onclick = function() {
            const answer = button.textContent;
            user_responses[question_index] = index;
            CreateUserMessage(answer);
            if (question_index == statements.length) {
                SendPrompt(user_responses);
            } else {CreateBotMessage(statements[question_index]);}
        }
    });
}

async function CreateBotMessage(message) {
    const bot_message = document.createElement('span');
    const message_to_letter = message.split("");
    bot_message.classList.add('message');
    bot_message.classList.add('bot-message');
    messages_container.appendChild(bot_message);
    
    
    for (var i = 0; i < message_to_letter.length; i++) {
        (function (index) {
            setTimeout(() => {
                bot_message.textContent += message_to_letter[index]; 
                messages_container.scrollTo({ 
                    top: messages_container.scrollHeight,
                    behavior: 'smooth' 
                });
            }, typing_speed * index);
        })(i);
    }
    
    const message_length = message_to_letter.length;
    await Wait(typing_speed * message_length);
    EnableButtons();
}

function CreateUserMessage(answer) {
    const user_message = document.createElement('span');
    user_message.classList.add('message');
    user_message.classList.add('user-message');
    user_message.textContent = answer;
    messages_container.appendChild(user_message);
    messages_container.scrollTo({ top: messages_container.scrollHeight, behavior: 'smooth' });
    DisableButtons();
    question_index = question_index + 1;
}

function DisableButtons() {
    chat_button.forEach(button => {
        button.classList.add('disable-button');
        button.disabled = true;
    });
}

async function EnableButtons() {
    chat_button.forEach(button => {
        button.classList.remove('disable-button');
        button.disabled = false;
    });
}

function Wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function GenerateResponse(divorced, probabilities) {
    const result_container = document.createElement('div');
    const response_title = document.createElement('span');
    const response_sub_title = document.createElement('span');
    const response_probability = document.createElement('span');
    const response_description  = document.createElement('span');

    result_container.classList.add('result-container');
    response_title.classList.add('response-title');
    response_sub_title.classList.add('response-sub-title');
    response_probability.classList.add('response-probability');
    response_description.classList.add('response-description');

    response_title.innerHTML = divorce_prediction;
    response_probability.innerHTML = `${by} ${(Math.max(...probabilities) * 100).toFixed(2)}%`;

    if (divorced) {
        response_sub_title.style.color = 'rgb(160, 0, 0)';
        response_probability.style.color = 'rgb(160, 0, 0)';
        response_sub_title.innerHTML = divorce_stable[0];
        response_description.innerHTML = results['divorce'];
    }
    
    else {
        response_sub_title.style.color = 'rgb(0, 160, 0)';
        response_probability.style.color = 'rgb(0, 160, 0)';
        response_sub_title.innerHTML = divorce_stable[1];
        response_description.innerHTML = results['no_divorce'];
    }

    result_container.appendChild(response_title);
    result_container.appendChild(response_sub_title);
    result_container.appendChild(response_probability);
    result_container.appendChild(response_description);
    herma_section.appendChild(result_container);

    window.scrollTo({
        top: result_container.offsetTop - 200,
        behavior: "smooth"
    });
}

function ChangeLanguage(language) {
    messages_container.innerHTML = '';
    switch (language) {
        case 'english':
            statements = statements_english;
            welcome_user = welcome_user_english;
            results = results_english;
            divorce_prediction = divorce_prediction_english;
            by = by_english;
            divorce_stable = divorce_stable_english;
            chat_button.forEach((button, index) => {
                button.innerHTML = buttons_english[index];
            });
            break;
        case 'frensh':
            statements = statements_frensh;
            welcome_user = welcome_user_frensh;
            results = results_frensh;
            divorce_prediction = divorce_prediction_frensh;
            by = by_frensh;
            divorce_stable = divorce_stable_frensh;
            chat_button.forEach((button, index) => {
                button.innerHTML = buttons_frensh[index];
            });
            break;
        case 'arabic':
            statements = statements_arabic;
            welcome_user = welcome_user_arabic;
            results = results_arabic;
            divorce_prediction = divorce_prediction_arabic;
            by = by_arabic;
            divorce_stable = divorce_stable_arabic;
            chat_button.forEach((button, index) => {
                button.innerHTML = buttons_arabic[index];
            });
            break;
    }
    InitialiseChat();
}
