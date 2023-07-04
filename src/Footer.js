import Nav from "./Nav";

export default function Footer() {
    const footerLinks = ["Home", "Women's", "Men's", "On the Street", "The CatWalk", "AdWatch", "About", "Tips"];
    return (
        <footer>
            <Nav links={footerLinks} />
            <p>&copy; 2013 Valet Industries, Inc.</p>
        </footer>
    )
}