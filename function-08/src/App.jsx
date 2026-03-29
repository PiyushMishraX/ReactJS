import React from 'react'

const App = () => {

  function btnClicked() {
    console.log('button is clicked')
  }
  
  function mouseEnter(){
    console.log('Mouse Entered')
    
  }

  function multiple(){
    btnClicked()
    mouseEnter()
  }
  return (
    <div>
      {/* <button onClick={btnClicked()}> Button </button> no like this because fn() runs it before hands  whitout click*/}
      {/* <button onClick={btnClicked}> Button </button> */}

      {/* <button  onDoubleClick={btnClicked}> Button </button> */}
      {/* runs on double click only */}

      {/* <button onMouseEnter={mouseEnter} onClick={btnClicked}> Button </button> */}


      {/* <button onClick={btnClicked}> Button </button>
      <button onClick={btnClicked}>explore this</button> */}

        <button onClick={function () {
          console.log('button is clicked')

        }}> Click here </button>


        <button onClick={multiple}> Using multiple function in one </button>


    </div>
  )
}

export default App



//

function btnClicked() {
  
}var a = document.querySelector('h1')

// function hero() {
//   console.log('Hero')
// }

// a.addEventListener('click', function () {
//   console.log('Hero')
// })


// a.addEventListener('click', hero())  // runs automatically
// a.addEventListener('click', hero) // runs when event i happening