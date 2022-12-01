import React, { useState } from "react";

function Textform(props) {
  const handleUpClick = () => {
    // console.log('UpperCase was clicked');
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };
  const handleCopy = ()=>{
    var t = document.getElementById('textarea1');
    t.select();
    navigator.clipboard.writeText(t.value);
  }
  // const handleFLClick = () => {
  //   let words = text.split(" ");

  //   for (let i = 0; i < words.length; i++) {
  //     words[i] = words[i][0].toUpperCase();
  //   }
  //   words.join(' ');
  //   // let n = words.toString();
  //   setText(words);
  // };
  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const [text, setText] = useState("");

  return (
    <>
      <div className={`container text-${props.mode==='light'?'black':'white'}`}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'black'}}
            id="textarea1"
            rows="9"
          ></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleUpClick}>
          Convert To Uppercase
        </button>
        <button className="btn btn-primary mx-5" onClick={handleLoClick}>
          Convert To Lowercase
        </button>
        <button className="btn btn-primary" onClick={handleCopy}>
          Copy text
        </button>
        
      </div>
      <div className={`container my-5 text-${props.mode==='light'?'black':'white'}`}>
        <h2>Your text summary</h2>
        <p>
          {text.split(" ").length} Words, {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} Minutes to read</p>
      </div>
    </>
  );
}

export default Textform;
