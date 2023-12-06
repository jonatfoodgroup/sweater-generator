import React, { useEffect } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { db } from "../src/firebase/database";
import { storage } from "../src/firebase/storage";
import { ref, get } from "firebase/database";
import { getDownloadURL, ref as storageRef } from "firebase/storage";

export default function ImagePage({ meta }) {
  const router = useRouter();
  useEffect(() => {
    // Always do navigations after the first render
    if (meta.data === null) {
      router.push("/");
    }
  }, []);

  if (meta.data === null) {
    return null;
  }
  return (
    <div>
      <Head>
        <title>Feast upon "{meta.data.prompt}"</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          property="og:title"
          content={`Feast upon "${meta.data.prompt}"`}
        />
        <meta
          property="og:description"
          content="Create your own holiday sweater with The Food Group's Holiday Sweater Generator."
        />
        <meta property="og:image" content={meta.data.image} />
        <script src="https://cdn.tailwindcss.com"></script>
      </Head>
      {meta.data.image && (
        <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-slate-800">
          <img src={meta.data.image} alt={meta.data.prompt} className="w-1/3 mt-10 s:w-full md:w-1/2 lg:w-1/3 rounded-md" />
          <h1 className="text-4xl text-white font-bold mt-10 mb-4 w-1/3 s:w-full md:w-1/2 lg:w-1/3">
            "{meta.data.prompt}"
          </h1>
          {meta.data.userame && (
            <h2 className="text-2xl text-white font-bold mt-4">
              {meta.data.username}
            </h2>
          )}
          <button
            className="sm:m-auto sm:w-auto  sm:flex mx-0 text-slate-800 py-3 px-6 text-xl rounded-md transition-colors duration-300 bg-amber-300 hover:bg-amber-400 block items-center font-semibold mt-10"
            onClick={() => router.push("/")}
          >
            Generate your own delicious sweater!
          </button>

          <div className="flex flex-col items-center justify-center mt-10 w-1/3 s:w-full md:w-1/2 lg:w-1/3">
            <h4 className="text-white text-center mb-4">
              Made with love by{" "}
            </h4>
            <img src="/images/tfg-dot-logo.png" alt="The Food Group" className="w-1/3 s:w-full md:w-1/2 lg:w-1/3" />
          </div>
        </div>
      )}
    </div>
  );
}

export async function getServerSideProps(context) {
  const id = context.query.id;
  const dbRef = ref(db, `gallery/${id}`);
  const snapshot = await get(dbRef);

  let data = null;
  if (snapshot.exists()) {
    data = snapshot.val();

    // Get the image from storage using downloadurl from data.url
    let image = storageRef(storage, data.url);
    const url = await getDownloadURL(image);
    data.image = url;
  } else {
    data = null;
  }

  let meta = {
    data: data,
  };

  return {
    props: {
      meta,
    },
  };
}
