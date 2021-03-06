import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

export class FormPersonalDetails extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const { values, handleChange } = this.props;
    return (
      <MuiThemeProvider>
        <>
          <Dialog
            open
            fullWidth
            maxWidth='sm'
          >
            <AppBar title="Enter Personal Details" />
            <TextField
              placeholder="Enter Your Issues"
              label="Issues"
              onChange={handleChange('issues')}
              defaultValue={values.issues}
              margin="normal"
              fullWidth
            />
            <br />
            <TextField
              placeholder="Does Your Landlord Know?"
              label="Landlord"
              onChange={handleChange('landlord')}
              defaultValue={values.landlord}
              margin="normal"
              fullWidth
            />
            {/* <br />
            <select>
              <option>Select Issues</option>
              <option>Mold</option>
              <option>Damp</option>
              <option></option>
            </select> */}

            

            <Button
              color="secondary"
              variant="contained"
              onClick={this.back}
            >Back</Button>

            <Button
              color="primary"
              variant="contained"
              onClick={this.continue}
            >Continue</Button>
          </Dialog>
        </>
      </MuiThemeProvider>
    );
  }
}

export default FormPersonalDetails;
