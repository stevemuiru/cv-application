import { useState } from 'react';

export function Education() {
    const [school, setSchool] = useState('')
    const [study, setStudy] = useState('')
    const [type, setType] = useState('')
    const [submit, setSubmit] = useState(false) 

    const handleSubmit = (event) => {
        event.preventDefault()
        setSubmit(true)
    }

    return (
        <div>
            <button onclick={() => setShowForm(!showForm)}>
            {showForm ? 'Hide Info Form' : 'Add Information'}
            </button>

            {showForm && (
        <form onSubmit={handleSubmit}>
          <label>School:</label><br />
          <input type="text" onChange={(e) => setSchool(e.target.value)} required /><br />

          <label>Title of Study:</label><br />
          <input type="text" onChange={(e) => setStudy(e.target.value)} required /><br />

          <label>Type of Study:</label><br />
          <input type="text" onChange={(e) => setType(e.target.value)} required /><br />

          <button type="submit">Submit Info</button>
        </form>
      )}
        </div>
        
    )
}