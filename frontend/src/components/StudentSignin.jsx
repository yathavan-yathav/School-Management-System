import { useState } from 'react';
import { StudentSignContainer, FormContainer, InputField, SubmitButton } from '../styles/StudentSignInStyles';

const StudentRegister = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const hanldeSignIn = () => {
        console.log('Student Sign In', {email, password});
    };
    
    return (
        <StudentSignContainer>
            <h2>Student Sign In</h2>
            <FormContainer>
                <InputField 
                type='email'
                placeholder='Email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                />
                <InputField 
                type='password'
                placeholder='Password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                />
                <SubmitButton to="/student/dashboard" onClick={hanldeSignIn} >Sign In</SubmitButton>
            </FormContainer>
        </StudentSignContainer>
    )
}

export default StudentSignIn;