import React from 'react';

import MessageAlert from '../Common/MessageAlert';

const FormValidation = ({formErrors}) => {
    return (
        <div className='formErrors'>
            {Object.keys(formErrors).map((fieldName, i) => {
                if(formErrors[fieldName].length > 0){
                    return (
                        <MessageAlert key={i}>
                            <input
                                type="button"
                                value={`${fieldName.toLocaleUpperCase()}: ${formErrors[fieldName]}`}
                                disabled
                                className="alert alert-red"
                            />
                        </MessageAlert>
                    )
                } else {
                    return '';
                }
            })}
        </div>
    );
}

export default FormValidation;