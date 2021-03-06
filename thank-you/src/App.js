import React, { useState, useRef } from 'react';
import html2canvas from 'html2canvas';
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

  const letterRef = useRef();
  const screenshotRef = useRef();

  const [defaultForm, setDefaultForm] = useState(state);
  const [carta, setCarta] = useState(state);
  const [read, setRead] = useState(false);
  const [screen, setScreen] = useState(false);
  const [status, setStatus] = useState("inital");

  const recipientArr = ["Eugenia", "Mariah", "Clair", "Edith", "Nicolas", "Tamela", "Palmer", "Emmanuel", "Terrance", "Jerome"];
  const actionArr = ["getting my computer", "eating my new doggy", "buying me a piggy", "eating my fried chicken", "making a safe party", "running into a cow", "bringing me an empty bag of Takis", "burning my garden", "using my socks", "eating my last cookie"];
  const adjectiveArr = ["accurately", "deeply", "noiseless", "cheaply", "excited and", "frightened and", "violently", "acceptable", "smelly", "sneaky"];
  const virtueArr = ["patience", "determination", "spontaneity", "flexibility", "kindness", "loyalty", "bravery", "kindness", "peacefullness", "caution"];
  const inferiorArr = ["run away", "fallen asleep", "eaten a taco", "sat", "bought a cake", "stolen my cat", "made a website", "jumped off my roof", "eaten in my pool", "prepared some quesadillas"];
  const superiorArr = ["boil my Oreo", "shoot my pots", "exercise at my kitchen", "baptize my cat", "install Doom on my calculator", "feed my gnomes", "listen to MCR", "sue me", "taste my brownies", "steal my car"];
  const complimentaryArr = ["dull", "simple", "mean", "well-groomed", "shocking", "smart", "chilly", "magestic", "healthy", "purple"];
  const titleArr = ["friend", "enemy", "sworn brother", "ally", "parent", "teacher", "lawyer", "pet", "mechanic", "butler"];
  const generosityArr = ["scream at your house", "collect coins in Super Mario for you", "depart to another country", "kick your neighbour's door", "copy your style", "buy you nuggets", "freeze your smartphone", "defeat Dracula for you", "elect you as my president", "laugh at all your jokes"];
  const relationshipArr = ["friend", "enemy", "sworn brother", "ally", "parent", "teacher", "lawyer", "pet", "mechanic", "butler"];
  const myNameArr = ["Moises", "Beverly", "Corina", "Tod", "Milford", "Febe", "Louis", "Marcelino", "Ashley", "Cyrus"];

  function isEmpty() {
    const arr = Object.keys(state).map((propiedad) => state[propiedad]);
    for (let i = 0; i < arr.length; i++)
    {
      if(arr[i] === "") {
        return true;
      }
    }
    return false;
  }

  function formRNG(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }

  function handleSubmit(event) {
    // Evita comportamiento default
    event.preventDefault();
    if(isEmpty()) {
      alert("??Ingresa todos los campos!");
    } else {
      setCarta(state);
      setRead(true);
      setStatus("complete");
      setScreen(false);
    }
  }
  
  function handleReset(event) {
      event.preventDefault();
      setCarta(defaultForm);
      setState(defaultForm);
      setRead(false);
      setStatus("initial");
      setScreen(false);
  }

  function handleChange(event) {
    const value = event.target.value;
    setState({
      ...state,
      [event.target.name]: value,
    });
  }

  function handleRandom(event) {
    setCarta(defaultForm);
    setRead(false);
    setState({
      recipient: formRNG(recipientArr),
      action: formRNG(actionArr),
      adjective: formRNG(adjectiveArr),
      virtue: formRNG(virtueArr),
      inferior: formRNG(inferiorArr),
      superior: formRNG(superiorArr),
      complimentary: formRNG(complimentaryArr),
      title: formRNG(titleArr),
      generosity: formRNG(generosityArr),
      relationship: formRNG(relationshipArr),
      myName: formRNG(myNameArr),
    });
    setStatus("initial");
  }

  function handlePrint(event) {
    if(status === "complete") {
      setScreen(true);
      html2canvas(letterRef.current).then(function(canvas) {
        screenshotRef.current.appendChild(canvas);
      });
    } else {
      alert("??No hay carta para imprimir!")
    }
  }

  return (
    <div className="App">
    <form className="form-horizontal" onSubmit={handleSubmit}>
      <fieldset>

      <legend>Gratitude Formal Notice Generator</legend>
      <div className="forma">
      <div className="grupo1">
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
          <p className="help-block">Who is the letter addressed to?</p>
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
          <p className="help-block">What did the person do for you to be gratefull?</p>
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
          <p className="help-block">What adjective could describe why you are grateful?</p>
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
          <p className="help-block">What adjective could describe the actions of the person?</p>
        </div>
      </div>   </div>

         <div className="grupo1">

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
          <p className="help-block">What was the minimum action the person could have done?</p>
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
          <p className="help-block">What action the person did for you to be gratefull?</p>
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
          <p className="help-block">What adjective could describe the person?</p>
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
          <p className="help-block">What does that person mean to you?</p>
        </div>
      </div> </div>

         <div className="grupo1">

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
          <p className="help-block">What are you going to do to show you are grateful?</p>
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
          <p className="help-block">What is your relationship with that person?</p>
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
          <p className="help-block">Whats your name?</p> 
        </div>
      </div>

      <div className="botones">
        <div className="div-generate">
          <button type="submit" id="button-generate">Generate</button>
        </div>

        <div className="div-reset">
          <button type="reset" id="button-reset" onClick={handleReset}>Reset</button>
        </div>

        <div className="div-random">
          <button type="button" id="button-random" onClick={handleRandom}>Random</button>
        </div>

        <div className="div-print">
          <button type="button" id="button-print" onClick={handlePrint}>Print</button>
        </div>
      </div>
       </div>  </div>  
      </fieldset>
    </form>

    {screen === true &&<div className="div-screenshot" ref={screenshotRef}>
      <h2>Screenshot</h2>

    </div>}

    {status === "complete" && <div className="fullLetter" ref={letterRef}> 
      <h1 className="titulo">
        Statement of Gratitude
      </h1>

      <div className="content">
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
        {carta.myName}
      </p>
    </div>}
    </div>
  );
}

export default App;
