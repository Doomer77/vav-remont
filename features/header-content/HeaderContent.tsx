import React, { FC } from 'react'
import styles from '../../styles/Header.module.scss'

const HeaderContent: FC = () => {
    return (
        <div className={styles.header__content}>
            <h1 className={styles.header__heading}>Дизайн и отделка</h1>
            <p className={styles.header__text_main}>Ремонт любой сложности</p>
            <p className={styles.header__text_sub}>
                От простого косметического до сложнейшего по индивидуальному
                дизайн проекту
            </p>
            <button className={styles.header__button}>Заказать ремонт</button>
        </div>
    )
}

export default HeaderContent
