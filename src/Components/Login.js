// import React, { Component } from 'react'
// import { Grid, Paper, TextField, Typography,Button} from '@mui/material'
// import {Link} from 'react-router-dom'

// export default class Login extends Component {

//   render() {
//     return (
//       <div style={{backgroundImage:'',height:'100vh',
//       marginTop:'0px',
//       padding:'0px',
//       fontSize:'50px',
//       backgroundSize: 'cover',
//       backgroundRepeat: 'no-repeat',
//       opacity:'1'}}>
//         <Grid align="center" padding={"100px"}>
//            <Paper variant='outlined' style={{width:'400px', borderRadius:'20px' ,opacity:'0.5'}}>
//             <Typography>
//                 <h1 align="center" padding={"80px"}>LOGIN</h1>
//               </Typography> 
//            <TextField  label="UserName" type="text" placeholder='Enter your name' variant='outlined' required style={{marginTop:"40px"}}></TextField>
//            <br/>
//            <br/>
//            <TextField  label="PassWord" type="Password" placeholder='Enter your password' variant='outlined' required></TextField>
//            <br/>
//            <br/>
//         </Paper>
//         <Link to="../Weather">
//         <Button><h2 style={{color:'white'}}>Login</h2></Button>
//         </Link>
//         <Typography>
//         <Link to="../Signup">
//           <Button variant='contained' color="info">Don't Have An Account? SignUp</Button>
//           </Link>
//           <br>
//           </br>
//           <br>
//           </br>
//         </Typography>
//         </Grid>
//         </div>
//     )
//   }
// }
import React, { Component } from 'react'
import { Grid, Paper, TextField, Typography, Button } from '@mui/material'
import { Link } from 'react-router-dom'

export default class Login extends Component {

  render() {
    return (
      <div style={{
        backgroundImage: 'url("https://images.pexels.com/photos/1550334/pexels-photo-1550334.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")',
        height: '100vh',
        marginTop: '0px',
        padding: '0px',
        fontSize: '50px',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        opacity: '1'
      }}>
        <Grid container justifyContent="center" alignItems="center" style={{ height: '100%' }}>
          <Grid item>
            <Paper variant='outlined' style={{ width: '400px', borderRadius: '20px', opacity: '0.9', padding: '20px' }}>
              <Typography>
                <h1 align="center" padding={"80px"}>LOGIN</h1>
              </Typography>
              <TextField label="UserName" type="text" placeholder='Enter your name' variant='outlined' required style={{ marginTop: "40px", width: '100%' }} />
              <br />
              <br />
              <TextField label="PassWord" type="Password" placeholder='Enter your password' variant='outlined' required style={{ width: '100%' }} />
              <br />
              <br />
                <Link to="../Poll" style={{ textDecoration: 'none', color: 'white' }}>
              <Button variant="contained" color="primary" style={{ width: '100%' }}>Login</Button>
              </Link>
              <Typography>
                <Link to="../Signup" style={{ textDecoration: 'none' }}>
                  <Button variant='contained' color="info" style={{ marginTop: '10px', width: '100%' }}>Don't Have An Account? SignUp</Button>
                </Link>
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </div>
    )
  }
}
