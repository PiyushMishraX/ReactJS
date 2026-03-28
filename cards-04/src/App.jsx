import React from "react";
import { Bookmark } from "lucide-react";
// import {RiBookmarkLine} from '@remixicon/react/HomeFillIcon';
import Card from "./components/Card";
// import User from "./components/User";

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
// const App = () => {
//   const arr = [10,20,30,40]
//   return (
//     <div className="parent">
//       <User name={arr[0]}/>
//       <User name={arr[1]}/>
//       <User name={arr[2]}/>
//     </div>
//   );
// };

// arr .map

// const App = () => {
//   const arr = [10,20,30,40]
//   return (
//     <div className="parent">
//       {/* {arr} */}
//       {arr.map(function (elem) {
//         // return 'hello' // return what is written inside to the parent as a value // writes 4 times
//         // return 10
//         // return 'Piyush'
//         // return elem //10203040
//         // return elem*2
//         // return <h1>{elem}</h1>
//         // return <h1>{elem}</h1>
//         return <h1>{elem/2}</h1>
//       })}
//     </div>
//   );
// };


// arr of objects ( looks like json )

// const App = () => {
//   // const arr = [10,20,30,40]
//   // const arr = [{user:'Piyush'},{user:'Sarthak'},{user:'Harsh'}];
//   const arr = [
//     { 
//       user: "Piyush",
//       age:20
//     }, 
//     { 
//       user: "Sarthak" ,
//       age:30
//     }, 
//     { 
//       user: "Harsh" ,
//       age:36
//     }
//   ];

//   console.log(arr);

//   arr.forEach(function (elem) {
//     // console.log(elem);
//     // console.log(elem.user);
//     // console.log(elem.age);
//   });

//   return <div className="parent"></div>;
// };

// export default App;


// / number of Cards

// const App = () => {
//   // const arr = [10,20,30,40]
//   // const arr = [{user:'Piyush'},{user:'Sarthak'},{user:'Harsh'}];
//   const arr = [
//     { 
//       user: "Piyush",
//       age:20
//     }, 
//     { 
//       user: "Sarthak" ,
//       age:30
//     }, 
//     { 
//       user: "Harsh" ,
//       age:36
//     }
//   ];



//   return <div className="parent">
//     {arr.map(function (elem) {
//       // return <Card /> // number of cards same as the number of elems in array
//       return <User name={elem.user}/> // number of cards
//     })}
//   </div>;
// };

// export default App;


// final
const App = () => {
  // const arr = [10,20,30,40]
  // const arr = [{user:'Piyush'},{user:'Sarthak'},{user:'Harsh'}];
const jobOpenings = [
  {
    brandLogo: "https://cdn.simpleicons.org/google/4285F4",
    companyName: "Google",
    datePosted: "2 days ago",
    post: "Software Engineer III",
    tag1: "Full-time",
    tag2: "Mid-level",
    pay: 115,
    location: "Mountain View, CA"
  },
  {
    brandLogo: "https://cdn.simpleicons.org/apple/000000",
    companyName: "Apple",
    datePosted: "5 days ago",
    post: "iOS Developer",
    tag1: "Full-time",
    tag2: "Senior level",
    pay: 135,
    location: "Cupertino, CA"
  },
  {
    brandLogo: "https://cdn.simpleicons.org/meta/0668E1",
    companyName: "Meta",
    datePosted: "1 day ago",
    post: "Product Designer",
    tag1: "Full-time",
    tag2: "Junior level",
    pay: 85,
    location: "Menlo Park, CA"
  },
  {
    // brandLogo: "https://cdn.simpleicons.org/amazon/FF9900",
    brandLogo: "https://thumbs.dreamstime.com/z/amazon-logo-editorial-illustrative-white-background-eps-download-vector-jpeg-banner-ai-amazon-logo-editorial-illustrative-208329107.jpg",
    companyName: "Amazon",
    datePosted: "10 days ago",
    post: "Cloud Solutions Architect",
    tag1: "Full-time",
    tag2: "Senior level",
    pay: 150,
    location: "Seattle, WA"
  },
  {
    brandLogo: "https://cdn.simpleicons.org/netflix/E50914",
    companyName: "Netflix",
    datePosted: "3 days ago",
    post: "UI Engineer",
    tag1: "Full-time",
    tag2: "Senior level",
    pay: 180,
    location: "Los Gatos, CA"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShBu0cnozmDr454aSmHhedZltGVgU8fTfZwA&s",
    companyName: "Microsoft",
    datePosted: "7 days ago",
    post: "Azure Security Specialist",
    tag1: "Full-time",
    tag2: "Mid-level",
    pay: 110,
    location: "Redmond, WA"
  },
  {
    brandLogo: "https://cdn.simpleicons.org/nvidia/76B900",
    companyName: "NVIDIA",
    datePosted: "4 days ago",
    post: "AI Research Scientist",
    tag1: "Full-time",
    tag2: "Senior level",
    pay: 165,
    location: "Santa Clara, CA"
  },
  {
    brandLogo: "https://cdn.simpleicons.org/tesla/CC0000",
    companyName: "Tesla",
    datePosted: "8 days ago",
    post: "Autopilot Systems Engineer",
    tag1: "Full-time",
    tag2: "Junior level",
    pay: 95,
    location: "Palo Alto, CA"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSy1Y_ugO3i3aqa6gHgXr2MuWk0ZzywuoSaU7X4B-QYEw&s",
    companyName: "Adobe",
    datePosted: "12 days ago",
    post: "Front-end Intern",
    tag1: "Part-time",
    tag2: "Junior level",
    pay: 55,
    location: "San Jose, CA"
  },
  {
    brandLogo: "https://cdn.simpleicons.org/salesforce/00A1E0",
    companyName: "Salesforce",
    datePosted: "6 days ago",
    post: "Backend Developer",
    tag1: "Full-time",
    tag2: "Mid-level",
    pay: 105,
    location: "San Francisco, CA"
  }
];
// console.log(jobOpenings)



  // return <div className="parent">
  //   {jobOpenings.map(function (elem, idx) {
  //     // return <h1>Hey</h1>
  //     // return <h1>{elem}</h1> // obj is not valild as react child 

  //     // return <h1>{elem.companyName}</h1>
  //     // return <Card/>

  //     // console.log(idx);

  //     return <Card key={idx} company={elem.companyName} post ={elem.post} tag1={elem.tag1} tag2={elem.tag2} location={elem.location} pay={elem.pay} brandLogo={elem.brandLogo} datePosted={elem.datePosted}/>
      
  //   })}
  // </div>;
  return <div className="parent">
    {jobOpenings.map(function (elem, idx) {
      
      // evey element gets unique identiy for indentification of react
      return <div key={idx}>
        <Card key={idx} company={elem.companyName} post ={elem.post} tag1={elem.tag1} tag2={elem.tag2} location={elem.location} pay={elem.pay} brandLogo={elem.brandLogo} datePosted={elem.datePosted}/>
      </div>
      
    })}
  </div>;
};

export default App;


// can make contact card etc

// key props react thik every props as one , react want to differenciate it , evey prop should have unique key