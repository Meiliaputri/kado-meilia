// YES button: Simple alert on click
document.getElementById('yes-btn').addEventListener('click', function() {
    alert('Yay! You said YES! 💖 Happy Valentine\'s Day!');
});

// NO button: Move randomly on hover or click to make it hard to press
const noBtn = document.getElementById('no-btn');

function moveNoBtn() {
    // Get viewport dimensions
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    
    // Random position within bounds (avoiding edges for button size)
    const randomX = Math.random() * (viewportWidth - 200) + 50; // 200px button width approx
    const randomY = Math.random() * (viewportHeight - 100) + 50; // 100px button height approx
    
    noBtn.style.position = 'absolute';
    noBtn.style.left = `${randomX}px`;
    noBtn.style.top = `${randomY}px`;
}

// Move on hover
noBtn.addEventListener('mouseover', moveNoBtn);

// Move on click (extra evasion)
noBtn.addEventListener('click', function(event) {
    event.preventDefault(); // Prevent any default action
    moveNoBtn();
});