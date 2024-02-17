import BaseLayout from "@/components/layouts/BaseLayout";
import axios from "axios";

const PortfolioDetailPage = ({portfolio}) => {

  console.log(portfolio)

  return (
    <BaseLayout>
      <h1>Portfolio Detail Page</h1>
      <h2>{portfolio.title}</h2>
      <h4>{portfolio.id}</h4>
      <p>{portfolio.body}</p>
    </BaseLayout>
  );
};


PortfolioDetailPage.getInitialProps = async ({query}) => {
  let portfolio = {};
  try {
    const res = await axios.get(`https://jsonplaceholder.typicode.com/posts/${query.id}`);
     portfolio = res.data;
  } catch (e) {
    console.error(e);
  }

  return {portfolio};
};

export default PortfolioDetailPage;
