import React, { useState, useEffect } from "react";
import iceCreamImg from '../Images/ice-cream.png'
import italyImg from '../Images/Italy.png'
import ThailandImg from '../Images/Thailand.png'
import oceanImg from '../Images/ocean.png'
import streetImg from '../Images/street.png'
import "../index.css"

const images = [
    { src: iceCreamImg, alt: 'Image 1', title: 'Ice cream', description: 'Sunny day for Ice cream'},
    {src: italyImg, alt: 'Image 2', title: 'Venice in Italy', description: 'The bridge in venice'},
    {src: ThailandImg, alt: 'Image 3', title: 'Phuket in Thailand', description: 'Sandy and wave oceans in Thailand'},
    {src: oceanImg, alt: 'Image 4', title: 'Ocean waves', description: 'Water clear Ocean' },
    { src: streetImg, alt: 'Image 5', title: 'Street caption', description: 'inside the asian streets of Japan'}
];

function Gallery () {

    /* const [images, setImages] = useState([]); */
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);

   /*  useEffect(() => {
        // Fetch 10 images from Lorem Picsum
        fetch('https://picsum.photos/v2/list')
            .then(res => res.json())
            .then(data => {
                // Map the API data to the format used in the gallery
                const formatted = data.map(img => ({
                    src: `https://picsum.photos/id/${img.id}/600/400`, // Use a fixed size for consistency
                    alt: img.author,
                    title: `Photo by ${img.author}`,
                    description: `Original: ${img.url}`
                }));
                setImages(formatted);
            })
            .catch(err => {
                console.error("Error fetching images from Lorem Picsum:", err);
            });
    }, []); */
    
    const openLightbox = (img) => {
        setSelectedImage(img);
        setLightboxOpen(true);
    };

    const closeLightbox = () => {
        setLightboxOpen(false);
        setSelectedImage(null);
    };

    return (
        <>
        <div className="gallery-grid">
            {images.map((img, idx) => (
                <div key={idx} className="gallery-item">
                    <img src={img.src} alt={img.alt} title={img.title} onClick={() => openLightbox(img)} />
                    <div className="gallery-caption">
                        <strong>{img.title}</strong>
                        <p>{img.description}</p>
                    </div>
                </div>
            ))}
        </div>
        {lightboxOpen && selectedImage && (<div className="lightbox-overlay" onClick={closeLightbox}>
                    <div className="lightbox-content" onClick={e => e.stopPropagation()}>
                        <button className="lightbox-close" onClick={closeLightbox}>&times;</button>
                        <img 
                            src={selectedImage.src} 
                            alt={selectedImage.alt} 
                            className="lightbox-image"
                        />
                        <div className="lightbox-caption">
                            <strong>{selectedImage.title}</strong>
                            <p>{selectedImage.description}</p>
                        </div>
                    </div>
                </div>
            
            )}
    
        </>
    );

}

export default Gallery;

