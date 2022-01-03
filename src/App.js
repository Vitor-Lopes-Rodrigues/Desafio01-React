
import './style/App.css';
import lupa from './img/Vector.png';
import heart from './img/heart.png';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className='Container'>
          <div className='Text'>
            <h1>Codelândia</h1> <h2>blog</h2>
          </div>
          <div className='Search'>
            <input type={'search'} placeholder='Pesquisar no blog' />
            <img src={lupa} />
          </div>
        </div>
      </header>
      <main>
        <div className='Container-Text'>
          <div className='News'>
            <div className='date-heart'>
              <p>02 de jul, 2021</p>
              <img src={heart}/>
            </div>
              <h2>Agora é oficial: o Windows 11 está vindo</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vestibulum auctor est. Nam vitae finibus ante. Duis lobortis tellus vel diam fringilla, eu ullamcorper ex iaculis.</p>
          </div>
          <div className='News'>
            <div className='date-heart'>
              <p>02 de jul, 2021</p>
              <img src={heart}/>
            </div>
              <h2>Tem Firefox novo no pedaço e você vai querer migrar</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vestibulum auctor est.</p>
          </div>
          <div className='News'>
            <div className='date-heart'>
              <p>02 de jul, 2021</p>
              <img src={heart}/>
            </div>
              <h2>John McAfee, criador do antivírus McAfee, morre</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vestibulum auctor est. Nam vitae finibus ante. Duis lobortis tellus vel diam fringilla, eu ullamcorper ex iaculis. Praesent et auctor justo. Vestibulum nisl orci, lacinia venenatis leo sit amet, pulvinar tincidunt risus. Phasellus nisl dui, cursus a lectus et, interdum ullamcorper libero.</p>
          </div>
          <div className='News'>
             <div className='date-heart'>
              <p>02 de jul, 2021</p>
              <img src={heart}/>
            </div>
              <h2>O criador desta página concorre ao Oscar</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vestibulum auctor est. Nam vitae finibus ante. Duis lobortis tellus vel diam fringilla, eu ullamcorper ex iaculis. Praesent et auctor justo. Vestibulum nisl orci, lacinia venenatis leo sit amet, pulvinar tincidunt risus. Phasellus nisl dui, cursus a lectus et, interdum ullamcorper libero.</p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
