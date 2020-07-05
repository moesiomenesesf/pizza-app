import React from 'react';
import './MessageBox.scss';
const MessageBox = props => {
    const {message} = props ;
    if(message!==""){
        return(
            <label className="messageBox">{message}</label>
        )
    }else{
        return null;
    }
}
export default MessageBox;