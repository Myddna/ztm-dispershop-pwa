import { useCallback, useState } from 'react';
import { signInWithGoogle, signInWithEmailUser } from '../../firebase/firebase.utils';
import CustomButton from '../CustomButton/CustomButton';
import FormInput from '../FormInput/FormInput';
import styles from './SignIn.module.scss';

const SignIn = function () {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async function (event) {
    event.preventDefault();

    try {
      await signInWithEmailUser(email, password);

      setEmail('');
      setPassword('');
      setErrorMessage('');
    } catch ({ message }) {
      setErrorMessage(message);
    }
  };

  /**
   * Memoized callback, see https://reactjs.org/docs/hooks-reference.html#usecallback
   * Discovered through this rule https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-bind.md
   * See this too https://attardi.org/why-we-memo-all-the-things/
   */
  const handleChangeMemo = useCallback(
    (ev) => {
      const { value, name } = ev.target;
      switch (name) {
        case 'email':
          setEmail(value);
          break;
        case 'password':
          setPassword(value);
          break;
        default:
          break;
      }
    },
  );

  return (
    <div className={styles.SignIn}>
      <h2 className={styles.title}>I already have an account</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          id="si_email"
          type="email"
          name="email"
          value={email}
          handleChange={handleChangeMemo}
          required
        />
        <FormInput
          label="Password"
          id="si_password"
          type="password"
          name="password"
          value={password}
          handleChange={handleChangeMemo}
          required
        />
        { errorMessage && (
          <div className="error-box">
            { errorMessage }
          </div>
        ) }

        <div className={styles.buttons}>
          <CustomButton type="submit">Sign in</CustomButton>
          <CustomButton type="button" onClick={signInWithGoogle} isGoogleSignIn>Sign in with Google</CustomButton>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
