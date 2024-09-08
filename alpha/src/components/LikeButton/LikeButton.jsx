import React, { useEffect, useState } from "react";
import style from "../LikeButton/LikeButton.module.sass";
import { useDispatch, useSelector } from "react-redux";
import { addLikedElem, removeLikedElem } from "../../redux/likedElementsSlice";

export default function LikeButton({ movie }) {
  const dispatch = useDispatch();

  const likedElems = useSelector((state) => state.likedElem);

  const [liked, setLiked] = useState(false);

  useEffect(() => {
    const isLiked = likedElems.some((likedMovie) => likedMovie.name == movie.name);
    setLiked(isLiked)
  }, [likedElems, movie])

  const handleClick = (event) => {
    event.stopPropagation();
    setLiked(!liked);
    if (liked) {
      dispatch(removeLikedElem(movie));
      console.log(`элемент удален: ${movie.name.official}`, movie);
    } else {
      dispatch(addLikedElem(movie));

      console.log(`элемент добавлен: ${movie.name.official}`, movie);
    }
  };
  return (
    <div className={style.like} onClick={handleClick}>
      <button className={`${style.like_icon} ${liked ? style.liked : ""}`}>{liked ? 'Удалить' : 'Посмотреть позже'}</button>
    </div>
  );
}
