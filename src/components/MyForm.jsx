import React, { useState } from 'react';

const MyForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '' });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Name:', formData.name, 'Email:', formData.email);
    // Additional actions can be added here, like sending data to a server
    // Reset the form if needed: setFormData({ name: '', email: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Name: <input type="text" name="name" value={formData.name} onChange={handleChange} /></label>
      <label>Email: <input type="email" name="email" value={formData.email} onChange={handleChange} /></label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default MyForm;
