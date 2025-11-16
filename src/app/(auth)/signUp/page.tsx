import Link from 'next/link';
import FormWrapper from '../_components/FormWrapper';
import SignUpForm from './_components/signUpForm';

export default function SignUp() {
  return (
    <FormWrapper title='Create Account'>
      <SignUpForm />
      <div className='text-center'>
        Already have an account?{' '}
        <Link href='/signIn' className='text-primaryCTA'>
          Login
        </Link>
      </div>
    </FormWrapper>
  );
}
