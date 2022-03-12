import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '../shared/ui/layout/Layout'
import React from 'react'

const MyApp = ({ Component, pageProps }: AppProps) => (
    <Layout>
        <Component {...pageProps} />
    </Layout>
)

export default MyApp
