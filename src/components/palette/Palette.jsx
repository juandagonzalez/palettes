import React from 'react';

const Palette = (props) => {

    return(<div
    style={{height: '200px', textAlign: 'center', boxShadow: '0px 5px 10px #888888'}}>

        <div
          style={{
            backgroundColor: props.firstColor,
            height: '40%',
            fontWeight: 'bold', fontSize: '14px'
          }}
        >
        {props.firstColor}</div>
          
          <div
          style={{
            backgroundColor: props.secondColor,
            height: '30%',
            fontWeight: 'bold', fontSize: '14px'
          }}
          >{props.secondColor}</div>

          <div
          style={{
            backgroundColor: props.thirdColor,
            height: '15%',
            fontWeight: 'bold', fontSize: '14px'
          }}
          >{props.thirdColor}</div>

          <div
          style={{
            backgroundColor: props.fourthColor,
            height: '15%',
            fontWeight: 'bold', fontSize: '14px'
          }}
          >{props.fourthColor}</div>

          </div>
    )
}

export default Palette;