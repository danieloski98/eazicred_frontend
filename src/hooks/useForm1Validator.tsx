import React from "react";
import useForm from "../Features/Dashboard/Components/Paydayloan/useForm";

export default function useForm1Validator() {
  const { formik } = useForm();

  const canNavigate = async (): Promise<boolean> => {
    await formik.validateForm()
    if (
      formik.errors.firstname ||
      formik.errors.lastname ||
      formik.errors.DOB ||
      formik.errors.BVN ||
      formik.errors.Means_of_ID ||
      formik.errors.ID_number ||
      formik.errors.expiry_date ||
      formik.errors.phone ||
      formik.errors.date_issued ||
      formik.errors.marital_status ||
      formik.errors.next_of_kin_surname ||
      formik.errors.next_of_kin_firstname ||
      formik.errors.next_of_kin_relationship ||
      formik.errors.next_of_kin_phone ||
      formik.errors.next_of_kin_address
    ) {
      return false;
    }
    return true;
  };
  return {
    canNavigate: canNavigate,
  };
}
