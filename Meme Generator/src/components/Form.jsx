import React from "react"

export default function Form() {
  React.useEffect(function() {
    fetch("https://api.imgflip.com/get_memes")
      .then(res => res.json())
      .then(data => setAllMemeImages(data))
  }, [])

  let [meme, setMeme] = React.useState({
    topText: "wow",
    bottomText: "many edits",
    randomImage: "https://i.imgflip.com/4t0m5.jpg" 
  })
  let [allMemeImages, setAllMemeImages] = React.useState([]);

  function getImageUrl() {
    let url = allMemeImages.data.memes[Math.floor(Math.random() * allMemeImages.data.memes.length)].url;
    setMeme(prevMeme => ({
      ...prevMeme,
      randomImage: url
    }))
  }

  function handleChange(event) {
    setMeme(prevMeme => ({
      ...prevMeme,
      [event.target.name]: event.target.value
    }))
  }

  return (
    <div className="container mt-4">
      <div className="d-flex gap-sm-5 gap-2">
        <input type="text" className="form-control" placeholder="Top Text" name="topText" onChange={handleChange}></input>
        <input type="text" className="form-control" placeholder="Bottom Text" name="bottomText" onChange={handleChange}></input>
      </div>
      <div className="d-flex justify-content-center mb-4">
        <button onClick={getImageUrl} type="button" className="btn shadow-sm w-100 py-2 mt-4">Get new meme image<i className="fa-regular fa-image ms-2 mt-1"></i></button>
      </div>
      <div className="d-flex justify-content-center position-relative">
        <img className="img-fluid" src={meme.randomImage} />
        <div className="position-absolute top-0 text-center mt-1 meme-text">{meme.topText}</div>
        <div className="position-absolute bottom-0 text-center mb-1 meme-text">{meme.bottomText}</div>
      </div>
    </div>
  )
}