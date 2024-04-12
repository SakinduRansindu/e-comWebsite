import React,{ useContext ,useState ,useEffect } from 'react';


const AuthContext = React.createContext();
export const AuthData = ()=> useContext(AuthContext);


export default function AuthWrapper({children}) {
    const [user,setUser] = useState({username:'',role:'',jwt:'',isLogedIn:false});
    
    useEffect(()=>{
        localStorage.setItem('user',JSON.stringify(user));
        console.log(JSON.stringify(user));
    
    },[user]);
    
    const userLogin = (username,password)=>{
    return new Promise((resolve,reject)=>{
            if(username==='admin' && password==='admin'){
                setUser({username:username,role:'admin',jwt:'admin',isLogedIn:true});
                resolve('Login successful');
            }
            else if(username==='user' && password==='user'){
                setUser({username:username,role:'user',jwt:'user',isLogedIn:true});
                resolve('Login successful');
            }
            else{
                reject('Invalid username or password');
            }
        });
    }

    const checkLocalLoginData=()=>{

        const storedUser = localStorage.getItem('user');
        if(storedUser!=null){
            try{
                const data = JSON.parse(storedUser);
                if(data.username && data.role && data.jwt){
                    setUser({username:data.username,role:data.role,jwt:data.jwt,isLogedIn:true});
                }
            }
            catch(e){
                console.error(e);
            }
            
        }

    }

    const userLogout = ()=>{
        return new Promise((resolve,reject)=>{
            setUser({username:'',role:'',jwt:'',isLogedIn:false});
            resolve('Logout successful');
        });
    }



  return (
    <AuthContext.Provider value={{user,userLogin,userLogout}}>
            {children}
    </AuthContext.Provider>
  )
}