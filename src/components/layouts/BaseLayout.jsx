import Header from "@/components/shared/Header";

const BaseLayout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default BaseLayout;
