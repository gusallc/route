import React from 'react'
import { useParams } from 'react-router-dom'

const Pokemon = () => {
  const { name } = useParams()
  console.log('params', name)
  return (
    <div>
      <h1>
        Pokemon
      </h1>
      {
        name == "ditto"
          ? (
            <>
              <p>Name: {name}</p>
            </>
          ) : (
            <p>The pokemon doesn't exist</p>
          )
      }
    </div>
  )
}

export default Pokemon
