import React, { useState } from "react";
import { Container, Button } from "react-bootstrap";
import { gql } from '@apollo/client'
import { Toaster } from "react-hot-toast";
import "./loginPage.css";
// import axios from "axios";
// import jwt from 'jwt-decode';
import { useNavigate } from 'react-router-dom';
import { useLazyQuery } from '@apollo/client';
// import { useDispatch } from "react-redux";
// import {login} from '../../Config/Redux/LoginSlice';

const LOGIN_ADMIN = gql`
query MyQuery {
    admin(where: {password: {_eq: "admin123"}, username: {_eq: "admin"}}) {
      password
      username
    }
  }
`;

// query MyQuery($username: bpchar, $password: String) {
//     admin(where: {password: {_eq: $password}, username: {_eq: $username}}) {
//       password
//       username
//     }
//   }

function Login({uname, pw}) {
    const navigate = useNavigate();
    // const dispatch = useDispatch();
    const [getAdmin, {loading, data, error}] = useLazyQuery(LOGIN_ADMIN)
    const formKosong = {
        username: "",
        password: "",
    };
    // const formError = {
    //     username: "",
    //     password: "",
    // };

    //init state
    const [form, setForm] = useState(formKosong);
    // const [errMsg, setErrMsg] = useState(formError);

    //validation function
    // const validateFormValue = (name, value) => {
    //     //validate username
    //     if (name === "username" && value !== "") {
    //         setErrMsg({ ...formError, username: "" });
    //     }
    //     //validate password
    //     if (name === "password" && value !== "") {
    //         setErrMsg({ ...formError, password: "" });
    //     }
    // };

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        // validateFormValue(name, value);
        setForm({
            ...form,
            [name]: value,
        });
    };

    // const validateOnSubmit = () => {
    //     setErrMsg(() => {
    //         const errorMessageArr = Object.keys(errMsg).map((key) => {
    //             if (form[key] === "") {
    //                 const err = `${key.charAt(0).toUpperCase() + key.slice(1)
    //                     } tidak boleh kosong`;

    //                 return { [key]: err };
    //             }
    //             return { [key]: "" };
    //         });
    //         const updatedErrorMessage = errorMessageArr.reduce(
    //             (previousValue, currentValue) => {
    //                 return { ...previousValue, ...currentValue };
    //             },
    //             {}
    //         );
    //         return updatedErrorMessage;
    //     });
    // };

    // const [error, setError] = useState([]);

    const getAdminByUsername = () => {
        console.log("test")
        // getAdmin({variables: {password: pw, username: uname})
    } 
    const handleSubmit = (e) => {
        e.preventDefault();
        const username = data?.admin[0].username
        const password = data?.admin[0].password
        console.log(username)
        console.log(password)
        getAdminByUsername()
        // getAdmin({variables: {
        //     username: form.username,
        //     password: form.password
        // }})
        // if (username === undefined || password === undefined) {
        //     alert("Username atau password salah!")
        // } else {
        //     navigate("/dashboard")
        // }
        console.log(form);
        // const validForm = Object.keys(form).filter((key) => form[key] !== "");

        // if (validForm.length < 2) {
        //     validateOnSubmit();
        // } else {
        //     var API_URL = 'https://reservaksin-be.herokuapp.com';
        //     axios
        //         .post(`${API_URL}/admin/login`, form)
        //         .then((resp) => {
        //             console.log("isi resp",resp);
        //             if (resp.data.meta.status !== 200) {
        //                 setError(resp.data.meta.messages);
        //             } else {
        //                 //extract token -> supaya dapat id user
        //                 var user = jwt(resp.data.data.token);
        //                 dispatch(login({username:form.username, login:true, token:resp.data.data.token, id: user.id}));
        //                 navigate("/")
        //             }
        //         })
        //         .catch((e) => {
        //             console.error(e);
        //             if (e.response) {
        //                 if(e.response.status === 401){
        //                     ToastError("Username atau password salah!")
        //                 }
        //                 // console.log("isi err response", e.response);
        //             } else if (e.request) {
        //                 console.log("isi err req", e.request);
        //             }
        //         });
        // }
    };
    return (
        <>
            <Container className="login">
                <Toaster />
                <Container style={{ margin: "auto" }}>
                    <Container className="container-content-form">
                        <Container className="container-content-title">
                            <h3 style={{ margin: "auto" }}>Login as Admin</h3>
                        </Container>
                        <Container
                            className="container-input"
                        >
                            <form onSubmit={handleSubmit} style={{ margin: "auto" }}>
                                <input
                                    id="username"
                                    type="text"
                                    value={form.username}
                                    onChange={handleChange}
                                    name="username"
                                    placeholder="Username"
                                    className="input-form"
                                ></input>
                                {/* <span className="err">
                                    {errMsg.username}
                                </span> */}
                                <br />
                                <input
                                    id="password"
                                    type="password"
                                    value={form.password}
                                    onChange={handleChange}
                                    name="password"
                                    placeholder="Password"
                                    className="input-form"
                                ></input>
                                {/* <span className="err">
                                    {errMsg.password}
                                </span> */}
                                <br />
                                <Button
                                    type="submit"
                                    className="button-content-form"
                                    style={{ cursor: "pointer" }}
                                >
                                    Login
                                </Button>
                            </form>
                        </Container>
                        <Container className="container-contact">
                            <span >Forgot password?</span>
                            <span >Contact to dev@reservaksin.com</span>
                        </Container>
                    </Container>
                </Container>
            </Container>
        </>
    );
}

export default Login;
