import React, { FC, useEffect, useState } from 'react'
import Header from '../shared/ui/header/Header'
import { CircularProgress } from '@mui/material'

const Home: FC = () => {
    const [page, setPage] = useState<boolean>(true)
    useEffect(() => {
        setTimeout(() => {
            setPage(false)
        }, 1000)
    }, [])

    return page ? (
        <div className='loader-box'>
            <CircularProgress color='inherit' />
        </div>
    ) : (
        <div>
            <Header />
        </div>
    )
}

export default Home
