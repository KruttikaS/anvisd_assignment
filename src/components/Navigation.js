import { configure } from '@testing-library/dom';
import React from 'react';
import {AppBar, Toolbar, Container} from "@material-ui/core";
import {IconButton, List, ListItem, ListItemText} from "@material-ui/core";
import {Home} from "@material-ui/icons";
// import {Link} from 'react-router-dom';
import {makeStyles, Link} from "@material-ui/core";

const useStyles = makeStyles({
    navbarDisplayFlex:{
        display: `flex`,
        justifyContent: `space-between`
    },
    navDisplayFlex:{
        display:'flex',
        justifyContent:'space-between'
    },
    linkText:{
        textDecoration: `none`,
    textTransform: `uppercase`,
    color: `white`
    }
})
const navlinks = [
    {title:'Login', path:'/'},
    {title:'Profile', path:'/profile'},
    {title:'Counter', path:'/counter'}
]

const Navigation = () => {
    const classes = useStyles();
    return(
        <div>
        <AppBar position="static">
            <Toolbar>
            <Container maxWidth="md" className={classes.navbarDisplayFlex}>
               <IconButton edge="start" color="inherit" aria-label="home">
               
                    
                        <a className={classes.linkText} href="/">
                        <Home fontSize="large"></Home>
                        </a>
                    
                
                </IconButton>
                
                <List component="nav" aria-labelledby="main navigation" className={classes.navDisplayFlex}>
                    {navlinks.map(({title, path}) => (
                        <a href={path} key={title} className={classes.linkText}>
                        <ListItem button>
                            <ListItemText primary={title} />
                        </ListItem>
                        </a>
                    ))}
                </List>
                </Container>
            </Toolbar>
        </AppBar>
        
        </div>
    )
}

export default Navigation;