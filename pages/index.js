import ProductCarousel from '@/components/Carousel';
import Layout from '../components/Layout';
import ProductItem from '../components/ProductItem';
import data from '../utils/data';
import { Carousel } from 'react-responsive-carousel';
import DisplayImage from '@/components/DisplayImage';


export default function Home() {
  return (
    <Layout title="Home Page">
      <ProductCarousel></ProductCarousel>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4">
        {data.products.map((product) => (
          <div key={product.slug}>
            <ProductItem product={product}></ProductItem>
            
          </div>
        ))}
        <div className='grid grid-flow-col auto-cols-max'>
              <DisplayImage></DisplayImage>
            </div>
      </div>
    </Layout>
  );
}

