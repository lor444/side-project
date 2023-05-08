import React, {useState, useEffect} from 'react'
import './App.css'
import { Button, TextField , FormControlLabel, Checkbox, FormControl, FormLabel, RadioGroup, Radio, InputLabel, Select, MenuItem} from '@material-ui/core'




class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      firstName: '',
      lastName: '',
      newsletter: true,
      email: '',
      device: '',
      state: ''
    }
  }

  handleChange = (e) => {
    console.log(e.target)
    const {checked, value, name, type} = e.target

    this.setState(prevState => {
      return {
        ...prevState,
        [name]: type === 'checkbox' ? checked:  value
      }
    })
  }

  handleSubmit = (e) => {
    console.log(this.state)
  }

  checkSubmit = () => {
    const {firstName, lastName, email, state, device} = this.state
    return !firstName || !lastName || !email || !state || !device
  }
    
  
  
  render() {
   return  (
    <>
     {/* <section className='card-section'>
      {charData.map( (el, index) => (
        <Card character={el} key={index}  />
      ))}
    </section>  */}
      <form style={{maxWidth: 600} }>
        <TextField fullWidth value={this.state.firstName} onChange={this.handleChange} name="firstName"  id="firstname" label="First name" variant="outlined" />
        <TextField  fullWidth  value={this.state.lastName} onChange={this.handleChange}  name="lastName" id="lastname" label="Last name" variant="outlined" />
        <TextField  fullWidth  value={this.state.email} onChange={this.handleChange}  name="email" id="lastname" label="Email" variant="outlined" />

        <FormControlLabel
          control={
            <Checkbox checked={this.state.subscribed} onChange={this.handleChange} name="subscribed" />
          }
          label="Newsletter"
        />
        <FormControl component="fieldset" style={{display: 'block'}}>
          <FormLabel component="legend">Device</FormLabel>
          <RadioGroup
            aria-label="gender"
            defaultValue="smartphhone"
            name="device"
            value={this.state.device}
            onChange={this.handleChange}
          >
            <FormControlLabel value="smartphone" control={<Radio />} label="Smartphone" />
            <FormControlLabel value="tablet" control={<Radio />} label="Tablet" />
            <FormControlLabel value="desktop" control={<Radio />} label="Desktop  " />
          </RadioGroup>
        </FormControl>

        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Age</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={this.state.state}
            label="Age"
            name="state"
            onChange={this.handleChange}
          >
            <MenuItem value={'ITALIA'}>Italia</MenuItem>
            <MenuItem value={'FRANCIA'}>Francia</MenuItem>
            <MenuItem value={'GERMANIA'}>Germania</MenuItem>
          </Select>
        </FormControl>
        <Button color="primary" variant="contained" onClick={this.handleSubmit} disabled={this.checkSubmit()}>Contained</Button>
      </form>
    </>
   )
  }
}

export default App
