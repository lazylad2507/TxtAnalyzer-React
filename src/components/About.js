import React from 'react';
// import { useState } from 'react';

const About = (props) => {

    // const [myStyle, setMyStyle] = useState({
    //     color: 'black',
    //     backgroundColor: 'white'
    // })
    let myStyle = {
        color: props.mode === 'dark' ? 'white' : '#0d183d',
        backgroundColor: props.mode === 'dark' ? '#28335a' : 'white',
        border: props.mode === 'dark' ? 'white' : '#0d183d',
        borderColor: props.mode === 'dark' ? 'white' : '#0d183d'

    }
    // #28335a

    return (
        <div className='container p-3 mt-3' >
            <h1 className="my-2" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>About Us</h1>
            <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            Analyze Your Text
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                            <strong> TxtAnalyzer gives you a way to analyze your text quickly and efficiently. Their is in built feature of word and character counter</strong>
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                        <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            Free To Use
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                            <strong>TxtAnalyzer is a free character counter tool that providesinstant character count and word count statistics for a giventext. TxtAnalyzer reports the number of words and characters. Thus it is suitable for writing text with word/ character limit.</strong>
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                        <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            Browser Compatible
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                            <strong>This word counter softwware works in any web browser such as Chrome, Firefox, MS Edge, Safari, Opera etc. It suits the count chracters in facebook, blog, books, excel document, pdf document, essays etc.</strong>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default About;
