    import React, { useState } from 'react';
    import { useDispatch } from 'react-redux';
    import { saveFormData } from '../features/formSlice';
    import { useNavigate } from 'react-router-dom';
    import FormField from '../components/FormField';

    function FormPage() {
        // Form Object
        const [form, setForm] = useState({
            fullName: '',
            email: '',
            phoneNumber: '',
            password: '',
            confirmPassword: '',
            age: '',
            address: '',
    });

        // Catch error validation
        const [errors, setErrors] = useState({});
        const dispatch = useDispatch();
        const navigate = useNavigate();

        const validate = () => {
            const newErrors = {};
        
            // Full Name validation
            if (!form.fullName) newErrors.fullName = 'Required';
            else if (!/^[a-zA-Z\s]+$/.test(form.fullName)) newErrors.fullName = 'Only alphabets allowed.';
        
            // Email validation
            if (!form.email) newErrors.email = 'Required';
            else if (!/\S+@\S+\.\S+/.test(form.email)) newErrors.email = 'Invalid email.';
        
            // Phone number has to be number and min 7 number.
            if (!form.phoneNumber) newErrors.phoneNumber = 'Required';
            else if (!/^\d+$/.test(form.phoneNumber)) newErrors.phoneNumber = 'Has to be numbers only.';
            else if (form.phoneNumber.length < 7) newErrors.phoneNumber = 'Minimum 7 characters.';
        
            // Password validation min 8 characters, has number, uppercase, lowercase, and unique symbol
            if (!form.password) newErrors.password = 'Required';
            else if (form.password.length < 8)
                newErrors.password = 'Password must be at least 8 characters.';
            else if (!/\d/.test(form.password))
                newErrors.password = 'Password must include at least one number.';
            else if (!/(?=.*[a-z])(?=.*[A-Z])/.test(form.password))
                newErrors.password = 'Password must include uppercase and lowercase letters.';
            else if (!/[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?_]/.test(form.password))
                newErrors.password = 'Password must include at least one symbol.';
        
            // Confirm Password validation
            if (!form.confirmPassword) newErrors.confirmPassword = 'Required';
            else if (form.confirmPassword !== form.password)
                newErrors.confirmPassword = 'Passwords do not match.';
        
            // Age validation has to be number and in range 8 to 100
            if (!form.age) newErrors.age = 'Required';
            else if (!/^\d+$/.test(form.age)) newErrors.age = 'Age must be a number.';
            else if (form.age < 8 || form.age > 100) newErrors.age = 'Age must be between 8 and 100.';
        
            // Address validation min 5 characters
            if (!form.address) newErrors.address = 'Required';
            else if (form.address.length < 5)
                newErrors.address = 'Address must be at least 5 characters.';
        
            setErrors(newErrors);
            return Object.keys(newErrors).length === 0;
        };    

        const handleSubmit = (e) => {
            e.preventDefault();
            if (validate()) {
            dispatch(saveFormData(form));
            navigate('/review');
            }
        };

        return (
            <div className='page'>
                <form onSubmit={handleSubmit}>
                    <h1 className='title'>Sign Up</h1>
                    <p className='desc'> Please fill out the form below! </p>
                    <FormField  
                        label="Full Name"
                        type="text" 
                        value={form.fullName}
                        onChange={(e) => setForm({ ...form, fullName: e.target.value })}
                        error={errors.fullName}
                        className="field"
                        placeholder="e.g Farrel Athalla Putra"
                    />
                    <FormField
                        label="Email"
                        type="email"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        error={errors.email}
                        placeholder="e.g user@gmail.com"
                    />
                    <FormField
                        label="Phone Number"
                        type="text"
                        value={form.phoneNumber}
                        onChange={(e) => setForm({ ...form, phoneNumber: e.target.value })}
                        error={errors.phoneNumber}
                        placeholder="e.g 123456789"
                    />
                    <FormField
                        label="Password"
                        type="password"
                        value={form.password}
                        onChange={(e) => setForm({ ...form, password: e.target.value })}
                        error={errors.password}
                        placeholder="Enter your password"
                    />
                    <FormField
                        label="Confirm Password"
                        type="password"
                        value={form.confirmPassword}
                        onChange={(e) => setForm({ ...form, confirmPassword: e.target.value })}
                        error={errors.confirmPassword}
                        placeholder="Re-enter your password"
                    />
                    <FormField
                        label="Age"
                        type="text"
                        value={form.age}
                        onChange={(e) => setForm({ ...form, age: e.target.value })}
                        error={errors.age}
                        placeholder="Enter your age"
                    />
                    <FormField
                        label="Address"
                        type="text"
                        value={form.address}
                        onChange={(e) => setForm({ ...form, address: e.target.value })}
                        error={errors.address}
                        placeholder="Enter your address"
                    />
                    <button type="submit">Submit</button>
                </form>
            </div>
        );
    }

    export default FormPage;