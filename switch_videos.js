function switchVideo(prefix, videoContainerId, preview_id) {
    // Hide all video containers first
    document.getElementById(prefix + 'video1Container').style.display = 'none';
    document.getElementById(prefix + 'video2Container').style.display = 'none';
  
    // Show the selected video container
    document.getElementById(prefix + videoContainerId).style.display = 'block';

    var videoPreview1 = document.getElementById(prefix + 'video1Preview');
    var videoPreview2 = document.getElementById(prefix + 'video2Preview');

    videoPreview1.className = videoPreview1.className.replace(" preview-video-active", "");
    videoPreview2.className = videoPreview2.className.replace(" preview-video-active", "");

    document.getElementById(prefix + preview_id).className += " preview-video-active";
}


document.addEventListener("DOMContentLoaded", function() {
    // Get all video elements with class 'video-music'
    var videos = document.querySelectorAll('.video-music');

    // Loop through each video and set the volume
    videos.forEach(function(video) {
        video.volume = 0.5; // 50% volume
    });
});
