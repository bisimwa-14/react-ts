import styles from "./Header.module.css";

const Header = () => { 

    return (
        <div className={styles.header}>
            <h1>My Todos</h1>
            <img src="/Racine.jpg" alt="Racine14 Logo" />
        </div>
    );
}

export default Header;