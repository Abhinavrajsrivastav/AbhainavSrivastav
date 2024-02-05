import React from 'react'
import './Card.css'

function Card() {
  return (
    <div className="Card-Container">
        <div className="Card-Head">
            <span>Awesom-Hindus</span>
        </div>
        <div className="Card-Body">
          <span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla officia animi, fugit asperiores aliquid excepturi nihil accusamus, culpa nemo fugiat cumque illum suscipit neque. Vero veniam sed voluptas mollitia aliquid?</span>
        </div>
        <div className="Card-Bottom">
          <div className="Tech-used">
            <p>tech</p>
          </div>
          <div className="Updates">
            <p>updates</p>
          </div>
        </div>

    </div>
  )
}

export default Card