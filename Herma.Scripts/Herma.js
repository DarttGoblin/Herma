const questions = [
    "1. If one of us apologizes when our discussion deteriorates, the discussion ends.",
    "2. I know we can ignore our differences, even if things get hard sometimes.",
    "3. When we need it, we can take our discussions with my spouse from the beginning and correct it.",
    "4. When I discuss with my spouse, to contact him will eventually work.",
    "5. The time I spent with my wife is special for us.",
    "6. We don't have time at home as partners.",
    "7. We are like two strangers who share the same environment at home rather than family.",
    "8. I enjoy our holidays with my wife.",
    "9. I enjoy traveling with my wife.",
    "10. Most of our goals are common to my spouse.",
    "11. I think that one day in the future, when I look back, I see that my spouse and I have been in harmony with each other.",
    "12. My spouse and I have similar values in terms of personal freedom.",
    "13. My spouse and I have similar sense of entertainment.",
    "14. Most of our goals for people (children, friends, etc.) are the same.",
    "15. Our dreams with my spouse are similar and harmonious.",
    "16. We're compatible with my spouse about what love should be.",
    "17. We share the same views about being happy in our life with my spouse.",
    "18. My spouse and I have similar ideas about how marriage should be.",
    "19. My spouse and I have similar ideas about how roles should be in marriage.",
    "20. My spouse and I have similar values in trust.",
    "21. I know exactly what my wife likes.",
    "22. I know how my spouse wants to be taken care of when she/he is sick.",
    "23. I know my spouse's favorite food.",
    "24. I can tell you what kind of stress my spouse is facing in her/his life.",
    "25. I have knowledge of my spouse's inner world.",
    "26. I know my spouse's basic anxieties.",
    "27. I know what my spouse's current sources of stress are.",
    "28. I know my spouse's hopes and wishes.",
    "29. I know my spouse very well.",
    "30. I know my spouse's friends and their social relationships.",
    "31. I feel aggressive when I argue with my spouse.",
    "32. When discussing with my spouse, I usually use expressions such as ‘you always’ or ‘you never’.",
    "33. I can use negative statements about my spouse's personality during our discussions.",
    "34. I can use offensive expressions during our discussions.",
    "35. I can insult my spouse during our discussions.",
    "36. I can be humiliating when we discuss.",
    "37. My discussion with my spouse is not calm.",
    "38. I hate my spouse's way of opening a subject.",
    "39. Our discussions often occur suddenly.",
    "40. We're just starting a discussion before I know what's going on.",
    "41. When I talk to my spouse about something, my calm suddenly breaks.",
    "42. When I argue with my spouse, I only go out and I don't say a word.",
    "43. I mostly stay silent to calm the environment a little bit.",
    "44. Sometimes I think it's good for me to leave home for a while.",
    "45. I'd rather stay silent than discuss with my spouse.",
    "46. Even if I'm right in the discussion, I stay silent to hurt my spouse.",
    "47. When I discuss with my spouse, I stay silent because I am afraid of not being able to control my anger.",
    "48. I feel right in our discussions.",
    "49. I have nothing to do with what I've been accused of.",
    "50. I'm not actually the one who's guilty about what I'm accused of.",
    "51. I'm not the one who's wrong about problems at home.",
    "52. I wouldn't hesitate to tell my spouse about her/his inadequacy.",
    "53. When I discuss, I remind my spouse of her/his inadequacy.",
    "54. I'm not afraid to tell my spouse about her/his incompetence."
];

const results = {
    divorce: "Based on your responses, there are indications of significant challenges in your relationship. It may be beneficial to seek professional guidance or have open discussions with your partner about the future of your marriage.",
    no_divorce: "Your responses suggest a strong foundation in your relationship. While every marriage has challenges, your connection appears resilient. Keep nurturing your bond through communication and mutual understanding."
};

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
    console.log('propa in gene: \n');
    console.log(probabilities);

    response_title.innerHTML = 'Divorce Prediction';
    response_probability.innerHTML = `By ${(Math.max(...probabilities) * 100).toFixed(0)}%`;

    if (divorced) {
        response_sub_title.style.color = 'rgb(160, 0, 0)';
        response_probability.style.color = 'rgb(160, 0, 0)';
        response_sub_title.innerHTML = 'Divorce';
        response_description.innerHTML = results['divorce'];
    }
    
    else {
        response_sub_title.style.color = 'rgb(0, 160, 0)';
        response_probability.style.color = 'rgb(0, 160, 0)';
        response_sub_title.innerHTML = 'Stable Relationship';
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