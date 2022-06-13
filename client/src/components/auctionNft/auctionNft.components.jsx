import React from 'react'
import './auctionNft.styles.css';

const AuctionNft = () => {
  return (
    <div className='auction-nft-card'>
        <div className="auction-nft-image"
            style={{
                background: "url('https://i.guim.co.uk/img/media/ef8492feb3715ed4de705727d9f513c168a8b196/37_0_1125_675/master/1125.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=d456a2af571d980d8b2985472c262b31')",
                backgroundSize: 'cover',
            }}
        >
        <div className="nft-status">
            <p><span> ● </span> Active</p>
            <div className="timer">
                45:46 🔥
            </div>
        </div>
        </div>
        <div className="auction-nft-content">
            <h3>Bored Apes #224</h3>
            <div className="bid-section">
                <p>Your Bid</p>    
                <h4>8,4ETH</h4>
            </div>
        </div>
    
    </div>
  )
}

export default AuctionNft