import { useEffect, useState } from "react"
import { Message } from "./Message";
import { useForm } from "../hooks/useForm";
export const FormWithCustomHook = () => {
    const { formState, onInputChange, username, email, password } = useForm({
        username: '',
        email: '',
        password: '',
    });

    useEffect(() => {
        // console.log('useEffect');
    }, []);
    useEffect(() => {
        // console.log('formState cambio');
    }, [formState]);
    useEffect(() => {
        // console.log('email cambio');
    }, [formState.email]);

    // const { username, email, password } = formState;

    return (
        <>
            <h1>Formulario FormWithCustomHook</h1>
            <hr />

            <input
                type="text"
                className="form-control"
                placeholder="Username"
                name="username"
                value={username}
                onChange={onInputChange}
            />
            <input
                type="email"
                className="form-control mt-2"
                placeholder="cesar@gmail.com"
                name="email"
                value={email}
                onChange={onInputChange}
            />
            <input
                type="password"
                className="form-control mt-2"
                placeholder="Contraseñs"
                name="password"
                value={password}
                onChange={onInputChange}
            />

        </>
    )
}