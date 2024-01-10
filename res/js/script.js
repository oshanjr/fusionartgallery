$('.navTrigger').click(function () {
    $(this).toggleClass('active');
    console.log("Clicked menu");
    $("#mainListDiv").toggleClass("show_list");
    $("#mainListDiv").fadeIn();

});


document.addEventListener('DOMContentLoaded', function () {
    let prevScrollPos = window.pageYOffset;
    const header = document.querySelector('nav');
  
    window.onscroll = function() {
      const currentScrollPos = window.pageYOffset;
      if (prevScrollPos > currentScrollPos) {
        header.style.top = '0';
      } else {
        header.style.top = `-${header.offsetHeight}px`;
      }
      prevScrollPos = currentScrollPos;
    };
  });
  


  