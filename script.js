// Main JavaScript for TalentFlow Coming Soon Page

document.addEventListener('DOMContentLoaded', function() {
    // Set the launch date - August 1, 2025
    const launchDate = new Date("August 1, 2025 00:00:00").getTime();
    
    // Update countdown every second
    const countdown = setInterval(function() {
        // Get current date and time
        const now = new Date().getTime();
        
        // Calculate the time remaining
        const timeRemaining = launchDate - now;
        
        // Calculate days, hours, minutes, seconds
        const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);
        
        // Display the countdown
        document.getElementById("days").innerHTML = days < 10 ? "0" + days : days;
        document.getElementById("hours").innerHTML = hours < 10 ? "0" + hours : hours;
        document.getElementById("minutes").innerHTML = minutes < 10 ? "0" + minutes : minutes;
        document.getElementById("seconds").innerHTML = seconds < 10 ? "0" + seconds : seconds;
        
        // If launch date passed
        if (timeRemaining < 0) {
            clearInterval(countdown);
            document.getElementById("days").innerHTML = "00";
            document.getElementById("hours").innerHTML = "00";
            document.getElementById("minutes").innerHTML = "00";
            document.getElementById("seconds").innerHTML = "00";
            
            // Optional: Show a message or redirect
            document.querySelector('.coming-soon').innerHTML = "<span>Já Disponível!</span>";
        }
    }, 1000);
    
    // Handle form submission
    const subscribeForm = document.getElementById('subscribe-form');
    const formMessage = document.getElementById('form-message');
    
    if (subscribeForm) {
        subscribeForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const email = document.getElementById('email').value;
            
            // Simple email validation
            if (!validateEmail(email)) {
                formMessage.textContent = "Por favor, insira um email válido.";
                formMessage.className = "form-message error";
                return;
            }
            
            // Simulate form submission
            const submitButton = this.querySelector('button');
            const originalText = submitButton.textContent;
            
            submitButton.disabled = true;
            submitButton.textContent = "A processar...";
            formMessage.textContent = "";
            
            // Simulate API call with timeout
            setTimeout(() => {
                // Success response
                subscribeForm.reset();
                formMessage.textContent = "Obrigado! Iremos notificá-lo quando estivermos online.";
                formMessage.className = "form-message success";
                
                // Reset button
                submitButton.disabled = false;
                submitButton.textContent = originalText;
            }, 1500);
        });
    }
    
    // Email validation function
    function validateEmail(email) {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }
    
    // Particles animation
    const particles = document.querySelectorAll('.particle');
    
    particles.forEach(particle => {
        // Random initial position
        const randomX = Math.random() * 100;
        const randomY = Math.random() * 100;
        
        particle.style.left = `${randomX}%`;
        particle.style.top = `${randomY}%`;
    });
    
    // Glitch effect enhancement
    const glitchText = document.querySelector('.glitch');
    
    if (glitchText) {
        setInterval(() => {
            glitchText.classList.add('active');
            
            setTimeout(() => {
                glitchText.classList.remove('active');
            }, 200);
        }, 3000);
    }
});
