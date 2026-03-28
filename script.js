
function toggleMenu(){
  document.querySelector('.D2nd').classList.toggle('active');
}

window.addEventListener("scroll", function(){
  const reveals = document.querySelectorAll(".reveal");

  reveals.forEach((el)=>{
    const windowHeight = window.innerHeight;
    const elementTop = el.getBoundingClientRect().top;

    if(elementTop < windowHeight - 100){
      el.classList.add("active");
    }
  });
});





