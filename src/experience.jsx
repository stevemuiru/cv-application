import { useState } from 'react';

export function Experience() {
  const [showForm, setShowForm] = useState(false);
  const [company, setCompany] = useState('');
  const [position, setPosition] = useState('');
  const [years, setYears] = useState('');

  return (
    <div>
      <button onClick={() => setShowForm(!showForm)}>
        {showForm ? 'Hide Experience Form' : 'Add experience'}
      </button>

      {showForm && (
        <div className="form-preview-container">
          <form>
            <label>Company:</label><br />
            <input
              type="text"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              required
            /><br />

            <label>Position:</label><br />
            <input
              type="text"
              value={position}
              onChange={(e) => setPosition(e.target.value)}
              required
            /><br />

            <label>Years:</label><br />
            <input
              type="text"
              value={years}
              onChange={(e) => setYears(e.target.value)}
              required
            /><br />
          </form>

          <div className="live-preview">
            <p><strong>Company:</strong> {company}</p>
            <p><strong>Position:</strong> {position}</p>
            <p><strong>Years:</strong> {years}</p>
          </div>
        </div>
      )}
    </div>
  );
}
