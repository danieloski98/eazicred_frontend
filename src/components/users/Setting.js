import React from 'react';

import MessageAlert from '../../Common/MessageAlert';
import DashboardContainer from './DashboardContainer';

const Setting = ({field, handleChange, handleSubmit, showMsg}) => {
    return (
        <DashboardContainer page={"Settings"}>
            <div className="main__middle">
                <h2 className="h2-db">Account Settings</h2>
                <p className="p2-db">Change basic setting in your account</p>
            </div>
            {showMsg && <MessageAlert/>}
            <form className="main__form" onSubmit={handleSubmit}>
                <div className="input-groups">
                    <div className="input-group">
                        <label htmlFor={'oldpassword'}>Old Password</label>
                        <input onChange={handleChange} value={field.oldpassword} name="oldpassword" id={'oldpassword'} type="password" placeholder="**********"/>
                    </div>
                    <div className="input-group">
                        <label htmlFor={'newpassword'}>New Password</label>
                        <input onChange={handleChange} value={field.newpassword} name="newpassword" id={'newpassword'} type="password" placeholder="**********"/>
                    </div>
                </div>
                <button type="submit" className="btn btn-blue">Update</button>
            </form>
        </DashboardContainer>
    );
}

export default Setting;