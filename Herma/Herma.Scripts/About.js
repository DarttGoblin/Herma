const benefit_container = document.querySelectorAll('.benefit-container'); 

benefit_container.forEach(container => {
    container.onclick = function() {
        window.open('https://www.kaggle.com/datasets/andrewmvd/divorce-prediction/data', '_blank');
    }
});