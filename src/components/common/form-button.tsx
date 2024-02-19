"use client";

import { Button, ButtonProps } from "@nextui-org/react";
import { FC, ReactNode } from "react";

import { useFormStatus } from "react-dom";

interface FormButtonProps extends ButtonProps {
  children: ReactNode;
}

const FormButton: FC<FormButtonProps> = ({ children, color, variant }) => {
  const { pending } = useFormStatus();
  return (
    <Button
      type="submit"
      color={`${color ? color : "default"}`}
      variant={`${variant ? variant : "solid"}`}
      isLoading={pending}
    >
      {children}
    </Button>
  );
};

export default FormButton;
