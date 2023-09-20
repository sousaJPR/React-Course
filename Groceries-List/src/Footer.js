import React from 'react'

const Footer = ({length}) => {
  return (
    <footer>
      <h5>{length} List {length === 1 ? "Item" : "Items"}</h5>
    </footer>
  )
}

export default Footer