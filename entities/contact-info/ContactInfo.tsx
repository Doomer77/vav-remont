import React, { FC } from 'react'
import Heading from '../../shared/ui/heading/Heading'
import {IContact} from "./types";

const ContactInfo: FC<IContact> = ({ contact }) => {
    if (!contact) {
        return <Heading tag='h3' text='Contact not empty' />
    }
    return (
        <div>
            <Heading tag='h3' text={contact.name} />
            <div>
                <strong>Email: {contact.email}</strong>
            </div>
            <div>
                <strong>
                    Address: {contact.address.city} {contact.address.street}{' '}
                    {contact.address.zipcode} {contact.address.suite}
                </strong>
            </div>
        </div>
    )
}

export default ContactInfo
