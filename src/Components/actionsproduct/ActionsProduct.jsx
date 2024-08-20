'use client'
import Approbate from "./approbate/Approbate";
import Copy from "./copy/Copy";
import Reject from "./reject/Reject";
import Share from "./share/Share";

export default function ActionProducts(data) {
  const dataLike = data.data;
  return dataLike &&(
    <>
      <Copy />
      <Reject dislike={dataLike.video.dislike} />
      <Approbate like={dataLike.video.like} />
    </>
  );
}
