import BaseLayout from "@/components/layouts/BaseLayout";
import BasePage from "@/components/BasePage";
import Link from "next/link";
import { useGetData } from "@/actions";
 
export default function PortfoliosPage() {
  const { data, error, loading } = useGetData("/api/v1/portfolios");

  const renderPortfolios = () => {
    return data.map((portfolio) => (
      <li key={portfolio.id}>
        <Link href={`/portfolios/${portfolio.id}`}>{portfolio.title}</Link>
      </li>
    ));
  };

  const Content = () => {
    return (
      <div>
        <h1>Portfolios Page</h1>
        {loading && <p>Loading data...</p>}
        {data && <ul>{renderPortfolios()}</ul>}
        {error && <div className="alert alert-danger">{error.message}</div>}
      </div>
    );
  }


  const render = (
    <BaseLayout>
      <BasePage>
       <Content />
      </BasePage>
    </BaseLayout>
  );

  return render;
}
