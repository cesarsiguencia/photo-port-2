import React, { useState } from 'react'
import { validateEmail } from '../../utils/helpers';

function ContactForm() {

    // this first part is setting the form attributes
    const [formState, setFormState] = useState({ name: '', email: '', message: '' }); // with this Hook, we are setting formState object to have three clear string properties

    const { name, email, message } = formState;
    //destructure formState into its properties so that the attribute defaultValue below can be {name} instead of formState.name. Easier to define the properties below

    const [errorMessage, setErrorMessage] = useState('');
    

    //grabbing the values next. Form state is the object with clear strings while setFormState will be our new formState object with our new values
    function handleChange(e){

        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            console.log(isValid);
            // isValid conditional statement
            if (!isValid) {
                setErrorMessage('Your email is invalid.');
              } else {
                setErrorMessage('');
              }
        } else {
            if (!e.target.value.length) {
                setErrorMessage(`${e.target.name} is required.`);
            } else {
                setErrorMessage('');
            }
            console.log('errorMessage', errorMessage);
        }

        if (!errorMessage) {
            setFormState({ ...formState, [e.target.name]: e.target.value });
        }
     
        // ...formState keeps the other key-value pairs for the object...formState, and name of the name attribute below with e.target.name
        //(ex: ...formState, email: value), the value of the selected attribute will match with the property of the same name in formState to create the new property for the setFormState
        //The name property of target in the preceding expression actually refers to the name attribute of the form element. This attribute value matches the property names of formState (name, email, and message) and allows us to use [ ] to create dynamic property names.
    
    }
    console.log(formState)


    function handleSubmit(e) {
        e.preventDefault();
        console.log(formState);
      }

    return (
        <section>
          <h1>Contact me</h1>
          <form id="contact-form" onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Name:</label>
                <input type="text" name="name" defaultValue={name} onChange={handleChange}/>
            </div>
            <div>
                <label htmlFor="email">Email address:</label>
                <input type="email" name="email" defaultValue={email} onChange={handleChange} />
            </div>
            <div>
                <label htmlFor="message">Message:</label>
                <textarea name="message" rows="5" defaultValue={message} onChange={handleChange}/>
                    {errorMessage && (
                    <div>
                    <p className="error-text">{errorMessage}</p>
                    </div>
                )}
            </div>

            <button type="submit">Submit</button>
          </form>
        </section>
      )
    
    }
    
export default ContactForm;

//onChange attribute for when button is clicked