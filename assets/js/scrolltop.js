// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.getElementById("page-nav") !== null) {
      if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 20) {
          document.getElementById("page-nav").style.display = "block";
      } else {
          document.getElementById("page-nav").style.display = "none";
      }
    } else {
      if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 20) {
          document.getElementById("scroll-to-top").style.display = "block";
      } else {
          document.getElementById("scroll-to-top").style.display = "none";
      }
    }

}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
