import { Outlet } from "react-router-dom";

export function LayoutRoot() {
    return (
        <div>
            <header>
                <a href="https://react.dev/reference/react/useEffect">React.useEffect</a>
            </header>

            <div>
                <Outlet />
            </div>

            <footer>
                <p>Modul D</p>
            </footer>
        </div>
    )
}