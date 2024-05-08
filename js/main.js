
// *****  Window on Scroll  ******

$(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll > 20) {
      $(".social-bar").addClass("social-none");
      $(".fixed-top").addClass("nav-flow");

    } else {
      $(".social-bar").removeClass("social-none");
      $(".fixed-top").removeClass("nav-flow");
    }
  });


  //  **************  AOS Animation  ***********

  AOS.init({
    easing:'ease',
    duration:1500,
  });





  
	document.querySelector('#audio-btn').addEventListener("click",function(){
                
				var isplaying = document.querySelector('#vid');

        if(isplaying.muted == true){
          isplaying.muted = false;
          console.log("false");
        }
        else{
          isplaying.muted = true;
           console.log("true");
        }
	});


 

    $('body').one('click touchstart', function () {
        const videoElement = document.querySelector('#vid');

            if (videoElement.muted == true) {
               videoElement.muted = false;
            }
            else {
               videoElement.muted = false;
            }
    });

