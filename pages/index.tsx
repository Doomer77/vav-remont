import React, {FC} from 'react'
import Heading from "../shared/ui/heading/Heading";
import styles from '../styles/Home.module.scss'

const Home: FC = () => (
    <div className={styles.wrapper}>
        <Heading text='Home'/>
    </div>
    )

export default Home


