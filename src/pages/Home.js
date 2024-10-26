

// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const Home = () => {
//   const [friends, setFriends] = useState([]);

//   useEffect(() => {
//     axios.get(`${process.env.REACT_APP_API_BASE_URL}/api/user/v1/get-users`)
//       .then(response => setFriends(response.data.data))
//       .catch(error => console.error('Error fetching friends:', error));
//   }, []);

//   const handleClaimPoints = async (username) => {
//     try {
//       const token = localStorage.getItem('token');
//       const response = await axios.patch(
//         `${process.env.REACT_APP_API_BASE_URL}/api/user/v1/claim-points`,
//         { username },
//         { headers: { Authorization: `Bearer ${token}` } }
//       );
//       const updatedUser = response.data.data;

//       // Dynamically update points for leaderboard ranking
//       setFriends(prev => 
//         [...prev.map(friend => 
//           friend.username === username ? { ...friend, points: updatedUser.Points } : friend
//         )].sort((a, b) => b.points - a.points)
//       );
    
//     } catch (error) {
//       console.error('Error claiming points:', error);
//       alert('Failed to claim points. Please try again.');
//     }
//   };

//   return (
//     <div className="p-8 grid grid-cols-2 gap-4">
//       {friends.map(friend => (
//         <div
//           key={friend._id}
//           onClick={() => handleClaimPoints(friend.username)}
//           className="bg-green-200 p-4 rounded shadow cursor-pointer hover:bg-green-300 transition"
//         >
//           <h2 className="text-lg font-semibold">{friend.username}</h2>
//           <p>{friend.points} points</p>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Home;


import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Home = () => {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_BASE_URL}/api/user/v1/get-users`)
      .then(response => setFriends(response.data.data))
      .catch(error => console.error('Error fetching friends:', error));
  }, []);

  const handleClaimPoints = async (username) => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.patch(
        `${process.env.REACT_APP_API_BASE_URL}/api/user/v1/claim-points`,
        { username },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      const updatedUser = response.data.data;

      setFriends(prev =>
        [...prev.map(friend =>
          friend.username === username ? { ...friend, points: updatedUser.points } : friend
        )].sort((a, b) => b.points - a.points)
      );
      alert(`Points claimed successfully for ${username}`);
    } catch (error) {
      console.error('Error claiming points:', error);
      alert('Failed to claim points. Please try again.');
    }
  };

  return (
    <div classname="p-5 bg-white m-10 ">
   
    <div className="p-10 bg-blue-500 grid grid-cols-2 gap-4">
      {friends.map(friend => (
        <div
        key={friend._id}
        onClick={() => handleClaimPoints(friend.username)}
        className="bg-green-200 p-4 rounded shadow cursor-pointer hover:bg-green-300 transition"
        >
          <h2 className="text-lg font-semibold">{friend.username}</h2>
          <p>{friend.points}points</p>
        </div>
      ))}
    </div>
    </div>
  );
};

export default Home;
