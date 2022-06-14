import React from 'react';
import './nftcard.styles.css';
// import { MonsterRight } from '../../assets';

const Nftcard = ({title, image}) => {
  return (
    <div className='nft-card'>
        <img className='nft-card-monster' src={image} alt="" />
        <h1>{title}</h1>
    </div>
  )
}

export default Nftcard