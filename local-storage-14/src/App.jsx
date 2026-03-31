import React from 'react'

const App = () => {

  // localStorage.clear()
  // sessionStorage.clear() // remove every item

  // localStorage.setItem('user','Piyush')
  // const user = localStorage.getItem('user')

  // localStorage.setItem('age','20')

  // const age = localStorage.getItem('age')
  // const user = localStorage.getItem('user')

  // console.log(age,user)

  // localStorage.removeItem('user') // remove one item 


  const user={
    username: 'Piyush',
    age:20,
    city:'IND'
  }

  console.log(user)

  // localStorage.setItem('user', user) // saved as [object Object]

  localStorage.setItem('user', JSON.stringify(user))
  return (
    <div>App</div>
  )
}

export default App