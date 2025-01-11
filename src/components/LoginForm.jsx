import Button from './Button';

function LoginForm() {
  return (
    <form>
      <div>
        <p>Don&apos;t have an account ?</p>
        <Button to="/signup" type="secondary">
          Signup
        </Button>
      </div>
    </form>
  );
}

export default LoginForm;
