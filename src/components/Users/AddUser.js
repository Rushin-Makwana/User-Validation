import React, { useRef, useState } from 'react'
import Card from '../UI/Card';
import classes from './AddUser.module.css';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';
export default function AddUser(props) {
  // const [enteredName, setEnteredName] = useState('');
  const [enteredAge, setEnteredAge] = useState('');
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  const [error, setError] = useState();
  const addUserHandler = (event) => {
    event.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredUserAge = ageInputRef.current.value;
    if (enteredName.trim().length === 0 || enteredUserAge.trim().length === 0) {
      setError({
        title: 'Invalid Input',
        message: 'Please enter valid Name and Age'
      })
      return;
    }
    if (+enteredUserAge < 1) {
      setError({
        title: 'Invalid age',
        message: 'Age must be greater than 1'
      })
      return;
    }
    const userDate = {
      name: enteredName,
      age: enteredUserAge
    }
    props.onSavingUserData(userDate);
    console.log(enteredName, enteredUserAge);
    nameInputRef.current.value = '';
    ageInputRef.current.value = ''
    // setEnteredName('')
    // setEnteredAge('')
  };
  const confirmHandler = () => {
    setError(null);
  };
  // const enterNameHandler = (event) => {
  //   setEnteredName(event.target.value);
  // }
  // const enterAgeHandler = (event) => {
  //   setEnteredAge(event.target.value);
  // }

  return (
    <>{error && <ErrorModal title={error.title} message={error.message} onConfirm={confirmHandler} />}
      <Card>
        <form className={classes.input} onSubmit={addUserHandler}>
          <label htmlFor='username'>User Name</label>
          {/* <input value={enteredName} id='username' type='text' onChange={enterNameHandler} /> */}
          <input id='username' type='text' ref={nameInputRef} />
          <label htmlFor='age'>Age</label>
          {/* <input value={enteredAge} id='age' type='text' onChange={enterAgeHandler} />  */}
          <input ref={ageInputRef} id='age' type='text' />
          <Button type='submit'> Add User</Button>
        </form>
      </Card></>
  )
}
