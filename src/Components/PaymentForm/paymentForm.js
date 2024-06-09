import React, { useState, useEffect } from 'react';
import TextInput from '../Input/TextInput';
import NumberInput from '../Input/NumberInput';
import Alert from '../Alert/Alert';
import { PurchaseProduct } from '../../API/ProductsApi';
import { AuthData } from '../../Components/AuthWrapper/AuthWrapper';

function PaymentForm({ pid, maxUnits = 10 }) {
  const { user, CheckSessionErrors } = AuthData();

  const [name, setName] = useState("");
  const [units, setUnits] = useState(1);
  const [cardNumber, setCardNumber] = useState("");
  const [cvc, setCvc] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [message, setMessage] = useState({color:'alert-danger',message:'',isSuccess:false});
  const [display,setDisplay] = useState(false);
  const [isLogedUser,setIsLogedUser] = useState(false);


  const clear = () => {
    setName("");
    setUnits(1);
    setCardNumber("");
    setCvc("");
    setExpiryDate("");
    setDisplay(false);
    setMessage({ color: 'alert-danger', message: '', isSuccess: false });
  };

  let timeout;
  useEffect(() => {
    timeout = setTimeout(() => {
      if (timeout) {
        console.log('clearing timeout');
        clearTimeout(timeout);
      }
      setDisplay(false);
      if (message.isSuccess) {
        clear();
      }
    }, 5000);
  }, [message]);


  useEffect(()=>{
    if(user.role==="customer"){
      setIsLogedUser(true);
    }
    else{
      setIsLogedUser(false);
    }
  },[]);

  const validate=()=>{
    if(name.length<1){
      setMessage({color:'alert-danger',message:'Name is required',isSuccess:false});
      setDisplay(true);
      return false;
    }
    if (units < 1 || units > maxUnits) {
      setMessage({ color: 'alert-danger', message: 'Invalid Units', isSuccess: false });
      setDisplay(true);
      return false;
    }
    if (cardNumber.length !== 16) {
      setMessage({ color: 'alert-danger', message: 'Invalid Card Number', isSuccess: false });
      setDisplay(true);
      return false;
    }
    if (cvc.length !== 3) {
      setMessage({ color: 'alert-danger', message: 'Invalid CVC', isSuccess: false });
      setDisplay(true);
      return false;
    }
    if (expiryDate.length !== 5) {
      setMessage({ color: 'alert-danger', message: 'Invalid Expiry Date', isSuccess: false });
      setDisplay(true);
      return false;
    }
    return true;
  };

  const pay = (e) => {
    e.preventDefault();
    if (validate()) {
      PurchaseProduct(pid, units).then((res) => {
        console.log(res);
        setMessage({ color: 'alert-success', message: 'Payment Success', isSuccess: true });
        setDisplay(true);
        setTimeout(() => {
          clear();
        }, 5000);
      }).catch((err) => {
        console.error(err);
        setMessage({ color: 'alert-danger', message: err.message, isSuccess: false });
        setDisplay(true);
        CheckSessionErrors(err);
      });
    }
    return false;
  };

  return (
    <>
      {isLogedUser ? (
        <form style={styles.form}>
          <h1 style={styles.title}>Payment</h1>
          <div style={styles.inputGroup}>
            <label style={styles.label} htmlFor="name">Name with initials</label>
            <input
              type="text"
              id="name"
              style={styles.input}
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              placeholder="Name"
            />
          </div>
          <div style={styles.inputGroup}>
            <label style={styles.label} htmlFor="units">Number of Units</label>
            <input
              type="number"
              id="units"
              style={styles.input}
              value={units}
              onChange={(e) => setUnits(e.target.value)}
              required
              max={maxUnits}
              min={1}
              placeholder="Units"
            />
          </div>
          <div style={styles.inputGroup}>
            <label style={styles.label} htmlFor="cardNumber">Card Number</label>
            <input
              type="number"
              id="cardNumber"
              style={styles.input}
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
              required
              placeholder="Card Number"
            />
          </div>
          <div style={styles.inputGroup}>
            <label style={styles.label} htmlFor="cvc">CVC</label>
            <input
              type="number"
              id="cvc"
              style={styles.input}
              value={cvc}
              onChange={(e) => setCvc(e.target.value)}
              required
              placeholder="CVC"
            />
          </div>
          <div style={styles.inputGroup}>
            <label style={styles.label} htmlFor="expiryDate">Expiry Date</label>
            <input
              type="text"
              id="expiryDate"
              style={styles.input}
              value={expiryDate}
              onChange={(e) => setExpiryDate(e.target.value)}
              required
              placeholder="MM/YY"
            />
          </div>
          <div style={styles.buttonRow}>
            {display && <div style={{ ...styles.alert, ...(message.isSuccess ? styles.alertSuccess : styles.alertDanger) }}>{message.message}</div>}
            <button type="button" onClick={clear} style={{ ...styles.button, ...styles.clearButton }}>Clear</button>
            <button onClick={pay} style={{ ...styles.button, ...styles.payButton }}>Pay</button>
          </div>
        </form>
      ) : (
        <div className="container mx-auto my-3 border dark2 rounded p-3">
          <Alert title="Sorry" message="You have to be logged in with a user account to buy this." type="alert-info" />
        </div>
      )}
    </>
  );
}
const styles = {
  form: {
    border: '2px solid #444',
    borderRadius: '10px',
    backgroundColor: '#333',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    maxWidth: '600px',
    padding: '20px',
    margin: '0 auto',
    color: '#ddd',
    fontFamily: 'Arial, sans-serif'
  },
  title: {
    textAlign: 'center',
    marginBottom: '20px',
    color: 'white',
  },
  inputGroup: {
    marginBottom: '15px',
  },
  label: {
    display: 'block',
    marginBottom: '5px',
    fontWeight: 'bold',
    color: 'white',
  },
  input: {
    width: '100%',
    padding: '10px',
    border: '1px solid #555',
    borderRadius: '5px',
    fontSize: '16px',
    backgroundColor: '#555',
    color: '#ddd'
  },
  buttonRow: {
    display: 'flex',
    justifyContent: 'space-evenly',
    marginTop: '20px',
  },
  button: {
    padding: '10px 20px',
    fontSize: '16px',
    borderRadius: '5px',
    cursor: 'pointer',
    border: 'none',
    transition: 'background-color 0.3s ease',
  },
  clearButton: {
    backgroundColor: '#dc3545',
    color: 'white',
  },
  payButton: {
    backgroundColor: '#28a745',
    color: 'white',
  },
  alert: {
    marginBottom: '15px',
    padding: '10px',
    borderRadius: '5px',
    textAlign: 'center',
  },
  alertSuccess: {
    backgroundColor: '#d4edda',
    color: '#155724',
    borderColor: '#c3e6cb',
  },
  alertDanger: {
    backgroundColor: '#f8d7da',
    color: '#721c24',
    borderColor: '#f5c6cb',
  },
};


export default PaymentForm;