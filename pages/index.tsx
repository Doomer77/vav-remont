import React, { FC, useEffect, useState } from 'react'
import Header from '../shared/ui/header/Header'
import FeaturesInfo from '../shared/ui/features/FeaturesInfo'
import { CircularProgress } from '@mui/material'
import WorksInfo from '../shared/ui/works/Works'

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
            <FeaturesInfo />
            <WorksInfo />
        </div>
    )
}

export default Home
