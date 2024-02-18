import BaseLayout from "@/components/layouts/BaseLayout";
import BasePage from "@/components/BasePage";
import Link from "next/link";
import { useGetSWRData } from "@/actions";
 
export default function SWR_PortfoliosPage() {

  const { data, error, loading } = useGetSWRData("/api/v1/portfolios");
  
  const renderPortfolios = () => {
    return data.map((portfolio) => (
      <li key={portfolio.id}>
        <Link href={`/swr_portfolios/${portfolio.id}`}>{portfolio.title}</Link>
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
