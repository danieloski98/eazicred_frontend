import React, { useState } from 'react';

import { currency } from './users/LoansList';

const LoanCalculator = () => {
    const [form, setForm] = useState({
        amount: 1000,
        period: 1,
        rate: 20
    })
    const [results, setResults] = useState({
        monthlyPayment: 0,
        interestRate: form.rate,
        totalInterest: 0,
    });

    function getResults() {
        const {amount, rate, period} = form

        const principal = parseFloat(amount);
        const interest = parseFloat(rate) / 100;
        const months = parseFloat(period);

        const monthlyInterest = interest * principal;
        const totalInterest = monthlyInterest * months;

        const totalPayment = principal + totalInterest;
        const monthlyPayment =  parseInt((totalPayment / months).toFixed(2));

        setResults({interestRate: interest, monthlyPayment, totalInterest})
    }

    const handleChange = e => {
        const {name, value} = e.target
        setForm({...form, [name]: value})
    }

    const period = () => {
        if (form.period > 1) {
            return `${form.period} months`;
        } else {
            return `${form.period} month`;
        }
    }

    return (
        <section className="calculator">
            <div className="container">
                <div className="calculator__inner">
                    <div>
                        <div className="calculation">
                            <h2 className="h-2">Loan Calculator</h2>
                            <p>Quickly calculate, how much you have to pay back</p>
                            <form className="form">
                                <div className="form-grid">
                                    <div className="calculation__amount">
                                        <label htmlFor={"amount"}>Amount</label>
                                        <input onChange={handleChange} name="amount" value={form.amount} max={250000} type="number" placeholder="₦0.00" id="amount"/>
                                    </div>
                                    <div className="calculation__period">
                                        <label htmlFor={"period"}>Period (Months)</label>
                                        <input onChange={handleChange} name="period" value={form.period} type="number" id="period" placeholder="Month(s)"/>
                                    </div>
                                    <div className="calculation__interest">
                                        <label>Interest Rate</label>
                                        <input disabled onChange={handleChange} value={form.rate} name={"rate"} type="number" id="interest" placeholder="In numbers only"/>
                                    </div>
                                </div>
                                <button type="button" className="btn btn-blue" onClick={getResults}>Calculate</button>
                            </form>
                        </div>
                        <div className="results">
                            <div>
                                <label>Interest Rate</label>
                                <p className="results-interest">{form.rate}%</p>
                            </div>
                            <div>
                                <label>Monthly Payment</label>
                                <p className="results-payment">{currency.format(results.monthlyPayment)}</p>
                                {/*<p className="results-payment">{currency.format(loanRate(form.amount))}</p>*/}
                            </div>
                            <div>
                                <label>Total Interest</label>
                                <p className="results-payment">{currency.format(results.totalInterest)}</p>
                                {/*<p className="results-payment">{currency.format(interest())}</p>*/}
                            </div>
                            <div>
                                <label>Duration</label>
                                <p className="results-duration">{period()}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default LoanCalculator;