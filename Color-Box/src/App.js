import ColorSearch from "./ColorSearch";
import ColorBox from "./ColorBox";
import { useState } from "react";


function App() {
  const [colorValue, setColorValue] = useState('');
  const [hexValue, setHexValue] = useState('');
  const [isDarkText, setIsDarkText] = useState(true)

  return (
    <main>
      <ColorBox 
        colorValue = {colorValue}
        hexValue = {hexValue}
        isDarkText = {isDarkText}
        />
      <ColorSearch 
        colorValue = {colorValue}
        setColorValue = {setColorValue}
        setHexValue = {setHexValue}
        isDarkText = {isDarkText}
        setIsDarkText = {setIsDarkText}/>
    </main>
  );
}

export default App;
 