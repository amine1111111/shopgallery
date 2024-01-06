// let accordion = document.getElementsByClassName("accordion") ;

// for(let i = 0 ; i < accordion.length ; i++){

// accordion[i].addEventListener("click",function (){
//  this.classList.toggle("active") ;


//  let panel = this.nextElementSibling;

//       if (panel.style.display === "block") {
//         panel.style.display = "none";
//       }
//       else {
//         panel.style.display = "block";
//       }

// let icon = this.querySelector(".i");
// icon.classList.toggle("rotate")



//       if (panel.style.maxHeight) {
//         panel.style.maxHeight = null;
//       } else {
//         panel.style.maxHeight = panel.scrollHeight + "px";
//       } 

    

//     });


// }
























// let slideIndex = 1;
// showSlides(slideIndex);


// // Thumbnail image controls
// function currentSlide(n) {
//   showSlides(slideIndex = n);
// }

// function showSlides(n) {

//   let slides = document.getElementsByClassName("mySlides");
//   let dots = document.getElementsByClassName("demo");
//   for ( let i = 0; i < slides.length; i++)  slides[i].style.display = "none";
//   slides[slideIndex-1].style.display = "block";
// } 



function current(n){
    show(i = n)
}
    
function show(){
    
        let sliderImages = document.querySelectorAll(".sImg") ,
        cols = document.querySelectorAll(".col");
    
          for ( let i = 0; i < sliderImages.length; i++)  sliderImages[i].style.display = "none";
    
    
        sliderImages[i -1].style.display = "block" ;
}