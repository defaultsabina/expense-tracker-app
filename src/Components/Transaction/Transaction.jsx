import React from 'react';
import "./transaction.css"
// import TransactionList from './TransactionList';

function Transaction ({word, inputText, setInputText, placeholder, word2}){
    // const [inputTask, setInputTask]=React.useState("");
    function handleInput(e){
        setInputText(e.target.value);
  
      }


    return(
            <div className="transaction">
            <label>{word}</label>
            <label>{word2}</label>
            <input
            type="text"
            placeholder={placeholder}
            value={inputText}
            onChange={handleInput}
            
            />   
        </div>

       
    )

}
export default Transaction;