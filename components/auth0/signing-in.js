import React from 'react';
import AdminLayout from '../layout/admin';

const SigningIn = () => {
    return <AdminLayout>
        <div className="container mx-auto">
            <h1 className="text-2xl my-6">Signing you in</h1>
            <p>In order to access this page you will need to sign in. Please wait while we redirect you to the login page...</p>
        </div>
    </AdminLayout>;
};

export default SigningIn;