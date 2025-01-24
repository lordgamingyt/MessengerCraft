interface Props {
  children: React.ReactNode;
}

const HomeLAyout = ({ children }: Props) => {
  return <div>{children}</div>;
};

export default HomeLAyout;
