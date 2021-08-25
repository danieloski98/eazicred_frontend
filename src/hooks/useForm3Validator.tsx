import React from "react";
import useForm from "../Features/Dashboard/Components/Paydayloan/useForm";

export default function useForm3Validator() {
  const { formik } = useForm();

  const canNavigate = async (): Promise<boolean> => {
    await formik.validateForm()
    if (
      formik.errors.employment_status ||
      formik.errors.current_employer ||
      formik.errors.current_employer_address ||
      formik.errors.current_employer_landmark ||
      formik.errors.current_employer_LGA ||
      formik.errors.current_employer_state ||
      formik.errors.current_employer_office_number ||
      formik.errors.department ||
      formik.errors.date_issued ||
      formik.errors.job_title 
    ) {
      return false;
    }
    return true;
  };
  return {
    canNavigate: canNavigate,
  };
}
