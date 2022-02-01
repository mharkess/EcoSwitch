import React from "react";
import Footer from '../components/footer';
import styles from './signin.module.css';
import icon from '../images/ecoswitchicon.png';

function SignIn() {
    return (
        <React.Fragment>
            <div className="text-center">
            <main className={styles.formsignin}>
            <form>
                <img className="mb-4" src={icon} alt="" width="72"/>
                <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

                <div className={styles.formfloating}>
                <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"/>
                <label for="floatingInput">Email address</label>
                </div>
                <div className={styles.formfloating}>
                <input type="password" class="form-control" id="floatingPassword" placeholder="Password"/>
                <label for="floatingPassword">Password</label>
                </div>

                <div className="checkbox mb-3">
                <label>
                    <input type="checkbox" value="remember-me"/> Remember me
                </label>
                </div>
                <button className="w-100 btn btn-lg btn-success" type="submit">Sign in</button>
                <p className="mt-5 mb-3 text-muted">&copy; 2021-2022</p>
            </form>
            </main>
            </div>
        </React.Fragment>
    )
}

export default SignIn;