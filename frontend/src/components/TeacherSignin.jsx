import { useState } from 'react';
import { TeacherSignContainer, FormContainer, InputField, SubmitButton } from '../styles/TeacherSignInStyles';

const TeacherRegister = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const hanldeSignIn = () => {
        console.log('Teacher Sign In', {email, password});
    };
    
    return (
        <TeacherSignContainer>
            <h2>Teacher Sign In</h2>
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
                <SubmitButton to="/teacher/dashboard" onClick={hanldeSignIn} >Sign In</SubmitButton>
            </FormContainer>
        </TeacherSignContainer>
    )
}

export default TeacherSignIn;