import React from "react";
import { useEffect } from "react";
import axios from "axios";
import MAIN_URL from "../assets/config";
import { useDispatch } from "react-redux";
import { setData } from "../redux/dataSlice";

export default function Data() {
  const dispatch = useDispatch();
  useEffect(() => {
    axios.get(MAIN_URL).then(({ data }) => dispatch(setData(data)));
  }, [dispatch]);

  return (
    <></>
  );
}
