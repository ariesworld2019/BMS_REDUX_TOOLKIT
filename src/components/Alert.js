import React from 'react'
import { useSelector } from 'react-redux'

const Alert = () => {


    const alertvar = useSelector((state) => state.alertmsgstore.alertmsg);  
     
    return ( 
        alertvar &&
        <div className="alert alert-danger" role="alert">
       {alertvar}
        </div> 
    )
}

export default Alert
