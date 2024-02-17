import BaseLayout from "@/components/layouts/BaseLayout";
import axios from "axios";
import Link from "next/link";

export default function PortfoliosPage({ portfolios }) {
  return (
    <BaseLayout>
      <h1>Portfolios Page</h1>
      <ul>
        {portfolios.map((portfolio) => (
          <li key={portfolio.id}>
            <Link href={`/portfolios/${portfolio.id}`}>{portfolio.title}</Link>
          </li>
        ))}
      </ul>
    </BaseLayout>
  );
}

PortfoliosPage.getInitialProps = async () => {
  let portfolios = [];
  try {
    const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
    portfolios = res.data;
  } catch (e) {
    console.error(e);
  }

  return { portfolios: portfolios.slice(0, 10) };
};
