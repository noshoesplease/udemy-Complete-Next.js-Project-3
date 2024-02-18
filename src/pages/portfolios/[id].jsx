import BaseLayout from "@/components/layouts/BaseLayout";
import { useGetData } from "@/actions";
import { useRouter } from "next/router";

const PortfolioDetailPage = () => {
  const router = useRouter();

  const {
    data: portfolio,
    error,
    loading,
  } = useGetData(router.query.id ? `/api/v1/portfolios/${router.query.id}` : null);

  return (
    <BaseLayout>
      <h1>Portfolio Detail Page</h1>
      {loading && <p>Loading Data...</p>}
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
