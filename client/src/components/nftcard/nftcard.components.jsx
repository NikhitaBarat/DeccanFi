import React from 'react';
import './nftcard.styles.css';
import { MonsterRight } from '../../assets';

const Nftcard = () => {
  return (
    <div className='nft-card'>
        <img className='nft-card-monster' src={MonsterRight} alt="" />
        <h1>Yeti Crypt</h1>
    </div>
  )
}

export default Nftcard