
var button = document.querySelector(".darktheme");
        
        button.onclick = function(){
            document.querySelector(".darktheme").classList.toggle("active");
            document.body.classList.toggle("dark-theme-color");
        }


        // document.addEventListener("DOMContentLoaded", function () {
        //     document.querySelector("nav").addEventListener("click", function (event) {
        //       event.preventDefault();
        //       var href = event.target.getAttribute("href");
        //       var overlay = document.createElement("div");
        //       overlay.classList.add("loading-overlay");
        //       var spinner = document.createElement("div");
        //       spinner.classList.add("loading-spinner");
        //       overlay.appendChild(spinner);
        //       document.body.appendChild(overlay);
        //       setTimeout(function () {
        //         window.location.href = href;
        //       }, 2000);
        //     });
        //   });


 
 
        // var swiper = new Swiper(".slide-content", {
        //     slidesPerView: 3,
        //     spaceBetween: 25,
        //     loop: true,
        //     centerSlide: 'true',
        //     fade: 'true',
        //     grabCursor: 'true',
        //     pagination: {
        //       el: ".swiper-pagination",
        //       clickable: true,
        //       dynamicBullets: true,
        //     },
        //     navigation: {
        //       nextEl: ".swiper-button-next",
        //       prevEl: ".swiper-button-prev",
        //     },
        
        //     breakpoints:{
        //         0: {
        //             slidesPerView: 1,
        //         },
        //         520: {
        //             slidesPerView: 2,
        //         },
        //         950: {
        //             slidesPerView: 3,
        //         },
        //     },
        //   });

          
let start = 0;
otomatis();

function otomatis()
{
	const sliders = document.querySelectorAll(".card swiper-slide");

	for (let i = 0; i < sliders.length; i++)
	{
		sliders[i].style.display = "none";
	}

	if (start >= sliders.length)
	{
		start = 0;
	}
    

	setTimeout(otomatis, 2000);
}

        

