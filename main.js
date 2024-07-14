const slides = document.querySelectorAll(".slides img");
let slidesIndex = 0;
let intervalId = null;
const btn = document.querySelector("#send");
btn.addEventListener("click",send);
document.addEventListener("DOMContentLoaded", initializer);
document.getElementById('bars').addEventListener('click', function() {
    const dropdown = document.getElementById('dropdown');
    if (dropdown.style.display === 'none' || dropdown.style.display === '') {
        dropdown.style.display = 'block';
    } else {
        dropdown.style.display = 'none';
    }
});
document.querySelectorAll('.dropdown-content a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
        document.getElementById('dropdown').style.display = 'none';
    });
});

function send(){
  Swal.fire({
  title: "Kirim Feedback?",
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Ya, Kirim!"
}).then((result) => {
  if (result.isConfirmed) {
    Swal.fire({
      title: "Terkirim!",
      text: "Feedback anda telah terkirim.",
      icon: "success"
    });
  }
});
}
function initializer() {
  if (slides.length > 0) {
    slides[slidesIndex].classList.add("displaySlide");
    intervalId = setInterval(nextSlides, 5000);

    document.querySelector(".prev").addEventListener("click", previousSlides);
    document.querySelector(".next").addEventListener("click", nextSlides);
  }
}

function showSlide(index) {
  slides.forEach(slide => {
    slide.classList.remove("displaySlide");
  });
  slides[index].classList.add("displaySlide");
}

function previousSlides() {
  slidesIndex = (slidesIndex - 1 + slides.length) % slides.length;
  showSlide(slidesIndex);
}

function nextSlides() {
  slidesIndex = (slidesIndex + 1) % slides.length;
  showSlide(slidesIndex);
}
