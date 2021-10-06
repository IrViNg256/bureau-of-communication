import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header> 
      <address className="return-address">
        Lopes de Almeido, Evanildo<br/>
        Bläsiring 161 <br/>
        4057 Basel <br/>    
      </address>

      <time datetime="2012-12-01">01 Dezember, 2012</time>
    </header>

    <h1>
      Statement of Gratitude
    </h1>

    <div className="content"> {/* use this div only if it is required for styling */}
        <p>
          Dear <input type="text" />,
          <br className="salution" />

          I wish to take a moment to properly thank you for <input type="text" />. You should know that
          I am <input type="text" /> grateful. Your action shows a most remarkable level of <input type="text" />.
          While lesser individuals would have merely <input type="text" />, you chose to <input type="text" />. I am
          honored to have such a <input type="text" /> human being as a <input type="text" />. To express the true
          extent of my appreciation, I would have to <input type="text" />. Well done!
        </p>
      </div>

      <p className="adios">
        Sincerely, your <input type="text" />,
        <br className="greets" />
        <input type="text" /> <br/>
        Hauswart Binningerstrasse 19/23
      </p>
    </div>
  );
}

export default App;
