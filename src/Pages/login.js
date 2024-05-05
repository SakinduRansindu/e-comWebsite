import React, { useState ,useEffect} from "react";
import { AuthData } from "../Components/AuthWrapper/AuthWrapper";
import { useNavigate } from "react-router-dom";
import TextInput from "../Components/Input/TextInput";
import Template from "./Template/Template";
import Alert from "../Components/Alert/Alert";

export default function Login() {
  const { userLogin } = AuthData();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState({color:'alert-danger',message:'',isSuccess:false});
  const [display,setDisplay] = useState(false);

  const clear=()=>{
    setPassword("");
    setEmail("");
    setDisplay(false);
  }

  let timeout;
    useEffect(()=>{
      timeout = setTimeout(()=>{
        if(timeout){
          clearTimeout(timeout);
        }
        setDisplay(false);
      },5000);
    },[message]);

  const checkLogin = (e) => {
    e.preventDefault();
    userLogin(email, password)
      .then((res) => {
        setMessage({color:'alert-success',message:res,isSuccess:true});
        setDisplay(true);
        console.log(res);
        navigate("/browse");
      })
      .catch((err) => {
        console.error(err);
        setMessage({color:'alert-danger',message:err,isSuccess:false});
        setPassword("");
        setDisplay(true);
      });
  };

  return (
    <Template RedirectIfLoged="/browse" renderSlideBar={false}>
      <form className="container mx-auto my-3 border dark2 rounded p-3" >
        <h1>Login page</h1>
        <TextInput
          type="email"
          label="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          isRequired={true}
          placeholder="Email"
        ></TextInput>
        <TextInput
          type="password"
          label="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        ></TextInput>

        <div className="row">
          {display ? <Alert title={message.isSuccess ? "Success" : "Error"} message={message.message} type={message.color}></Alert> : null}
          <div className="col-md-12">
            <button disabled={display} type="button" onClick={(e) => clear()} className="btn btn-danger">Clear</button>
            <button disabled={display} className="btn btn-success float-end" onClick={(e) => checkLogin(e)}>Login</button>
          </div>
        </div>

      </form>



    </Template>
  );


}
