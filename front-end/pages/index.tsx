import type { GetServerSideProps } from 'next';
import Head from 'next/head';
import Main from '../components/Main';
import { useEffect } from 'react';

import { BASE_URL } from '../const/API_URLS';
import { Exam } from '../interfaces/Exam';
import { useStateContext } from '../contexts/ContextProvider';

interface IHomeProps {
    success: boolean;
    data: Exam[];
};

const Home = ({ data }: { data: IHomeProps }) => {
    const { isDarkMode, setExamsList } = useStateContext();

    useEffect( () => {
        data.data ? setExamsList(data.data) : setExamsList([]);
    }, []);

    return (
        <>
            <Head>
                <title>Doinel Atanasiu — Uni Grades</title>

                <meta
                    name="description"
                    content="Doinel Atanasiu's Uni Grades"
                />
                <meta name="keywords" content="Uni Grades" />
                <meta name="author" content="Doinel Atanasiu" />
                <meta name="copyright" content="Doinel Atanasiu" />
                <meta name="robots" content="noindex, nofollow" />
                <meta name="rating" content="general" />

                {/* Open Graph */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:site" content="@SITE" />
                <meta name="twitter:creator" content="@AtanasiuDoinel" />
                <meta name="twitter:title" content="Doinel Atanasiu — Uni Grades" />
                <meta
                    name="twitter:description"
                    content="Doinel Atanasiu's Uni Grades"
                />
                <meta
                    name="twitter:image"
                    content="IMAGE URL"
                />
                <meta property="og:url" content="URL" />
                <meta property="og:title" content="Doinel Atanasiu — Uni Grades" />
                <meta
                    property="og:description"
                    content="Doinel Atanasiu's Uni Grades"
                />
                <meta
                    property="og:image"
                    content="IMAGE URL"
                />

                {/* Manifest */}
                <link rel="manifest" href="/manifest.json"></link>
                <meta name="mobile-web-app-capable" content="yes" />
                <meta name="apple-mobile-web-app-capable" content="yes" />
                <meta name="application-name" content="D1A — Uni Grades" />
                <meta name="apple-mobile-web-app-title" content="D1A — Uni Grades" />
                <meta name="theme-color" content="#0063EB" />
                <meta name="msapplication-navbutton-color" content="#0063EB" />
                <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
                <meta name="msapplication-starturl" content="/" />
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />

                {/* Favicon - Generics */}
                <link rel='icon' href='/favicon/favicon-32.png' sizes='32x32' />
                <link rel='icon' href='/favicon/favicon-57.png' sizes='57x57' />
                <link rel='icon' href='/favicon/favicon-76.png' sizes='76x76' />
                <link rel='icon' href='/favicon/favicon-96.png' sizes='96x96' />
                <link rel='icon' href='/favicon/favicon-128.png' sizes='128x128' />
                <link rel='icon' href='/favicon/favicon-192.png' sizes='192x192' />
                <link rel='icon' href='/favicon/favicon-228.png' sizes='228x228' />

                {/* Favicon - Android */}
                <link rel='shortcut icon' sizes='196x196' href='/favicon/favicon-196.png' />

                {/* Favicon - iOS */}
                <link rel='apple-touch-icon' href='/favicon/favicon-120.png' sizes='120x120' />
                <link rel='apple-touch-icon' href='/favicon/favicon-152.png' sizes='152x152' />
                <link rel='apple-touch-icon' href='/favicon/favicon-180.png' sizes='180x180' />
            </Head>

            <div className={` w-full main-h flex justify-center items-center transition-colors overflow-hidden ${ isDarkMode ? 'bg-zinc-700' : 'bg-slate-100' } `}>
                <Main />
            </div>
        </>
    );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async (context) => {
    const response = await fetch(`${ BASE_URL }/exams`);
    let data: any[] = []

    if(!response || response.status == 404)
    {
        return {
            props: {
                data
            }
        };
    }

    data = await response.json();

    return {
        props: {
            data
        }
    };
};