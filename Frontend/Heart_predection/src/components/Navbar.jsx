import React from 'react';

const Navbar = () => {
  const homeList = ['Home', 'Feature', 'Resource',];

  return (
    <>
      <div className="flex justify-between p-4 px-10">
        <div className='w-[50%] text-lg font-semibold' >
          HealthAI
        </div>
        <div className='w-[50%]'>
          <ul className='flex justify-around'>
            {homeList.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
            <button className='bg-pink-500'>SignIn</button>
          </ul>
        </div>
      </div>
      <hr></hr>
    </>
  );
};

export default Navbar;
