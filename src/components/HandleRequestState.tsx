interface HandleRequestStateProps {
  state: boolean;
  placeholder?: React.ReactNode;
  children: React.ReactNode;
}

export const HandleRequestState = ({
  state,
  placeholder,
  children,
}: HandleRequestStateProps) => {
  if (state) return <>{placeholder}</>;
  return <>{children}</>;
};
