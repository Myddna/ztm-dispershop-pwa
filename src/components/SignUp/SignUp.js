import { useCallback, useState } from 'react';
import { signInWithGoogle, createEmailUser, createUserProfileDocument } from '../../firebase/firebase.utils';
import CustomButton from '../CustomButton/CustomButton';
import FormInput from '../FormInput/FormInput';
import styles from './SignUp.module.scss';

const SignUp = function () {
  const [displayName, setDisplayName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const isValid = function () {
    return password === confirmPassword;
  };

  const handleSubmit = async function (event) {
    event.preventDefault();

    // Form validation
    if (!isValid()) {
      setErrorMessage("Passwords don't match");
      return;
    }

    try {
      const user = await createEmailUser(email, password);
      console.log(user, displayName);
      createUserProfileDocument(user, { displayName });

      // Clearing up the form state
      setDisplayName('');
      setEmail('');
      setPassword('');
      setConfirmPassword('');
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
        case 'displayName':
          setDisplayName(value);
          break;
        case 'email':
          setEmail(value);
          break;
        case 'password':
          setPassword(value);
          break;
        case 'confirmPassword':
          setConfirmPassword(value);
          break;
        default:
          break;
      }
    },
  );

  return (
    <div className={styles.SignUp}>
      <h2 className={styles.title}>I don&apos;t have an account yet</h2>
      <span>Sign up with your display name, email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          label="Display Name"
          id="su_displayName"
          type="text"
          name="displayName"
          value={displayName}
          handleChange={handleChangeMemo}
          required
        />
        <FormInput
          label="Email"
          id="su_email"
          type="email"
          name="email"
          value={email}
          handleChange={handleChangeMemo}
          required
        />
        <FormInput
          label="Password"
          id="su_password"
          type="password"
          name="password"
          value={password}
          handleChange={handleChangeMemo}
          required
        />
        <FormInput
          label="Confirm Password"
          id="su_confirmPassword"
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          handleChange={handleChangeMemo}
          required
        />
        { errorMessage && (
          <div className="error-box">
            { errorMessage }
          </div>
        ) }

        <div className={styles.buttons}>
          <CustomButton type="submit">Sign up</CustomButton>
          <CustomButton type="button" onClick={signInWithGoogle} isGoogleSignIn>Sign up with Google</CustomButton>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
