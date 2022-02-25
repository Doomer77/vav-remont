import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import Layout from '../shared/ui/layout/Layout'
import React from 'react'

const MyApp = ({ Component, pageProps }: AppProps) => (
    <Layout>
        <Head>
            <link href='https://fonts.googleapis.com/css2?family=Roboto&display=swap' />
        </Head>
        <main>
            <Component {...pageProps} />
        </main>
    </Layout>
)

export default MyApp
