document.addEventListener("DOMContentLoaded", function() {
    var video = document.getElementById('videoElement');

    video.addEventListener('play', function() {
        console.log("Video is now playing.");
    });
});
