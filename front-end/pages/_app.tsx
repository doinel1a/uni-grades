import type { AppProps } from 'next/app';

import { MantineProvider } from '@mantine/core';
import { NotificationsProvider } from '@mantine/notifications';

import { ContextProvider } from '../contexts/ContextProvider';
import Header from '../components/Header';
import Footer from '../components/Footer';

import '../styles/globals.css';
import { ModalsProvider } from '@mantine/modals';

const App = ({ Component, pageProps }: AppProps) => {
    return(
        <div className='w-screen h-screen'>
            <MantineProvider>
                <ModalsProvider>
                    <NotificationsProvider>
                        <ContextProvider>
                            <Header />
                            <Component {...pageProps} />
                            <Footer />
                        </ContextProvider>
                    </NotificationsProvider>
                </ModalsProvider>
            </MantineProvider>
        </div>
    );
};

export default App;