
const sliderContainer = document.getElementById('sliderContainer');
const slides = document.querySelectorAll('.testimonial-slide');
const dots = document.querySelectorAll('.slider-dot');

let currentIndex = 0;
let slideInterval;
let paused = false;

const totalSlides = slides.length;

// function updateSlider() {
// // Calculate the offset to show 3 slides
//     const offset = currentIndex * (100 / 3); // width of one slide in percent
//     sliderContainer.style.transform = `translateX(-${offset}%)`;

// // Remove all active classes
//     slides.forEach(slide => slide.classList.remove('active'));
//     dots.forEach(dot => dot.classList.remove('active'));

// // Mark the center one (middle of the 3 shown)
//     const centerIndex = (currentIndex + 1) % totalSlides;
//     slides[centerIndex].classList.add('active');

//     // Update dot
//     dots[currentIndex % dots.length].classList.add('active');
// }
function updateSlider() {
    const isMobile = window.innerWidth <= 768;
    const visibleSlides = isMobile ? 1 : 3;
    const offset = currentIndex * (100 / visibleSlides);

    sliderContainer.style.transform = `translateX(-${offset}%)`;

    // Remove active classes
    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));

    // Highlight center slide
    const centerIndex = (currentIndex + Math.floor(visibleSlides / 2)) % totalSlides;
    slides[centerIndex].classList.add('active');
    dots[currentIndex % dots.length].classList.add('active');
  }
  
function nextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    updateSlider();
  }

function startSlider() {
    clearInterval(slideInterval)
    slideInterval = setInterval(() => {
        if (!paused) nextSlide();
    }, 3000);
}

function pauseSliderTemporarily() {
    paused = true;
    clearInterval(slideInterval);

    // Resume after 5 seconds
    setTimeout(() => {
        paused = false;
    startSlider();
    }, 5000);
  }

    // Pause on click
sliderContainer.addEventListener('click', pauseSliderTemporarily);

  // Dot navigation (optional)
dots.forEach(dot => {
    dot.addEventListener('click', (e) => {
        currentIndex = parseInt(e.target.dataset.slide);
        updateSlider();
        pauseSliderTemporarily();
    });
});

// whatsapp enquire message
document.getElementById("enquiry-whatsapp").addEventListener("click", function () {
    document.getElementById("whatsappModal").style.display = "block";
    document.getElementById("overlay").style.display = "block";
});

function closeModal() {
    document.getElementById("whatsappModal").style.display = "none";
    document.getElementById("overlay").style.display = "none";
}

function sendToWhatsApp() {
    const name = document.getElementById("userName").value.trim();
    const email = document.getElementById("email-id").value.trim();

    // if (!name || !interest) {
    //     alert("Please fill in all fields.");
    //     return;
    // }

    const message = `Hi, my name is *${name}* and email-id is *${email}*. I am interested in Online wedding dance course`;
    const phoneNumber = "+918076122050"; 

    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
}
//whatsapp-form booking message

function sendtowhatsapp(event,packageName){
    event.preventDefault();

    const form = event.target;
    const name = form.elements["Name"].value.trim();
    const email = form.elements["email"].value.trim();

    const message = `Hi, i want to book the *${packageName}* package. 
    Name=${name}
    Email=${email} `;

    //our credentials
    const encodedMessage = encodeURIComponent(message)
    const phoneNumber = +918076122050;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    //whatsapp redirect
    window.open(whatsappUrl, '_blank');

}

// faq
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    const answer = item.querySelector('.faq-answer');
    const icon = item.querySelector('.faq-icon');

    question.addEventListener('click', () => {
        const isOpen = answer.classList.contains('active');

        // Close all open answers
        document.querySelectorAll('.faq-answer').forEach(a => a.classList.remove('active'));
        document.querySelectorAll('.faq-icon').forEach(i => i.classList.remove('active'));

        // Toggle current one
        if (!isOpen) {
            answer.classList.add('active');
            icon.classList.add('active');
        }
    });
});
    // Initialize
updateSlider();
startSlider();

