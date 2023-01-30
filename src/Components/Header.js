import React from 'react'
import './header.css'
import expenseLogo from '../Images/ExpenseTracker.png'

const Header = () => {
  return (
    <div>
        <div className="headContainer">
            <div className="Header">
                <div className="logo">
                    <img src={expenseLogo} alt="ExpenseTracker" width="150px" height="150px"/>
                </div>
                <div className="gitHub">
                    <div className="socialLogo">
                        <a href='https://github.com/rahulmalodhe' target="_blank" rel="noreferrer">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="social logo" width="20px" height="20px"/>
                        </a>
                    </div>
                    <div className="socialTxt">
                        <a href='https://github.com/rahulmalodhe' target="_blank" rel="noreferrer"><p>My GitHub Profile</p></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header
