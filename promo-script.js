const offerMonth = document.getElementById('current-offer-month');
if (offerMonth) {
    offerMonth.textContent = new Date().toLocaleString('en-US', { month: 'long' });
}

const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();
        if (window.innerWidth < 768) {
            const mobileHint = document.getElementById('mobile-hint');
            if (mobileHint) mobileHint.style.display = 'block';
        }
        const galleryImages = [
            "images/demo/interior-design-website-template.jpg",
            "images/demo/architecture-html-template.jpg",
            "images/demo/home-repair-website-template.jpg",
            "images/demo/building-construction-website-template.jpg",
            "images/demo/real-estate-html-template.jpg",
            "images/demo/online-shop-website-template.jpg",
            "images/demo/bootstrap-ecommerce-template.jpg",
            "images/demo/ecommerce-html-template.jpg"
        ];
        
        let currentImageIndex = 0;
        function openLightbox(index) {
            currentImageIndex = index;
            updateLightboxImage();
            const lightbox = document.getElementById('lightbox');
            lightbox.classList.add('active'); 
        }

        function closeLightbox() {
            const lightbox = document.getElementById('lightbox');
            lightbox.classList.remove('active');
        }

        function changeSlide(direction) {
            currentImageIndex += direction;
            if (currentImageIndex >= galleryImages.length) currentImageIndex = 0;
            else if (currentImageIndex < 0) currentImageIndex = galleryImages.length - 1;
            updateLightboxImage();
        }

        function updateLightboxImage() {
            const imgElement = document.getElementById('lightbox-img');
            imgElement.style.opacity = 0.5;
            setTimeout(() => {
                imgElement.src = galleryImages[currentImageIndex];
                imgElement.style.opacity = 1;
            }, 100);
        }

        document.addEventListener('keydown', function(event) {
            const lightbox = document.getElementById('lightbox');
            if (lightbox.classList.contains('active')) {
                if (event.key === 'ArrowLeft') changeSlide(-1);
                else if (event.key === 'ArrowRight') changeSlide(1);
                else if (event.key === 'Escape') closeLightbox();
            }
        });
        const form = document.getElementById('promoForm');
        const status = document.getElementById('promoStatus');
        const successDiv = document.getElementById('promoSuccess');

        if (form) form.addEventListener('submit', function(e) {
            e.preventDefault();
            const formData = new FormData(form);
            const object = Object.fromEntries(formData);
            const json = JSON.stringify(object);

            status.style.display = 'block';
            status.innerHTML = 'Checking slot availability...';

            fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
                body: json
            })
            .then(async (response) => {
                let json = await response.json();
                if (response.status == 200) {
                    form.style.display = 'none';
                    successDiv.style.display = 'block';
                } else {
                    status.innerHTML = json.message;
                    status.style.color = 'red';
                }
            })
            .catch(error => {
                console.log(error);
                status.innerHTML = "Something went wrong!";
                status.style.color = 'red';
            });
        });