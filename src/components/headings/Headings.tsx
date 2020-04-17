import React from 'react'

const Headings = (props: any) => {
  return (
    <header className="text-center">
      <h2>{props.title}</h2>
      <h3>{props.subtitle}</h3>
    </header>
  )
}

export default Headings
