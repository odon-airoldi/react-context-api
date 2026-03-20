import { Link, NavLink } from 'react-router-dom'

export default function AppHeader() {

    const header_nav = [
        {
            id: 1,
            path: '/',
            text: 'Home'
        },
        {
            id: 2,
            path: '/about-us',
            text: 'About us'
        },
        {
            id: 3,
            path: '/products',
            text: 'Products'
        }
    ]

    return (

        <header>
            <nav>
                {
                    header_nav.map(navlink => (
                        <NavLink key={navlink.id} to={navlink.path}>{navlink.text}</NavLink>
                    ))
                }
            </nav>
        </header>

    )

}