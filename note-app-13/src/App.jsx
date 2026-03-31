import React from "react";

const App = () => {


  // form handling 
  const submitHandler= (e)=>{
    e.preventDefault()
    console.log('Form submittes');
  }

  return (
    <div className="h-screen lg:flex bg-black text-white   ">
      <form onSubmit={(e)=>{
        submitHandler(e)
      }} className=" flex lg:w-1/2   gap-4 items-start  flex-col p-10  ">
          <input
            type="text"
            placeholder="Enter Notes Heading"
            className=" w-full p-5 border-2 py-2 rounded outline-none font-medium "
          />
          <textarea
            type="text"
            placeholder="Write details"
            className=" w-full p-5 h-32 py-2 border-2 rounded outline-none font-medium "
          />
          <button className="w-full bg-white text-black px-5 py-2 rounded  outline-none font-medium ">
            Add Note{" "}
          </button>

        {/* <img
        // className="h-60"
        className=" rotate-y-180 h-60"
          src="https://static.vecteezy.com/system/resources/thumbnails/049/578/155/small/a-black-and-white-drawing-of-a-man-writing-png.png"
          alt=""
        /> */}
      </form>

      <div className="flex flex-wrap p-10">
        <div className="h-32 w-32 rounded-2xl bg-white"></div>
      </div>
    </div>
  );
};

export default App;
