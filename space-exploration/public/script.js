document.addEventListener("DOMContentLoaded", () => {
    const apiKey = "FdGa1eHPpOrkIUgUaqBUBDtNBfmzogYTbcPF8OON";
    const apiUrl = `https://api.nasa.gov/EPIC/api/natural/images?api_key=${apiKey}`;
    const carouselContent = document.getElementById("carousel-content");

    // Fetch data from EPIC API
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            if (data.length > 0) {
                data.forEach((image, index) => {
                    const dateParts = image.date.split(" ");
                    const formattedDate = dateParts[0].replace(/-/g, "/");
                    const imageUrl = `https://epic.gsfc.nasa.gov/archive/natural/${formattedDate}/png/${image.image}.png`;

                    const item = document.createElement("div");
                    item.classList.add("carousel-item");
                    if (index === 0) item.classList.add("active");

                    item.innerHTML = `
                        <img src="${imageUrl}" class="d-block w-100" alt="Earth from space" data-bs-toggle="modal" data-bs-target="#lightboxModal" data-image="${imageUrl}" data-date="${image.date}">
                        <div class="carousel-caption d-none d-md-block">
                            <h5>Earth Image - ${image.date}</h5>
                            <p>Captured by NASA's EPIC camera on ${image.date}.</p>
                        </div>
                    `;

                    carouselContent.appendChild(item);
                });

                // Add floating effect to images using GSAP
                gsap.to(".carousel-item img", {
                    y: -10, // Moves the image upward
                    repeat: -1, // Infinite loop
                    yoyo: true, // Makes it go back and forth
                    ease: "power1.inOut", // Smooth movement
                    duration: 6, // Duration of each loop
                    stagger: 0.5, // Adds a stagger effect for images
                    rotation: 5 // Rotation effect
                });

                // Hover effects for carousel images
                document.querySelectorAll('.carousel-item img').forEach(img => {
                    img.addEventListener('mouseenter', () => {
                        gsap.to(img, { scale: 1.05, duration: 0.5 });
                    });

                    img.addEventListener('mouseleave', () => {
                        gsap.to(img, { scale: 1, duration: 0.5 });
                    });
                });

                // Set modal content on image click
                document.querySelectorAll(".carousel-item img").forEach(img => {
                    img.addEventListener("click", (e) => {
                        const imgSrc = e.target.dataset.image;
                        const imgDate = e.target.dataset.date;
                        document.getElementById("lightboxImage").src = imgSrc;
                        document.getElementById("imageDate").innerText = `Date: ${imgDate}`;
                        document.getElementById("imageDescription").innerText = "This is an EPIC image of Earth taken by NASA's EPIC camera.";
                    });
                });
            }
        })
        .catch(error => console.error("Error fetching data:", error));
});
