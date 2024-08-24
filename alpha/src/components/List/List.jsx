import { useSelector } from "react-redux";
import { selectData } from "../../redux/dataSlice";
import style from '../List/List.module.sass'
import Sceletone from '../Sceletone/Sceletone'
import Card from "../Card/Card";

export default function List() {
  const data = useSelector(selectData);
  console.log("List:", data);
  return (
    <div className={style.list}>
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
      {/* <Sceletone /> */}
    </div>
  );
}
