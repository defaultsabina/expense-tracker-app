import  "./history.css";
function History ({text, amount, income, expense, changeBalance}){
    function deleteParent(e){
        const parent=e.target.parentElement.parentElement.parentElement;
        const child=e.target.parentElement.parentElement;
        parent.removeChild(child);
        changeBalance(amount)


        
    }
    return (
    <div className="history-part">
        {income && <span className="my-income"> <div className="hide" onClick={deleteParent}> X</div><h4 className="my-income-amount">{text}</h4><h3 className="my-income-description">$ {amount}</h3></span>}
        {expense && <span className="my-expense"> <div className="hide" onClick={deleteParent}> X</div><h4 className="my-expense-amount">{text}</h4><h3 className="my-expense-description">$ {amount}</h3></span>}
    </div>
    )


}
export default History;