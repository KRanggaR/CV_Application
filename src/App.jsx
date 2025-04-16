import React from 'react'
import ControlPanel from './components/ControlPanel'
import DetailForm from './components/DetailForm'
import ResumePreview from './components/ResumePreview'
import '../src/styles/app.css'

function App() {
  return (
    <>
      <div className='app-wrapper'>
        <ControlPanel />
        <DetailForm />
        <ResumePreview />
        
      </div>
    </>
  )
}

export default App
