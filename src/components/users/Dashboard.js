import React, { useEffect } from 'react';

import { connect } from 'react-redux';

import Loader from '../../Common/Loader';
import { getUser } from '../../redux/actions/authThunks';
import DashboardContainer from './DashboardContainer';
import LoansList, { currency } from './LoansList';

const Dashboard = ({user, auth, loadUser, loans}) => {
    document.title = `Eazicred Dashboard`

    useEffect(() => {
        loadUser()
    }, []);

    const isLoading = () => {
        return auth.loading
    }

    const totalLoans = () => {
        let total = 0
        for (let i = 0; i < loans.length; i++) {
            total += Object.values(loans)[i].loan_amount
        }
        console.log(total)
        return total
    }

    return isLoading() ? <Loader/> : (
        <DashboardContainer>
            <div className="main__middle">
                <h2 className="h2-db">
                    <span style={{textTransform: "capitalize"}}>{`Welcome ${user.firstname}`}</span>
                </h2>
                <p className="p2-db">Here's a quick summary of what's happening</p>
            </div>
            <div className="main__user-overview">
                <div>
                    <p>Total Received</p>
                    <span>{currency.format(totalLoans())}</span>
                </div>
                <div>
                    <p>Total Paid</p>
                    <span>{currency.format(totalLoans())}</span>
                </div>
            </div>
            <LoansList/>
        </DashboardContainer>
    )
}

const mapState = (state) => {
    return {
        user: state.auth.user,
        auth: state.auth,
        loans: state.userLoans.paydayLoans
    }
}

const mapDispatch = (dispatch) => {
    return {
        loadUser: () => dispatch(getUser()),
    }
}

export default connect(mapState, mapDispatch)(Dashboard);