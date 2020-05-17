import React from "react";
import Layout from "../../components/layout/Layout";
import RedirectToLogin from "../../components/auth/RedirectToLogin";

import jsCookie from "js-cookie";
const home = () => {
  let token = jsCookie.get("token");
  return (
    <Layout>{!token ? <RedirectToLogin /> : <div className="container">
        este es el home
        
        </div>}</Layout>
  );
};

export default home;
