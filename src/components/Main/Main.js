import React from 'react'
import NavBar from '../NavBar/NavBar'
import Button from '../UI/Button'

const Main = (props) => {
    const {children} = props
  return (
    <main>
        <NavBar/>
        <Button/>
        {children}

        <h1>Yo soy el footer</h1>
    </main>
  )
}

export default Main