// import { useState, useEffect } from 'react';

// const MotivationalQuotes = () => {
//   const [quote, setQuote] = useState('');

//   const quotes = [
//     'The secret of getting ahead is getting started.',
//     'You dont have to be great to start, but you have to start to be great.',
//     'Small steps every day lead to big changes over time.',
//     'Success is the sum of small efforts, repeated day in and day out.',
//     'Motivation is what gets you started. Habit is what keeps you going.'
//   ];

//   useEffect(() => {
//     const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
//     setQuote(randomQuote);
//   }, []);

//   return (
//     <div className="motivational-quotes">
//       <h3>Daily Motivation</h3>
//       <p>{quote}</p>
//     </div>
//   );
// };

// export default MotivationalQuotes;