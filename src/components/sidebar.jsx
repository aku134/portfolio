import React, { Component } from 'react'

export default class Sidebar extends Component {
  render() {
    return (
      <div>
        <div>
          <nav href="#navbar" className="js-colorlib-nav-toggle colorlib-nav-toggle" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar"><i /></nav>
          <aside id="colorlib-aside" className="border js-fullheight">
            <div className="text-center">
              <div className="author-img" style={{backgroundImage: 'url(images/akshita.jpeg)'}} />
              <h1 id="colorlib-logo"><a href="index.html">Akshita Verma</a></h1>
              <span className="email"><i className="icon-mail"></i> akshitaverma102001@gmail.com</span>
            </div>
            <nav id="colorlib-main-menu" role="navigation" className="navbar">
              <div id="navbar" className="collapse">
                <ul>
                  <li className="active"><a href="#home" data-nav-section="home">Introduction</a></li>
                  <li><a href="#about" data-nav-section="about">About</a></li>
                 <li><a href="#timeline" data-nav-section="timeline">Timeline</a></li>
                </ul>
              </div>
            </nav>
            <nav id="colorlib-main-menu">
              <ul>
               <li><a href="https://www.instagram.com/akshita_vermaa10/"><i className="icon-instagram" /></a></li>
                <li><a href="https://www.linkedin.com/in/akshita-verma-5a491818b/" ><i className="icon-linkedin2" /></a></li>
                <li><a href="https://github.com/aku134" ><i className="icon-github"></i></a></li>
                </ul>
            </nav>
           {/*<div className="colorlib-footer">
              <p><small>
                  Made with <i className="icon-heart" aria-hidden="true" /> and <i className="icon-beer" aria-hidden="true"></i><br></br>
                  Thanks <a href="https://colorlib.com" target="_blank" rel="noopener noreferrer">Colorlib</a> for inspiration 
              </small></p>
         
              
            </div>
             */}
          </aside>
        </div>
      </div>
    )
  }
}
