import React from 'react'
import './storycard.styles.css'

const Storycard = ({ title, image, profile }) => {
    return (
        <div>
            <div className="story">
                <div className="story-banner">
                    <img src={image} alt="" />
                </div>
                <div className="story-image">
                    <img src={profile} alt="" />
                </div>
                <div className="story-name">
                    <h4>{title}</h4>
                </div>
            </div></div>
    )
}

export default Storycard