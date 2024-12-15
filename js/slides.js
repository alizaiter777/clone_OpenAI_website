let slideIndex = 1;
            showSlide(slideIndex);
            
            // Next/previous controls
            function changeSlide(n) {
              showSlide(slideIndex += n);
            }
            
            // Set slide based on dot
            function setSlide(n) {
              showSlide(slideIndex = n);
            }
            
            function showSlide(n) {
              let slides = document.getElementsByClassName("slide");
              let dots = document.getElementsByClassName("dot");
            
              if (n > slides.length) { slideIndex = 1; }
              if (n < 1) { slideIndex = slides.length; }
            
              for (let i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";
              }
              for (let i = 0; i < dots.length; i++) {
                dots[i].className = dots[i].className.replace(" active", "");
              }
            
              slides[slideIndex - 1].style.display = "block";
              dots[slideIndex - 1].className += " active";
            }
            