import React, { useEffect, useState } from "react";
import style from "../LikeButton/LikeButton.module.sass";
import { useDispatch, useSelector } from "react-redux";
import { addLikedElem, removeLikedElem } from "../../redux/likedElementsSlice";

export default function LikeButton({ movie }) {
  const dispatch = useDispatch();
  // console.log('movie:', movie)

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
      <svg
        className={`${style.like_icon} ${liked ? style.liked : ""}`}
        width="28px"
        height="28px"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M8 10V20M8 10L4 9.99998V20L8 20M8 10L13.1956 3.93847C13.6886 3.3633 14.4642 3.11604 15.1992 3.29977L15.2467 3.31166C16.5885 3.64711 17.1929 5.21057 16.4258 6.36135L14 9.99998H18.5604C19.8225 9.99998 20.7691 11.1546 20.5216 12.3922L19.3216 18.3922C19.1346 19.3271 18.3138 20 17.3604 20L8 20"
          strokeWidth="1.5"
        />
      </svg>
    </div>
  );
}
