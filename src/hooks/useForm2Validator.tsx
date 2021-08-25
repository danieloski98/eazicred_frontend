import React from 'react'
import useForm from '../Features/Dashboard/Components/Paydayloan/useForm'

export default function useForm2Validator() {
    const { formik } = useForm();
    const canNavigate = async (): Promise<boolean> => {
        if (formik.errors.state || formik.errors.landmark || formik.errors.LGA_of_residence || formik.errors.home_address) {
            return false;
        }
        return true;
    }
    return {
        canNavigate
    }
}
