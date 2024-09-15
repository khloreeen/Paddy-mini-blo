const formArea = document.getElementsByClassName("form-area")[0];
const fullName = document.getElementById("fullname");
const email = document.getElementById("email");
const password = document.getElementById("password");
const errorMessage = document.getElementById("error-message");

if (formArea) { 
    formArea.addEventListener('submit', (e) => {
        let errors = [];

        if (fullName) {
            // If we have a fullName input, then we are in the signup
            errors = getSignupFormErrors(fullName.value, email.value, password.value);
        } else {
            // If we don't have a fullname input, then we are in the login
            errors = getLoginFormErrors(email.value, password.value);
        }

        if (errors.length > 0) {
            // If there are any errors
            e.preventDefault();
            errorMessage.innerText = errors.join(". ");
        }
    });
}

function getSignupFormErrors(fullName, email, password){
    if(fullName === '' || fullName == null){
        errors.push('Full name is required')
        fullName.parentElement.classList.add('incorrect')
    }
    if(email === '' || email == null){
        errors.push('email is required')
        email.parentElement.classList.add('incorrect')
    }
    if(password === '' || password == null){
        errors.push('password is required')
        password.parentElement.classList.add('incorrect')
    }
    if(password.length < 8){
        errors.push('password must have at least 8 characters')
        password.parentElement.classList.add('incorrect')
    }

    return errors;
}
const allInputs = [fullName, email, password];
allInputs.forEach(input => {
    if (input) {
        input.addEventListener('input', () => {
            if (input.parentElement.classList.contains('incorrect')) {
                input.parentElement.classList.remove('incorrect');
                errorMessage.innerText = '';
            }
        });
    }
})

let currentSlide = 0;
const testimonials = document.querySelectorAll('.testimonial');

function showSlide(index) {
    testimonials.forEach((testimonial, i) => {
        testimonial.style.transform = `translateX(${100 * (i - index)}%)`;
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % testimonials.length;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + testimonials.length) % testimonials.length;
    showSlide(currentSlide);
}

showSlide(currentSlide);

setInterval(nextSlide, 5000);

