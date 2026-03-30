import React from "react";

const App = () => {


  // form handling 
  const submitHandler= (e)=>{
    e.preventDefault()
    console.log('Form submittes');
  }

  return (
    <div className="h-screen bg-black rtext-white  ">
      <form onSubmit={(e)=>{
        submitHandler(e)
      }} className=" flex p-10 justify-between  gap-4  ">
        <div className="items-start w-1/2 flex flex-col gap-4 ">
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
        </div>

        {/* <img
        // className="h-60"
        className=" rotate-y-180 h-60"
          src="https://static.vecteezy.com/system/resources/thumbnails/049/578/155/small/a-black-and-white-drawing-of-a-man-writing-png.png"
          alt=""
        /> */}
      </form>
    </div>
  );
};

export default App;
