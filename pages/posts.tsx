import React, { FC } from 'react'
import Head from 'next/head'
import Heading from '../shared/ui/heading/Heading'

const Posts: FC = () => {
    return (
        <div>
            <Head>
                <title>Posts</title>
            </Head>
            <Heading text='Posts' />
            <p>Loren</p>
        </div>
    )
}

export default Posts
