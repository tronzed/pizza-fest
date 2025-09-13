import { useEffect, useState } from "react";

import { auth } from "../firebase";
import { signInWithEmailAndPassword, onAuthStateChanged, createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

function LoginPage() {

    const [loginBox, setLoginBox] = useState(true);

    const [emailBox, setEmailBox] = useState("");
    const [passwordBox, setPasswordBox] = useState("");

    const navi = useNavigate();

    const loginForm = async (e) => {
        e.preventDefault();
        try {
            const userBox = await signInWithEmailAndPassword(auth, emailBox, passwordBox);
        } catch (error) {
            console.log(error.message);
        }
    }

    function checkLogin() {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                navi("/");
            }
        })
    }


    const signInForm = async (e) => {
        e.preventDefault();

        try {
            const userCredential = await createUserWithEmailAndPassword(auth, emailBox, passwordBox);
            const dataBox = {'userId':userCredential.user.email};

           await fetch('https://pizza-fest-61924-default-rtdb.firebaseio.com/users.json', {
                method: 'POST',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(dataBox)
            });

        } catch (error) {
            console.log(error.message);
        }

    }

    useEffect(() => {
        checkLogin();
    }, [])


    return (
        <>
            <div className="login_box">
                <div className="container">


                    {loginBox == true ?
                        <>
                            <div className="login_form_box">
                                <h2>Login</h2>
                                <form onSubmit={loginForm}>
                                    <div className="form-item w-100">
                                        <label className="form-label my-3">Email<sup>*</sup></label>
                                        <input type="text" className="form-control" placeholder="Enter Email" onChange={(e) => setEmailBox(e.target.value)} />
                                    </div>

                                    <div className="form-item w-100">
                                        <label className="form-label my-3">Password<sup>*</sup></label>
                                        <input type="password" className="form-control" placeholder="Enter Password" onChange={(e) => setPasswordBox(e.target.value)} />
                                    </div>

                                    <div className="form-item w-100">
                                        <input type="submit" className="btn" value="Submit" />
                                    </div>
                                    <div className="bottom_box">
                                        <p>Don't Have Account <span onClick={() => setLoginBox(false)}>SignUp</span></p>
                                    </div>
                                </form>
                            </div>
                        </>
                        :
                        <>
                            <div className="login_form_box">
                                <h2>Sign Up</h2>
                                <form onSubmit={signInForm}>
                                    <div className="form-item w-100">
                                        <label className="form-label my-3">Email<sup>*</sup></label>
                                        <input type="text" className="form-control" placeholder="Enter Email" onChange={(e) => setEmailBox(e.target.value)} />
                                    </div>

                                    <div className="form-item w-100">
                                        <label className="form-label my-3">Password<sup>*</sup></label>
                                        <input type="password" className="form-control" placeholder="Enter Password" onChange={(e) => setPasswordBox(e.target.value)} />
                                    </div>

                                    <div className="form-item w-100">
                                        <input type="submit" className="btn" value="Submit" />
                                    </div>
                                    <div className="bottom_box">
                                        <p>Already Have Account <span onClick={() => setLoginBox(true)}>Login</span></p>
                                    </div>
                                </form>
                            </div>
                        </>
                    }

                </div>
            </div>
        </>
    );
}
export default LoginPage;