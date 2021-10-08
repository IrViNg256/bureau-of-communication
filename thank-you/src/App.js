import React, { useState } from 'react';
import './App.css';

function App() {
  const [state, setState] = useState({
    recipient: "",
    action: "",
    adjective: "",
    virtue: "",
    inferior: "",
    superior: "",
    complimentary: "",
    title: "",
    generosity: "",
    relationship: "",
    myName: "",
  });

  const [defaultForm, setDefaultForm] = useState(state);
  const [carta, setCarta] = useState(state);
  const [read, setRead] = useState(false);
  const [status, setStatus] = useState("inital");

  function handleSubmit(event) {
    // Evita comportamiento default
    event.preventDefault();
    setCarta(state);
    setRead(true);
    setStatus("complete");
  }
  
  function handleReset(event) {
    event.preventDefault();
    setCarta(defaultForm);
    setState(defaultForm);
    setRead(false);
    setStatus("initial");
  }

  function handleChange(event) {
    const value = event.target.value;
    setState({
      ...state,
      [event.target.name]: value,
    });
  }

  return (
    <div className="App">

    <form className="form-horizontal" onSubmit={handleSubmit}>
      <fieldset>

      <legend>Gratitude Formal Notice Generator</legend>

      <div className="form-group">
        <label className="col-md-4 control-label" htmlFor="recipientText">Recipient</label>  
        <div className="col-md-4">
          <input
            id="recipientText"
            name="recipient"
            type="text"
            className="form-control input-md"
            value={state.recipient}
            onChange={handleChange}
            readOnly={read}
          />
        </div>
      </div>

      <div className="form-group">
        <label className="col-md-4 control-label" htmlFor="actionText">Action leading to your gratitude</label>  
        <div className="col-md-4">
          <input
            id="actionText"
            name="action"
            type="text" 
            className="form-control input-md"
            value={state.action}
            onChange={handleChange}
            readOnly={read}
          />
        </div>
      </div>

      <div className="form-group">
        <label className="col-md-4 control-label" htmlFor="adjectiveText">Adjective</label>  
        <div className="col-md-4">
          <input
            id="adjectiveText"
            name="adjective"
            type="text"
            className="form-control input-md"
            value={state.adjective}
            onChange={handleChange}
            readOnly={read}
          />
        </div>
      </div>

      <div className="form-group">
        <label className="col-md-4 control-label" htmlFor="virtueText">Virtue of quality</label>  
        <div className="col-md-4">
          <input
            id="virtueText"
            name="virtue"
            type="text"
            className="form-control input-md"
            value={state.virtue}
            onChange={handleChange}
            readOnly={read}
          /> 
        </div>
      </div>

      <div className="form-group">
        <label className="col-md-4 control-label" htmlFor="inferiorText">Inferior action</label>  
        <div className="col-md-4">
          <input
            id="inferiorText"
            name="inferior"
            type="text"
            className="form-control input-md"
            value={state.inferior}
            onChange={handleChange}
            readOnly={read}
          />
        </div>
      </div>

      <div className="form-group">
        <label className="col-md-4 control-label" htmlFor="superiorText">Recipient's superior action</label>  
        <div className="col-md-4">
          <input
            id="superiorText"
            name="superior"
            type="text" 
            className="form-control input-md"
            value={state.superior}
            onChange={handleChange}
            readOnly={read}
          />
        </div>
      </div>

      <div className="form-group">
        <label className="col-md-4 control-label" htmlFor="complimentaryText">Complimentary adjective</label>  
        <div className="col-md-4">
          <input
            id="complimentaryText"
            name="complimentary"
            type="text"
            className="form-control input-md"
            value={state.complimentary}
            onChange={handleChange}
            readOnly={read}
          />  
        </div>
      </div>

      <div className="form-group">
        <label className="col-md-4 control-label" htmlFor="titleText">Title of recipient</label>  
        <div className="col-md-4">
          <input
            id="titleText"
            name="title"
            type="text"
            className="form-control input-md"
            value={state.title}
            onChange={handleChange}
            readOnly={read}
          /> 
        </div>
      </div>

      <div className="form-group">
        <label className="col-md-4 control-label" htmlFor="generosityText">Extreme act of generosity</label>  
        <div className="col-md-4">
          <input
            id="generosityText"
            name="generosity"
            type="text"
            className="form-control input-md"
            value={state.generosity}
            onChange={handleChange}
            readOnly={read}
          />
        </div>
      </div>

      <div className="form-group">
        <label className="col-md-4 control-label" htmlFor="relationshipText">Relationship to recipient</label>  
        <div className="col-md-4">
          <input
            id="relationshipText"
            name="relationship"
            type="text"
            className="form-control input-md"
            value={state.relationship}
            onChange={handleChange}
            readOnly={read}
          /> 
        </div>
      </div>

      <div className="form-group">
        <label className="col-md-4 control-label" htmlFor="myNameText">Your name</label>  
        <div className="col-md-4">
          <input
            id="myNameText"
            name="myName"
            type="text"
            className="form-control input-md"
            value={state.myName}
            onChange={handleChange}
            readOnly={read}
          />  
        </div>
      </div>

      <div className="botones">
        <div className="div-generate">
          <button type="submit" id="button-generate">Generate</button>
        </div>

        <div className="div-reset">
          <button type="submit" id="button-reset" onClick={handleReset}>Reset</button>
        </div>
      </div>

      </fieldset>
    </form>

    {status === "complete" && <React.Fragment>
      <div className="headLeatter"> 
        <address className="return-address">
          Lopes de Almeido, Evanildo<br/>
          Bläsiring 161 <br/>
          4057 Basel <br/>    
        </address>

        <time dateTime="2012-12-01">01 Dezember, 2012</time>
      </div>

      <h1 className="titulo">
        Statement of Gratitude
      </h1>

      <div className="content"> {/* use this div only if it is required for styling */}
        <p>
          Dear {carta.recipient},
          <br className="salution" />

          I wish to take a moment to properly thank you for {carta.action}. You should know that
          I am {carta.adjective} grateful. Your action shows a most remarkable level of {carta.virtue}.
          While lesser individuals would have merely {carta.inferior}, you chose to {carta.superior}. I am
          honored to have such a {carta.complimentary} human being as a {carta.title}. To express the true
          extent of my appreciation, I would have to {carta.generosity}. Well done!
        </p>
      </div>

      <p className="adios">
        Sincerely, your {carta.relationship},
        <br className="greets" />
        {carta.myName} <br/>
        Hauswart Binningerstrasse 19/23
      </p>
    </React.Fragment>}
    </div>
  );
}

export default App;
