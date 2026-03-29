import React from 'react'

const App = () => {
  function btnClicked() {
    console.log('button is clicked')
    
  }
  return (
    <div>
      <h1>Hello ,Piyush</h1>

      <button>click user</button>
    </div>
  )
}

export default App


// var a = document.querySelector('h1')

// function hero() {
//   console.log('Hero')
// }

// a.addEventListener('click', function () {
//   console.log('Hero')
// })


// a.addEventListener('click', hero())  // runs automatically
// a.addEventListener('click', hero) // runs when event i happening