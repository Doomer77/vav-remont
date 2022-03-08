import React, { FC, useEffect } from 'react'
import { useRouter } from 'next/router'
import Heading from '../entities/heading/Heading'

const Error: FC = () => {
    const router = useRouter()
    useEffect(() => {
        setTimeout(() => {
            router.push('/')
        }, 3000)
    }, [router])
    return (
        <div>
            <Heading color='black' text='404' />
            <Heading color='black' text='Страница не существует' />
        </div>
    )
}

export default Error
