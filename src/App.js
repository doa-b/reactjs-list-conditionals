import React, { Component } from 'react';
import './App.css';
import Validation from './ValidationComponent/ValidationComponent';
import Char from './CharComponent/CharComponent'


class App extends Component {

    state = {
        textInput: ''

    }

    textLengthHandler = (event) => {
        let myTekst = event.target.value;
        this.setState( { textInput: myTekst});
    }

    deleteCharHandler = (index) => {
        let text = [...this.state.textInput]
        text.splice(index,1);
        const Updatedtext = text.join('')
        this.setState ( { textInput: Updatedtext.toString() } )

    }

    render() {

        const Textcharacters = [...this.state.textInput]

        const listofCharacters = (<div>
                { Textcharacters.map((c, index) => {
                    return <Char character = {c}
                                 click={ () => this.deleteCharHandler(index)}
                                 key={index}   />
                })}
            </div>
        )
    return (
      <div className="App">
        <ol>
          <li>Create an input field (in App component) with a change listener which outputs the length of the entered text below it (e.g. in a paragraph).</li>
          <li>Create a new component (=> ValidationComponent) which receives the text length as a prop</li>
          <li>Inside the ValidationComponent, either output "Text too short" or "Text long enough" depending on the text length (e.g. take 5 as a minimum length)</li>
          <li>Create another component (=> CharComponent) and style it as an inline box (=> display: inline-block, padding: 16px, text-align: center, margin: 16px, border: 1px solid black).</li>
          <li>Render a list of CharComponents where each CharComponent receives a different letter of the entered text (in the initial input field) as a prop.</li>
          <li>When you click a CharComponent, it should be removed from the entered text.</li>
        </ol>
        <p>Hint: Keep in mind that JavaScript strings are basically arrays!</p>
          <hr />

          <input type="text" onChange={(event) => this.textLengthHandler(event)}
                        value={this.state.textInput}/>
          <p>{this.state.textLength}</p>
          <Validation textLength = {this.state.textInput.length} />
          {listofCharacters}
      </div>
    );
  }
}

export default App;
