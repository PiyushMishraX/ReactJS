import React from "react";
import { Bookmark } from "lucide-react";

// const Card = () => {

//   return (
//     <div className="card">
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
//   )
// }

const Card = (props) => {
  // console.log(props)
  // console.log(props.company)
  
  return (
    <div className="card">
      <div>
        <div className="top">
          <img
            src={props.brandLogo}
            alt=""
          />
          {/* <button>save <Bookmark size="{12}" " /></button> */}
          <button>
            save <i className="ri-bookmark-line"></i>
          </button>
        </div>

        <div className="center">
          <h3>{props.company} <span>{props.datePosted}</span>
          </h3>
          <h2>{props.post}</h2>
          <div className="tag">
            <h4>{props.tag1}</h4>
            <h4>{props.tag2}</h4>
          </div>
        </div>
      </div>

      <div className="bottom">
        <div>
          <h3>${props.pay}/hr</h3>
          <p>{props.location}</p>
        </div>
        <button>Apply Now</button>
      </div>
    </div>
  );
};

export default Card;
