import '../css/main.css';
import Head from 'next/head';

export default function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <link rel="icon" href="/images/favicon.ico" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta charSet="UTF-8" />
                <meta name="description" content="Lucra Budgeting - Budgeting made simple" />
                <meta
                    name="keywords"
                    content="budgeting app, manage finances, personal finance, expense tracker, financial management, budgeting tools, money management"
                />
                <meta property="og:image" content="https://res.cloudinary.com/dr8cg8xmb/image/upload/v1721259232/logo-primary.png" />
                <meta property="og:url" content="https://www.lucrabudgeting.com/" />
                <meta property="og:site_name" content="Lucra Budgeting" />
                <meta property="og:locale" content="en_US" />
                <meta property="og:type" content="website" />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Lucra - The Simplest Way to Organize Your Finances" />
                <meta
                    name="twitter:description"
                    content="Lucra is the simplest way to manage your finances. Connect your accounts, set budgets, and track spending in real-time. Start organizing your money today."
                />
                <meta name="twitter:image" content="https://res.cloudinary.com/dr8cg8xmb/image/upload/v1721259232/logo-primary.png" />
            </Head>
            <Component {...pageProps} />
        </>
    );
}
