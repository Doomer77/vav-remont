import React, { FC } from 'react'
import { GetServerSideProps } from 'next'
import ContactInfo from '../../entities/contact-info/ContactInfo'
import Head from 'next/head'
import { IContact } from '../../entities/contact-info/types'

//При SSR подходе
export const getServerSideProps: GetServerSideProps = async (context) => {
    // @ts-ignore
    const { id } = context.params
    const response = await fetch(
        `https://jsonplaceholder.typicode.com/users/${id}`,
    )
    const data = await response.json()

    if (!data) {
        return {
            notFound: true,
        }
    }

    return {
        props: { contact: data },
    }
}

const Contact: FC<IContact> = ({ contact }) => {
    return (
        <div>
            <Head>
                <title>Contact</title>
            </Head>
            <ContactInfo contact={contact} />
        </div>
    )
}

export default Contact
