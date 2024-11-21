import React from 'react';
import { useSelector } from 'react-redux';

const ReviewPage = () => {
    const formData = useSelector((state) => state.form.formData); // Get form data from Redux

    return (
        <div className='page'>
            <h1 className='review-title'>Your Information</h1>
            <div className='result'>
                {Object.keys(formData).length > 0 ? (
                <>
                    <p><strong>Full Name:</strong> {formData.fullName}</p>
                    <p><strong>Email:</strong> {formData.email}</p>
                    <p><strong>Password:</strong> {formData.password}</p>
                    <p><strong>Phone Number:</strong> {formData.phoneNumber}</p>
                    <p><strong>Age:</strong> {formData.age}</p>
                    <p><strong>Address:</strong> {formData.address}</p>
                </>
                ) : (
                <p>No data available to review.</p>
                )}
            </div>
        </div>
    );
};

export default ReviewPage;
