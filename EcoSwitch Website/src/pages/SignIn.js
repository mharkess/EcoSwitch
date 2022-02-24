import React, { Component } from "react";
import {Link} from 'react-router-dom'
import styles from './signin.module.css';

class SignIn extends Component {
    
    state = {
        email: null,
        password: null
    };

    onChangeEmail(textEmail) {
        this.setState({
            email: textEmail,
        })
    }

    onChangeEmail(textPass) {
        this.setState({
            password: textPass,
        })
    }

    render() {
        return (
            <React.Fragment>
                <div className="text-center">
                <main className={styles.formsignin}>
                <form>
                    <img className="mb-4" src="images/ecoswitchicon.png" alt="" width="72"/>
                    <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

                    <div className={styles.formfloating}>
                    <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" onChange={(textEmail) => this.onChangeEmail(textEmail)}/>
                    <label for="floatingInput">Email address</label>
                    </div>
                    <div className={styles.formfloating}>
                    <input type="password" class="form-control" id="floatingPassword" placeholder="Password" onChange={(textPass) => this.onChangePass(textPass)}/>
                    <label for="floatingPassword">Password</label>
                    </div>

                    <div className="checkbox mb-3">
                    <label>
                        <input type="checkbox" value="remember-me"/> Remember me
                    </label>
                    </div>
                    <Link to='/main'>
                    <button className="w-100 btn btn-lg btn-success" type="submit">Sign in</button>
                    </Link>
                    <p className="mt-5 mb-3 text-muted">&copy; 2021-2022</p>
                </form>
                </main>
                </div>
            </React.Fragment>
            );
    }
}

export default SignIn;