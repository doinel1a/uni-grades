import type { NextPage } from 'next';
import Head from 'next/head';

const Home: NextPage = () => {
    return (
        <div className="flex min-h-screen flex-col items-center justify-center py-2">
            <Head>
                <title>Doinel Atanasiu — Quick Links</title>

                <meta
                    name="description"
                    content="Doinel Atanasiu's Quick Links"
                />
                <meta name="keywords" content="Quick Links" />
                <meta name="author" content="Doinel Atanasiu" />
                <meta name="copyright" content="Doinel Atanasiu" />
                <meta name="robots" content="noindex, nofollow" />
                <meta name="rating" content="general" />

                {/* Open Graph */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:site" content="@SITE" />
                <meta name="twitter:creator" content="@AtanasiuDoinel" />
                <meta name="twitter:title" content="Doinel Atanasiu — Quick Links" />
                <meta
                    name="twitter:description"
                    content="Doinel Atanasiu's Quick Links"
                />
                <meta
                    name="twitter:image"
                    content="IMAGE URL"
                />
                <meta property="og:url" content="URL" />
                <meta property="og:title" content="Doinel Atanasiu — Quick Links" />
                <meta
                    property="og:description"
                    content="Doinel Atanasiu's Quick Links"
                />
                <meta
                    property="og:image"
                    content="IMAGE URL"
                />

                {/* Manifest */}
                <link rel="manifest" href="/manifest.json"></link>
                <meta name="mobile-web-app-capable" content="yes" />
                <meta name="apple-mobile-web-app-capable" content="yes" />
                <meta name="application-name" content="D1A — Quick Links" />
                <meta name="apple-mobile-web-app-title" content="D1A — Quick Links" />
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

            <header className="flex h-24 w-full items-center justify-center border-b">
                <p>
                    HEADER
                </p>
            </header>

            <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
                <h1>
                    NEXT JS TEMPLATE
                </h1>
            </main>

            <footer className="flex h-24 w-full items-center justify-center border-t">
                <p>
                    FOOTER
                </p>
            </footer>
        </div>
    );
};

export default Home;