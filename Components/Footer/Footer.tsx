import Link from "next/link";

const Footer = () => {
    return ( 
        <footer className="footer_wrapper">
            <p>Copyright © 2023 <Link href='/'>Next Js Explore</Link>. All Rights Reserved. Developed By <Link href='https://www.linkedin.com/in/developernaeem/' target='_blank'>Ab Naeem.</Link></p>
        </footer>
     );
}
 
export default Footer;