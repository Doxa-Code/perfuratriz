"use client";
import { signOut } from "@/app/actions/auth";
import { getUserAuthenticate } from "@/app/actions/security";
import { useServerActionQuery } from "@/hooks/server-actions-hooks";
import { Icon } from "@iconify/react";
import { Button, Dropdown } from "flowbite-react";
import Image from "next/image";
import { useServerAction } from "zsa-react";

const Profile = () => {
  const { data: user } = useServerActionQuery(getUserAuthenticate, {
    input: undefined,
    queryKey: [""],
  });
  const signOutAction = useServerAction(signOut);
  return (
    <div className="relative group/menu ps-15">
      <Dropdown
        label=""
        className="w-screen sm:w-[360px] py-6  rounded-sm"
        dismissOnClick={false}
        renderTrigger={() => (
          <span className=" hover:text-primary hover:bg-lightprimary rounded-full flex justify-center items-center cursor-pointer group-hover/menu:bg-lightprimary group-hover/menu:text-primary">
            <Image
              src="/images/profile/user-1.jpg"
              alt="logo"
              height="35"
              width="35"
              className="rounded-full"
            />
          </span>
        )}
      >
        <div className="px-6">
          <h3 className="text-lg font-semibold text-ld">Perfil</h3>
          <div className="flex items-center gap-6 pb-5 border-b dark:border-darkborder mt-5 mb-3">
            <Image
              src="/images/profile/user-1.jpg"
              alt="logo"
              height="80"
              width="80"
              className="rounded-full"
            />
            <div>
              <h5 className="card-title text-sm  mb-0.5 font-medium">
                {user?.name}
              </h5>
              <div className="flex items-center justify-start">
                <div>
                  <Icon
                    icon="tabler:mail"
                    className="text-base me-1 relative top-0.5"
                  />
                </div>
                <p className="card-subtitle font-normal text-ellipsis w-44 truncate font-sans text-muted mb-0 mt-1">
                  {user?.email}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-2 px-30">
          <Button
            color="outlineprimary"
            onClick={() => signOutAction.execute()}
            className="w-full rounded-md"
          >
            Sair
          </Button>
        </div>
      </Dropdown>
    </div>
  );
};

export default Profile;
