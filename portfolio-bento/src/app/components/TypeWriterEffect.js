import React from "react";
import { Typewriter } from 'react-simple-typewriter';

export default function TypeWriterEffect({words=[''], cursorStyle='_', cursorBlinking=false, cursor=false}){
    return (<Typewriter
                words={words}
                cursor={cursor}
                cursorStyle={cursorStyle}
                cursorBlinking={cursorBlinking}
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />);
}