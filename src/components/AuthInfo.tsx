import Link from "next/link";
import { UserButton, auth } from "@clerk/nextjs";
import SignUpButton from "./SignInButton";
import SignInButton from "./SignUpButton";

export function AuthInfo() {
  const { userId } = auth();
  const userName: string = "";

  return (
    <nav className="h-auto w-1/5">
      <div className="flex flex-row"></div>
      <div className="flex flex-row justify-center items-center gap-x-7">
        {!userId && (
          <>
          <div className="h-12 bg-yellow-300/45 flex flex-row items-center justify-center gap-x-12">
            <SignInButton/>
           
            <SignUpButton/>
            </div>
          </>
        )}
        {userId && (
          <>
            <div className="flex flex-row items-center justify-center gap-5">
              <Link
                href="profile"
                className="px-3 w-60 text-xl text-white hover:text-slate-100  uppercase hover:bg-slate-700"
              >
                Profile
              </Link>
              <p className="text-2xl text-amber-500">{userName}</p>
            </div>
          </>
        )}
        <div className="ml-auto">
          <UserButton afterSignOutUrl="/" />
        </div>
      </div>
    </nav>
  );
}
