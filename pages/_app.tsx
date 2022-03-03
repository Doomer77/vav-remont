import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import Layout from '../shared/ui/layout/Layout'
import React from 'react'

const MyApp = ({ Component, pageProps }: AppProps) => (
    <Layout>
        <Head>
            <link
                href='https://fonts.googleapis.com/css2?family=Rubik:wght@400;600;700&display=swap'
                rel='stylesheet'
            />
            <link
                href='https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700;900&display=swap'
                rel='stylesheet'
            ></link>
            <link
                href='https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@1,400;1,500;1,700&display=swap'
                rel='stylesheet'
            ></link>
        </Head>
        <Component {...pageProps} />
    </Layout>
)

export default MyApp
