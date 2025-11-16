import Link from 'next/link';
import SignInForm from './_components/signInForm';
import FormWrapper from '@/app/(auth)/_components/FormWrapper';

export default function SignIn() {
  return (
    <FormWrapper title={'Sign In'}>
      <SignInForm />
      <div className='text-center'>
        Don't have an account?{' '}
        <Link href='/signUp' className='text-primaryCTA'>
          Create Account
        </Link>
      </div>
    </FormWrapper>
  );
}
