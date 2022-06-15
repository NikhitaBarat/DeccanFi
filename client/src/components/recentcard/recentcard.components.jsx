import React from 'react'
import './recentcard.styles.css'

const Recentcard = ({ image, name, recent, eth }) => {
  return (
    <div className='card'>
        <div className="a-box">
            <div className="a-top">
              <img src={image} alt="" />
              <div className="top-text">
                <h4>{name}</h4>
                <p>{recent}</p>
              </div>
            </div>
            <div className="a-bid">
              <div className="amount">
                <h4>{eth}</h4>
                <p>Last Bid</p>
              </div>
              <button className='offer' >
                Make offer
              </button>
            </div>
          </div>
    </div>
  )
}

export default Recentcard