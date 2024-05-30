// // import React, { useState } from 'react';
// // import { Link } from 'react-router-dom';
// // import './static/SideBar.css'; // Import CSS file for styling

// // function SideBar({ handleTextSelection }) {
// //   // Define state variables to manage the visibility of submenus
// //   const [isStutiOpen, setStutiOpen] = useState(false);
// //   const [isStotraOpen, setStotraOpen] = useState(false);
// //   const [isPoojanOpen, setPoojanOpen] = useState(false);
// //   const [isAcharyaOpen, setAcharyaOpen] = useState(false);

// //   return (
// //     <div className="sidebar">
// //       <ul className='menu'>
// //         <li onClick={() => setStutiOpen(!isStutiOpen)}>
// //           Stuti {isStutiOpen ? <span>&#9660;</span> : <span>&#9654;</span>}
// //           {/* Render submenu if isOpen is true */}
// //           {isStutiOpen && (
// //             <ul className="submenu">
// //               <li onClick={() => handleTextSelection("Alochna Paath")}><Link to="/">Alochna Paath</Link></li>
// //               <li onClick={() => handleTextSelection("Aradhna Paath")}><Link to="/">Aradhna Paath</Link></li>
// //               <li onClick={() => handleTextSelection("Barah Bhavna")}><Link to="/">Barah Bhavna</Link></li>
// //               <li onClick={() => handleTextSelection("Darshan Paath")}><Link to="/">Darshan Paath</Link></li>
// //               <li onClick={() => handleTextSelection("Gomtesh Stuti")}><Link to="/">Gomtesh Stuti</Link></li>
// //               <li onClick={() => handleTextSelection("Jinvani Stuti")}><Link to="/">Jinvani Stuti</Link></li>
// //               <li onClick={() => handleTextSelection("Meri Bhavna")}><Link to="/">Meri Bhavna</Link></li>              
// //               <li onClick={() => handleTextSelection("PanchMahaguru Bhakti")}><Link to="/">PanchMahaguru Bhakti</Link></li>
// //               <li onClick={() => handleTextSelection("Samadhi Bhavna")}><Link to="/">Samadhi Bhavna</Link></li>
// //               <li onClick={() => handleTextSelection("Siddh Bhakti")}><Link to="/">Siddh Bhakti</Link></li>
// //             </ul>
// //           )}
// //         </li>
// //         <li onClick={() => setStotraOpen(!isStotraOpen)}>
// //           Stotra {isStotraOpen ? <span>&#9660;</span> : <span>&#9654;</span>}
// //           {isStotraOpen && (
// //             <ul className="submenu">
// //               <li onClick={() => handleTextSelection("Bhaktamar Stotra")}><Link to="/">Bhaktamar Stotra</Link></li>
// //               <li onClick={() => handleTextSelection("Tatvarth Sootra")}><Link to="/">Tatvarth Sootra</Link></li>
// //               <li onClick={() => handleTextSelection("Adinath Stotra")}><Link to="/">Adinath Stotra</Link></li>
// //               <li onClick={() => handleTextSelection("Parshvanath Stotra")}><Link to="/">Parshvanath Stotra</Link></li>
// //               <li onClick={() => handleTextSelection("Mahavirashtak Stotra")}><Link to="/">Mahavirashtak Stotra</Link></li>
// //               <li onClick={() => handleTextSelection("Suprabhat Stotra")}><Link to="/">Suprabhat Stotra</Link></li>
// //               <li onClick={() => handleTextSelection("Kalyan Mandir Stotra")}><Link to="/">Kalyan Mandir Stotra</Link></li>
// //               <li onClick={() => handleTextSelection("Saraswati Stotra")}><Link to="/">Saraswati Stotra</Link></li>
// //             </ul>
// //           )}
// //         </li>
// //         <li onClick={() => setPoojanOpen(!isPoojanOpen)}>
// //           Poojan {isPoojanOpen ? <span>&#9660;</span> : <span>&#9654;</span>}
// //           {isPoojanOpen && (
// //             <ul className="submenu">
// //               <li onClick={() => handleTextSelection("Pooja Peethika")}><Link to="/">Pooja Peethika</Link></li>
// //               <li onClick={() => handleTextSelection("Vinay Paath")}><Link to="/">Vinay Paath</Link></li>
// //               <li onClick={() => handleTextSelection("Samucchay Chaubisi Pooja")}><Link to="/">Samucchay Chaubisi Pooja</Link></li>
// //               <li onClick={() => handleTextSelection("DevShastraGuru Pooja")}><Link to="/">DevShastraGuru Pooja</Link></li>
// //               <li onClick={() => handleTextSelection("DasLakshan Pooja")}><Link to="/">DasLakshan Pooja</Link></li>
// //               <li onClick={() => handleTextSelection("Solahkaran Poojan")}><Link to="/">Solahkaran Poojan</Link></li>
// //               <li onClick={() => handleTextSelection("AcharyaShree Poojan")}><Link to="/">AcharyaShree Poojan</Link></li>              
// //             </ul>
// //           )}
// //         </li>
// //         <li onClick={() => setAcharyaOpen(!isAcharyaOpen)}>
// //           Acharya Shree {isAcharyaOpen ? <span>&#9660;</span> : <span>&#9654;</span>}
// //           {isAcharyaOpen && (
// //             <ul className="submenu">
// //               <li onClick={() => handleTextSelection("AcharyaShree Jivni")}><Link to="/">AcharyaShree Jivni</Link></li>
// //               <li onClick={() => handleTextSelection("AcharyaShree Vandana")}><Link to="/">AcharyaShree Vandana</Link></li>             
// //               <li onClick={() => handleTextSelection("AcharyaShree Arti")}><Link to="/">AcharyaShree Arti</Link></li>             
// //             </ul>
// //           )}
// //         </li>
// //       </ul>
// //     </div>
// //   );
// // }

