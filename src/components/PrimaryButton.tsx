import { Button } from "@mantine/core";

interface IButtonProps {
  onClick?: () => void;
  text: string;
  className?: string;
  type: "button" | "submit" | "reset" | undefined;
  variant: string;
  loading?: boolean;
  loaderProps?: {
    type: string;
  };
}

const PrimaryButton = ({
  onClick = () => {},
  text,
  className,
  type,
  variant,
  loading,
  loaderProps,
}: IButtonProps) => {
  return (
    <Button
      type={type}
      variant={variant}
      onClick={onClick}
      className={`!px-10 !rounded-md !tracking-wide ${className}`}
      loading={loading}
      loaderProps={loaderProps}
    >
      {text}
    </Button>
  );
};

export default PrimaryButton;
