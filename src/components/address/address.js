import React from 'react';
import '../../styles/address.css'
import '../../styles/user.css'

class Address extends React.Component {
    state = {
        addressLine1: '',
        addressLine2: '',
        city: '',
        state: '',
        postalCode: ''
    }

    render() {
        return (
            <div class="container">
                <form>
                    <label for="addressLine1 ">Address Line 1</label>
                    <input type="text" id="addressLine1" placeholder='Address Line 1' value = {this.state.addressLine1} 
                    onChange = {e => this.setState({addressLine1: e.target.value})}/>

                    <label className = "userdetails" for="addressLine2 ">Address Line 2</label>
                    <input type="text"  id="addressLine2"  placeholder='Address Line 2' value = {this.state.addressLine2} 
                    onChange = {e => this.setState({addressLine2: e.target.value})}/>

                    <label for="city ">City</label>
                    <input type="text"   id="city"  placeholder='city' value = {this.state.city} 
                    onChange = {e => this.setState({city: e.target.value})} />

                    <label for="state ">State</label>
                    <input type="text"  id="state" placeholder='state' value = {this.state.state}
                    onChange = {e => this.setState({state: e.target.value})} />

                    <label for="postalCode ">PostalCode</label> 

                    <input type="text"  id="postalCode" placeholder='postalCode' value = {this.state.postalCode}
                    onChange = {e => this.setState({postalCode: e.target.value})} />

                </form>
            </div>
        )
    }
}

export default Address;