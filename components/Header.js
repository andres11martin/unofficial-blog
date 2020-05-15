import Link from 'next/link';
import styles from "./header.module.css"
import { useRouter } from 'next/router'

const Header = props => {

    return (
        <header className={styles.header}>
            <Link href="/${props.show}" as={`/${props.show}`}>
                <a>Home</a>
            </Link>
            <Link href="/">
                <a>Search again</a>
            </Link>
        </header>
    )
}

export default Header