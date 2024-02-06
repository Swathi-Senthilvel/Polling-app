// import React, { useState } from 'react';
// //import "./main.css"

// const PollApp = () => {
//   const [options, setOptions] = useState([
//     { id: 1, text: 'Option A', votes: 0 },
//     { id: 2, text: 'Option B', votes: 0 },
//     { id: 3, text: 'Option C', votes: 0 },
//   ]);

//   const handleVote = (optionId) => {
//     setOptions((prevOptions) =>
//       prevOptions.map((option) =>
//         option.id === optionId ? { ...option, votes: option.votes + 1 } : option
//       )
//     );
//   };

//   return (
//     <div className="poll-container">
//       <h1>Enter your votes</h1>
//       <ul className="options-list">
//         {options.map((option) => (
//           <li key={option.id}>
//             <button onClick={() => handleVote(option.id)}>{option.text}</button>
//             <span>{option.votes} votes</span>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default PollApp;

// import React, { useState } from 'react';

// const PollApp = () => {
//   const [options, setOptions] = useState([
//     { id: 1, text: 'Option A', votes: 0 },
//     { id: 2, text: 'Option B', votes: 0 },
//     { id: 3, text: 'Option C', votes: 0 },
//   ]);

//   const handleVote = (optionId) => {
//     setOptions((prevOptions) =>
//       prevOptions.map((option) =>
//         option.id === optionId ? { ...option, votes: option.votes + 1 } : option
//       )
//     );
//   };

//   const containerStyle = {
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//     minHeight: '100vh',
//     textAlign: 'center',
//     fontFamily: 'Arial, sans-serif',
//   };

//   const pollContainerStyle = {
//     maxWidth: '600px',
//     padding: '20px',
//     backgroundColor: '#f0f0f0',
//     borderRadius: '5px',
//     boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
//   };

//   const optionListStyle = {
//     listStyle: 'none',
//     padding: 0,
//     textAlign: 'left',
//   };

//   const optionItemStyle = {
//     marginBottom: '10px',
//   };

//   const radioStyle = {
//     marginRight: '10px',
//   };

//   const voteCountStyle = {
//     marginLeft: '10px',
//     fontWeight: 'bold',
//   };

//   return (
//     <div style={{...containerStyle, backgroundImage: `url('https://images.unsplash.com/photo-1616442830340-b19fd9031245?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}}>
//       <div style={pollContainerStyle}>
//         <h1>Enter your votes</h1>
//         <ul style={optionListStyle}>
//           {options.map((option) => (
//             <li key={option.id} style={optionItemStyle}>
//               <label>
//                 <input
//                   type="radio"
//                   name="pollOption"
//                   value={option.id}
//                   onChange={() => handleVote(option.id)}
//                   style={radioStyle}
//                 />
//                 {option.text}
//               </label>
//               <span style={voteCountStyle}>{option.votes} votes</span>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default PollApp;
import React, { useState } from 'react';

const PollApp = () => {
  const [options, setOptions] = useState([
    { id: 1, text: 'Option A', votes: 0 },
    { id: 2, text: 'Option B', votes: 0 },
    { id: 3, text: 'Option C', votes: 0 },
  ]);

  const handleVote = (optionId) => {
    setOptions((prevOptions) =>
      prevOptions.map((option) =>
        option.id === optionId ? { ...option, votes: option.votes + 1 } : option
      )
    );
    window.alert('Thanks for voting!');
  };

  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    textAlign: 'center',
    fontFamily: 'Arial, sans-serif',
  };

  const pollContainerStyle = {
    maxWidth: '600px',
    padding: '20px',
    backgroundColor: '#f0f0f0',
    borderRadius: '5px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  };

  const optionListStyle = {
    listStyle: 'none',
    padding: 0,
    textAlign: 'left',
  };

  const optionItemStyle = {
    marginBottom: '10px',
  };

  const radioStyle = {
    marginRight: '10px',
  };

  const voteCountStyle = {
    marginLeft: '10px',
    fontWeight: 'bold',
  };

  return (
    <div style={{...containerStyle, backgroundImage: `url('https://images.unsplash.com/photo-1616442830340-b19fd9031245?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}}>
      <div style={pollContainerStyle}>
        <h1>Enter your votes</h1>
        <ul style={optionListStyle}>
          {options.map((option) => (
            <li key={option.id} style={optionItemStyle}>
              <label>
                <input
                  type="radio"
                  name="pollOption"
                  value={option.id}
                  onChange={() => handleVote(option.id)}
                  style={radioStyle}
                />
                {option.text}
              </label>
              <span style={voteCountStyle}>{option.votes} votes</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PollApp;
