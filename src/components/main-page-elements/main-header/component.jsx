import styles from "./styles.module.scss";

export const MainHeader = () => {
    return (
        <div className={styles.area}>
            <section className={styles.mainHeader}>
                <span className={styles.intro}>
                    <p className={styles.hello}>Wellcome</p> to one of the most 
                    popular food court in the world!
                    We are happy to introduce a lot
                    of marvelous places, there <b>you</b> can 
                    take a break for a few hours and eat!
                </span>
            </section>
            <section className={styles.mainContent}>
                <div className={styles.preview}>
                    <div className={styles.logo}><img className={styles.logoPicture} src="https://i.pinimg.com/736x/4e/13/02/4e13028bd54da5c791278cc5acb583a8.jpg"></img></div>
                </div>
            </section>
        </div>
    )
}