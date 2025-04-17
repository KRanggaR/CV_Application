import React, {useState} from 'react'
import ControlPanel from './components/ControlPanel'
import DetailForm from './components/DetailForm'
import ResumePreview from './components/ResumePreview'
import '../src/styles/app.css'

function App() {
  const [formData, setFormData] = useState({
    personal: {
      fullname: '',
      email: '',
      phone: '',
      address: '',
      summary: '',
    },
    education: [

    ],
    experience: [

    ],

  });
  return (
    <>
      <div className='app-wrapper'>
        <ControlPanel setFormData={setFormData}/>
        <DetailForm formData={formData} setFormData={setFormData}/>
        <ResumePreview />
        
      </div>
    </>
  )
}

export default App
