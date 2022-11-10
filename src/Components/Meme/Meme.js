import React, { useState, useEffect } from "react"
import styles from "./Meme.module.css"
// import { memesData } from "../../memeData"

const Meme = () => {
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  })

  // const [allMemeImages, setAllMemeImages] = useState(memesData)

  const [allMemes, setAllMemes] = useState([])

  // using async await
  useEffect(() => {
    async function getMemes() {
      const res = await fetch("https://api.imgflip.com/get_memes")
      const data = await res.json()
      setAllMemes(data.data.memes)
    }
    getMemes()
  }, [])

  // normal call
  // useEffect(() => {
  //   fetch("https://api.imgflip.com/get_memes")
  //     .then((res) => res.json())
  //     .then((data) => setAllMemes(data.data.memes))
  // }, [])

  function getMemeImage() {
    // const memesArray = allMemeImages.data.memes
    // const memesArray = memesData.data.memes
    const randomNumber = Math.floor(Math.random() * allMemes.length)
    const url = allMemes[randomNumber].url
    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: url,
    }))
  }

  function handleChange(event) {
    const { name, value } = event.target
    setMeme((prevMeme) => ({
      ...prevMeme,
      [name]: value,
    }))
  }

  return (
    <main>
      <div className={styles.form}>
        <input type="text" placeholder="Top text" className={styles["form--input"]} name="topText" value={meme.topText} onChange={handleChange} />
        <input type="text" placeholder="Bottom text" className={styles["form--input"]} name="bottomText" value={meme.bottomText} onChange={handleChange} />
        <button className={styles["form--button"]} onClick={getMemeImage}>
          Get a new meme image 🖼
        </button>
      </div>
      <div className={styles.meme}>
        <img alt="Meme" src={meme.randomImage} className={styles["meme--image"]} />
        <h2 className={`${styles["meme--text"]} ${styles.top}`}>{meme.topText}</h2>
        <h2 className={`${styles["meme--text"]} ${styles.bottom}`}>{meme.bottomText}</h2>
      </div>
    </main>
  )
}

export default Meme
