document.addEventListener('DOMContentLoaded', function() {
    // Current year for footer
    document.getElementById('currentYear').textContent = new Date().getFullYear();
    
    // Last modified date for footer
    document.getElementById('lastModified').textContent = 'Last Modified: ' + document.lastModified;
    
    // Star rating interaction
    const stars = document.querySelectorAll('.star');
    stars.forEach(star => {
        star.addEventListener('click', function() {
            const radioId = this.getAttribute('for');
            const radio = document.getElementById(radioId);
            radio.checked = true;
            
            // Update all stars
            const ratingValue = parseInt(radio.value);
            stars.forEach((s, index) => {
                const starIcon = s.querySelector('i');
                const starRadio = document.getElementById(s.getAttribute('for'));
                
                if (index < ratingValue) {
                    starIcon.classList.remove('fa-volume-off', 'fa-volume-down', 'fa-volume');
                    starIcon.classList.add('fa-volume-high');
                    starIcon.style.color = '#00ffaa';
                } else if (index < ratingValue - 1) {
                    starIcon.classList.remove('fa-volume-off', 'fa-volume-down');
                    starIcon.classList.add('fa-volume-up');
                    starIcon.style.color = '#00aaff';
                } else if (index < ratingValue - 2) {
                    starIcon.classList.remove('fa-volume-off');
                    starIcon.classList.add('fa-volume');
                    starIcon.style.color = '#ffaa00';
                } else if (index < ratingValue - 3) {
                    starIcon.classList.add('fa-volume-down');
                    starIcon.style.color = '#ff00aa';
                } else {
                    starIcon.classList.add('fa-volume-off');
                    starIcon.style.color = '#ddd';
                }
            });
        });
    });

    // Initialize VU meters
    function initializeVUMeters() {
        const frequencies = ['low', 'mid', 'high'];
        
        frequencies.forEach(freq => {
            for (let i = 1; i <= 4; i++) {
                const leftBar = document.getElementById(`left-${freq}-${i}`);
                const rightBar = document.getElementById(`right-${freq}-${i}`);
                
                if (leftBar) {
                    leftBar.style.height = '10%';
                    leftBar.style.opacity = '0.8';
                }
                
                if (rightBar) {
                    rightBar.style.height = '10%';
                    rightBar.style.opacity = '0.8';
                }
            }
        });
    }

    // VU Meter Animation
    function animateVUMeters() {
        // Animate left channel
        animateFrequency('left', 'low', 0.5, 0.8);   // Low frequencies move slower
        animateFrequency('left', 'mid', 0.3, 0.6);   // Mid frequencies
        animateFrequency('left', 'high', 0.1, 0.4);  // High frequencies move faster

        // Animate right channel slightly differently
        animateFrequency('right', 'low', 0.6, 0.7);
        animateFrequency('right', 'mid', 0.4, 0.5);
        animateFrequency('right', 'high', 0.2, 0.3);
    }

    function animateFrequency(side, frequency, minSpeed, maxSpeed) {
        for (let i = 1; i <= 4; i++) {
            const bar = document.getElementById(`${side}-${frequency}-${i}`);
            if (!bar) continue;
            
            const randomHeight = 10 + Math.random() * 90;
            const delay = i * (minSpeed + Math.random() * (maxSpeed - minSpeed));
            
            setTimeout(() => {
                bar.style.height = `${randomHeight}%`;
                bar.style.opacity = 0.7 + (randomHeight / 100) * 0.3;
                
                // Create occasional "peaks" for more realism
                if (Math.random() > 0.9) {
                    bar.style.height = '95%';
                    bar.style.opacity = '1';
                }
            }, delay * 100);
        }
    }

    // Initialize and start animation
    initializeVUMeters();
    animateVUMeters();
    setInterval(animateVUMeters, 800);
});
