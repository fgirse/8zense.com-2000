import { UserProfile } from "@clerk/nextjs";

const ProfilePage = () => {
  return (
    <>
      <div className="flex flex-col gap-y-12 items-center justify-center">
        <h1 className="text-2xl md:text-3xl lg:text-5xl text-center text-slate-500">
          Ihre Profildaten
        </h1>
        <UserProfile />
      </div>
    </>
  );
};

export default ProfilePage;
