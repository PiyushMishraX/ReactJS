import React from 'react'
import {Bookmark} from 'lucide-react'
// import {RiBookmarkLine} from '@remixicon/react/HomeFillIcon';

const App = () => {
  return (
      <div className="parent">

        <div className="card">

          <div className="top">
            <img src="https://thumbs.dreamstime.com/b/icons-sample-psost-setting-428651108.jpg" alt="" />
            {/* <button>save <Bookmark /></button> */}
            <button>save <i className="ri-bookmark-line"></i></button>
          </div>

          <div className="center">
            <h3>Amazon <span>5 days ago</span></h3>
            <h2>Senior Ui/UX designer</h2>
            <div>
              <h4>Part Time</h4>
              <h4>Senior Level</h4>
            </div>
  
          </div>

          <div className="bottom">
              <div>
                <h3>$120/hr</h3>
                <p>Mumbai, India</p>
              </div>
              <button>Apply Now</button>  
          </div>
        </div>

      </div>
  )
}

export default App
