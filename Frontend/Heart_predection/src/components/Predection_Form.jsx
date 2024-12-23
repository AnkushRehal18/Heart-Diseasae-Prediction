import React, { useState } from 'react';

function MedicalForm() {
  const [formData, setFormData] = useState({
    age: '',
    gender: '',
    chestPain: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data Submitted:', formData);
  };

  return (
    <div className='ml-36 mt-10'>
      <form onSubmit={handleSubmit}>
        {/* Age Input */}
        <input
          className="border h-[50px] w-[500px] rounded-[12px] p-4 placeholder-gray-500"
          type="text"
          id="age"
          name="age"
          placeholder="Enter your age"
          value={formData.age}
          onChange={handleChange}
          required
        />

        <br /><br />

        {/* Gender Radio Buttons */}
        <label>Gender:</label><br />
        <input
          type="radio"
          id="male"
          name="gender"
          value="Male"
          checked={formData.gender === 'Male'}
          onChange={handleChange}
          required
        />
        <label htmlFor="male">Male</label><br />
        <input
          type="radio"
          id="female"
          name="gender"
          value="Female"
          checked={formData.gender === 'Female'}
          onChange={handleChange}
          required
        />
        <label htmlFor="female">Female</label><br />
        <br />

        {/* Chest Pain Type Radio Buttons */}
        <label>Chest Pain Type:</label><br />
        <input
          type="radio"
          id="typical-angina"
          name="chestPain"
          value="Typical angina"
          checked={formData.chestPain === 'Typical angina'}
          onChange={handleChange}
          required
        />
        <label htmlFor="typical-angina">Typical angina</label><br />
        <input
          type="radio"
          id="atypical-angina"
          name="chestPain"
          value="Atypical angina"
          checked={formData.chestPain === 'Atypical angina'}
          onChange={handleChange}
          required
        />
        <label htmlFor="atypical-angina">Atypical angina</label><br />
        <input
          type="radio"
          id="non-anginal-pain"
          name="chestPain"
          value="Non-anginal pain"
          checked={formData.chestPain === 'Non-anginal pain'}
          onChange={handleChange}
          required
        />
        <label htmlFor="non-anginal-pain">Non-anginal pain</label><br />
        <input
          type="radio"
          id="asymptomatic"
          name="chestPain"
          value="Asymptomatic"
          checked={formData.chestPain === 'Asymptomatic'}
          onChange={handleChange}
          required
        />
        <label htmlFor="asymptomatic">Asymptomatic</label><br />
        <br />

        {/* Submit Button */}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default MedicalForm;
