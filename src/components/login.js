import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react'
import axios from 'axios';
import Header from './header';

export default function Signup() {
  const defaultValues = {
    username: '',
    password: ''
  };

  const [formValues, setFormValues] = useState(defaultValues);

  const handleUsernameChange = (e) => {
    const { value } = e.target;
    setFormValues({
      ...formValues,
      username: value,
    });
  };

  const handlePasswordChange = (e) => {
    const { value } = e.target;
    setFormValues({
      ...formValues,
      password: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formValues);

    axios.post('http://localhost:4000/api/user/login', {
      username: formValues.username,
      password: formValues.password
    })
      .then(function (response) {
        // console.log(auth);
        if (response.status === 200) {
          // setAuth({
          //   ...auth,
          //   isAuth: true,
          //   token: response.data.data.token,
          //   username: response.data.data.username
          // });
        }
       })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <>
      <Header />
      <div className='form-div'>
        <form action="" className='login-form' onSubmit={handleSubmit} >
          <TextField
            required
            id="outlined-basic"
            label="Username"
            name="username"
            variant="outlined"
            value={formValues.username}
            onChange={handleUsernameChange}
            autoComplete='username'
          />
          <TextField
            required
            id="outlined-password-input"
            label="Password"
            name="password"
            type="password"
            autoComplete="current-password"
            value={formValues.password}
            onChange={handlePasswordChange}
          />
          <Button color="primary" variant="contained" type="submit">Sign In</Button>
        </form>
      </div>
    </>
  );
}
