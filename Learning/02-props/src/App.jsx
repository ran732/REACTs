import React from 'react'
import Card from './components/Card'

const App = () => {
  return (

  <div>
  <Card user='Ranjeet Singh' age={18} img=".\profile.jpg" />
  <Card user='Elon Musk' age={58} img=".\profile2.webp" />
  <Card user='Donald Trump' age={59} img=".\pic3.jpg" />
 
  </div>
  )
}

export default App
