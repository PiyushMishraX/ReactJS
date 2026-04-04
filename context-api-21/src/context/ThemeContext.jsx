import React from 'react'

const ThemeContext = (props) => {
  return (
    // <div>ThemeContext</div>
    <div>
        {props.children}
    </div>
  )
}

export default ThemeContext

// now wrap app with the context so everything iside app and even app have the the values so this vlaue is in boudry of app sourouding everthing