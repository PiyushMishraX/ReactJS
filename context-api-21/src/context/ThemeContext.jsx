// import React, { createContext } from "react";

// // creating context-

// //  ThemeDataContext is the context which will provide the data in eveywhere // create it outside the function
// export const ThemeDataContext = createContext();
// // export so any where it can be used  // useing named export bxz themeCOntext is already beign exported defaultly

// export const PostDataContext = createContext();

// const ThemeContext = (props) => {

//   return (
//     // <div>ThemeContext</div>
//     // <div>{props.children}</div>
    
//     //providing the context // use .Provider method
//     <div>
//       {/* <ThemeDataContext.Provider> */}
//       {/* <ThemeDataContext.Provider value='Piyush'>
//         {props.children}
//       </ThemeDataContext.Provider> */}

//       {/* <PostDataContext.Provider value={[]}> */}
//       <PostDataContext.Provider value='Piyush'>
//         {props.children}
//       </PostDataContext.Provider>
//     </div>
//   );
// };

// export default ThemeContext;

// // now wrap app with the context so everything iside app and even app have the the values so this vlaue is in boudry of app sourouding everthing



// creating Theme Context ---

// import React from "react";
import { createContext, useState } from "react";

export const ThemeDataContext = createContext()

const ThemeContext = (props) => {

  const [theme, setTheme] = useState('light')

  return (
    <div>
      <ThemeDataContext.Provider value={[theme,setTheme]} >
        {props.children}
      </ThemeDataContext.Provider>
    </div>
  );
};

export default ThemeContext;