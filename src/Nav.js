export default function Nav({links}) {
    return (
        <nav aria-label="Site Navigation" role="navigation">
            <ul>
                {links.map((link) => {
                    return (
                        <li><a href="...">{link}</a></li>
                    )
                })}
            </ul>
        </nav>
    )
}