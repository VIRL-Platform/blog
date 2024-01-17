// Get the modal
var modal = document.getElementById("myModal");
var modalImg = document.getElementById("img01");

// Get all images that should open the modal
var images = document.querySelectorAll('.modal-trigger');

// Attach an onclick event to each image
images.forEach(function(img) {
    img.onclick = function(){
        modal.style.display = "block";
        modalImg.src = this.src;
    };
});

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
}
