import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

function menuSound() {
  const menuSound = new Audio('/assets/menu-select.mp3')
  menuSound.play()
}

function confirmSound() {
  const confirmSound = new Audio('/assets/game-start.ogg')
  confirmSound.play()
}

const Instructions = () => {
  return (
    <div>
      <h1 className="instruction-logo"> INSTRUCTIONS</h1>
      <video id="background-video" loop autoPlay>
        <source src="/assets/disco-lights.mp4" type="video/mp4" />
      </video>
      <div>
        <h2 onMouseOver={menuSound} className="sudbury-instructions">
          Dance: Touch &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; with your wrists for
          1000 points!
        </h2>
        <div className="bubble">
          <img
            src="/images/hand-ball.gif"
            width="140"
            style={{
              position: 'fixed',
              top: 290,
              left: 695
            }}
          />
        </div>
        <h2 onMouseOver={menuSound} className="sudbury-instructions">
          Dance: Bump &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; with your hips for 5000
          points!
        </h2>
        <div className="bubble">
          <img
            src="/images/feet-ball.gif"
            width="140"
            style={{
              position: 'fixed',
              top: 450,
              left: 705
            }}
          />
        </div>
        <h2 onMouseOver={menuSound} className="sudbury-instructions">
          Sing: Match the pitch of the singer for 1000 points!
        </h2>
      </div>
      <Link to="/">
        <h5 className="backButton" onClick={confirmSound}>
          Back
        </h5>
      </Link>
    </div>
  )
}

export default Instructions
