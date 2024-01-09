import { SignInButton } from "@clerk/nextjs";
 
export default function Home() {
  return (
    <div>
       <h1 className="px-2 py-1 uppercase text-sm text-amber-200"> Anmeldung </h1>
      <SignInButton mode="modal">
        <button className="ml-5 bg-white text-black py-1 px-3 text-sm text-center hover:bg-slate-300 hover:border rounded-xl hover:borger-green-600">
          Sign in
        </button>
      </SignInButton>
    </div>
  );
}