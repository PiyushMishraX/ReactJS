import React from "react";

const App = () => {
  return (
    <div className="h-screen bg-black rtext-white  ">
      <form className=" flex p-10  gap-4  ">
        <div className="items-start w-1/2 flex flex-col gap-4 ">
        <input
          type="text"
          placeholder="Enter Notes Heading"
          className="p-5 w-1/2 border-2 py-2 rounded-2xl"
        />
        <input
          type="text"
          placeholder="Write details"
          className="p-5 w-1/2 h-20 py-2 border-2 rounded-2xl"
        />
        <button className= "w-1/2 bg-white text-black px-5 py-2 rounded-2xl">Add Note </button>
        </div>

        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZqbO68IB-_p9J2rJf5BIWWkHX8yX-OZ0k5g&s" alt="" />
      </form>
    </div>
  );
};

export default App;
