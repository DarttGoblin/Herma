const header_start_button = document.querySelector('.header-start-button');
const header_github_button = document.querySelector('.header-github-button');

header_start_button.onclick = function() {
    section[1].scrollIntoView({behavior: 'smooth'});
}

header_github_button.onclick = function() {
    window.open('https://github.com/DarttGoblin/Herma_server', '_blank');
}