import React, { useState,useEffect } from 'react'
import {Route} from 'react-router-dom';
import NavbarmuiLoggedIn from './NavbarmuiLoggedIn';
import Preloader from './PreLoader';
import useLoginAuth2 from "./useLoginAuth2";

function RoleBasedRoute({ component:Component,role:user_role, ...rest}) {
    //not renamed
    //const { getInfo } = GetUserInfo();
    const [isrole,setrole] = useState(false);

    const {isLoggedIn} = useLoginAuth2();
    const isAuth1=isLoggedIn.isAuth;
    const role = isLoggedIn.role;

    useEffect(() => {
        if(role===user_role){
            setrole(true);
        }


    }, [role,user_role]);



    return <>{!isAuth1 ?<></> :
        <Route {...rest} render = {(props)=>{
            if(isAuth1 && isrole){
                // console.log(isAuth1);
                // console.log(isadmin);
                return<><NavbarmuiLoggedIn/><Component/></>
            }else{
                return<><Preloader/><h2>You are not authorised to view this page</h2></>
            } 
        }}/>}
    
    </>

}

export default RoleBasedRoute
