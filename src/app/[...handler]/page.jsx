"use client";
import { usePathname } from "next/navigation";
import Category from "@/components/Category/Category";
import Product from "@/Components/Product/Product";

import axios from "axios";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
const Not404 = dynamic(() => import('../404'), { ssr: false })
export default function Handler() {
  const pathname = usePathname();
  const [typeOfData, setTypeOfData] = useState(null);
  const [passData, setPassData] = useState();
  const slug = `https://vidbeen.ir/api${pathname}`;
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
          setTypeOfData(null);

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

  const renderContent = () => {
    if (typeOfData === "category") {
      return <Category data={passData} pathname={pathname} />;
    } else if (typeOfData === "video") {
      return <Product data={passData} />;
    } else {
      return <Not404 />;
    }
  };
  return <>{renderContent()}</>
}

