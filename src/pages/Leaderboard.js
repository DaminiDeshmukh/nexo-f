

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const Leaderboard = () => {
//   const [users, setUsers] = useState([]);
//   const [selectedUser, setSelectedUser] = useState(null);
//   const [userHistory, setUserHistory] = useState([]);

//   useEffect(() => {
//     axios.get(`${process.env.REACT_APP_API_BASE_URL}/api/user/v1/get-users`)
//       .then(response => setUsers(response.data.data.sort((a, b) => b.points - a.points)))
//       .catch(error => console.error(error));
//   }, []);

//   const fetchUserHistory = async (username) => {
//     try {
//       const response = await axios.post(
//         `${process.env.REACT_APP_API_BASE_URL}/api/user/v1/your-history`, 
//         { username }
//       );
//       setUserHistory(response.data.data);
//       setSelectedUser(username);
//     } catch (error) {
//       console.error("Error fetching user history:", error);
//     }
//   };

//   return (
//     <div className="p-8">
//       <h2 className="text-2xl font-semibold mb-4">Leaderboard</h2>
//       <div className="grid grid-cols-1 gap-4">
//         {users.map(user => (
//           <div
//             key={user._id}
//             onClick={() => fetchUserHistory(user.username)}
//             className="bg-blue-200 p-4 rounded shadow cursor-pointer hover:bg-blue-300 transition"
//           >
//             <h3 className="text-lg">{user.username}</h3>
//             <p>{user.points} points</p>
//           </div>
//         ))}
//       </div>

//       {selectedUser && (
//         <div className="fixed inset-0 bg-gray-700 bg-opacity-50 flex justify-center items-center">
//           <div className="bg-white p-6 rounded shadow-lg w-96">
//             <h3 className="text-xl font-semibold mb-2">{selectedUser}'s Point History</h3>
//             <ul className="max-h-48 overflow-y-auto">
//               {userHistory.map((entry, index) => (
//                 <li key={index} className="border-b py-2">
//                   {entry.date}: {entry.pointsAwarded} points
//                 </li>
//               ))}
//             </ul>
//             <button onClick={() => setSelectedUser(null)} className="bg-red-500 text-white px-4 py-2 mt-4 rounded">
//               Close
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Leaderboard;

// src/pages/LeaderboardPage.js



// import React, { useState, useEffect } from 'react';
// import { FaTrophy, FaUser } from 'react-icons/fa';
// import axios from 'axios';

// const LeaderboardPage = () => {
//   const [users, setUsers] = useState([]);
//   const [view, setView] = useState('daily'); // 'daily', 'weekly', 'monthly'

//   useEffect(() => {
//     // Fetch leaderboard data
//     axios.get(`${process.env.REACT_APP_API_BASE_URL}/api/user/v1/get-users`)
//       .then(response => setUsers(response.data.data.sort((a, b) => b.points - a.points)))
//       .catch(error => console.error('Error fetching leaderboard data:', error));
//   }, []);

//   return (
//     <div className="mt-8 px-8">
//       {/* Blue Box (Heading, Today's Amount, Total Amount, Leaderboard) */}
//       <div className="flex justify-between items-start bg-blue-500 text-white p-6 rounded-lg shadow-md">
//         {/* Left Side (Digit, Today, Total) */}
//         <div>
//           <h1 className="text-4xl font-bold">₹ 12345</h1>
//           <p className="text-lg">Today</p>
//           <p>Total Amount: ₹ 100,000</p>
//         </div>
//         {/* Right Side (Leaderboard Heading, Person Icon) */}
//         <div className="flex items-center space-x-2">
//           <h2 className="text-2xl font-semibold">Leaderboard</h2>
//           <FaUser size={32} />
//         </div>
//       </div>

//       {/* White Box (Buttons for Daily, Weekly, Monthly) */}
//       <div className="bg-white p-4 mt-4 rounded-lg shadow-md flex justify-between items-center">
//         <div className="space-x-2">
//           <button
//             onClick={() => setView('daily')}
//             className={`px-4 py-2 rounded ${view === 'daily' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'}`}
//           >
//             Daily
//           </button>
//           <button
//             onClick={() => setView('weekly')}
//             className={`px-4 py-2 rounded ${view === 'weekly' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'}`}
//           >
//             Weekly
//           </button>
//           <button
//             onClick={() => setView('monthly')}
//             className={`px-4 py-2 rounded ${view === 'monthly' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'}`}
//           >
//             Monthly
//           </button>
//         </div>
//       </div>

//       {/* First Three People in One Line (With Rs Symbol and Prizes) */}
//       <div className="flex justify-between items-center bg-gray-100 p-4 mt-6 rounded-lg shadow-md">
//         {users.slice(0, 3).map((user, index) => (
//           <div key={user._id} className="flex-1 text-center">
//             <h3 className="text-xl font-bold">
//               {index + 1}. {user.username}
//             </h3>
//             <p className="text-lg">
//               ₹ {user.points} <span className="text-gray-600">Prize</span>
//             </p>
//           </div>
//         ))}
//       </div>

//       {/* Leaderboard Rows (Rank, Icon, Name, Points, Prize) */}
//       <div className="mt-8 space-y-4">
//         {users.map((user, index) => (
//           <div
//             key={user._id}
//             className="flex items-center justify-between p-4 bg-white shadow-md rounded-lg"
//           >
//             <div className="flex items-center space-x-4">
//               {/* Person Icon */}
//               <FaUser className="text-gray-400" size={40} />
//               <div>
//                 {/* Username and Rank */}
//                 <h3 className="text-xl font-bold">{user.username}</h3>
//                 <p>Rank: {index + 1}</p>
//               </div>
//             </div>
//             <div>
//               {/* Prize and Points */}
//               <p className="text-lg font-semibold">Prize: ₹ {user.points}</p>
//               <p className="text-gray-500">Points: {user.points}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default LeaderboardPage;

// src/pages/LeaderboardPage.js



import React, { useState, useEffect } from 'react';
import {  FaUser } from 'react-icons/fa';
import axios from 'axios';

const LeaderboardPage = () => {
  const [users, setUsers] = useState([]);
  const [view, setView] = useState('daily'); // 'daily', 'weekly', 'monthly'

  useEffect(() => {
    // Fetch leaderboard data
    axios.get(`${process.env.REACT_APP_API_BASE_URL}/api/user/v1/get-users`)
      .then(response => setUsers(response.data.data.sort((a, b) => b.points - a.points)))
      .catch(error => console.error('Error fetching leaderboard data:', error));
  }, []);

  return (
    <div className="mt-8 px-8">
      {/* Blue Box (Heading, Today's Amount, Total Amount, Leaderboard) */}
      <div className="flex justify-between items-start bg-blue-500 text-white p-6 rounded-lg shadow-md">
        {/* Left Side (Digit, Today, Total) */}
        <div>
          <h1 className="text-4xl font-bold">₹ 12345</h1>
          <p className="text-lg">Today</p>
          <p>Total Amount: ₹ 100,000</p>
        </div>
        {/* Right Side (Leaderboard Heading, Person Icon) */}
        <div className="flex items-center space-x-2">
          <h2 className="text-2xl font-semibold">Leaderboard</h2>
          <FaUser size={32} />
        </div>
      </div>

      {/* White Box (Buttons for Daily, Weekly, Monthly) */}
      <div className="bg-white p-4 mt-4 rounded-lg shadow-md flex justify-between items-center">
        <div className="space-x-2">
          <button
            onClick={() => setView('daily')}
            className={`px-4 py-2 rounded ${view === 'daily' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'}`}
          >
            Daily
          </button>
          <button
            onClick={() => setView('weekly')}
            className={`px-4 py-2 rounded ${view === 'weekly' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'}`}
          >
            Weekly
          </button>
          <button
            onClick={() => setView('monthly')}
            className={`px-4 py-2 rounded ${view === 'monthly' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'}`}
          >
            Monthly
          </button>
        </div>
      </div>

      {/* First Three People in One Line (With Rs Symbol and Prizes) */}
      <div className="flex justify-between items-center bg-gray-100 p-4 mt-6 rounded-lg shadow-md">
        {users.slice(0, 3).map((user, index) => (
          <div key={user._id} className="flex-1 text-center">
            <h3 className="text-xl font-bold">
              {index + 1}. {user.username}
            </h3>
            <p className="text-lg">
              ₹ {user.points} <span className="text-gray-600">Prize</span>
            </p>
          </div>
        ))}
      </div>

      {/* Leaderboard Rows (Rank, Icon, Name, Points, Prize) */}
      <div className="mt-8 space-y-4">
        {users.map((user, index) => (
          <div
            key={user._id}
            className="flex items-center justify-between p-4 bg-white shadow-md rounded-lg"
          >
            <div className="flex items-center space-x-4">
              {/* Person Icon */}
              <FaUser className="text-gray-400" size={40} />
              <div>
                {/* Username and Rank */}
                <h3 className="text-xl font-bold">{user.username}</h3>
                <p>Rank: {index + 1}</p>
              </div>
            </div>
            <div>
              {/* Prize and Points */}
              <p className="text-lg font-semibold">Prize: ₹ {user.points}</p>
              <p className="text-gray-500">Points: {user.points}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LeaderboardPage;


// // pages/Leaderboard.js

// import React, { useState, useEffect } from 'react';
// import { FaUser } from 'react-icons/fa';
// import axios from 'axios';

// const LeaderboardPage = () => {
//   const [users, setUsers] = useState([]);
//   const [view, setView] = useState('daily');

//   useEffect(() => {
//     axios.get(`${process.env.REACT_APP_API_BASE_URL}/api/user/v1/get-users`)
//       .then(response => setUsers(response.data.data.sort((a, b) => b.points - a.points)))
//       .catch(error => console.error('Error fetching leaderboard data:', error));
//   }, []);

//   return (
//     <div className="mt-8 px-8">
//       <div className="flex justify-between items-center bg-blue-500 text-white p-6 rounded-lg shadow-md">
//         <div>
//           <h1 classname="bg-slate-400" >TAILWIND CSS</h1>
//           <h1 className="text-4xl font-bold">₹ 12345</h1>
//           <p className="text-lg">Today</p>
//           <p>Total Amount: ₹ 10000,000</p>
//         </div>
//         <div className="flex items-center space-x-2">
//           <h2 className="text-2xl font-semibold">Leaderboard</h2>
//           <FaUser size={32} />
//         </div>
//       </div>
//       <div className="bg-white p-4 mt-4 rounded-lg shadow-md flex justify-between items-center">
//         <button onClick={() => setView('daily')} className={`px-4 py-2 rounded ${view === 'daily' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}>
//           Daily
//         </button>
//         <button onClick={() => setView('weekly')} className={`px-4 py-2 rounded ${view === 'weekly' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}>
//           Weekly
//         </button>
//         <button onClick={() => setView('monthly')} className={`px-4 py-2 rounded ${view === 'monthly' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}>
//           Monthly
//         </button>
//       </div>
//       <div className="mt-8 space-y-4">
//         {users.map((user, index) => (
//           <div key={user._id} className="flex items-center justify-between p-4 bg-white shadow-md rounded-lg">
//             <div className="flex items-center space-x-4">
//               <FaUser className="text-gray-400" size={40} />
//               <div>
//                 <h3 className="text-xl font-bold">{user.username}</h3>
//                 <p>Rank: {index + 1}</p>
//               </div>
//             </div>
//             <div>
//               <p className="text-lg font-semibold">Prize: ₹ {user.points}</p>
//               <p className="text-gray-500">Points: {user.points}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default LeaderboardPage;


// import React, { useState, useEffect } from 'react';
// import { FaUser } from 'react-icons/fa';
// import axios from 'axios';

// const LeaderboardPage = () => {
//   const [users, setUsers] = useState([]);
//   const [view, setView] = useState('daily');
//   const [selectedUser, setSelectedUser] = useState(null);
//   const [history, setHistory] = useState([]);

//   useEffect(() => {
//     axios.get(`${process.env.REACT_APP_API_BASE_URL}/api/user/v1/get-users`)
//       .then(response => setUsers(response.data.data.sort((a, b) => b.points - a.points)))
//       .catch(error => console.error('Error fetching leaderboard data:', error));
//   }, []);

//   const handleUserClick = async (user) => {
//     try {
//       const response = await axios.post(`${process.env.REACT_APP_API_BASE_URL}/api/user/v1/your-history`, { username: user.username });
//       setHistory(response.data.data);
//       setSelectedUser(user);
//     } catch (error) {
//       console.error('Error fetching user history:', error);
//     }
//   };

//   return (
//     <div className="mt-8 px-8">
//       {/* Header */}
//       <div className="flex justify-between items-center bg-blue-500 text-white p-6 rounded-lg shadow-md">
//         <div>
//           <h1 className="text-4xl font-bold">₹3982 Today</h1>
//           <p className="text-lg">Total: ₹2875.00</p>
//         </div>
//         <div className="flex items-center space-x-2">
//           <h2 className="text-2xl font-semibold">Leaderboard</h2>
//           <FaUser size={32} />
//         </div>
//       </div>

//       {/* Tabs */}
//       <div className="bg-white p-4 mt-4 rounded-lg shadow-md flex justify-between items-center">
//         {['daily', 'weekly', 'monthly'].map((period) => (
//           <button
//             key={period}
//             onClick={() => setView(period)}
//             className={`px-4 py-2 rounded ${view === period ? 'bg-orange-500 text-white' : 'bg-gray-200'}`}
//           >
//             {period.charAt(0).toUpperCase() + period.slice(1)}
//           </button>
//         ))}
//       </div>

//       {/* Leaderboard List */}
//       <div className="mt-8 space-y-4">
//         {users.map((user, index) => (
//           <div key={user._id} onClick={() => handleUserClick(user)} className="flex items-center justify-between p-4 bg-white shadow-md rounded-lg cursor-pointer">
//             <div className="flex items-center space-x-4">
//               <FaUser className="text-gray-400" size={40} />
//               <div>
//                 <h3 className="text-xl font-bold">{user.username}</h3>
//                 <p>Rank: {index + 1}</p>
//               </div>
//             </div>
//             <div>
//               <p className="text-lg font-semibold text-orange-500">Prize: ₹{user.points}</p>
//               <p className="text-gray-500">Points: {user.points}</p>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* User History Modal */}
//       {selectedUser && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
//           <div className="bg-white p-8 rounded-lg shadow-lg w-1/3">
//             <h2 className="text-xl font-semibold mb-4">{selectedUser.username}'s History</h2>
//             <ul className="space-y-2">
//               {history.map((entry, i) => (
//                 <li key={i} className="p-2 border-b border-gray-300">
//                   <p>Date: {new Date(entry.date).toLocaleDateString()}</p>
//                   <p>Points Awarded: {entry.points}</p>
//                 </li>
//               ))}
//             </ul>
//             <button onClick={() => setSelectedUser(null)} className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">Close</button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default LeaderboardPage;
