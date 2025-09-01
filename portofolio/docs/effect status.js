        document.addEventListener('DOMContentLoaded', function() {
            // Efek animasi untuk kartu ID
            const idCard = document.querySelector('.id-card');
            
            idCard.addEventListener('mousemove', function(e) {
                const rect = idCard.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                
                const rotateX = (y - centerY) / 20;
                const rotateY = (centerX - x) / 20;
                
                idCard.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
            });
            
            idCard.addEventListener('mouseleave', function() {
                idCard.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
            });

            // Animasi untuk skill cards
            const skillCards = document.querySelectorAll('.skill-card');
            
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.style.opacity = 1;
                        entry.target.style.transform = 'translateY(0)';
                    }
                });
            }, { threshold: 0.1 });
            
            skillCards.forEach(card => {
                card.style.opacity = 0;
                card.style.transform = 'translateY(20px)';
                card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
                observer.observe(card);
            });

            // Animasi untuk project cards
            const projectCards = document.querySelectorAll('.project-card');
            
            projectCards.forEach(card => {
                card.style.opacity = 0;
                card.style.transform = 'translateY(20px)';
                card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
                observer.observe(card);
            });
        });
