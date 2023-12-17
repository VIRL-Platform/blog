function switchVideo(prefix, videoContainerId) {
    // Hide all video containers first
    document.getElementById(prefix + 'video1Container').style.display = 'none';
    document.getElementById(prefix + 'video2Container').style.display = 'none';
  
    // Show the selected video container
    document.getElementById(prefix + videoContainerId).style.display = 'block';
}
