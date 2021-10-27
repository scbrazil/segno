import React, {useState} from 'react';
import axios from 'axios';

export default function AddInstructor() {

    let [fName, setFirstName] = useState('');
    let [lName, setLastName] = useState('');
    let [emailAddress, setEmail] = useState('');
    let [phoneNumber, setPhone] = useState('');
    let [streetAddress, setStreetAddress] = useState('');
    let [cityResidence, setCityResidence] = useState('');
    let [stateResidence, setStateResidence] = useState('');
    let [zipcodeResidence, setZipcodeResidence] = useState('');
    let [instructorInstruments, setInstructorInstruments] = useState([]);

    let instruments = [];

    const submitNewInstructor = event => {
        event.preventDefault();
        axios.post('/instructor', {
            firstName: fName,
            lastName: lName,
            instruments: instructorInstruments,
            contact: {
                phone: phoneNumber,
                email: emailAddress,
                address: {
                    street: streetAddress,
                    city: cityResidence,
                    state: stateResidence,
                    zipcode: zipcodeResidence
                }
            }
        })
        .then(response => {
            console.log(response);
            alert('New instructor added.');
        })
        .catch(error => {
            console.log(error);
        });
    };

    return (
        <div>
            <form onSubmit={submitNewInstructor}>
                <label>First Name</label><br />
                <input
                    type="text"
                    value={fName}
                    onChange={e => setFirstName(e.target.value)}
                />
                <br />
                <label>Last Name</label><br />
                <input
                    type="text"
                    value={lName}
                    onChange={e => setLastName(e.target.value)}
                />
                <br />
                <label>Email</label><br />
                <input
                    type="text"
                    value={emailAddress}
                    onChange={e => setEmail(e.target.value)}
                />
                <br />
                <label>Phone</label><br />
                <input
                    type="text"
                    value={phoneNumber}
                    onChange={e => setPhone(e.target.value)}
                />
                <br />
                <label>Street Address</label><br />
                <input
                    type="text"
                    value={streetAddress}
                    onChange={e => setStreetAddress(e.target.value)}
                />
                <br />
                <label>City</label><br />
                <input
                    type="text"
                    value={cityResidence}
                    onChange={e => setCityResidence(e.target.value)}    
                />
                <br />
                <label>State</label><br />
                <input
                    type="text"
                    value={stateResidence}
                    onChange={e => setStateResidence(e.target.value)}
                />
                <br />
                <label>Zip Code</label><br />
                <input
                    type="text"
                    value={zipcodeResidence}
                    onChange={e => setZipcodeResidence(e.target.value)}
                />
                <br />
                <select
                    name="instruments"
                    id="instrumentSelection"
                    multiple
                    onChange={e => {
                        let instrument = document.getElementById("instrumentSelection").value;
                        instruments.push(instrument);
                        setInstructorInstruments(instruments);
                    }}
                >
                    <option
                        value="piano"

                    >
                        Piano
                    </option>
                    <option value="voice">Voice</option>
                    <option value="guitar">Guitar</option>
                    <option value="violin">Violin</option>
                </select>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
};

