import React, {useState} from 'react';

const ColorContext = React.createContext();

export const ColorProvider = (props) => {
    const [color, setColor] = useState('#7b1fa2')
}

export default ColorContext;