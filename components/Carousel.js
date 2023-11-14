// Import necessary modules
import Image from "next/image";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

// Assuming data is an array of objects where each object represents a product
const data = [
    {
        name: '',
        image: '/images/image9.jpg',
    },
    {
        name: '',
        image: '/images/image10.jpg',
    },
    {
        name: '',
        image: '/images/image11.jpg',
    },
    {
        name: '',
        image: '/images/image12.jpg',
    },
    {
        name: '',
        image: '/images/image13.jpg',
    },
    {
      name: '',
      image: '/images/image23.jpg',
  },
  {
    name: '',
    image: '/images/image24.jpg',
},
{
  name: '',
  image: '/images/image25.jpg',
},
    
];

export default function ProductCarousel() {
  return (
    <Carousel showArrows={true} autoPlay={true} interval={3000} infiniteLoop={true} showThumbs={false}>
     
      {data.map((product, index) => (
        <div key={index} className="carousel-items">
          <img src={product.image} alt={product.name} />
          <p className="legend">{product.name}</p>
        </div>
        
      ))}
    </Carousel>
  );
}