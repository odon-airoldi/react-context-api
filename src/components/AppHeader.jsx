import { useContext } from 'react'
import { Link, NavLink } from 'react-router-dom'
import BudgetContext from '../context/BudgetContext'


export default function AppHeader() {

    const { budgetMode, clickBudgetMode } = useContext(BudgetContext)

    console.log(budgetMode)


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

            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <Link className="navbar-brand" to={'/'}>App</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            {
                                header_nav.map(navlink => (
                                    <li className="nav-item" key={navlink.id}><NavLink className="nav-link" to={navlink.path}>{navlink.text}</NavLink></li>
                                ))
                            }
                            <li className="nav-item">
                                <button className="btn" onClick={clickBudgetMode}>{budgetMode === false ? 'Attiva' : 'Disattiva'} Modalità Budget</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        </header >

    )

}