import { useState } from 'react';
import { AdminSignInContainer, FormContainer, InputField, SubmitButton } from '../styles/AdminSignInStyles';

const AdminSignIn = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const hanldeSignIn = () => {
        console.log('Admin Sign In', {email, password});
    };
    
    return (
        <AdminSignInContainer>
            <h2>Admin Sign In</h2>
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
                <SubmitButton to="/admin/dashboard" onClick={hanldeSignIn} >Sign In</SubmitButton>
            </FormContainer>
        </AdminSignInContainer>
    )
}

export default AdminSignIn;