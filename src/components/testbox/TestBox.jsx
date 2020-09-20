import React from 'react'

function TestBox(props) {
    return (
        
        <div style={{textAlign: 'center', padding: '24px', boxShadow: '0px 5px 10px #888888', backgroundColor: props.firstColor}}>

            <h1 style={{color: 'white'}}>Title</h1>
            <h1 style={{color: props.secondColor}}>Title</h1>
            <h1 style={{color: 'black'}}>Title</h1>

            <h3 style={{color: props.thirdColor}}>subtitle</h3>
            <h3 style={{color: props.fourthColor}}>subtitle</h3>

            <button
                style={{padding: '30px', margin: '40px', backgroundColor: props.fourthColor, fontWeight: 'bold', fontSize: '14px', color:'#ffffff', boxShadow: '0px 3px 6px #525252'
            }}
            >Button</button>
            <button
                style={{padding: '30px', margin: '40px', backgroundColor: props.thirdColor, fontWeight: 'bold', fontSize: '14px', color:'#ffffff', boxShadow: '0px 3px 6px #525252'}}
            >Button</button>

        </div>
    )
}

export default TestBox;