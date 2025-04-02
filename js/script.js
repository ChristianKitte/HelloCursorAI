document.addEventListener('DOMContentLoaded', () => {
    const helloText = document.getElementById('helloText');
    const rotateButton = document.getElementById('rotateButton');
    let isAnimating = false;

    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    function handleAnimationEnd() {
        isAnimating = false;
        rotateButton.disabled = false;
        helloText.classList.remove('rotating');
        helloText.removeEventListener('transitionend', handleAnimationEnd);
    }

    rotateButton.addEventListener('click', () => {
        if (isAnimating) return;
        
        isAnimating = true;
        rotateButton.disabled = true;
        
        const randomColor = getRandomColor();
        helloText.style.color = randomColor;
        helloText.classList.add('rotating');

        helloText.addEventListener('transitionend', handleAnimationEnd);
    });
}); 