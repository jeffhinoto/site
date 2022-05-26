import logo from './img.png';
import './App.css';


function App() {
  
  return (
    <>
      <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.9.0/css/all.css"></link>
    <section id='main'>
    <div className='App'>     

      <img src={logo} className='img'/>
     <h1><i><span className='name'>JEFF HINOTO</span></i></h1>
      <div className="typewriter">
            <i><h4>Trazendo vida ao seu projeto</h4></i>
        </div>
        <div style={{paddingTop:'100px',}}></div>
        <div id='contact-info'>
    <div className='links'>
      <a href='https://www.linkedin.com/in/jeffhinoto' target='_blank' className='orange-border'>
        <div>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span>
                <i className="fab fa-linkedin-in"></i>
              </span>
        </div>
      </a>
      <a href='https://github.com/jeffhinoto' target='_blank' className='orange-border' >
        <div>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span>
                <i className="fab fa-github"></i>
              </span>

        </div>
      </a>
      <a href='https://discord.gg/rAQFxeACpY' className='orange-border' target='_blank'>
        <div>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span>
                <i className="fab fa-discord"></i>
              </span>
        </div>
      </a>
      <a href='https://www.instagram.com/jeffhinoto' className='orange-border' target='_blank'>
        <div>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span>
                <i className="fab fa-instagram"></i>
              </span>
        </div>
      </a>
      <a href='https://www.youtube.com/jeffhinotoo' className='orange-border' target='_blank'>
        <div>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span>
                <i className="fab fa-youtube"></i>
              </span>
        </div>
      </a>
    </div>
  </div>
    
    </div>

    </section>
    <div style={{color:"#fff",display:'inline-table'}}>
      <span>teste</span>
    </div>
    </>
  );
}

export default App;
