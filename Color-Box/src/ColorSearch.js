import colorNames from "colornames";
import { useRef } from "react";

const ColorSearch = ({ colorValue, setColorValue, setHexValue, isDarkText, setIsDarkText }) => {
    const inputRef = useRef('')
    return (
        <form className="searchbar" onSubmit={(e) => e.preventDefault()}>
            <label>Add Color Name:</label>
            <input
                autoFocus
                ref = {inputRef}
                type="text"
                placeholder="Add color name"
                required
                value={colorValue}
                onChange={(e) => {
                    setColorValue(e.target.value);
                    setHexValue(colorNames(e.target.value));
                }
                }
            />
        <button
            type="button"
            onClick={() => {
                setIsDarkText(!isDarkText)
                inputRef.current.focus()
                }}>Toggle Text Color</button>
        </form>
    )
}

export default ColorSearch