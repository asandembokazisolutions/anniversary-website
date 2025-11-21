// Typing effect function
function typeText(elementOrId, text, speed = 50, callback = null) {
    let element;
    
    if (typeof elementOrId === 'string') {
        element = document.getElementById(elementOrId);
    } else {
        element = elementOrId;
    }
    
    if (!element) return;
    
    let index = 0;
    element.textContent = '';
    
    function type() {
        if (index < text.length) {
            element.textContent += text.charAt(index);
            index++;
            setTimeout(type, speed);
        } else if (callback) {
            callback();
        }
    }
    
    type();
}

// Add page transition effect
document.addEventListener('DOMContentLoaded', function() {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease-in';
        document.body.style.opacity = '1';
    }, 100);
});
