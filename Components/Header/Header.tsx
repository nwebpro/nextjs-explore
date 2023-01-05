import Link from "next/link";

const Header = () => {
    return ( 
        <header className="header_wrapper">
            <div className="container">
                <div className="navbar">
                    <h2>Logo</h2>
                    <ul>
                        <li>
                            <Link href="/">Home</Link>
                        </li>
                        <li>
                            <Link href="/about">About</Link>
                        </li>
                        <li>
                            <Link href="/blogs">Blogs</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    );
}
 
export default Header;