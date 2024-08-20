
'use client'
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
      return (
        <>
          {
            passData && (
              <>
                <title>{passData.category.title}</title>
                <meta name="description" content={passData.category.description} />
                <meta name="keywords" content={passData.category.keywords} />
                <meta name="generator" content="vidbeen.ir" />
                <meta name="author" content="مسلم زمانی" />
                <meta property="og:locale" content="fa_IR"/>
                <meta property="og:title" content={passData.category.title} />
                <meta property="og:type" content="website" />
                <meta property="og:site_name" content="ویدبین" />
              </>
            )
          }

          <Category data={passData} pathname={pathname} />;
        </>
      );
    } else if (typeOfData === "video") {
      return (
        <>
          {
            passData && (
              <>
                <title>{passData.video.title}</title>
                <meta name="description" content={passData.video.description} />
                <meta name="keywords" content={passData.video.keywords}/>
                <meta name="generator" content="vidbeen.ir" />
                <meta name="author" content="مسلم زمانی" />
                <meta property="og:locale" content="fa_IR"/>
                <meta property="og:type" content="website" />
                <meta property="og:site_name" content="ویدبین" />
                <meta property="og:image" content={passData.video.poster}/>
                <meta property="og:type" content="video"/>
              </>
            )
          }
          <Product data={passData} />
        </>
      );
    } else {
      return <Not404 />;
    }
  };
  return <>{renderContent()}</>
}

