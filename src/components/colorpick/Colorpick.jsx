import React, {useState} from 'react';
import { SwatchesPicker  } from 'react-color';
import Palette from '../palette/Palette';
import TestBox from '../testbox/TestBox';

//Material UI Grid
import Grid from '@material-ui/core/Grid';

const Colorpick = () => {

    const [color, setColor] = useState('#fff9c4');
    const [firstColor, setFirst] = useState('#fff9c4');
    const [secondColor, setSecond] = useState('#d1c4e9');
    const [thirdColor, setThird] = useState('#e91e63');
    const [fourthColor, setFourth] = useState('#4a148c');

    var rgbColor;

    function rgbToHex(r, g, b) {
        return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
      }


    return (
    <div >
    
    <Grid container style={{padding: 10, marginTop: 10
    }}>
    <Grid item xs={12} sm={3}>
    <SwatchesPicker
    height={600}
    color={color}
    marginLeft={5}
    onChange={ color => {
    
        setColor(color.hex);
        rgbColor = color.rgb;

        setFirst(color.hex);
        setSecond(rgbToHex(rgbColor.r * Math.random(), rgbColor.g * Math.random(), rgbColor.b));
        setThird(rgbToHex(rgbColor.r * Math.random(), rgbColor.g * Math.random(), rgbColor.b + 170));
        setFourth(rgbToHex(255 - rgbColor.r * Math.random(), 255 - rgbColor.g  * Math.random(), 255 - rgbColor.b));
        
    }}
    />
    </Grid>

    <Grid item xs={12} sm={3}>
        <TestBox firstColor={firstColor} secondColor={secondColor} thirdColor={thirdColor} fourthColor={fourthColor}/>
    </Grid>
    <Grid item xs={12} sm={3}>
        <TestBox firstColor={'#ffffff'} secondColor={secondColor} thirdColor={thirdColor} fourthColor={fourthColor}/>
    </Grid>
    <Grid item xs={12} sm={3}>
        <TestBox firstColor={'#000000'} secondColor={secondColor} thirdColor={thirdColor} fourthColor={fourthColor}/>
    </Grid>

    </Grid>

    <Grid container style={{padding: 10, marginTop: 10}}>
        <Grid item xs={12} sm={12}>
            <Palette firstColor={firstColor} secondColor={secondColor} thirdColor={thirdColor} fourthColor={fourthColor}/>
        </Grid>
    </Grid>

    </div>
    )
}

export default Colorpick;