// // export default SideBar;


// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import './static/SideBar.css'; // Import CSS file for styling
// import AWS from 'aws-sdk';

// function SideBar({ handleTextSelection }) {
//   const [stutiData, setStutiData] = useState([]);
//   const [stotraData, setStotraData] = useState([]);
//   const [poojanData, setPoojanData] = useState([]);
//   const [acharyaData, setAcharyaData] = useState([]);

//   useEffect(() => {
//     // Initialize DynamoDB client
//     const dynamodb = new AWS.DynamoDB({ region: 'YOUR_AWS_REGION' });

//     // Fetch Stuti data
//     const stutiParams = {
//       TableName: 'StutiTable',
//     };
//     dynamodb.scan(stutiParams, (err, data) => {
//       if (err) {
//         console.error('Error fetching Stuti data:', err);
//       } else {
//         setStutiData(data.Items);
//       }
//     });

//     // Fetch Stotra data
//     const stotraParams = {
//       TableName: 'StotraTable',
//     };
//     dynamodb.scan(stotraParams, (err, data) => {
//       if (err) {
//         console.error('Error fetching Stotra data:', err);
//       } else {
//         setStotraData(data.Items);
//       }
//     });

//     // Fetch poojan data
//     const poojanParams = {
//       TableName: 'Poojan Table',
//     };
//     dynamodb.scan(poojanParams, (err, data) => {
//       if (err) {
//         console.error('Error fetching Poojan data:', err);
//       } else {
//         setPoojanData(data.Items);
//       }
//     });


//     // Fetch acharya data
//     const acharyaParams = {
//       TableName: 'Acharya Table',
//     };
//     dynamodb.scan(acharyaParams, (err, data) => {
//       if (err) {
//         console.error('Error fetching Acharya data:', err);
//       } else {
//         setAcharyaData(data.Items);
//       }
//     });

//   }, []); // Empty dependency array ensures the effect runs only once

//   return (
//     <div className="sidebar">
//       <ul className='menu'>
//         <li>
//           Stuti
//           <ul className="submenu">
//             {stutiData.map(item => (
//               <li key={item.id}>
//                 <Link to="/" onClick={() => handleTextSelection(item.name.S)}>{item.name.S}</Link>
//               </li>
//             ))}
//           </ul>
//         </li>
//         {/* Repeat similar structure for other categories */}
//       </ul>
//     </div>
//   );
// }

