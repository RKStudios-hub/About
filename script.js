
// script.js
window.addEventListener('scroll', function() {
    const video = document.getElementById('background-video');
    const scrollPosition = window.pageYOffset;
    
    video.style.transform = `translate3d(-50%, calc(-50% + ${scrollPosition * 0.5}px), 0)`;
});

document.addEventListener('DOMContentLoaded', function() {
    var audio = document.getElementById('backgroundMusic');
    var playPromise = audio.play();

    if (playPromise !== undefined) {
        playPromise.catch(function(error) {
            console.log('Autoplay was prevented. Trying to play again after user interaction.');
            // Wait for user interaction
            document.body.addEventListener('click', function() {
                audio.play();
            }, { once: true });
        });
    }
});
