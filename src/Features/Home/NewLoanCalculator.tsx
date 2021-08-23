import React from 'react'
import { useFormik } from 'formik'
import * as yup from 'yup'

const validationSchema = yup.object({
  months: yup.number().max(6, 'Cannot be greater than 6 months'),
  amount: yup.number().max(500000, 'Cannot be greater than NGN500000.00'),
  interest: yup.number(),
})

export default function NewLoanCalculator() {
  const [results, setResults] = React.useState({interestRate: 0, monthlyPayment: 0, totalInterest: 0})
  const formik = useFormik({
    initialValues: {
      months: 0,
      amount: 0,
      interest: 5,
    },
    onSubmit: () => {},
    validationSchema,
  })

  function getResults() {
    if (!formik.isValid) {
      alert('Please fill in the form properly');
      return;
    }
    // const {amount, rate, period} = form

    const principal = parseFloat(formik.values.amount.toString());
    const interest = parseFloat(formik.values.interest.toString()) / 100;
    const months = parseFloat(formik.values.months.toString());

    const monthlyInterest = interest * principal;
    const totalInterest = monthlyInterest * months;

    const totalPayment = principal + totalInterest;
    const monthlyPayment =  parseInt((totalPayment / months).toFixed(2));

    setResults({interestRate: interest, monthlyPayment, totalInterest})
}

  return (
    <div className="xl:w-11/12 lg:w-11/12 md:w-full sm:w-full xl:h-400px lg:h-400px md:h-auto sm:h-auto bg-white flex xl:flex-row lg:flex-row md:flex-col sm:flex-col rounded-lg mb-16 mx-10 p-10">

      <div className="flex-1">

      <div className="w-full py-10">
        <h1 className="text-4xl font-bold xl:textleft lg:text-left md:text-center sm:text-center">Loan Calculator</h1>
        <p className="mt-6 text-xl xl:textleft lg:text-left md:text-center sm:text-center">Quickly calculate, how much you have to pay back</p>
      </div>

      <div className="w-full h-auto py-10 xl:mt-16 lg:mt-16 md:mt-10 sm:mt-10 flex xl:flex-row lg:flex-row md:flex-col sm:flex-col">
          <div className="flex flex-col xl:mt-0 lg:mt-0 md:mt-10 sm:mt-10">
            <label>Month(s)</label>
            <input type="number" max={4} name="months" value={formik.values.months} onChange={formik.handleChange} onBlur={formik.handleBlur} onFocus={() => formik.setFieldTouched('months', true, true)}  className="xl:w-250px lg:w-250px md:w-full sm:w-full xl:mr-10 lg:mr-10 sm:mr-0 md:mr-0 h-20 border-2 border-gray-300 rounded-lg px-4" />
            { formik.touched.months && formik.errors.months && <p className="text-red-500 text-sm mt-3">{formik.errors.months}</p>}
            <button onClick={getResults} className="mt-10 w-56 h-20 text-white rounded-lg bg-customGreen xl:block lg:block md:hidden sm:hidden">Calculate</button>
          </div>

          <div className="flex flex-col xl:mt-0 lg:mt-0 md:mt-10 sm:mt-10">
            <label>Loan Amount</label>
            <input type="number" max={250000} name="amount" value={formik.values.amount} onChange={formik.handleChange} onBlur={formik.handleBlur} onFocus={() => formik.setFieldTouched('amount', true, true)} className="xl:w-250px lg:w-250px md:w-full sm:w-full xl:mr-10 lg:mr-10 sm:mr-0 md:mr-0 h-20 border-2 border-gray-300 rounded-lg px-4" />
            { formik.touched.amount && formik.errors.amount && <p className="text-red-500 text-sm mt-3">{formik.errors.amount}</p> }
          </div>

          <div className="flex flex-col xl:mt-0 lg:mt-0 md:mt-10 sm:mt-10">
            <label>Interest Rate</label>
            <input type="number" max={250000} name="interest" value={formik.values.interest} onChange={formik.handleChange} onBlur={formik.handleBlur} onFocus={() => formik.setFieldTouched('interest', true, true)} className="xl:w-250px lg:w-250px md:w-full sm:w-full xl:mr-10 lg:mr-10 sm:mr-0 md:mr-0 h-20 border-2 border-gray-300 rounded-lg px-4" />
            { formik.touched.interest && formik.errors.interest && <p className="text-red-500 text-sm mt-3">{formik.errors.interest}</p> }

            <button onClick={getResults} className="mt-10 w-full xl:hidden lg:hidden md:block sm:block h-20 text-white rounded-lg bg-customGreen">Calculate</button>
          </div>
      </div>

      </div>
      <div className="w-300px h-full border-2 border-gray-300 rounded-lg flex flex-col p-10 justify-evenly items-start">
        <div>
          <p>Interest Rate</p>
          <p className="text-4xl font-bold">{formik.values.interest}%</p>
        </div>

        <div className="xl:mt-0 lg:mt-0 md:mt-6 sm:mt-6">
          <p>Monthly Payment</p>
          <p className="text-5xl font-bold">NGN {results.monthlyPayment}.00</p>
        </div>

        <div className="xl:mt-0 lg:mt-0 md:mt-6 sm:mt-6">
          <p>Total Interest</p>
          <p className="text-5xl font-bold">NGN {results.totalInterest}.00</p>
        </div>

        <div className="xl:mt-0 lg:mt-0 md:mt-6 sm:mt-6">
          <p>Duration</p>
          <p className="text-5xl font-bold">{formik.values.months} Month</p>
        </div>
      </div>

    </div>
  )
}
