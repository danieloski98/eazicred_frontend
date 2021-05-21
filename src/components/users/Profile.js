import React from 'react';

import MessageAlert from '../../Common/MessageAlert';
import DashboardContainer from './DashboardContainer';

const Profile = ({state, showMsg, field, handleChange, handleSubmit}) => {
    return (
        <DashboardContainer page={"Page"}>
            <div className="main__middle">
                <h2 className="h2-db">Profile</h2>
                <p className="p2-db">Manage your Eazicred Profile</p>
            </div>
            {showMsg && <MessageAlert/>}
            <form className="main__form" onSubmit={handleSubmit}>
                <div className="input-groups">
                    <div className="input-group">
                        <label htmlFor="firstname">First Name</label>
                        <input name="firstname" value={field.firstname} onChange={handleChange} id="firstname" type="text" placeholder="John" />
                    </div>
                    <div className="input-group">
                        <label htmlFor="lastname">Last Name</label>
                        <input name="lastname" value={field.lastname} onChange={handleChange} id="lastname" type="text" placeholder="Doe" />
                    </div>
                    <div className="input-group">
                        <label htmlFor="lastname">Phone Number</label>
                        <input name="phone" value={field.phone} onChange={handleChange} id="phone" type="text" placeholder="080 *** *** ***" />
                    </div>
                </div>
                <button disabled={state.loading} type={"submit"} className="btn btn-blue">Update</button>
            </form>
        </DashboardContainer>
    );
}

export default Profile;