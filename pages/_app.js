import '../styles/globals.css';
import { StoreProvider } from '../utils/Store';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

export default function App({ Component, pageProps }) {
  return (
    <StoreProvider>
      <Component {...pageProps} />
    </StoreProvider>
  );
}
