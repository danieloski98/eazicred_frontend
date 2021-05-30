import React from 'react';

import MessageAlert from '../../Common/MessageAlert';
import DashboardContainer from './DashboardContainer';

const Profile = () => {
    return (
        <>
            <div className="main__middle">
                <h2 className="h2-db text-3xl font-bold">Profile</h2>
                <p className="p2-db text-xl font-semibold mt-6">Manage your Eazicred Profile</p>
            </div>
            {/* {showMsg && <MessageAlert/>} */}
            <div className="main__form flex xl:flex-row-reverse lg:flex-row-reverse md:flex-col sm:flex-col mt-10">


              <div className="flex-1 w-full">
                <div className="input-group flex flex-col">
                    <label htmlFor={'newpassword'}>First name</label>
                    <input  name="newpassword" id={'newpassword'} type="password" placeholder="**********" className="xl:w-3/5 lg:w-3/5 md:w-full sm:w-full rounded-lg border-2 border-gray-200 h-16 mt-3 p-3"/>
              </div>
              </div>

              <div className="input-groups flex-1 xl:mt-0 lg:mt-0 md:mt-10 sm:mt-10">
                <div className="input-group flex flex-col">
                    <label htmlFor={'oldpassword'}>Last name</label>
                    <input name="oldpassword" id={'oldpassword'} type="password" placeholder="**********" className="xl:w-3/5 lg:w-3/5 md:w-full sm:w-full rounded-lg border-2 border-gray-200 h-16 mt-3 p-3" />
                </div>
                <div className="input-group mt-10 flex flex-col">
                    <label htmlFor={'newpassword'}>Phone</label>
                    <input  name="newpassword" id={'newpassword'} type="password" placeholder="**********" className="xl:w-3/5 lg:w-3/5 md:w-full sm:w-full rounded-lg border-2 border-gray-200 h-16 mt-3 p-3" />
                </div>
              </div>

          </div>

          <div className="xl:w-4/5 lg:w-4/5 mt-10 flex justify-end">
              <button type="submit" className="xl:w-56 lg:w-56 md:w-full sm:w-full h-20 rounded-lg bg-customGreen text-white">Update</button>
          </div>
        </>
    );
}

export default Profile;
