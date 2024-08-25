import { useEffect } from "react";
import axios from "axios";
import MAIN_URL from "../assets/config";
import { useDispatch } from "react-redux";
import { setData } from "../redux/dataSlice";

export default function Data() {
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(MAIN_URL);
      dispatch(setData(response.data));
      console.log(response.data);
    };
    fetchData();
  }, [dispatch]);

  return <></>;
}
