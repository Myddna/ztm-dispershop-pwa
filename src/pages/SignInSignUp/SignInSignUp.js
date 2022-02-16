import SignIn from '../../components/SignIn/SignIn';
import SignUp from '../../components/SignUp/SignUp';
import styles from './SignInSignUp.module.scss';

const SignInSignUp = function () {
  return (
    <div className={styles.SignInSignUp}>
      <SignIn />
      <SignUp />
    </div>
  );
};

export default SignInSignUp;
