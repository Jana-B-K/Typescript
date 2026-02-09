import Navlink from "./Navlink"

export default function Header() {
    return (
        <header className="site-header">
            <div className="logo">
                <p>Logo</p>
            </div>
            <div className="nav-wrap">
                <Navlink />
            </div>
        </header>
    )
}
