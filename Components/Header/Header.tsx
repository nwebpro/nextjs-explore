import Link from "next/link";

const Header = () => {
    return ( 
        <header>
            <div>
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
        </header>
    );
}
 
export default Header;