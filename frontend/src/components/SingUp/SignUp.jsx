import { useState, useRef } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebaseConfig';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './styles.scss';

const SignUp = () => {
  const [validation, setValidation] = useState('');
  const formRef = useRef();
  const usernameRef = useRef();
  const emailRef = useRef();
  const pwdRef = useRef();
  const repeatPwdRef = useRef();
  const navigate = useNavigate();

  // Handle Form
  const handleForm = async (e) => {
    e.preventDefault();

    // form validations
    if ((pwdRef.current.value.length || repeatPwdRef.current.value.length) < 6) setValidation('6 caractères minimum.');
    if (pwdRef.current.value !== repeatPwdRef.current.value) setValidation('Les mots de passe ne sont pas identiques.');

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, emailRef.current.value, pwdRef.current.value);
      const user = userCredential.user;
      const uid = user.uid;
      const email = user.email;
      const username = usernameRef.current.value;

      const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}users`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ uid, username, email }),
      });

      if (response.ok) {
        // clear inputs, show notification and redirect
        setValidation('');

        toast.error(`Bienvenue ${usernameRef.current.value}!`, {
          className: 'notification',
          position: 'top-right',
          autoClose: 1500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: false,
          progress: undefined,
          theme: 'dark',
          icon: false,
          bodyClassName: 'toastify-color-welcome',
        });

        setTimeout(() => {
          navigate('/');
        }, 1500);
      } else {
        console.error('Error saving user ID to the database.');
      }
    } catch (error) {
      if (error.code === 'auth/invalid-email') setValidation("Format d'email invalide.");
      if (error.code === 'auth/email-already-in-use') setValidation('Adresse email déjà utilisée.');
    }
  };

  // const handleForm = (e) => {
  //   e.preventDefault();

  //   // form validations
  //   if ((pwdRef.current.value.length || repeatPwdRef.current.value.length) < 6) setValidation('6 caractères minimum.');
  //   if (pwdRef.current.value !== repeatPwdRef.current.value) setValidation('Les mots de passe ne sont pas identiques.');

  //   // sign up the user
  //   createUserWithEmailAndPassword(auth, emailRef.current.value, pwdRef.current.value)
  //     .then((userCredential) => {
  //       const user = userCredential.user;
  //       const uid = user.uid;
  //       const email = user.email;
  //       const password = user.password;
  //       const username = usernameRef.current.value;

  //       fetch(`${process.env.REACT_APP_BACKEND_URL}users`, {
  //         method: 'POST',
  //         headers: {
  //           'Content-Type': 'application/json',
  //         },
  //         body: JSON.stringify({ uid, username, email, password }),
  //       }).then((response) => {
  //         if (response.ok) {
  //           console.log({ response });

  //           // clear inputs, show notification and redirect
  //           toast.error(`Bienvenue ${usernameRef.current.value}!`, {
  //             className: 'notification',
  //             position: 'top-right',
  //             autoClose: 1500,
  //             hideProgressBar: false,
  //             closeOnClick: true,
  //             pauseOnHover: true,
  //             draggable: false,
  //             progress: undefined,
  //             theme: 'dark',
  //             icon: false,
  //             bodyClassName: 'toastify-color-welcome',
  //           });

  //           setValidation('');
  //           setTimeout(() => {
  //             navigate('/');
  //           }, 1500);
  //         } else {
  //           console.error('Error saving user ID to the database.');
  //         }
  //       });
  //     })
  //     .catch((error) => {
  //       if (error.code === 'auth/invalid-email') setValidation("Format d'email invalide.");
  //       if (error.code === 'auth/email-already-in-use') setValidation('Adresse email déjà utilisée.');
  //     });
  // };

  return (
    <div className="sign-up">
      <ToastContainer />

      <h1 className="sign-up-header">Inscrivez-vous</h1>

      <div className="sign-up-container">
        <form onSubmit={handleForm} ref={formRef}>
          <input
            ref={usernameRef}
            type="text"
            name="username"
            id="signUpUsername"
            placeholder="Nom d'utilisateur"
            className="input-form"
            required
          />
          <input
            ref={emailRef}
            type="email"
            name="email"
            id="signUpEmail"
            placeholder="Adresse email"
            className="input-form"
            required
          />
          <input
            ref={pwdRef}
            type="password"
            name="pwd"
            id="signUpPwd"
            placeholder="Mot de passe"
            className="input-form"
            required
          />
          <input
            ref={repeatPwdRef}
            type="password"
            name="repeatPwd"
            id="repeatPwd"
            placeholder="Confirmer le mot de passe"
            className="input-form"
            required
          />
          <p>{validation}</p>
          <button className="btn" type="submit">
            S'inscrire
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
