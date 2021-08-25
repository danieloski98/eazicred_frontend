import React from "react";
import useForm from "../Features/Dashboard/Components/Paydayloan/useForm";

export default function useForm4Validator() {
  const { formik } = useForm();

  const canNavigate = async (): Promise<boolean> => {
    await formik.validateForm()
    if (
      formik.errors.current_paydate ||
      formik.errors.existing_loan ||
      formik.errors.loan_amount ||
      formik.errors.loan_tenure ||
      formik.errors.account_number ||
      formik.errors.account_name ||
      formik.errors.bank_name
    ) {
      return false;
    }
    return true;
  };
  return {
    canNavigate: canNavigate,
  };
}
