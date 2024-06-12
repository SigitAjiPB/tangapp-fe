import React, { useState } from 'react';

function MemberForm() {
  const [member, setMember] = useState({
    name: '',
    email: '',
    phone: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setMember((prevMember) => ({ ...prevMember, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Call API or perform other actions to register the member
    console.log('Member registered:', member);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4 pt-6 mb-4">
      <h2 className="text-2xl font-bold mb-4">Member Registration</h2>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={member.name}
          onChange={handleInputChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="John Doe"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={member.email}
          onChange={handleInputChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="johndoe@example.com"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone">
          Phone
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={member.phone}
          onChange={handleInputChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="+62 812 3456 7890"
        />
      </div>
      <button
        type="submit"
        className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded"
      >
        Register
      </button>
    </form>
  );
}

export default MemberForm;