import React, { FC, useEffect } from 'react'
import { useRouter } from 'next/router'
import Heading from '../shared/ui/heading/Heading'

const Error: FC = () => {
    const router = useRouter()
    useEffect(() => {
        setTimeout(() => {
            router.push('/')
        }, 3000)
    }, [router])
    return (
        <div>
            <Heading text='404' />
            <Heading tag='h2' text='Страница не существует' />
        </div>
    )
}

export default Error
