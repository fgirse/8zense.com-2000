import { SignUp } from "@clerk/nextjs";

const SignUpPage = () => {
  return (
    <>
      <div className="flex flex-col gap-y-12 items-center justify-center">
        <h1 className="text-2xl md:text-3xl lg:text-5xl text-center text-slate-500">
          Melden Sie sich an
        </h1>
        <SignUp />
      </div>
    </>
  );
};
export default SignUpPage;
