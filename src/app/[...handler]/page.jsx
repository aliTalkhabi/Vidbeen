"use client";
import { usePathname } from "next/navigation";
import Category from "@/components/Category/Category";
import Product from "@/Components/Product/Product";
import Custom404 from "../404";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Handler() {
  const pathname = usePathname();
  const [typeOfData, setTypeOfData] = useState('');
  const [passData, setPassData] = useState();
  const slug = `https://vidbeen.ir/api${pathname}`;
  console.log(slug);
  
  // axios.get(slug).then();
  useEffect(() => {
    const getData = async () => {
      await axios
        .get(slug)
        .then((response) => {
          setPassData(response.data);
          setTypeOfData(response.data.type);
        })
        .catch((error) => {
          console.log(error);
          // if (error.response.status == 301 || error.response.status == 302) {
          //   router.push(error.response.data.redirect);
          // } else {
          //   setErrors(error.response.status);
          // }
          // <NotFound/>
        });
    };
    getData();
  }, [slug]);
  console.log(typeOfData);
  

  return (
    <>
      {
        typeOfData === "category" ? (
          <>
            <Category data={passData} pathname={pathname}/>
          </>
        ) : typeOfData === "video" ? (
          <>
            <Product data={passData} />
          </>
        ) : typeOfData !== "video" || typeOfData !== "category" ? (
          <Custom404 />
        ) : null}
    </>
  );
}
