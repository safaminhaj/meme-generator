import React, { useEffect, useState } from 'react'
import './Meme.css'


export const Meme = () => {

    const [meme, setMeme] = useState({
        topText: "",
        bottomText: "",
        randomimage: ""
    })

    const [allMemes, setAllMemes] = useState([])

    useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setAllMemes(data.data.memes))
    }, [])

    /*
    useEffect(() => {
        const async getMemes(){
            const res = await fetch("https://api.imgflip.com/get_memes")
            const data = await res.json()
            setAllMemes(data.data.memes)
        }
        getMemes()
    },[])
    */

    function getMemeImage() {
        const randomNumber = Math.floor(Math.random() * allMemes.length)
        setMeme(prevMeme => {
            return {
                ...prevMeme,
                randomimage: allMemes[randomNumber].url
            }
        })
    }

    function handleChange(event) {
        const { name, value } = event.target
        setMeme(prevMeme => {
            return {
                ...prevMeme,
                [name]: value
            }
        })
    }


    return (
        <main className='input-form'>
            <div className='form' >
                <input type="text"
                    className='form-input'
                    placeholder='Top Text'
                    name='topText'
                    value={meme.topText}
                    onChange={handleChange}
                />
                <input type="text"
                    className='form-input'
                    placeholder='Bottom Text'
                    name='bottomText'
                    value={meme.bottomText}
                    onChange={handleChange}

                />
                <button className='form-button' onClick={getMemeImage}>Get a new meme image 🖼️</button>
            </div>
            <div className="meme">
                <img src={meme.randomimage} alt="" className='meme-image' />
                <h2 className='meme--text top'>{meme.topText}</h2>
                <h2 className='meme--text bottom'>{meme.bottomText}</h2>
            </div>
        </main>
    )
}
