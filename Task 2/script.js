document.addEventListener("DOMContentLoaded", function() {
            // Smooth scroll for Learn More button
            document.querySelector('.about-text .btn').addEventListener('click', function() {
                document.querySelector('#about').scrollIntoView({
                    behavior: 'smooth'
                });
            });

            // Smooth scroll for Contact Us button
            document.querySelector('.connect .btn').addEventListener('click', function() {
                document.querySelector('#contact').scrollIntoView({
                    behavior: 'smooth'
                });
            });
            
            // Add your provided script here
            let menu = document.querySelector('#menu-icon');
            let navbar = document.querySelector('.navbar');

            menu.onclick = () => {
                navbar.classList.toggle('active');
            }

            window.onscroll = () => {
                navbar.classList.remove('active');
            }

            let darkmode = document.querySelector('#darkmode');

            darkmode.onclick = () => {
                if(darkmode.classList.contains('bx-moon')){
                    darkmode.classList.replace('bx-moon','bx-sun');
                    document.body.classList.add('active');
                } else {
                    darkmode.classList.replace('bx-sun','bx-moon');
                    document.body.classList.remove('active');
                }
            }

            const sr = ScrollReveal ({
                origin: 'top',
                distance: '40px',
                duration: 2000,
                reset: true
            });

            sr.reveal(`.home-text, .home-img,
                        .about-img, .about-text,
                        .box, .s-box,
                        .btn, .connect-text,
                        .contact-box`, {
                interval: 200
                 });
        });