import Link from "next/link";

const Header = () => {
  const links = [
    { title: "Home", path: "/" },
    { title: "Blogs", path: "/blogs" },
    { title: "Portfolios", path: "/portfolios" },
    { title: "About", path: "/about" },
    { title: "CV", path: "/cv" },
  ];

  return (
    <>
      {links.map((link, index) => (
        <Link key={index} href={link.path}>
          {link.title}
        </Link>
      ))}
    </>
  );
};

export default Header;
