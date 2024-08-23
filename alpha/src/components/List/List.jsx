import { useSelector } from "react-redux";
import { selectData } from "../../redux/dataSlice";
import Card from "../Card/Card";

export default function List() {
  const data = useSelector(selectData);
  console.log("List:", data);
  return (
    <>
      {data.map((movie, idx) => (
        <Card
          key={idx}
          img={movie.flags[0]}
          title={movie.name.official}
          capital={movie.capital}
          region={movie.region}
          population={movie.population}
        />
      ))}
    </>
  );
}
