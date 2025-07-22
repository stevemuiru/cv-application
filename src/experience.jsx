import { useState } from 'react';

export function Experience() {
const [company, setCompany] = useState('')
const [position, setPosition] = useState('')
const [start, setStart] = useState(false)
const [end, setEnd] = useState(false)
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
          <label>Name of company:</label><br />
          <input type="text" onChange={(e) => setCompany(e.target.value)} required /><br />

          <label>Position Title:</label><br />
          <input type="text" onChange={(e) => setPosition(e.target.value)} required /><br />

          <label>Start Month:</label><br />
          <input type="month" onChange={(e) => setStart(e.target.checked)} required /><br />

          <label>End Month:</label> <br />
          <input type="month" onChange = {(e) => setEnd(e.target.checked)} required /><br />

          <button type="submit">Submit Info</button>
        </form>
      )}
        </div>
    )
}