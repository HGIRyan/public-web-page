import '../css/main.css';
import Head from 'next/head';

export default function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <link rel="icon" href="/images/favicon.ico" />
            </Head>
            <Component {...pageProps} />
        </>
    );
}
