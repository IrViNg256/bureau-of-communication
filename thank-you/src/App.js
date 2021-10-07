import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">

    <form className="form-horizontal">
      <fieldset>

      <legend>Gratitude Formal Notice Generator</legend>

      <div className="form-group">
        <label className="col-md-4 control-label" for="recipientText">Recipient</label>  
        <div className="col-md-4">
        <input id="recipientText" name="recipientText" type="text"  className="form-control input-md" />
        </div>
      </div>

      <div className="form-group">
        <label className="col-md-4 control-label" for="actionText">Action leading to your gratitude</label>  
        <div className="col-md-4">
        <input id="actionText" name="actionText" type="text"  className="form-control input-md" />
        </div>
      </div>

      <div className="form-group">
        <label className="col-md-4 control-label" for="adjectiveText">Adjective</label>  
        <div className="col-md-4">
        <input id="adjectiveText" name="adjectiveText" type="text"  className="form-control input-md" />
        </div>
      </div>

      <div className="form-group">
        <label className="col-md-4 control-label" for="virtueText">Virtue of quality</label>  
        <div className="col-md-4">
        <input id="virtueText" name="virtueText" type="text" className="form-control input-md" /> 
        </div>
      </div>

      <div className="form-group">
        <label className="col-md-4 control-label" for="inferiorText">Inferior action</label>  
        <div className="col-md-4">
        <input id="inferiorText" name="inferiorText" type="text"  className="form-control input-md" />
        </div>
      </div>

      <div className="form-group">
        <label className="col-md-4 control-label" for="superiorText">Recipient's superior action</label>  
        <div className="col-md-4">
        <input id="superiorText" name="superiorText" type="text"  className="form-control input-md" />
        </div>
      </div>

      <div className="form-group">
        <label className="col-md-4 control-label" for="complimentaryText">Complimentary adjective</label>  
        <div className="col-md-4">
        <input id="complimentaryText" name="complimentaryText" type="text"  className="form-control input-md" />  
        </div>
      </div>

      <div className="form-group">
        <label className="col-md-4 control-label" for="titleText">Title of recipient</label>  
        <div className="col-md-4">
        <input id="titleText" name="titleText" type="text" className="form-control input-md" /> 
        </div>
      </div>

      <div className="form-group">
        <label className="col-md-4 control-label" for="generosityText">Extreme act of generosity</label>  
        <div className="col-md-4">
        <input id="generosityText" name="generosityText" type="text"  className="form-control input-md" />
        </div>
      </div>

      <div className="form-group">
        <label className="col-md-4 control-label" for="relationshipText">Relationship to recipient</label>  
        <div className="col-md-4">
        <input id="relationshipText" name="relationshipText" type="text"  className="form-control input-md" /> 
        </div>
      </div>

      <div className="form-group">
        <label className="col-md-4 control-label" for="nameText">Your name</label>  
        <div className="col-md-4">
        <input id="nameText" name="nameText" type="text"  className="form-control input-md" />  
        </div>
      </div>

      <div className="botones">
        <div className="div-generate">
          <button type="submit" id="button-generate">Generate</button>
        </div>

        <div className="div-reset">
          <button type="submit" id="button-reset">Reset</button>
        </div>
      </div>

      </fieldset>
    </form>

      <div className="headLeatter"> 
      <address className="return-address">
        Lopes de Almeido, Evanildo<br/>
        Bläsiring 161 <br/>
        4057 Basel <br/>    
      </address>

      <time datetime="2012-12-01">01 Dezember, 2012</time>
    </div>

    <h1 className="titulo">
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
