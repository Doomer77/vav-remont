import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import Layout from '../shared/ui/layout/Layout'
import React from 'react'

const MyApp = ({ Component, pageProps }: AppProps) => (
    <Layout>
        <Head>
            <link href="https://fonts.googleapis.com/css2?family=Rubik:wght@400;600;700&display=swap" rel="stylesheet" />
        </Head>
        <main>
            <Component {...pageProps} />
        </main>
    </Layout>
)

export default MyApp
