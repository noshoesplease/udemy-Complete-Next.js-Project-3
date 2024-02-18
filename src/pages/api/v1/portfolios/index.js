import axios from "axios";

export default async (req, res) => {
  let portfolios = [];
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    portfolios = response.data;
    res.status(200).json(portfolios.slice(0, 10));
  } catch (e) {
    console.error(e);
    res.status(e.status || 400).json({ message: "Api error"});
  }
};
