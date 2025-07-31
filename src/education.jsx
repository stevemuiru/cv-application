import { useState } from 'react';

export function Education() {
  const [showForm, setShowForm] = useState(false);
  const [school, setSchool] = useState('');
  const [degree, setDegree] = useState('');
  const [gradYear, setGradYear] = useState('');

  return (
    <div>
      <button onClick={() => setShowForm(!showForm)}>
        {showForm ? 'Hide Education Form' : 'Add education'}
      </button>

      {showForm && (
        <div className="form-preview-container">
          <form>
            <label>School:</label><br />
            <input
              type="text"
              value={school}
              onChange={(e) => setSchool(e.target.value)}
              required
            /><br />

            <label>Degree:</label><br />
            <input
              type="text"
              value={degree}
              onChange={(e) => setDegree(e.target.value)}
              required
            /><br />

            <label>Graduation Year:</label><br />
            <input
              type="text"
              value={gradYear}
              onChange={(e) => setGradYear(e.target.value)}
              required
            /><br />
          </form>

          <div className="live-preview">
            <p><strong>School:</strong> {school}</p>
            <p><strong>Degree:</strong> {degree}</p>
            <p><strong>Graduation Year:</strong> {gradYear}</p>
          </div>
        </div>
      )}
    </div>
  );
}
