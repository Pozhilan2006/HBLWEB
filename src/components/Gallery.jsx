import { motion } from 'framer-motion';

const Gallery = () => {
  // Using only the first 5 working images
  const images = [
    '/assets/images/gallery/hackathon1.jpg',
    '/assets/images/gallery/hackathon2.jpg',
    '/assets/images/gallery/hackathon3.jpg',
    '/assets/images/gallery/hackathon9.JPG',  // Using this instead of hackathon4 as it's available
    '/assets/images/gallery/hackathon10.jpg'  // Using this instead of hackathon5 as it's available
  ];

  // Create four sets of images for smoother infinite scroll
  const allImages = [...images, ...images, ...images, ...images];

  return (
    <section id="gallery" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title mb-12">
          Hackathon Memories
        </h2>

        <div className="relative overflow-hidden">
          {/* Gradient overlay for smooth edge fading */}
          <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-space-black to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-space-black to-transparent z-10"></div>

          <div className="carousel-container">
            <div className="carousel-track">
              {allImages.map((image, index) => (
                <div
                  key={index}
                  className="carousel-item"
                >
                  <img
                    src={image}
                    alt={`Hackathon Memory ${(index % images.length) + 1}`}
                    className="carousel-image"
                    loading={index < images.length ? "eager" : "lazy"} // Load first set eagerly
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        <style jsx>{`
          .carousel-container {
            width: 100%;
            overflow: hidden;
            position: relative;
            padding: 1rem 0;
          }

          .carousel-track {
            display: flex;
            gap: 1rem;
            animation: infiniteScroll 15s linear infinite;
            width: fit-content;
            transform: translateZ(0);
          }

          .carousel-item {
            flex: 0 0 auto;
            width: min(320px, calc(80vw - 2rem));
            height: 240px;
            border-radius: 0.5rem;
            overflow: hidden;
            transform: translateZ(0);
            backface-visibility: hidden;
            transition: transform 0.3s ease;
          }

          .carousel-item:hover {
            transform: scale(1.05) translateZ(0);
          }

          .carousel-image {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transform: translateZ(0);
          }

          @keyframes infiniteScroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(calc(-100% / 4));
            }
          }

          /* Responsive adjustments */
          @media (max-width: 768px) {
            .carousel-item {
              height: 180px;
            }
          }

          @media (max-width: 480px) {
            .carousel-item {
              height: 150px;
            }
          }

          /* Performance optimizations */
          @media (prefers-reduced-motion: no-preference) {
            .carousel-track {
              will-change: transform;
              backface-visibility: hidden;
              perspective: 1000px;
            }
          }
        `}</style>
      </div>
    </section>
  );
};

export default Gallery; 