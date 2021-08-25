import React from 'react'
import { useToast } from '@chakra-ui/react'

interface IProps {
  move: Function;
  values: any;
  handleChange: any;
  handleBlur: any;
  errors: any;
}


export default function PaydayloanForm2({ values, handleChange, handleBlur, errors, move}: IProps) {
  // const { user } = useUser();
  const toast = useToast();



  const submit = async () => {
    if (errors.state || errors.landmark || errors.LGA_of_residence || errors.home_address) {
      toast({
        title: 'Attention',
        description: 'You have to fill in the form properly to continue',
        position: 'top',
        status: 'error',
        isClosable: true
      });
      return;
    } else {
      console.log(values)
      move(3, errors);
    }
   }


  return (
    <div className="w-full flex flex-col">
      <div className="w-full flex xl:flex-row lg:flex-row md:flex-col sm:flex-col">

        <div className="flex-1 flex flex-col">
            <label>LGA of residence</label>
            <input type="text" name="LGA_of_residence" value={values.LGA_of_residence} onChange={handleChange} onBlur={handleBlur}  className="xl:w-4/5 lg:w-4/5 md:w-full sm:w-full rounded-lg border-2 border-gray-200 h-16 mt-3 p-3"/>
            {
              errors.LGA_of_residence && <p className="text-sm text-red-500 mt-3">{errors.LGA_of_residence}</p>
            }
        </div>

        <div className="flex-1 flex flex-col xl:mt-0 lg:mt-0 md:mt-14 sm:mt-14">
            <label>State</label>
            <input type="text" name="state" value={values.state} onChange={handleChange} onBlur={handleBlur} className="xl:w-4/5 lg:w-4/5 md:w-full sm:w-full rounded-lg border-2 border-gray-200 h-16 mt-3 p-3"/>
            {
              errors.state && <p className="text-sm text-red-500 mt-3">{errors.state}</p>
            }
        </div>

      </div>

      <div className="w-full flex xl:flex-row lg:flex-row md:flex-col sm:flex-col mt-14">

        <div className="flex-1 flex flex-col">
            <label>Landmark</label>
            <input  type="text" name="landmark" value={values.landmark} onChange={handleChange} onBlur={handleBlur} className="xl:w-4/5 lg:w-4/5 md:w-full sm:w-full rounded-lg border-2 border-gray-200 h-16 mt-3 p-3"/>
            {
              errors.landmark && <p className="text-sm text-red-500 mt-3">{errors.landmark}</p>
            }
        </div>

        <div className="flex-1 flex flex-col xl:mt-0 lg:mt-0 md:mt-14 sm:mt-14">
            <label>Home Address</label>
            <input  type="text" name="home_address" value={values.home_address} onChange={handleChange} onBlur={handleBlur} className="xl:w-4/5 lg:w-4/5 md:w-full sm:w-full rounded-lg border-2 border-gray-200 h-16 mt-3 p-3"/>
            {
              errors.home_address && <p className="text-sm text-red-500 mt-3">{errors.home_address}</p>
            }
        </div>

      </div>

      <div className="xl:w-88/100 lg:w-11/12 md:w-full sm:w-full flex justify-end mt-10 mb-10">
        <button className="xl:w-56 lg:w-56 md:w-full sm:w-full h-14 rounded-lg text-white bg-customGreen" onClick={submit}>Continue</button>
      </div>

    </div>
  )
}
