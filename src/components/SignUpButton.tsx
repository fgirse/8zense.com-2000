import { SignUpButton } from "@clerk/nextjs";
 
export default function Home() {
  return (
    <div>
    <h1 className="uppercase text-sm py2 px-3"> Registration </h1>
      <SignUpButton mode="modal">
        <button className="ml-5 bg-white text-black py-1 px-3 text-sm text-center hover:bg-slate-300 hover:border rounded-xl hover:border-amber-500">
          Sign up
        </button>
      </SignUpButton>
    </div>
  );
}