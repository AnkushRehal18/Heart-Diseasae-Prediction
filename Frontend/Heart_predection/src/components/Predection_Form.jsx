import React, { useState } from 'react';
import TextInput from './input/textinput';
import BloodSugarInput from './input/BloodSugarInput'
import Radiobuttoninput from './input/RadioButtonInput';



function MedicalForm() {
  const [formData, setFormData] = useState({
    age: '',
    gender: '',
    chestPain: '',
    restingECG: '',
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
        <div>
          <div className="flex flex-col gap-2">
            <div className="flex items-center border border-gray-300 rounded-lg p-2 h-[50px] w-[700px]">
              <input
                className="mr-2"
                type="radio"
                id="male"
                name="gender"
                value="Male"
                checked={formData.gender === 'Male'}
                onChange={handleChange}
                required
              />
              <label htmlFor="male" className="text-sm text-gray-700">Male</label>
            </div>
            <div className="flex items-center border border-gray-300 rounded-lg p-2 h-[50px] w-[700px]">
              <input
                className="mr-2"
                type="radio"
                id="female"
                name="gender"
                value="Female"
                checked={formData.gender === 'Female'}
                onChange={handleChange}
                required
              />
              <label htmlFor="female" className="text-sm text-gray-700">Female</label>
            </div>
          </div>
        </div>

        {/* Chest Pain Type Radio Buttons */}
        <div>
          <label className="block text-lg mb-2 mt-6 font-semibold">Chest Pain Type</label>
          <div className="flex flex-col gap-2">
            <label
              htmlFor="typical-angina"
              className="flex items-center border border-gray-300 rounded-lg p-2 h-[50px] w-[700px] cursor-pointer"
            >
              <input
                className="mr-2"
                type="radio"
                id="typical-angina"
                name="chestPain"
                value="Typical angina"
                checked={formData.chestPain === 'Typical angina'}
                onChange={handleChange}
                required
              />
              <span className="text-sm text-gray-700">Typical angina</span>
            </label>

            <label
              htmlFor="atypical-angina"
              className="flex items-center border border-gray-300 rounded-lg p-2 h-[50px] w-[700px] cursor-pointer"
            >
              <input
                className="mr-2"
                type="radio"
                id="atypical-angina"
                name="chestPain"
                value="Atypical angina"
                checked={formData.chestPain === 'Atypical angina'}
                onChange={handleChange}
                required
              />
              <span className="text-sm text-gray-700">Atypical angina</span>
            </label>

            <label
              htmlFor="non-anginal-pain"
              className="flex items-center border border-gray-300 rounded-lg p-2 h-[50px] w-[700px] cursor-pointer"
            >
              <input
                className="mr-2"
                type="radio"
                id="non-anginal-pain"
                name="chestPain"
                value="Non-anginal pain"
                checked={formData.chestPain === 'Non-anginal pain'}
                onChange={handleChange}
                required
              />
              <span className="text-sm text-gray-700">Non-anginal pain</span>
            </label>

            <label
              htmlFor="asymptomatic"
              className="flex items-center border border-gray-300 rounded-lg p-2 h-[50px] w-[700px] cursor-pointer"
            >
              <input
                className="mr-2"
                type="radio"
                id="asymptomatic"
                name="chestPain"
                value="Asymptomatic"
                checked={formData.chestPain === 'Asymptomatic'}
                onChange={handleChange}
                required
              />
              <span className="text-sm text-gray-700">Asymptomatic</span>
            </label>
          </div>
        </div>

        {/* textbox for resting blood pressure */}

        <TextInput
          placeholder="Enter resting blood pressure"
          className="border h-[50px] w-[500px] rounded-[12px] p-4 placeholder-gray-500 mt-6"
          id="bloodPressure"
          name="bloodPressure"
          value={formData.bloodPressure}
          onChange={handleChange}
        />
        <br></br>
        {/* textbox for cholestrol */}

        <TextInput
          placeholder="Enter Cholesterol"
          className="border h-[50px] w-[500px] rounded-[12px] p-4 placeholder-gray-500 mt-6"
          id="Cholesterol"
          name="Cholesterol"
          value={formData.Cholesterol}
          onChange={handleChange}
        />

        <br></br>
        {/* Fasting Blood Sugar */}
        <p className="text-lg font-semibold mt-6">Fasting Blood Sugar &gt; 120 mg/dl</p>
        <div className="flex gap-4 mt-2">
          <BloodSugarInput
            id="yes"
            name="bloodSugar"
            value="Yes"
            selectedValue={formData.bloodSugar}
            onChange={handleChange}
            label="Yes"
          />
          <BloodSugarInput
            id="no"
            name="bloodSugar"
            value="No"
            selectedValue={formData.bloodSugar}
            onChange={handleChange}
            label="No"
          />
        </div>

        {/* Resting Electrocardiographic Results */}

        <label className="block text-lg mb-2 mt-6 font-semibold">Resting Electrocardiographic Results</label>
        <div className="flex flex-col gap-2">
        <Radiobuttoninput
            name="Resting Electrocardiographic"
            value="1"
            selectedValue={formData.Resting_Electrocardiographic}
            onChange={handleChange}
            label="Normal"
          />
        <Radiobuttoninput
            name="Resting Electrocardiographic"
            value="2"
            selectedValue={formData.Resting_Electrocardiographic}
            onChange={handleChange}
            label="ST-T wave abnormality"
          />
        <Radiobuttoninput
            name="Resting Electrocardiographic"
            value="3"
            selectedValue={formData.Resting_Electrocardiographic}
            onChange={handleChange}
            label="ST-T wave abnormality"
          />
        </div>
        {/* Submit Button */}

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default MedicalForm;
