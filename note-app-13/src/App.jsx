import React, { useState } from "react";

const App = () => {
  const [title, setTitle] = useState('')
  const [details, setDetails] = useState('')
  
  // mapping
  const [task, setTask] = useState([])
  
  // form handling
  const submitHandler = (e) => {
    e.preventDefault();
    // console.log("Form submittes");
    // console.log(title, details);
    // console.log(title);
    // console.log(details);

    const copyTask = [...task]; // old task copies

    copyTask.push({title,details})
    setTask(copyTask)

    console.log(task); // use batch update to see the changed value from set task / if it works
    console.log(copyTask);
    

    setTitle('')
    setDetails('')
  };



  return (
    <div className="h-screen lg:flex bg-black text-white   ">

      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
        className=" flex lg:w-1/2   gap-4 items-start  flex-col p-10  "
      >
        <h1 className=" text-3xl font-bold    ">Add Notes</h1>

        {/* first input for heading */}
        <input
          type="text"
          placeholder="Enter Notes Heading"
          className=" w-full p-5 border-2 py-2 rounded outline-none font-medium "
          value={title}
          onChange={(e)=>{
            // console.log(e.target.value);
            setTitle(e.target.value)
          }}
          />

          {/* deatails input */}
        <textarea
          type="text"
          placeholder="Write details Here"
          className=" w-full p-5 h-32 py-2 border-2 rounded outline-none font-medium "
          value={details}
          onChange={(e)=>{
            setDetails(e.target.value)
          }}
        />

        <button className="w-full bg-white text-black px-5 py-2 rounded  outline-none font-medium cursor-pointer active:bg-gray-200  active:scale-95 "
        >
          Add Note{" "}
        </button>

        {/* <img
        // className="h-60"
        className=" rotate-y-180 h-60"
          src="https://static.vecteezy.com/system/resources/thumbnails/049/578/155/small/a-black-and-white-drawing-of-a-man-writing-png.png"
          alt=""
        /> */}
      </form>

      <div className="lg:w-1/2 gap-5 lg:border-l-2 flex-wrap p-10">
        <h1 className=" text-4xl font-bold    ">Recent Notes</h1>
        <div className=" flex  flex-wrap gap-5 mt-5 h-full overflow-auto">
          {/* <div className="h-52 w-40 rounded-2xl bg-white"></div> */}
          
          {task.map(function(elem, idx){
            // return 'Hello'
            return <div key='idx' className="h-52 w-40 rounded-2xl bg-white p-4 text-black ">
              <h3 className=" leading-tight text-xl font-bold " >{elem.title}</h3>
              <p className="mt-2 leading-tight font-medium text-gray-500" >{elem.details}</p>
            </div>
          })}
        </div>
      </div>
    </div>
  );
};

export default App;
