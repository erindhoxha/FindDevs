import React from 'react'
import spinner from "./spinner.svg"

export const Spinner = () => {
  return (
    <>
        <img src={spinner}
        style={{width: '200px', margin: 'auto', display: 'block'}}
        alt='Loading...'
        />
    </>
  )
}

export default Spinner