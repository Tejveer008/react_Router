import { useLoaderData } from "react-router-dom";

export const Movies = () => {
  const movieData = useLoaderData();
  console.log(movieData);
  
  return (
    <h1>Movies</h1>
  )
};
