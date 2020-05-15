import '../styles/global.css'
import Head from 'next/head';
import { Container } from "next/app"

export default function App({ Component, pageProps }) {
    return <Container>
        <Head>
            <title>Unofficial Blog</title>
            <link
                href="https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap"
                rel="stylesheet">
            </link>
        </Head>
        <Component {...pageProps} />
    </Container>
}