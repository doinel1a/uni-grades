import type { AppProps } from 'next/app';

import { ContextProvider } from '../contexts/ContextProvider';

import Header from '../components/Header';
import Footer from '../components/Footer';

import '../styles/globals.css';

const App = ({ Component, pageProps }: AppProps) => {
    return(
        <div className='w-screen h-screen'>
            <ContextProvider>
                <Header />
                <Component {...pageProps} />
                <Footer />
            </ContextProvider>
        </div>
    );
};

export default App;