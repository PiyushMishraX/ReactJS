import React from "react";
import { Bookmark } from "lucide-react";
// import {RiBookmarkLine} from '@remixicon/react/HomeFillIcon';
import Card from './components/Card'
import User from "./components/User";

// const App = () => {
//   return (
//     <div className="parent">
//       <div className="card">
//         <div>
//           <div className="top">
//             <img
//               src="https://thumbs.dreamstime.com/b/icons-sample-psost-setting-428651108.jpg"
//               alt=""
//             />
//             {/* <button>save <Bookmark size="{12}" " /></button> */}
//             <button>
//               save <i className="ri-bookmark-line"></i>
//             </button>
//           </div>

//           <div className="center">
//             <h3>
//               Amazon <span>5 days ago</span>
//             </h3>
//             <h2>Senior Ui/UX designer</h2>
//             <div className="tag">
//               <h4>Part Time</h4>
//               <h4>Senior Level</h4>
//             </div>
//           </div>
//         </div>

//         <div className="bottom">
//           <div>
//             <h3>$120/hr</h3>
//             <p>Mumbai, India</p>
//           </div>
//           <button>Apply Now</button>
//         </div>
//       </div>
//       <div className="card">
//         <div>
//           <div className="top">
//             <img
//               src="https://thumbs.dreamstime.com/b/icons-sample-psost-setting-428651108.jpg"
//               alt=""
//             />
//             {/* <button>save <Bookmark size="{12}" " /></button> */}
//             <button>
//               save <i className="ri-bookmark-line"></i>
//             </button>
//           </div>

//           <div className="center">
//             <h3>
//               Amazon <span>5 days ago</span>
//             </h3>
//             <h2>Senior Ui/UX designer</h2>
//             <div className="tag">
//               <h4>Part Time</h4>
//               <h4>Senior Level</h4>
//             </div>
//           </div>
//         </div>

//         <div className="bottom">
//           <div>
//             <h3>$120/hr</h3>
//             <p>Mumbai, India</p>
//           </div>
//           <button>Apply Now</button>
//         </div>
//       </div>
//     </div>
//   );
// };
// const App = () => {
//   return (
  //     <div className="parent">
  // <Card />
//     </div>
//   );
// };



// data passin through values
// const App = () => {
//   return (
  //     <div className="parent">
  //     <Card />
//       <User name='Piyush'/>
//       <User name='sharthak'/>
//       <User name='Aman'/>
//     </div>
//   );
// };

// data passing through arr
const App = () => {
  const arr = [10,20,30,40]
  return (
    <div className="parent">
      <User name={arr[0]}/>
      <User name={arr[1]}/>
      <User name={arr[2]}/>
    </div>
  );
};




export default App;
