import React, { useEffect, useState } from 'react';
import Layout from "../../components/layout/Layout";
import ListadoUsuario from "../../components/auth/ListadoUsuarios";

import axios from "axios";
import RedirectToLogin from "../../components/auth/RedirectToLogin";
import jsCookie from "js-cookie";

const listado = () => {
    const [listado, guardarListado] = useState(null)

    const listadoUsuario = async () => {

    }

    useEffect(() => {

    }, [])


    return (
        <Layout>
            {!token ? (
                <RedirectToLogin />
            ) : (
                    <>
                        <ListadoUsuario listado={listado} />


                    </>
                )}
        </Layout>
    );
};

export default listado;