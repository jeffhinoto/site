import logo from './img.png';
import './App.css';


function App() {
  
  return (
    <>
    <section id='main'>
    <div className='App'>     

      <img src={logo} className='img'/>
     <h1><i><span className='name'>JEFF HINOTO</span></i></h1>
      <div className="typewriter">
            <i><h4>Trazendo vida ao seu projeto</h4></i>
        </div>
        <div style={{paddingTop:'100px',}}></div>

    </div>

    </section>
    
    <section id='contact'>
    <a class="arrow-wrap img" href="#contact">
            <span class="arrow"></span></a>
    <div className='contact'> 
    <div><iframe src="https://discord.com/widget?id=979197828234616852&theme=dark" width="300" height="300" allowtransparency="true" frameborder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe></div>
    
    </div>
    </section>
    </>
  );
}

export default App;
