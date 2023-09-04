import styles from "./card.module.scss"

const Card = ({ children, description }) => {
    return <div className={styles.card}>
        <div className={styles["card_image-con"]}>
            {children}
        </div>
        <div className={styles["card_text-con"]}>
            <p><small>{description}</small></p>
        </div>
    </div>
}

export default Card