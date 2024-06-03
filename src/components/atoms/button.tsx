import { Button as MuiButton } from "@mui/material";

export default function Button({
  children,
  type,
}: {
  children: React.ReactNode;
  type?: "button" | "submit" | "reset";
}) {
  return (
    <MuiButton type={type} variant="contained" color="primary">
      {children}
    </MuiButton>
  );
}
