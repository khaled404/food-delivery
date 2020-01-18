import * as AppAuth from 'expo-app-auth';
import * as Facebook from 'expo-facebook';
export const singup  = async (email , password) =>{
    const rsponse  = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyACrIw141801Z0ntgAEyxzSMeTATqJuuGo ' ,
    {
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body: JSON.stringify({
            email,
            password,
            returnSecureToken:true
        })
    }
   ); 
    if(!rsponse.ok){
        const errorResData = await rsponse.json();
        const errid =  errorResData.error.message;
        let message = 'هناك شئ خاطئ'
        if(errid === 'EMAIL_EXISTS'){
            message = 'الحساب موجود من قبل'
        }
        throw new Error(message)
    }
};
export const signin  = async (email , password) =>{
    const rsponse  = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyACrIw141801Z0ntgAEyxzSMeTATqJuuGo ' ,
    {
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body: JSON.stringify({
            email,
            password,
            returnSecureToken:true
        })
    }
   ); 
    if(!rsponse.ok){
        const errorResData = await rsponse.json();
        const errid =  errorResData.error.message;
        let message = 'هناك شئ خاطئ'
        if(errid === 'EMAIL_NOT_FOUND'){
            message = 'الحساب ليس موجود'
        }else if(errid === 'INVALID_PASSWORD'){
            message = 'كلمه المرور ليست صحيحه'
        }
        throw new Error(message)
    }
};
export const SendPasswordResetEmai = async (email)=>{
    const rsponse  = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=AIzaSyACrIw141801Z0ntgAEyxzSMeTATqJuuGo' ,
    {
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body: JSON.stringify({
            email,
            requestType : 'PASSWORD_RESET',
        })
    }
   ); 
    if(!rsponse.ok){
        const errorResData = await rsponse.json();
        const errid =  errorResData.error.message;
        let message = 'هناك شئ خاطئ'
        if(errid === 'EMAIL_NOT_FOUND'){
            message = 'الحساب ليس موجود'
        }
        throw new Error(message)
    }
}

const config = {
  issuer: 'https://accounts.google.com',
  scopes: ['openid', 'profile'],
  /* This is the CLIENT_ID generated from a Firebase project */
  clientId: '603386649315-vp4revvrcgrcjme51ebuhbkbspl048l9.apps.googleusercontent.com',
};

export async function signInAsync() {
  const authState = await AppAuth.authAsync(config);
    if(authState){
        return authState;
    }else{
        let message = 'هناك شئ خاطئ'
        throw new Error(message)
    }
}

export async function signInWithFacebook() {
    try {
      await Facebook.initializeAsync('175424486996105');
      const {
        type,
        token,
        expires,
        permissions,
        declinedPermissions,
      } = await Facebook.logInWithReadPermissionsAsync({
        permissions: ['public_profile'],
      });

      if (type === 'success') {
        // Get the user's name using Facebook's Graph API
        const response = await fetch(`https://graph.facebook.com/me?access_token=${token}`);
      } else {
        // type === 'cancel'
      }
    } catch ({ message }) {
        throw new Error(`Facebook Login Error: ${message}`);
    }
  }
  