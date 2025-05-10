// import { useMemo } from 'react';
// import CalendarHeatmap from 'react-calendar-heatmap';
// import 'react-calendar-heatmap/dist/styles.css';

// const HabitCalendar = ({ habits, streaks }) => {
//   const heatmapData = useMemo(() => {
//     return habits.map(habit => ({
//       date: habit.date,
//       count: streaks[habit.id] || 0
//     }));
//   }, [habits, streaks]);

//   return (
//     <div className="habit-calendar">
//       <CalendarHeatmap
//         startDate={new Date(new Date().setMonth(new Date().getMonth() - 3))}
//         endDate={new Date()}
//         values={heatmapData}
//         classForValue={(value) => {
//           if (!value) return 'color-empty';
//           return `color-scale-${Math.min(value.count, 4)}`;
//         }}
//       />
//     </div>
//   );
// };

// export default HabitCalendar;