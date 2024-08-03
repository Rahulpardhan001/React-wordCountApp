import React, { useState } from 'react'
import "./style.css"
function WordCount() {
  const[char, setchar] = useState(0)
  const[word, setword] = useState(0)

const charHandler =(element)=>{
  const input = element.target.value;
  setchar(input.length)
  setword(input.trim().split(/\s+/).length)
}

  return (
    <>
    <div className="container">
          <div className='textCount'>char: {char} word: {word}</div>
        <textarea rows="8" cols="50" onChange={(e)=> charHandler(e)} />
    </div>
      
    </>
  )
}

export default WordCount
