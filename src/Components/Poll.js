
// import React, { useState } from 'react';

// const CreatePollPage = () => {
//   const [question, setQuestion] = useState('');
//   const [options, setOptions] = useState(['', '', '']);
//   const [isPollStarted, setIsPollStarted] = useState(false);

//   const handleOptionChange = (index, value) => {
//     setOptions((prevOptions) => {
//       const newOptions = [...prevOptions];
//       newOptions[index] = value;
//       return newOptions;
//     });
//   };

//   const startPolling = () => {
//     if (question.trim() === '' || options.some((opt) => opt.trim() === '')) {
//       alert('Please fill out the question and all options.');
//       return;
//     }

//     setIsPollStarted(true);

//     // Here you can implement logic to send the poll data to the server or perform any other actions.
//     // For simplicity, we'll just log the data to the console.
//     console.log('Poll created:', { question, options });
//   };

//   const containerStyle = {
//     textAlign: 'center',
//     fontFamily: 'Arial, sans-serif',
//     maxWidth: '600px', // Set maximum width for the container
//     margin: 'auto', // Center the container horizontally
//     marginTop: '20vh', // Adjust vertical margin to center vertically
//     padding: '20px',
//     border: '1px solid #ccc',
//     borderRadius: '5px',
//     backgroundColor: '#f9f9f9',
//     boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
//     //backgroundImage: `url('https://images.pexels.com/photos/4669113/pexels-photo-4669113.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`,
//     backgroundSize: 'cover',
//     backgroundRepeat: 'no-repeat',
//   };

//   const inputStyle = {
//     padding: '8px',
//     margin: '5px',
//     borderRadius: '5px',
//     border: '1px solid #ccc',
//   };

//   const buttonStyle = {
//     padding: '10px 20px',
//     backgroundColor: '#4CAF50',
//     color: 'white',
//     border: 'none',
//     borderRadius: '5px',
//     cursor: 'pointer',
//     marginTop: '10px',
//   };

//   return (
//     <div style={{ minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundImage: `url('https://images.pexels.com/photos/4669113/pexels-photo-4669113.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
//       <div style={containerStyle}>
//         <h1>Create a Poll</h1>
//         <label>
//           Question:
//           <input
//             type="text"
//             value={question}
//             onChange={(e) => setQuestion(e.target.value)}
//             style={inputStyle}
//             disabled={isPollStarted}
//           />
//         </label>
//         <ul style={{ listStyle: 'none', padding: 0 }}>
//           {options.map((opt, index) => (
//             <li key={index}>
//               <label>
//                 Option {index + 1}:
//                 <input
//                   type="text"
//                   value={opt}
//                   onChange={(e) => handleOptionChange(index, e.target.value)}
//                   style={inputStyle}
//                   disabled={isPollStarted}
//                 />
//               </label>
//             </li>
//           ))}
//         </ul>
//         <button onClick={startPolling} style={buttonStyle} disabled={isPollStarted}>
//           Start Polling
//         </button>
//       </div>
//     </div>
//   );
// };

// export default CreatePollPage;
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const CreatePollPage = () => {
  const [question, setQuestion] = useState('');
  const [options, setOptions] = useState(['', '', '']);
  const [isPollStarted, setIsPollStarted] = useState(false);
  const navigate = useNavigate(); // Get the navigate function

  const handleOptionChange = (index, value) => {
    setOptions((prevOptions) => {
      const newOptions = [...prevOptions];
      newOptions[index] = value;
      return newOptions;
    });
  };

  const startPolling = () => {
    if (question.trim() === '' || options.some((opt) => opt.trim() === '')) {
      alert('Please fill out the question and all options.');
      return;
    }

    setIsPollStarted(true);

    // Here you can implement logic to send the poll data to the server or perform any other actions.
    // For simplicity, we'll just log the data to the console.
    console.log('Poll created:', { question, options });

    // Route to another page
    navigate('/main'); // Replace '/main' with the desired route
  };

  const containerStyle = {
    textAlign: 'center',
    fontFamily: 'Arial, sans-serif',
    maxWidth: '600px', // Set maximum width for the container
    margin: 'auto', // Center the container horizontally
    marginTop: '20vh', // Adjust vertical margin to center vertically
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    backgroundColor: '#f9f9f9',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  };

  const inputStyle = {
    padding: '8px',
    margin: '5px',
    borderRadius: '5px',
    border: '1px solid #ccc',
  };

  const buttonStyle = {
    padding: '10px 20px',
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    marginTop: '10px',
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundImage: `url('https://images.pexels.com/photos/4669113/pexels-photo-4669113.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
      <div style={containerStyle}>
        <h1>Create a Poll</h1>
        <label>
          Question:
          <input
            type="text"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            style={inputStyle}
            disabled={isPollStarted}
          />
        </label>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {options.map((opt, index) => (
            <li key={index}>
              <label>
                Option {index + 1}:
                <input
                  type="text"
                  value={opt}
                  onChange={(e) => handleOptionChange(index, e.target.value)}
                  style={inputStyle}
                  disabled={isPollStarted}
                />
              </label>
            </li>
          ))}
        </ul>
        <button onClick={startPolling} style={buttonStyle} disabled={isPollStarted}>
          Start Polling
        </button>
      </div>
    </div>
  );
};

export default CreatePollPage;
