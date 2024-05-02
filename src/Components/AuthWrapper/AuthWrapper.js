import React,{ useContext ,useState ,useEffect } from 'react';
import { validateLogin,Serverlogout } from '../../API/API';


const AuthContext = React.createContext();
export const AuthData = ()=> useContext(AuthContext);


export default function AuthWrapper({children}) {

    const checkLocalLoginData=()=>{
        const storedUser = localStorage.getItem('user');
        if(storedUser!=null){
            try{
                const data = JSON.parse(storedUser);
                if(data.name && data.role){
                    return {name:data.name,role:data.role,avatar:data.avatar,isLogedIn:true};
                }
            }
            catch(e){
                console.error(e);
            }
        }
        return {username:'',role:'',avatar:'',isLogedIn:false};
    }

    const [user,setUser] = useState(checkLocalLoginData());

    useEffect(()=>{
        localStorage.setItem('user',JSON.stringify(user));
        console.log(JSON.stringify(user));
    
    },[user]);

    const userLogin = (email,password)=>{

    return new Promise((resolve,reject)=>{
            validateLogin(email,password).then((res)=>{
                console.log(res.data);
                setUser({name:res.data.user.FirstName,role:res.data.user.Type,avatar:res.data.user.ProfilePicture,isLogedIn:true});
                resolve('Login successful');
            }
            ).catch((err)=>{
                console.error(err.message);
                reject(err.message);
            });
            // make a api call to get the jwt and user data
            // if(email==='customer' && password==='customer'){
            //     setUser({username:email,role:'customer',jwt:'customer',avatar:'',isLogedIn:true});
            //     resolve('Login successful');
            // }
            // else if(email==='seller' && password==='seller'){
            //     setUser({username:email,role:'seller',jwt:'seller',avatar:'',isLogedIn:true});
            //     resolve('Login successful');
            // }
            // else{
            //     reject('Invalid username or password');
            // }
        });
    }

    const userLogout =async ()=>{
        return new Promise((resolve,reject)=>{

            Serverlogout().then((res)=>{
                console.log(res.data);
                resolve('Logout successful');
            }).catch((err)=>{
                console.error(err.message);
                reject(err.message);
            }).finally(()=>{
                setUser({name:'',role:'',avatar:'',isLogedIn:false});
            });
        });
    }

    


  return (
    <AuthContext.Provider value={{user,userLogin,userLogout}}>
            {children}
    </AuthContext.Provider>
  )
}