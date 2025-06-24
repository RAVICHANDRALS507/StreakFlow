// import { useState } from 'react';
// import HabitCalendar from './HabitCalendar';
// import MotivationalQuotes from './MotivationalQuotes';

// const HabitTracker = () => {
//   const [habits, setHabits] = useState([]);
//   const [streaks, setStreaks] = useState({});
//   const [habitInput, setHabitInput] = useState('');

//   const addHabit = (habitName) => {
//     const newHabit = {
//       id: Date.now(),
//       name: habitName,
//       date: new Date().toISOString().slice(0, 10), // YYYY-MM-DD
//     };
//     setHabits([...habits, newHabit]);
//     // Update streaks
//     setStreaks({
//       ...streaks,
//       [newHabit.id]: (streaks[newHabit.id] || 0) + 1,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (habitInput.trim()) {
//       addHabit(habitInput.trim());
//       setHabitInput('');
//     }
//   };

//   return (
//     <div className="habit-tracker">
//       <h1>Habit Tracker</h1>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           value={habitInput}
//           onChange={(e) => setHabitInput(e.target.value)}
//           placeholder="Enter habit name"
//         />
//         <button type="submit">Add Habit</button>
//       </form>
//       <div className="tracker-container">
//         <HabitCalendar habits={habits} streaks={streaks} />
//         <MotivationalQuotes />
//       </div>
//     </div>
//   );
// };

// export default HabitTracker;