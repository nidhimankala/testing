import axios from 'axios'
import './App.css'
import { useState } from 'react'

function App() {
  const [stream, setStream] = useState()
  
    async function uploadFile() {
      const formData = new FormData()
      formData.append('stream', stream[0])
      axios
        .post('http://www.mrexy.com/detectFace', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        })
        .then((response) => {
          console.log(response)
        })
    }
  
    async function handleSubmit(e) {
      e.preventDefault()
      console.log('here')
      let res = await uploadFile()
      console.log(res)
    }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type='file'
          id='file'
          multiple
          name='file'
          onChange={(e) => setStream(e.target.files)}
        />
       
        <button type='submit' className='btn btn-info'>
          {' '}
          Upload File{' '}
        </button>
      </form>
    </div>
  )
}

export default App