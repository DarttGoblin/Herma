const header_start_button = document.querySelector('.header-start-button');
const header_github_button = document.querySelector('.header-github-button');
const header_demo_button = document.querySelector('.header-demo-button');

header_start_button.onclick = function() {
    section[1].scrollIntoView({behavior: 'smooth'});
}

header_github_button.onclick = function() {
    window.open('https://github.com/DarttGoblin/Herma_server', '_blank');
}

header_demo_button.onclick = function() {
    window.open('https://drive.google.com/file/d/1Xk67mQI4DaenoYzZ7zZE7ugApZr83jhW/view?usp=sharing', '_blank');
}