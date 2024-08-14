import React, { useEffect } from "react";
import "./App.css";
import Balance from "./Components/Balance/Balance";
import Transaction from "./Components/Transaction/Transaction";
import History from "./Components/History/History";

function App() {
  const [inputText, setInputText] = React.useState("");
  const [inputAmount, setInputAmount] = React.useState("");
  const [isActive, setIsActive] = React.useState(false);
  const [balance, setBalance] = React.useState([
    {
      id: 1,
      amount: 2500,
      description: "Salary",
    },
    {
      id: 2,
      amount: -45,
      description: "Azerishiq",
    },
    {
      id: 3,
      amount: 2,
      description: "Cashback",
    },
  ]);

  // let money="";
  var inc = 0,
    exp = 0;

  const capitalizeFirstLowercaseRest = str => {
    return (
      str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()
    );
  };
  function addObj(textInput, amountInput) {
    const obj = {
      id: Math.random() * 100,
      amount: amountInput,
      description: textInput,
    };
    setBalance([...balance, obj]);
  }
  function handleSubmit(e) {
    e.preventDefault();
    if (inputText.trim()=="" || inputAmount.trim()=="" ){
      setIsActive(true);
    }
   
    else{
      setIsActive(false);
      addObj(capitalizeFirstLowercaseRest(inputText)
      , inputAmount);
      setInputText("");
      setInputAmount("");
    }
   
  }

  balance.forEach((obj) => {
    +obj.amount > 0 ? (inc += +obj.amount) : (exp += +obj.amount);
  
      
    
  });
  const [incExp, setincExp]=React.useState({
    income: inc,
    expense: exp,

  })
  useEffect(()=>{
    setincExp({
      income: inc,
      expense: exp,
  })
  }, [balance])
  console.log(incExp)

  function changeBalance(amount){
    if(amount>0){
      setincExp((prev)=>{
        return{
          ...prev,
          income: incExp.income-amount,
        }

      })
    }else if(amount<0){
      setincExp((prev)=>{
        return{
          ...prev,
          expense: incExp.expense-amount,
        }


      })
    }

  }

 
  let fullBalance=incExp.income+incExp.expense;


  return (
    <div className="App">
      <h1>Expense Tracker</h1>
      <h2>Your balance ${fullBalance}</h2>

      <Balance inc={incExp.income} exp={incExp.expense} />
      <h3 className="history-title">History</h3>
      <div className="history">
      {balance.map((obj, index) => {
        if (obj.amount > 0) {
          return <History text={obj.description} amount={obj.amount} key={index} changeBalance={changeBalance} income />;
        } else return <History text={obj.description} amount={obj.amount} key={index} changeBalance={changeBalance} expense />;
      })}
      </div>
      <h3 className="transaction-title"> Add new transaction</h3>
      <form>
      <div className={isActive ? "isactive" : "isnotactive"}>
      Please fill out all fields. 
      </div>


        <Transaction
          word="Text"
          inputText={inputText}
          setInputText={setInputText}
          placeholder="Enter text..."
        />
        <Transaction
          word="Amount"
          word2="(negative-expense, positive-income)"
          inputText={inputAmount}
          setInputText={setInputAmount}
          placeholder="Enter amount..."


        />
        <button onClick={handleSubmit}>Add transaction</button>
      </form>
    </div>
  );
}
export default App;
