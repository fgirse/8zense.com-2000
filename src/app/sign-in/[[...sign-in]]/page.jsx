import { SignIn } from "@clerk/nextjs";


const SignInPage = () => {
  return (
    <>
      <div className="flex flex-col gap-y-5 items-center justify-center">
        <h1 className="text-2xl md:text-3xl lg:text-5xl text-center text-slate-500">
          Melden Sie sich bitte an! Der Inhalt dieser Seite ist nur nach Anmeldung zugänglich
        </h1>
        <SignIn />
      </div>
    </>
  );
};
export default SignInPage;


