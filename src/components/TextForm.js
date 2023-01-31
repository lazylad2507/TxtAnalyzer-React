import React from 'react';
import { useState } from 'react';

const TextForm = (props) => {
    const handleOnChange = (event) => {
        // console.log("onchange");
        setText(event.target.value)

    }
    const [text, setText] = useState('');
    // const TextForm = () => {
    const handleUpClick = () => {
        // console.log("uppercase was clicked: " + text);
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to uppercase!", "success");
    }
    const handleLoClick = () => {
        // console.log("uppercase was clicked: " + text);
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to lowercase!", "success");
    }
    const handleClearClick = () => {
        // console.log("uppercase was clicked: " + text);
        let newText = '';
        setText(newText)
        props.showAlert("Text Cleared!", "success");
    }
    const handleSpeech = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
        props.showAlert("You can listen to the message now!", "success");
    }
    const handleUndoClick = () => {
        let newText = text.substr(0, text.length - 1);
        setText(newText)
        props.showAlert("You can undo the message!", "success");
    }


    return (
        <>
            <div className='container' style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h1 className='mb-4'>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} style={{ backgroundColor: props.mode === 'dark' ? '#28335a' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }} id="myBox" rows="8"></textarea>
                </div>
                <button className="btn btn-primary m-2" disabled={text.length === 0} onClick={handleUpClick}>Convert to Uppercase</button>
                <button className="btn btn-primary m-2" disabled={text.length === 0} onClick={handleLoClick}>Convert to Lowercase</button>
                <button className="btn btn-primary m-2" disabled={text.length === 0} onClick={handleClearClick}>Clear Text</button>
                <button className="btn btn-primary m-2" disabled={text.length === 0} onClick={handleSpeech}>Listen to Text</button>
                <button className="btn btn-primary m-2" disabled={text.length === 0} onClick={handleUndoClick}>Undo Text</button>

            </div>
            <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h2>Your text here</h2>
                <strong>
                    {/* <p className='mb-0'>{text.split(" ").length} words and {text.length} characters</p> */}
                    {/* <p className='mb-0'>{text.split(/\n+/).filter(function (n) { return n !== '' }).length} words and {text.length} characters</p> */}
                    <p>{text.split(/\s+/).filter((element) => { return element.length !== 0 }).length} words and {text.length} characters</p>
                </strong>
                <strong>
                    {/* <p>{0.008 * text.split(" ").filter(function (n) { return n !== '' }).length} minutes read</p> */}
                    <p>{0.008 * text.split(/\s+/).filter((element) => { return element.length !== 0 }).length} Minutes read</p>
                </strong>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : "Enter something in textbox above to preview it here"}</p>
            </div>
        </>
    )
};



export default TextForm;