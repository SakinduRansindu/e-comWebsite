import React, { useState, useEffect } from 'react';
import TextInput from '../Input/TextInput';
import NumberInput from '../Input/NumberInput';
import Alert from '../Alert/Alert';
import { PurchaseProduct } from '../../API/ProductsApi';
import { AuthData } from '../../Components/AuthWrapper/AuthWrapper';

function PaymentForm({ pid, maxUnits = 10 }) {
  const { CheckSessionErrors } = AuthData();

  const [name, setName] = useState("");
  const [units, setUnits] = useState(1);
  const [cardNumber, setCardNumber] = useState("");
  const [cvc, setCvc] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [message, setMessage] = useState({ color: 'alert-danger', message: '', isSuccess: false });
  const [display, setDisplay] = useState(false);

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

  const validate = () => {
    if (name.length < 1) {
      setMessage({ color: 'alert-danger', message: 'Name is required', isSuccess: false });
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
    <form className="container mx-auto my-3 p-4" style={styles.form}>
      <h1 style={styles.title}>Payment</h1>
      <TextInput
        type="text"
        label="Name with initials"
        value={name}
        onChange={(e) => setName(e.target.value)}
        isRequired={true}
        placeholder="Name"
      />
      <NumberInput
        type="number"
        label="Number of Units"
        value={units}
        onChange={(e) => setUnits(e.target.value)}
        isRequired={true}
        max={maxUnits}
        min={1}
        placeholder="Units"
      />
      <NumberInput
        type="number"
        label="Card Number"
        value={cardNumber}
        onChange={(e) => setCardNumber(e.target.value)}
        isRequired={true}
        placeholder="Card Number"
      />
      <NumberInput
        type="number"
        label="CVC"
        value={cvc}
        onChange={(e) => setCvc(e.target.value)}
        isRequired={true}
        placeholder="CVC"
      />
      <TextInput
        type="text"
        label="Expiry Date"
        value={expiryDate}
        onChange={(e) => setExpiryDate(e.target.value)}
        isRequired={true}
        placeholder="Expiry Date"
      />
      <div style={styles.buttonRow}>
        {display && <Alert title={message.isSuccess ? "Success" : "Error"} message={message.message} type={message.color} />}
        <button disabled={display} type="button" onClick={clear} style={{ ...styles.button, ...styles.clearButton }}>Clear</button>
        <button disabled={display} onClick={pay} style={{ ...styles.button, ...styles.payButton }}>Pay</button>
      </div>
    </form>
  );
}

const styles = {
  form: {
    border: '2px solid #ddd',
    borderRadius: '10px',
    backgroundColor: '#f8f9fa',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    maxWidth: '600px',
    padding: '20px',
    color: '#333',
  },
  title: {
    textAlign: 'center',
    marginBottom: '20px',
    color: '#333',
  },
  buttonRow: {
    display: 'flex',
    justifyContent: 'space-evenly',
    marginTop: '50px',
    
  },
  button: {
    padding: '8px 18px',
    fontSize: '1rem',
    borderRadius: '5px',
    cursor: 'pointer',
    border: 'none',
  },
  clearButton: {
    backgroundColor: '#dc3545',
    color: 'white',
  },
  payButton: {
    backgroundColor: '#28a745',
    color: 'white',
  },
};

export default PaymentForm;
