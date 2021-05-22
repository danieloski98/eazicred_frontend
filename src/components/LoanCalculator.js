import React from 'react';

import { currency } from './users/LoansList';

const LoanCalculator = () => {
    const [form, setForm] = React.useState({
        amount: 1000,
        period: 1,
        rate: 7
    })

    function loanRate(rateVal){
        return (rateVal/100) * form.rate * form.period;
    }

    function interest(){
        const amount = parseInt(form.amount)
        const fv = loanRate(amount) + amount
        return fv / form.period
    }

    const handleChange = e => {
        const {name, value} = e.target
        setForm({...form, [name]: value})
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
                                        <input onChange={handleChange} name="amount" value={form.amount} type="text" placeholder="₦0.00" id="amount"/>
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
                                {/*<input disabled type="submit" className="btn btn-dark" value="Calculate"/>*/}
                            </form>
                        </div>
                        <div className="results">
                            <div>
                                <label>Interest Rate</label>
                                <p className="results-interest">{form.rate}%</p>
                            </div>
                            <div>
                                <label>Monthly Payment</label>
                                <p className="results-payment">{currency.format(loanRate(form.amount))}</p>
                            </div>
                            <div>
                                <label>Total Interest</label>
                                <p className="results-payment">{currency.format(interest())}</p>
                            </div>
                            <div>
                                <label>Duration</label>
                                <p className="results-duration">{form.period} month</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default LoanCalculator;