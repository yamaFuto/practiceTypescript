import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Provider } from "react-redux";
import store from "../store";
import 'swiper/css/bundle';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';

export default function App({ Component, pageProps }: AppProps) {
  return  (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}
