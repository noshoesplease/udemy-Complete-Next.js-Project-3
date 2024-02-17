import BaseLayout from "@/components/layouts/BaseLayout";
import axios from "axios";

export default function PortfoliosPage({ portfolios }) {
  return (
    <BaseLayout>
      <h1>Portfolios Page</h1>
      <ul>
        {portfolios.map((portfolio) => (
          <li key={portfolio.id}>{portfolio.title}</li>
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
