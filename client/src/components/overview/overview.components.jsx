import React from 'react'
import { SearchIcon } from '../../assets/icons';
import AuctionNft from '../auctionNft/auctionNft.components';
import Historytable from '../historytable/historytable.components';
import './overview.styles.css';

const Overview = () => {
  return (
    <div className='overview-section'>
        <div className="overview-header">
            <h1>Overview</h1> 
            <div className="overview-opt">
                <p>Explore</p>
                <div className="search-field">
                    <img className='search-icon' src={SearchIcon} alt="" />
                    <input className='search-bar' type="text" placeholder="Search title, artist, ID..." />
                </div>
            </div>
        </div>
        <div className="auction-nft-list">
            <AuctionNft />
            <AuctionNft />
            <AuctionNft />
            <AuctionNft />
            <AuctionNft />
        </div>
        <div className="history-section">
            <div className="history-header">
                <h1>Recent History</h1>
                <div className="history-tags">
                    <p>All History</p>
                </div>
            </div>

            <Historytable />
        </div>

    </div>
  )
}

export default Overview