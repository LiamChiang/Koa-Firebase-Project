import React, {Component} from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import axios from 'axios';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
  margin: {
    margin: theme.spacing.unit,
  },
  textField: {
    flexBasis: 200,
  },
});

class OutlinedInputAdornments extends Component {
  constructor(){
    super();
    this.state = {
      email:'',
      password: '',
      showPassword: false,
    };
  }

  handleClick = this.handleClick.bind(this);

  handleClick(){
    axios.post('http://localhost:4000/v1/auth/login', {password: this.state.password, email:this.state.email})
    .then(result => {
      console.log("done")
    })
  }

  handleChange = (event) => {
    const { target:{ name, value } } = event;
    this.setState(() => ({ [name]: value }))
  };

  handleClickShowPassword = () => {
    this.setState(state => ({ showPassword: !state.showPassword }));
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <div>
          <TextField
            id="outlined-simple-start-adornment"
            className={classNames(classes.margin, classes.textField)}
            name="email"
            variant="outlined"
            type="text"
            label="Login"
            onChange={this.handleChange}
            InputProps={{
              startAdornment: <InputAdornment position="start">Email</InputAdornment>,
            }}
          />
          
          <TextField
            id="outlined-adornment-password"
            className={classNames(classes.margin, classes.textField)}
            name="password"
            variant="outlined"
            type={this.state.showPassword ? 'text' : 'password'}
            label="Password"
            value={this.state.password}
            onChange={this.handleChange}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="Toggle password visibility"
                    onClick={this.handleClickShowPassword}
                  >
                    {this.state.showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </div>
        <div>
          <Button variant="contained" className={classes.button} onClick = {this.handleClick.bind(this)}>
            Login
          </Button>
          <Button variant="contained" color="primary" className={classes.button}>
            Google Log in
          </Button>
        </div>
      </div>
    );
  }
}

OutlinedInputAdornments.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(OutlinedInputAdornments);