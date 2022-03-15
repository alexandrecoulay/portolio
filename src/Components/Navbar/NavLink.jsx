import { Link } from "react-router-dom";
import styles from "./Navbar.module.scss";

function NavLink({ children, href }) {
    return (
        <Link className={styles.nav_link} to={href}>
        {children}
      </Link>
    )
}

export default NavLink;