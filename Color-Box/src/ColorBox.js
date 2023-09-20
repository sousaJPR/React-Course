const ColorBox = ({colorValue, hexValue, isDarkText }) => {
  return (
    <div
      className="colorBox"
      style={{
        backgroundColor: colorValue,
        color: isDarkText ? "#000" : "#FFF"}}>
      <p>{colorValue ? colorValue : "Empty Value"}</p>
      <p>{hexValue ? hexValue : null}</p>
    </div>
  )
}

export default ColorBox