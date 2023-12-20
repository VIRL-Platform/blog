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
