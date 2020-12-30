import React from 'react';


function Child() {
    return (
        <div className="container">
            <h1 className="text-center">EXPENSE TRACKER</h1>
            <h3>YOUR BALANCE <br /> $260.00</h3>

            <div className="expense-container">
                <h3>INCOME <br /> $260.00</h3>
                <h3>EXPENSE <br /> $260.00</h3>
            </div>
            <h3>History</h3>
            <hr />
            <ul className="transaction-list">
                <li>
                    <span>Cash</span>
                    <span>+500</span>
                </li>
                <li>
                    <span>Book</span>
                    <span>+500</span>
                </li>
                <li>
                    <span>Camera</span>
                    <span>+500</span>
                </li>
            </ul>
            <h3>Add New Transaction</h3>
            <hr />
            <form className="transaction-form">
                <label>
                    Enter Descrption<br />
                    <input type="text" required />
                </label>
                <br />
                <label>
                    Enter Amount<br />
                    <input type="number" required/>
                </label>
                <br />
                <input type="submit" value="Add Transaction" />
            </form>
        </div>
    );
}

export default Child;