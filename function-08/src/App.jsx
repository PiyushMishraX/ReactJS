import React from 'react'

const App = () => {

  function btnClicked() {
    console.log('button is clicked')
  }
  return (
    <div>
      {/* <button onClick={btnClicked()}> Button </button> no like this because fn() runs it before hands */}
      <button onClick={btnClicked}> Button </button>
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