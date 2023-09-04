import Link from "next/link"
import styles from "./nav.module.scss"

function Nav() {
    return <nav className={styles.nav}>
        <ul>
            <li><Link href="/static">Static</Link></li>
            <li><Link href="/dynamic">Dynamic from Contentful</Link></li>
            <li><Link href="https://unsplash.com/photos/a-man-in-a-space-suit-kneeling-on-a-rock-nYDtK_y3pZs">Awesome Image from Unsplash</Link></li>
            <li><Link href="https://yorsaquing.com/blog/">View Article By Yor Saquing</Link></li>
        </ul>
    </nav>
}

export default Nav