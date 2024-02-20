"use client";

import * as actions from "@/actions";

import { FC } from "react";
import { Input } from "@nextui-org/react";
import { useSearchParams } from "next/navigation";

interface SeachInputProps {}

const SeachInput: FC<SeachInputProps> = ({}) => {
  const searchParams = useSearchParams();
  return (
    <form action={actions.search}>
      <Input name="term" defaultValue={searchParams.get("term") || ""} />
    </form>
  );
};

export default SeachInput;
