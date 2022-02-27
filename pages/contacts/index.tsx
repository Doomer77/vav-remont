import { FC } from 'react'
import Link from 'next/link'
import Heading from '../../shared/ui/heading/Heading'
import { IContacts } from '../../types/types'
import { GetStaticProps } from "next";

export const getStaticProps:GetStaticProps = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await response.json()

    if (!data) {
        return {
            notFound: true,
        }
    }

    return {
        props: { contacts: data },
    }
}

const Contacts: FC<IContacts> = ({ contacts }) => {
    return (
        <div>
            <Heading text='Contacts' />
            <ul>
                {contacts &&
                    contacts.map((item) => {
                        return (
                            <li key={item.id}>
                                <Link href={`/contacts/${item.id}`}>
                                    {item.name}
                                </Link>
                            </li>
                        )
                    })}
            </ul>
        </div>
    )
}

export default Contacts
