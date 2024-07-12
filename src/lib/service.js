import axios from "axios";

const getData = async (id) => {
  try {
    const { data: user } = await axios(
      `https://jsonplaceholder.typicode.com/users/${id}`
    );

    const { data: post } = await axios(
      `https://jsonplaceholder.typicode.com/posts?userId=${id}`
    );

    const data = { user, post };
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export default getData;
