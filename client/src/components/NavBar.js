import { Container, Navbar, Nav } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import { AppContext } from './AppContext.js'
import { useContext } from 'react'
import { observer } from 'mobx-react-lite'
import Logo from '../Images/logo.png'

const NavBar = observer(() => {
    const { user, basket } = useContext(AppContext)
    return (
        <Navbar bg="light" variant="light" data-bs-theme="light">
            <Container>
                <NavLink to="/" className="navbar-brand">
                <img src={process.env.PUBLIC_URL + Logo} alt="" width={200}></img>
                </NavLink>
                <Nav className="ml-auto">
                    <NavLink to="/delivery" className="nav-link">Доставка</NavLink>
                    <NavLink to="/contacts" className="nav-link">Контакты</NavLink>
                    {user.isAuth ? (
                        <NavLink to="/user" className="nav-link">Личный кабинет</NavLink>
                    ) : (
                        <>
                            <NavLink to="/login" className="nav-link">Войти</NavLink>
                            <NavLink to="/signup" className="nav-link">Регистрация</NavLink>
                        </>
                    )}
                    {user.isAdmin && (
                        <NavLink to="/admin" className="nav-link">Панель управления</NavLink>
                    )}
                    <NavLink to="/basket" className="nav-link">
                        Корзина
                        {!!basket.count && <span>({basket.count})</span>}
                    </NavLink>
                </Nav>
            </Container>
        </Navbar>
    )
})

export default NavBar