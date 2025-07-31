import { useState } from 'react';
import { FaUser } from 'react-icons/fa';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';


export function Information() {
  const [showForm, setShowForm] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  return (
    <div>
      <button onClick={() => setShowForm(!showForm)} className="info-toggle-btn">
  <FaUser style={{ marginRight: '8px' }} />
  General Information
  {showForm ? (
    <IoIosArrowUp style={{ marginLeft: '8px' }} />
  ) : (
    <IoIosArrowDown style={{ marginLeft: '8px' }} />
  )}
</button>


      {showForm && (
        <div className="form-preview-container">
          <form>
            <label>Name:</label><br />
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            /><br />

            <label>Email:</label><br />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            /><br />

            <label>Phone:</label><br />
            <input
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            /><br />
          </form>

          <div className="live-preview">
            <p><strong>Name:</strong> {name}</p>
            <p><strong>Email:</strong> {email}</p>
            <p><strong>Phone:</strong> {phone}</p>
          </div>
        </div>
      )}
    </div>
  );
}
