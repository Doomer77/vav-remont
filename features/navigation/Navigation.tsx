import React, { FC } from 'react'
import { routes } from './lib/routes'
import { useRouter } from 'next/router'
import { Nav, NavLink, NavLinkActive } from './styles'
import Link from 'next/link'

const Navigation: FC = () => {
    const { pathname } = useRouter()
    return (
        <Nav>
            {routes.map(({ id, title, path }) => {
                return (
                    <Link key={id} href={path} passHref>
                        <a
                            className={
                                pathname === path ? NavLinkActive : NavLink
                            }
                        >
                            {title}
                        </a>
                    </Link>
                )
            })}
        </Nav>
    )
}

export default Navigation
