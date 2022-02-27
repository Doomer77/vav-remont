import React, { FC } from 'react'
import Head from 'next/head'
import Link from "next/link";
import Heading from '../../shared/ui/heading/Heading'
import { IPosts } from "../../types/types";

export const getStaticProps = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await response.json()

    if (!data) {
        return {
            notFound: true,
        }
    }

    return {
        props: { posts: data },
    }
}

const Posts: FC<IPosts> = ({posts}) => {
    return (
        <div>
            <Head>
                <title>Posts</title>
            </Head>
            <Heading text='Posts List:' />
            <ul>
                {posts && posts.map((item) => {
                    return <li key={item.id}>
                        <Link href={`/posts/${item.id}`}>{item.title}</Link>
                    </li>
                })}
            </ul>

        </div>
    )
}

export default Posts
