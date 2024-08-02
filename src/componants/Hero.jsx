import React from "react";
import "./Hero.css"

const Hero = () => {
    return(
        <>
<header className="navbar-header">
     {/* <h1 className="navbar-title">Welcome to Our Ladie's Clothing Shop</h1> */}
        <nav className="navbar">
            <button className="navbar-toggle" aria-label="Toggle navigation">
            <span className="navbar-toggle-icon"></span>
            </button>
            <ul className="navbar-menu">
                <li className="navbar-item"><a href="#home" className="navbar-link">Home</a></li>
                <li className="navbar-item"><a href="#products" className="navbar-link">Products</a></li>
                <li className="navbar-item"><a href="#about" className="navbar-link">About Us</a></li>
                <li className="navbar-item"><a href="#contact" className="navbar-link">Contact</a></li>
                <li className="navbar-item"><button className="navbar-signin">Sign In / Log In</button></li>
            </ul>
        </nav>
</header>
<section id="home">
      <h1>Our Designs</h1>
    <div class="slider">
      <div class="slider-wrapper">
        <div class="slide">
          <img src="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQbc1Kf0e1jjL3tvmE1-ARXA02XUKvMCSFhnN0K4oLmay3nSXJjY6wBinBrfwWaqzwIRGRcRFdD_XyEN0rNkO7a2hHmAiJgQjQYVu1N9FZdBHV2sq6mOw5DJQ" alt="Product 1"/>
          <h3>Product 1</h3>
          <p>₹999</p>
        </div>
        <div class="slide">
          <img src="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQbc1Kf0e1jjL3tvmE1-ARXA02XUKvMCSFhnN0K4oLmay3nSXJjY6wBinBrfwWaqzwIRGRcRFdD_XyEN0rNkO7a2hHmAiJgQjQYVu1N9FZdBHV2sq6mOw5DJQ" alt="Product 1"/>
          <h3>Product 1</h3>
          <p>₹999</p>
        </div>
        <div class="slide">
          <img src="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQbc1Kf0e1jjL3tvmE1-ARXA02XUKvMCSFhnN0K4oLmay3nSXJjY6wBinBrfwWaqzwIRGRcRFdD_XyEN0rNkO7a2hHmAiJgQjQYVu1N9FZdBHV2sq6mOw5DJQ" alt="Product 1"/>
          <h3>Product 1</h3>
          <p>₹999</p>
        </div>
        <div class="slide">
          <img src="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTM9AhES2kCPMIAdYPWN0NHNLlxDTrlML6RKnNED_noxYnKWy4Kj7ZxIvvAj3kV3Txq2EHQWBjE7W0WTkfX63jlAs6UeNl99iYM5dCDZZzYDH-K_VtGDOJhzg" alt="Product 2"/>
          <h3>Product 2</h3>
          <p>₹199</p>
        </div>
        <div class="slide">
          <img src="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTM9AhES2kCPMIAdYPWN0NHNLlxDTrlML6RKnNED_noxYnKWy4Kj7ZxIvvAj3kV3Txq2EHQWBjE7W0WTkfX63jlAs6UeNl99iYM5dCDZZzYDH-K_VtGDOJhzg" alt="Product 3"/>
          <h3>Product 3</h3>
          <p>₹1299</p>
        </div>
        <div class="slide">
          <img src="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTM9AhES2kCPMIAdYPWN0NHNLlxDTrlML6RKnNED_noxYnKWy4Kj7ZxIvvAj3kV3Txq2EHQWBjE7W0WTkfX63jlAs6UeNl99iYM5dCDZZzYDH-K_VtGDOJhzg" alt="Product 3"/>
          <h3>Product 3</h3>
          <p>₹1299</p>
        </div>
        <div class="slide">
          <img src="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTM9AhES2kCPMIAdYPWN0NHNLlxDTrlML6RKnNED_noxYnKWy4Kj7ZxIvvAj3kV3Txq2EHQWBjE7W0WTkfX63jlAs6UeNl99iYM5dCDZZzYDH-K_VtGDOJhzg" alt="Product 3"/>
          <h3>Product 3</h3>
          <p>₹1299</p>
        </div>
      </div>
    </div>
  </section>
        </>
    )
}
export default Hero;


