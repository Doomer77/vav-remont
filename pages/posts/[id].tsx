import Head from "next/head";
import React, { FC } from 'react'
import PostInfo from "../../entities/post-info/PostInfo";
import { IParams, IPostInfo } from "../../types/types";

export const getStaticPaths = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/')
    const data = await response.json()
    const paths = data.map((item: IParams) => ({
        params: {id: item.id.toString()}
    }))
    return  {
        paths,
        fallback: false
    }
}

//При SSR подходе
export const getStaticProps = async (context: any) => {
    const {id} = context.params
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    const data = await response.json()

    if (!data) {
        return {
            notFound: true,
        }
    }

    return {
        props: { post: data },
    }
}

const Post: FC<IPostInfo> = ({post}) => {
    return (
        <div>
            <Head>
                <title>Post Page</title>
            </Head>
            <PostInfo post={post}/>
        </div>
    )
}
export default Post