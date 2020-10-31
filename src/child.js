import React from 'react';

function Child() {
    return (
        <div className="container">
            <h1 className="text-centre">Expense Tracker</h1>

            <h3>Your Balance <br /> $260</h3>

            <div className="expense-container">
                <h3>INCOME <br /> $500</h3>
                <h3>EXPENSE<br /> $240</h3>
            </div>

        </div>
    );
}

export default Child;
