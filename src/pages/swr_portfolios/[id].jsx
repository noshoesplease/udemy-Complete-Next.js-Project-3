import BaseLayout from "@/components/layouts/BaseLayout";
import { useRouter } from "next/router";
import { useGetSWRData } from "@/actions";

const PortfolioDetailPage = () => {
  const router = useRouter();
  const { data: portfolio, error } = useGetSWRData(
    router.query.id ? `/api/v1/portfolios/${router.query.id}` : null
  );

  return (
    <BaseLayout>
      <h1>Portfolio Detail Page</h1>
      {!portfolio && <p>Loading Data...</p>}
      {error && <div className="alert alert-danger">{error.message}</div>}
      {portfolio && (
        <>
          <h1>{portfolio.title}</h1>
          <p>Body: {portfolio.body}</p>
          <p>ID: {portfolio.id}</p>
        </>
      )}
    </BaseLayout>
  );
};

export default PortfolioDetailPage;
