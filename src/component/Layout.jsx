import { Link, Outlet } from 'react-router-dom';

export default function Layout() {
    return (
        <div className="layout-container">
            <header className="header">
                <nav>
                    <Link to="/" className="nav-link">Главная</Link>
                    <Link to="/about" className="nav-link">О нас</Link>
                    <Link to="/posts" className="nav-link">Посты</Link>
                </nav>
            </header>

            <main className="content">
                 <Outlet />
            </main>

            <footer className="footer">
                <p>© 2025</p>
            </footer>
        </div>
    );
}