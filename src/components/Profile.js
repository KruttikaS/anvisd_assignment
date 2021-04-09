import React, { useEffect, useState } from 'react';
import './styles/profile.css';
import {
    Grid,
    Paper,
    Avatar,
    Typography,
    TextField,
    Button,
  } from "@material-ui/core";
import axios from 'axios';
const Profile = () => {

  const [profile, setProfile] = useState({
      name: "",
      email: "",
      info: "",
      dateofbirth: "",
      profile_pic:"",
      phone_number:"",
      designation:"",
      cover_photo:"",
  })

  useEffect(() => {
    async function getProfile(){
      const res=await axios.get("http://localhost:3001/profileDetails");
      setProfile(res.data);
      console.log(res);
    }
    getProfile();
  },[]);

  console.log(profile);
    const paperStyle = {
        padding: 20,
        height: "110vh",
        width: 900,
        margin: "50px auto",
      };
    return(
      <Grid>
        <Paper elevation={20} style={paperStyle}>
            <Grid> 
              <img className="background" src='https://tse2.mm.bing.net/th?id=OIP.6VrI1fe7BXBT_dNPg3BBXQHaEo&pid=Api&P=0&w=255&h=160' />
              <img className="profilePic" src='https://tse2.mm.bing.net/th?id=OIP.6VrI1fe7BXBT_dNPg3BBXQHaEo&pid=Api&P=0&w=255&h=160' />
            </Grid>
            <Grid style={{marginTop:'100px', marginLeft:'70px'}} container spacing={0}>
              <Grid item xs={6}>
                <Paper elevation={0}>
                  <h2>{profile.name}</h2> 
                </Paper>
             </Grid>
             <Grid style={{paddingRight:'50px'}} item xs={6}>
               <Paper elevation={0}>
                <h2>{profile.designation}</h2>
               </Paper>
             </Grid>
             </Grid>
            
             <p style={{marginLeft:'250px', fontSize:'25px', textDecoration:'underline'}}>About Me</p>
             <Grid container spacing={2}>
            
              <Grid style={{paddingLeft:'100px'}} item xs={6}>
                <Paper elevation={0}>
                  
                  <p>Email</p>
                    <p>Mobile</p>
                    <p style={{marginBottom:'35px'}}>Info</p>
                    <p>Date of Birth</p>
                </Paper>
             </Grid>
             <Grid item xs={6}>
               <Paper elevation={0}>
                
                <p>{profile.email}</p>
                   <p>{profile.phone_number}</p>
                   <p>{profile.info}</p>
                   <p>{profile.dateofbirth}</p>
               </Paper>
             </Grid>
             
             </Grid>
        </Paper>
      </Grid>
    )
}

export default Profile;