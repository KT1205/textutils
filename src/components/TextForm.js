import React, { useState } from 'react'

const TextForm = (props) => {
    const [text,setText]= useState(" ");
    const clickedU=()=>{
        let newText=text.toUpperCase();
        setText(newText);
    }
    const clickedL=()=>{
        let newText=text.toLowerCase();
        setText(newText);
    }
    /* const speak = () => {
        let msg = new SpeechSynthesisUtterance(text);
        window.speechSynthesis.speak(msg);
        const toogle = document.getElementById('toggle')
        if (toogle.textContent == "Speak") {
            toogle.innerHTML = "Stop"
        }
        else {
            toogle.innerHTML = "Speak"
            if (toogle.innerHTML = "Speak"){
                window.speechSynthesis.cancel()
            }
        }
    } */
    const clear=()=>{
        setText("");
    }
    const handler=(event)=>{
        setText(event.target.value);
    }
    let wordC=text===""?0:text.trim().split(" ").length;
    let charC=text.length;
    return (
    <>
    <div>
        <div className="mb-3">
            <h1>{props.heading}</h1>
            <textarea className="form-control" value={text} id="myBox" rows="8" onChange={handler}></textarea>
        </div>
        <button className='btn btn-primary' onClick={clickedU}>Convert to UpperCase</button>
        <button className='btn btn-primary mx-3' onClick={clickedL}>Convert to LowerCase</button>
        <button className='btn btn-primary' onClick={clear}>Clear</button>
{/*         <button type="submit" onClick={speak} className="btn btn-warning mx-2 my-2" id="toggle">Speak</button>
 */}
    </div>
    <div>
        <h1 className='my-3'>Your Text Summary</h1>
        <p>{wordC} words, {charC} characters</p>
        <p>Average Time to read this text :{0.008 * wordC} Minutes</p>
        <h3>PREVIEW</h3>
        <p>{text}</p>
    </div>
    </>
    )
}

export default TextForm
