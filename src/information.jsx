import { useState } from 'react';

export function Information() {

const [number, setNumber] = useState('')
const [email,  setEmail] = useState('')
const [phone, setPhone] = useState('')
const [submit, setSubmit] = useState(false)

const handleSubmit = (e) => {
    e.preventDefault();
    setSubmit(true);
  };

    return (
        <div>
            <button onclick = {() => setShowForm(!showForm)}>
                {showForm ? 'Hide Info Form' : 'Add Information'}
            </button>

            {showForm && (
        <form onSubmit={handleSubmit}>
          <label>Name:</label><br />
          <input type="text" onChange={(e) => setNumber(e.target.value)} required /><br />

          <label>Email:</label><br />
          <input type="email" onChange={(e) => setEmail(e.target.value)} required /><br />

          <label>Phone:</label><br />
          <input type="text" onChange={(e) => setPhone(e.target.value)} required /><br />

          <button type="submit">Submit Info</button>
        </form>
      )}
        </div>
    )
}