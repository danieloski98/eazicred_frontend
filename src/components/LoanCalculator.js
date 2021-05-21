import React from 'react';

const LoanCalculator = () => {
    const [form, setForm] = React.useState({
        amount: '',
        period: 1,
        rate: 20
    })

    function loanRate(rateVal){
        return (rateVal/100) * form.rate;
    }

    function interest(amount, time){
        return loanRate(amount) * time
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
                                        <input onChange={handleChange} name="period" min={1} value={form.period} type="number" id="period" placeholder="Month(s)"/>
                                    </div>
                                    <div className="calculation__interest">
                                        <label>Interest Rate</label>
                                        <input onChange={handleChange} value={form.rate} name={"rate"} type="number" min={20} id="interest" placeholder="In numbers only"/>
                                    </div>
                                </div>
                                <input disabled type="submit" className="btn btn-dark" value="Calculate"/>
                            </form>
                        </div>
                        <div className="results">
                            <div>
                                <label>Interest Rate</label>
                                <p className="results-interest">{form.rate}%</p>
                            </div>
                            <div>
                                <label>Monthly Payment</label>
                                <p className="results-payment">₦{loanRate(form.amount)}</p>
                            </div>
                            <div>
                                <label>Total Interest</label>
                                <p className="results-payment">₦{interest(form.amount, form.period)}</p>
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