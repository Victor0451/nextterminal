import React from 'react';
import RedirectToLogin from '../../components/auth/RedirectToLogin'
import Layout from "../../components/layout/Layout";


const redirecttologin = () => {
    return (
        <Layout>
            <RedirectToLogin />
        </Layout>
    );
};

export default redirecttologin;