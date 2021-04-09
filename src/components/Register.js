import React,{useState} from "react";
import {
  Grid,
  Paper,
  Avatar,
  Typography,
  TextField,
  Button,
} from "@material-ui/core";
import Successfull from './Successfull';
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import Checkbox from "@material-ui/core/Checkbox";
import AddCircleOutlinedIcon from "@material-ui/icons/AddCircleOutlined";
import { Link, useHistory } from "react-router-dom";
import axios from 'axios';

const Register = () => {
  const history = useHistory();
     const [newUser,setNewUser] = useState({
       name:"",
       email:"",
       gender:"",
       phone_number:"",
       password:"",
       confirm_password:""
     });
   
     let name, value;

   const handleInputs = (e) => {
    //  console.log(e);
     name=e.target.name;
     value=e.target.value;

     setNewUser({...newUser, [name]:value});
   }

   const handleFormSubmit = (event) => {
      event.preventDefault();
      console.log(newUser);
      axios.post("http://localhost:3001/registrationDetails", newUser)
      .then(response => {
        console.log(response.data);
        this.props.onSubmit(newUser);
      })
      .catch(error => {
        console.log(error);
      })

      history.push('/successfull');
   }

  const paperStyle = {
    padding: "30px 20px",
    width: 700,
    margin: "20px auto",
    height: "80vh",
  };
  return (
    <Grid>
      <Paper elevation={20} style={paperStyle}>
      <Grid container spacing={0}>
      
      <Grid item xs={6}>
        <Grid align="center">
          <Avatar style={{ backgroundColor: "#1bbd7e" }}>
            <AddCircleOutlinedIcon />
          </Avatar>
          <h2 style={{ margin: 0 }}>Sign Up</h2>
          <Typography variant="caption" gutterBottom>
            Please fill the form to create an account.
          </Typography>
        </Grid>
        <form onSubmit={handleFormSubmit}>
          <TextField
            fullWidth
            label="Name"
            name="name"
            placeholder="Enter your name"
            type="text"
            value={newUser.name}
            onChange={handleInputs}
          />
          <TextField
            fullWidth
            label="Email"
            placeholder="Enter your emailId"
            type="email"
            name="email"
            value={newUser.email}
            onChange={handleInputs}
          />
          <FormControl component="fieldset" style={{ marginTop: "15px" }}>
            <FormLabel component="legend">Gender</FormLabel>
            <RadioGroup
              aria-label="gender"
              name="gender"
              style={{ display: "initial" }}
              value={newUser.gender}
              onChange={handleInputs}
            >
              <FormControlLabel
                value="female"
                control={<Radio />}
                label="Female"
              />
              <FormControlLabel value="male" control={<Radio />} label="Male" />
            </RadioGroup>
          </FormControl>

          <TextField
            fullWidth
            label="Phone Number"
            placeholder="Enter your Phone number"
            type="phone number"
            name="phone_number"
            value={newUser.phone_number}
            onChange={handleInputs}
          />
          <TextField
            fullWidth
            label="Password"
            placeholder="Enter Password"
            type="password"
            name="password"
            value={newUser.password}
            onChange={handleInputs}
          />
          <TextField
            fullWidth
            label="Confirm Password"
            placeholder="Confirm Password"
            type="password"
            name="confirm_password"
            value={newUser.confirm_password}
            onChange={handleInputs}
          />

          <FormControlLabel
            control={<Checkbox name="checkedB" color="green" />}
            label="I accept the terms and conditions"
          />
          <Grid align="center">
            <Button fullWidth type="submit" variant="contained" color="primary">
              Sign Up
            </Button>
          </Grid>
        </form>
        <Typography align="center" style={{ marginTop: "10px" }}>
          Already have an account?{" "}
          <Link style={{ textDecoration: "underline", color: "green" }} to="/">
            Login
          </Link>
        </Typography>
        </Grid>
        <Grid item xs={6}>
               <Paper elevation={0}>
                <img style={{height:'250px', width:'250px', margin:'90px 40px'}} src="https://tse3.mm.bing.net/th?id=OIP.3nNtzHRxttpPy--rh5ec2AHaHC&pid=Api&P=0&w=163&h=156" />
               </Paper>
             </Grid>
        </Grid>
      </Paper>
    </Grid>
  );
};

export default Register;
