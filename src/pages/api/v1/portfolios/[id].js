import axios from "axios";

export default async (req, res) => {
  try {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${req.query.id}`
    );
    const data = response.data;
    res.status(200).json(data);
  } catch (e) {
    // console.error(e);
    res.status(e.status || 400).json({ message: "Api error"});
  }
};
