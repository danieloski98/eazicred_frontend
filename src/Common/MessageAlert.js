/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';

import {
  useDispatch,
  useSelector,
} from 'react-redux';

import { hideMessage } from '../redux/actions/actions';

const MessageAlert = (props) => {
    const message = useSelector(state => state["notify"].message)
    const dispatch = useDispatch()
    React.useEffect(()=>{
        setTimeout(()=>dispatch(hideMessage()), 5000)
    },[])
    return props.children || (
        <div className={message["type"]}>
            <div><p>{message["message"]}</p></div>
        </div>
    );
}

export default MessageAlert;