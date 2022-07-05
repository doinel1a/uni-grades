import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';

import { useStateContext } from '../contexts/ContextProvider';
import Paragraph from '../components/HtmlElements/Paragraph';
import ButtonSecondary from '../components/HtmlElements/ButtonSecondary';

const FourOuFour: NextPage = () => {
    const { isDarkMode } = useStateContext();

    return(
        <>
            <Head>
                <title>404 - Page not found</title>

                {/* Generics */}
                <link rel='icon' href='/favicon/favicon-32.png' sizes='32x32' />
                <link rel='icon' href='/favicon/favicon-57.png' sizes='57x57' />
                <link rel='icon' href='/favicon/favicon-76.png' sizes='76x76' />
                <link rel='icon' href='/favicon/favicon-96.png' sizes='96x96' />
                <link rel='icon' href='/favicon/favicon-128.png' sizes='128x128' />
                <link rel='icon' href='/favicon/favicon-192.png' sizes='192x192' />
                <link rel='icon' href='/favicon/favicon-228.png' sizes='228x228' />

                {/* Android */}
                <link rel='shortcut icon' sizes='196x196' href='/favicon/favicon-196.png' />

                {/* iOS */}
                <link rel='apple-touch-icon' href='/favicon/favicon-120.png' sizes='120x120' />
                <link rel='apple-touch-icon' href='/favicon/favicon-152.png' sizes='152x152' />
                <link rel='apple-touch-icon' href='/favicon/favicon-180.png' sizes='180x180' />
            </Head>

            <main className={` w-full main-h flex flex-col justify-center items-center flex-1 p-3 transition-colors ${ isDarkMode ? 'bg-neutral-700' : 'bg-slate-100' } `}>
                <div className='max-w-3xl flex flex-col items-center gap-y-6'>
                    <Paragraph
                        text='404'
                        customCss='text-9xl font-bold'
                    />
                    <Paragraph
                        text='You have found a secret place.'
                        customCss='text-4xl text-center font-bold'
                    />
                    <Paragraph
                        text='Unfortunately, this is only a 404 page. You may have mistyped the address, or the page has been moved to another URL.'
                        customCss='text-2xl text-center'
                    />
                    <Link href='/'>
                        <a>
                            <ButtonSecondary
                                text='Back to the Home page'
                                url='/'
                            />
                        </a>
                    </Link>
                </div>
            </main>
        </>
    );
};

export default FourOuFour;