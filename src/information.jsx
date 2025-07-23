import { useState } from 'react';

export function Information() {
  const [showForm, setShowForm] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [submit, setSubmit] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmit(true);
  };

  return (
    <div>
      <button onClick={() => setShowForm(!showForm)}>
        {showForm ? 'Hide Info Form' : 'Add Information'}
      </button>

      {showForm && (
        <form onSubmit={handleSubmit}>
          <label>Name:</label><br />
          <input type="text" onChange={(e) => setName(e.target.value)} required /><br />

          <label>Email:</label><br />
          <input type="email" onChange={(e) => setEmail(e.target.value)} required /><br />

          <label>Phone:</label><br />
          <input type="text" onChange={(e) => setPhone(e.target.value)} required /><br />

          <button type="submit">Submit Info</button>
        </form>
      )}

      {submit && (
        <div className="display">
          <p><strong>Name:</strong> {name}</p>
          <p><strong>Email:</strong> {email}</p>
          <p><strong>Phone:</strong> {phone}</p>
        </div>
      )}
    </div>
  );
}
