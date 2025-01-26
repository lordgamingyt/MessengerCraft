interface Layout {
  children: React.ReactNode;
}

const AuthLayout = ({ children }: Layout) => {
  return <div>{children}</div>;
};

export default AuthLayout;
