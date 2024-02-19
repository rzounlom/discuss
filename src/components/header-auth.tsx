"use client";

import * as actions from "@/actions";

import {
  Avatar,
  NavbarItem,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@nextui-org/react";

import FormButton from "./common/form-button";
import { useSession } from "next-auth/react";

export default function HeaderAuth() {
  const session = useSession();

  let authContent: React.ReactNode;
  if (session.status === "loading") {
    authContent = null;
  } else if (session.data?.user) {
    authContent = (
      <Popover placement="left">
        <PopoverTrigger>
          <Avatar
            className="hover:cursor-pointer"
            src={session.data.user.image || ""}
          />
        </PopoverTrigger>
        <PopoverContent>
          <div className="p-4">
            <form action={actions.signOut}>
              <FormButton color="danger" variant="bordered">
                Sign Out
              </FormButton>
            </form>
          </div>
        </PopoverContent>
      </Popover>
    );
  } else {
    authContent = (
      <>
        <NavbarItem>
          <form action={actions.signIn}>
            <FormButton color="secondary" variant="bordered">
              Sign In
            </FormButton>
          </form>
        </NavbarItem>

        <NavbarItem>
          <form action={actions.signIn}>
            <FormButton color="primary" variant="flat">
              Sign Up
            </FormButton>
          </form>
        </NavbarItem>
      </>
    );
  }

  return authContent;
}
