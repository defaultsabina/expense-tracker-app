import "./balance.css"
function Balance ({inc, exp}){
    return (
        <div className="balance"> 
            <div className="income">
                <h3 className="income-title">INCOME</h3>
                <p>${inc}</p> 
            </div>
            <div className="expense">
                <h3 className="expense-title">EXPENSE</h3> 
                <p>${exp}</p>
            </div> 
        </div>
    )

}
export default Balance;