import React,{ useContext ,useState ,useEffect } from 'react';


const AuthContext = React.createContext();
export const AuthData = ()=> useContext(AuthContext);


export default function AuthWrapper({children}) {

    const checkLocalLoginData=()=>{
        const storedUser = localStorage.getItem('user');
        if(storedUser!=null){
            try{
                const data = JSON.parse(storedUser);
                if(data.username && data.role && data.jwt){
                    return {username:data.username,role:data.role,jwt:data.jwt,isLogedIn:true};
                }
            }
            catch(e){
                console.error(e);
            }
        }
        return {username:'',role:'',jwt:'',isLogedIn:false};
    }

    const [user,setUser] = useState(checkLocalLoginData());

    useEffect(()=>{
        localStorage.setItem('user',JSON.stringify(user));
        console.log(JSON.stringify(user));
    
    },[user]);

    const userLogin = (username,password)=>{
    return new Promise((resolve,reject)=>{
            // make a api call to get the jwt and user data
            if(username==='customer' && password==='customer'){
                setUser({username:username,role:'customer',jwt:'customer',isLogedIn:true});
                resolve('Login successful');
            }
            else if(username==='seller' && password==='seller'){
                setUser({username:username,role:'seller',jwt:'seller',isLogedIn:true});
                resolve('Login successful');
            }
            else{
                reject('Invalid username or password');
            }
        });
    }

    const userLogout =async ()=>{
        return new Promise((resolve,reject)=>{
            setUser({username:'',role:'',jwt:'',isLogedIn:false});
            // make a api call to clear the jwt in server
            resolve('Logout successful');
            reject('Logout failed');
        });
    }

    


  return (
    <AuthContext.Provider value={{user,userLogin,userLogout}}>
            {children}
    </AuthContext.Provider>
  )
}