import React, { useState } from 'react';
import AddUser from './components/Users/AddUser';
import UserLists from './components/Users/UserLists';
function App() {
const [userList, setUserList] = useState([]);
const userDataHandler = (data)=>{
  const {name, age} = data;
setUserList(prevData => {return [...prevData, {name,age, id: Math.random().toLocaleString()}]});
console.log('from app.js' + data.name)
};
  
  return (
    <div>
<AddUser onSavingUserData = {userDataHandler}/>
<UserLists users={userList}/>
    </div>
  );
}

export default App;
