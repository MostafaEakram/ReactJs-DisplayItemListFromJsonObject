import React from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Card from './Components/MyCardPage.jsx'
import dataset from './Dataset.json'

function App() {
  return (
    <>
      <h2 className='headingstyle'>Display List Of Item from Json Data Using Vite + React</h2>
    
      {dataset.map((item, index) => <Card  props= {item} />  )}
    </>
  )
}

export default App
