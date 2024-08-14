'use client'
import Approbate from "./approbate/Approbate";
import Reject from "./reject/Reject";
import Share from "./share/Share";

export default function ActionProducts(data) {
  const dataLike = data.data;
  return dataLike &&(
    <>
      <Reject dislike={dataLike.video.dislike} />
      <Approbate like={dataLike.video.like} />
      
    </>
  );
}
