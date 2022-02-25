import React, { FC } from 'react'
import Heading from '../../shared/ui/heading/Heading'
import { IContacts } from './types'

export const getStaticProps = async () => {
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
                                {item.id} {item.name} {item.email}
                            </li>
                        )
                    })}
            </ul>
        </div>
    )
}

export default Contacts
