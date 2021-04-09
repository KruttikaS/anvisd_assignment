import React,{useState} from "react";
import axios from 'axios';
import {
  Grid,
  Paper,
  Avatar,
  TextField,
  Button,
  Typography,
} from "@material-ui/core";
import { Link, useHistory } from "react-router-dom";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Successfull from './Successfull';

const Login = () => {
  const history = useHistory();
  const [user,setUser] = useState({
    username:"",
    password:""
    
  });

  let name, value;

const handleLoginChange = (e) => {
 //  console.log(e);
  name=e.target.name;
  value=e.target.value;

  setUser({...user, [name]:value});
}

const handleLoginSubmit = (event) => {
   event.preventDefault();
   console.log(user);
   axios.post("http://localhost:3001/registrationDetails", user)
   .then(response => {
     console.log(response.data);
     this.props.onSubmit(user);
   })
   .catch(error => {
     console.log(error);
   })

   history.push('/profile');
    
  
    
   
    

}













  const paperStyle = {
    padding: 40,
    height: "70vh",
    width: 700,
    margin: "40px auto",
  };
  const btnStyle = { margin: "8px 0" };
  return (
    <Grid>
      <Paper elevation={10} style={paperStyle}>
      <Grid container spacing={0}>
      
      <Grid item xs={6}>
        <Grid align="center">
          <Avatar style={{ backgroundColor: "#1bbd7e" }}>
            <LockOutlinedIcon />
          </Avatar>
          <h2>Welcome Back!</h2>
        </Grid>
        <form onSubmit={handleLoginSubmit}>
        <TextField
          label="Username"
          placeholder="Enter Username"
          fullWidth
          required
          type="text"
          name="username"
          value={user.username}
          onChange={handleLoginChange}
        />
        <TextField
          label="Password"
          placeholder="Enter Password"
          fullWidth
          required
          type="password"
          name="password"
          value={user.password}
          onChange={handleLoginChange}
        />
        <FormControlLabel
          control={<Checkbox name="checkedB" color="green" />}
          label="Remember Me"
        />

        <Button
          // onClick={() => onButtonClick}
          variant="contained"
          size="medium"
          color="primary"
          type="Submit"
          style={btnStyle}
          fullWidth
        >
          Sign In
        </Button>
        </form>
        <br />
        <Typography gutterBottom align="center">
          <Link href="#">Forget Password?</Link>
        </Typography>

        <Typography align="center">
          {" "}
          Don't have an account?{" "}
          <Link
            style={{ textDecoration: "underline", color: "green" }}
            to="/signup"
          >
            Sign Up
          </Link>
        </Typography>
        </Grid>
        <Grid item xs={6}>
               <Paper elevation={0}>
                <img style={{height:'250px', width:'250px', margin:'70px 50px'}} src="https://tse3.mm.bing.net/th?id=OIP.3nNtzHRxttpPy--rh5ec2AHaHC&pid=Api&P=0&w=163&h=156" />
               </Paper>
             </Grid>
        </Grid>
      </Paper>
    </Grid>
  );
};

export default Login;
