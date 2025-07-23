import { useState } from 'react';

export function Experience() {
  const [company, setCompany] = useState('');
  const [position, setPosition] = useState('');
  const [start, setStart] = useState('');
  const [end, setEnd] = useState('');
  const [submit, setSubmit] = useState(false);
  const [showForm, setShowForm] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmit(true);
  };

  return (
    <div>
      <button onClick={() => setShowForm(!showForm)}>
        {showForm ? 'Hide Info Form' : 'Add Experience'}
      </button>

      {showForm && (
        <form onSubmit={handleSubmit}>
          <label>Name of company:</label><br />
          <input type="text" onChange={(e) => setCompany(e.target.value)} required /><br />

          <label>Position Title:</label><br />
          <input type="text" onChange={(e) => setPosition(e.target.value)} required /><br />

          <label>Start Month:</label><br />
          <input type="month" onChange={(e) => setStart(e.target.value)} required /><br />

          <label>End Month:</label><br />
          <input type="month" onChange={(e) => setEnd(e.target.value)} required /><br />

          <button type="submit">Submit Info</button>
        </form>
      )}

      {submit && (
        <div className="display">
          <p><strong>Name of company:</strong> {company}</p>
          <p><strong>Position Title:</strong> {position}</p>
          <p><strong>Start Month:</strong> {start}</p>
          <p><strong>End Month:</strong> {end}</p>
        </div>
      )}
    </div>
  );
}
