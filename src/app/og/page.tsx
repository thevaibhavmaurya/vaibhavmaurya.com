import { Divider } from "@/components/divider";
import { Overview } from "@/components/overview";
import { ProfileHeader } from "@/components/profile-header";

export default function Page() {
  return (
    <>
      <div className="mx-auto flex h-screen flex-col justify-center md:max-w-3xl">
        <div className="screen-line-after grow border-x border-edge after:-bottom-px">
          <div className="flex h-4" />
        </div>

        <ProfileHeader />
        <Divider />

        <Overview />

        <div className="grow border-x border-edge" />
      </div>
    </>
  );
}
