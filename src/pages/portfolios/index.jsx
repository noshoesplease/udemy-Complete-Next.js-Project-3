import BaseLayout from "@/components/layouts/BaseLayout";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function PortfoliosPage() {
  const [portfolios, setPortfolios] = useState([]);

  useEffect(() => {
    async function fetchPortfolios() {
      const response = await fetch("http://localhost:3000/api/v1/portfolios");
      const data = await response.json();
      setPortfolios(data);
    }
    fetchPortfolios();
  }, [portfolios]);

  const renderPortfolios = () => {
    return portfolios.map((portfolio) => (
      <li key={portfolio.id}>
        <Link href={`/portfolios/${portfolio.id}`}>{portfolio.title}</Link>
      </li>
    ));
  };

  const render = (
    <BaseLayout>
      <h1>Portfolios Page</h1>
      <ul>{renderPortfolios()}</ul>
    </BaseLayout>
  );

  return render;
}