// export default SideBar;


import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './static/SideBar.css'; // Import CSS file for styling
import AWS from 'aws-sdk';

function SideBar({ handleTextSelection }) {
  const [stutiData, setStutiData] = useState([]);
  const [stotraData, setStotraData] = useState([]);
  const [poojanData, setPoojanData] = useState([]);
  const [acharyaData, setAcharyaData] = useState([]);

  // Define state variables for submenu visibility
  const [isStutiOpen, setStutiOpen] = useState(false);
  const [isStotraOpen, setStotraOpen] = useState(false);
  const [isPoojanOpen, setPoojanOpen] = useState(false);
  const [isAcharyaOpen, setAcharyaOpen] = useState(false);


  useEffect(() => {
    // Initialize DynamoDB client
    const dynamodb = new AWS.DynamoDB({ region: 'ap-south-1' });

    // Fetch Stuti data
    const stutiParams = {
      TableName: 'StutiTable',
    };
    dynamodb.scan(stutiParams, (err, data) => {
      if (err) {
        console.error('Error fetching Stuti data:', err);
      } else {
        setStutiData(data.Items);
      }
    });

    // Fetch Stotra data
    const stotraParams = {
      TableName: 'StotraTable',
    };
    dynamodb.scan(stotraParams, (err, data) => {
      if (err) {
        console.error('Error fetching Stotra data:', err);
      } else {
        setStotraData(data.Items);
      }
    });

    // Fetch Poojan data
    const poojanParams = {
      TableName: 'PoojanTable',
    };
    dynamodb.scan(poojanParams, (err, data) => {
      if (err) {
        console.error('Error fetching Poojan data:', err);
      } else {
        setPoojanData(data.Items);
      }
    });

    // Fetch Acharya Shree data
    const acharyaParams = {
      TableName: 'AcharyaShreeTable',
    };
    dynamodb.scan(acharyaParams, (err, data) => {
      if (err) {
        console.error('Error fetching Acharya Shree data:', err);
      } else {
        setAcharyaData(data.Items);
      }
    });

  }, []); // Empty dependency array ensures the effect runs only once

  return (
    <div className="sidebar">
      <ul className='menu'>
        <li onClick={() => setStutiOpen(!isStutiOpen)}>
          Stuti {isStutiOpen ? <span>&#9660;</span> : <span>&#9654;</span>}
          {isStutiOpen && (
            <ul className="submenu">
              {stutiData.map(item => (
                <li key={item.id}>
                  <Link to="/" onClick={() => handleTextSelection(item.name.S)}>{item.name.S}</Link>
                </li>
              ))}
            </ul>
          )}
        </li>
        <li onClick={() => setStotraOpen(!isStotraOpen)}>
          Stotra {isStotraOpen ? <span>&#9660;</span> : <span>&#9654;</span>}
          {isStotraOpen && (
            <ul className="submenu">
              {stotraData.map(item => (
                <li key={item.id}>
                  <Link to="/" onClick={() => handleTextSelection(item.name.S)}>{item.name.S}</Link>
                </li>
              ))}
            </ul>
          )}
        </li>
        <li onClick={() => setPoojanOpen(!isPoojanOpen)}>
          Poojan {isPoojanOpen ? <span>&#9660;</span> : <span>&#9654;</span>}
          {isPoojanOpen && (
            <ul className="submenu">
              {poojanData.map(item => (
                <li key={item.id}>
                  <Link to="/" onClick={() => handleTextSelection(item.name.S)}>{item.name.S}</Link>
                </li>
              ))}
            </ul>
          )}
        </li>
        <li onClick={() => setAcharyaOpen(!isAcharyaOpen)}>
          Acharya Shree {isAcharyaOpen ? <span>&#9660;</span> : <span>&#9654;</span>}
          {isAcharyaOpen && (
            <ul className="submenu">
              {acharyaData.map(item => (
                <li key={item.id}>
                  <Link to="/" onClick={() => handleTextSelection(item.name.S)}>{item.name.S}</Link>
                </li>
              ))}
            </ul>
          )}
        </li>
      </ul>
    </div>
  );
}

export default SideBar;
