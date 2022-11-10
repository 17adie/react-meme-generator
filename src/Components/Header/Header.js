import memeLogo from "../../images/troll-face.png"
import styles from "./Header.module.css"

export default function Header() {
  return (
    <header className={styles.header}>
      <img src={memeLogo} className={styles["header--image"]} />
      <h2 className={styles["header--title"]}>Meme Generator</h2>
      <h4 className={styles["header--project"]}>React Course - Project 3</h4>
    </header>
  )
}
