import styles from "./styles.module.scss";

export const MainHeader = () => {
    return (
        <>
            <section className={styles.mainHeader}>
                <span className={styles.intro}>
                    <p className={styles.hello}>Wellcome</p> to one of the most 
                    popular food court in the world!
                    We are happy to introduce a lot
                    of marvelous places, there <b>you</b> can 
                    take a break for a few minutes!
                </span>
            </section>
            <section className={styles.mainContent}>
                <div className={styles.preview}>
                    <img className={styles.logo} src="https://i.pinimg.com/736x/4e/13/02/4e13028bd54da5c791278cc5acb583a8.jpg"></img>
                    <span></span>
                </div>
            </section>
        </>
    )
}