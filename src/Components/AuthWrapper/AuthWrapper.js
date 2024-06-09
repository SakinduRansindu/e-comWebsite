import React,{ useContext ,useState ,useEffect } from 'react';
import { validateLogin,Serverlogout } from '../../API/API';
import { useNavigate } from 'react-router-dom';


const AuthContext = React.createContext();
export const AuthData = ()=> useContext(AuthContext);


export default function AuthWrapper({children}) {
    // const navigate = useNavigate();
    
    const checkLocalLoginData=()=>{
        const storedUser = localStorage.getItem('user');
        if(storedUser!=null){
            try{
                const data = JSON.parse(storedUser);
                if(data.name && data.role){
                    return {name:data.name,role:data.role,avatar:data.avatar,loginMsg:'',isLogedIn:true};
                }
            }
            catch(e){
                console.error(e);
            }
        }
        return {username:'',role:'',avatar:'',loginMsg:'',isLogedIn:false};
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
                setUser({name:res.data.user.FirstName,role:res.data.user.Type,avatar:res.data.user.ProfilePicture,loginMsg:'',isLogedIn:true});
                resolve('Login successful');
            }
            ).catch((err)=>{
                console.error(err.message);
                reject(err.message);
            });
        }); 
    }

    const userAutoLoginAtRegistration = (data) => {
        console.log(data, "reg user");
      
        if (data.user) {
          console.log(data.user.FirstName, "reg user name");
          setUser({
            name: data.user.FirstName,
            role: data.user.Type,
            avatar: data.user.ProfilePicture,
            loginMsg: '',
            isLogedIn: true
          });
        } else if (data.seller) {
          console.log(data.seller.DisplayName, "reg seller name");
          setUser({
            name: data.seller.DisplayName,
            role: data.seller.Type,
            avatar: data.seller.ProfilePicture,
            loginMsg: '',
            isLogedIn: true
          });
        } else {
          console.error('Login failed');
          console.log(data);
          throw new Error('User set at registration failed');
        }
      };
      

    const userLogout =async ()=>{
        return new Promise((resolve,reject)=>{

            Serverlogout().then((res)=>{
                console.log(res.data);
                resolve('Logout successful');
            }).catch((err)=>{
                CheckSessionErrors(err);
                console.error(err.message);
                reject(err.message);
            }).finally(()=>{
                setUser({name:'',role:'',avatar:'',loginMsg:'',isLogedIn:false});
            });
        });
    }

    const CheckSessionErrors = (err)=>{
        console.log(err);
        if(!err){
            sessionExpired();
        }
        else if(err.response.status===401){
            sessionExpired();
        }
    }

    const clearMsgs = ()=>{
        setUser({name:user.name,role:user.role,avatar:user.avatar,loginMsg:'',isLogedIn:user.isLogedIn});
    }

    const sessionExpired = ()=>{
        setUser({name:'',role:'',avatar:'',loginMsg:'Session Expired',isLogedIn:false});
    }

    


  return (
    <AuthContext.Provider value={{user,userLogin,userAutoLoginAtRegistration,userLogout,CheckSessionErrors,clearMsgs}}>
            {children}
    </AuthContext.Provider>
  )
}