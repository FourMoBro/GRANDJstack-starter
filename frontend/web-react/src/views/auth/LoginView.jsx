import React from 'react'
import { Link as RouterLink, useNavigate } from 'react-router-dom'

import axiosInstance from '../../axios'

import * as Yup from 'yup'
import { Formik, Form } from 'formik'
import FormikControl from '../../components/formik-elements/FormikControl'
import { Box, Button, Container } from "@chakra-ui/react"

const LoginView = () => {
    const navigate = useNavigate()
    
    const initialValues = {
        user_name:"",
        password:""
    };

    const validationSchema = Yup.object({
        user_name: Yup.string().required('Required'),
        password: Yup.string().required('Required'),
    })

    const axiosOnSubmit = (values) => {
        axiosInstance.post(
            `token/obtain/`, {
                user_name: values.user_name,
                password: values.password,
            })
            .then((res) => {
                localStorage.setItem('access_token', res.data.access);
                localStorage.setItem('refresh_token', res.data.refresh);
                axiosInstance.defaults.headers['Authorization'] =
                    'JWT ' + localStorage.getItem('access_token');
                navigate('/app/');
            });
    };


    return (
// Page
        <Box display="flex" flexDirection="column" height="100%" justifyContent="center" >
            <Container maxWidth="sm" >
                <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={axiosOnSubmit} >
                    {formik => (
                        <Form>
                            <FormikControl control='input' label='User Name' name='user_name' />
                            <FormikControl control='input' label='Password' name='password' />
                            <Button type="submit" variant="contained" >Log In</Button>
                        </Form>
                    )}
                </Formik>
            </Container>
        </Box>
    )
}

export default LoginView
