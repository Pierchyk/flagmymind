import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { getSession, signIn } from "next-auth/client";
import { connectToDatabase } from "../lib/db";
import Profile from "../components/Profil";

export default function Profil(props) {
  const handleSignin = (e) => {
    e.preventDefault();
    signIn();
  };

  console.log(props);
  return (
    <div>
      <Navbar />
      <Profile score={props.score}/>
      <Footer />
    </div>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession({ req: context.req });

  // if (!session) {
  //   return {
  //     redirect: {
  //       destination: "/auth",
  //       permanent: false,
  //     },
  //   };
  // }

  const client = await connectToDatabase();
  const db = client.db(process.env.MONGODB_DB);
  const score = await db
    .collection("Score")
    //ici utiliser le mail plutôt que le name pour le query ?
    //impossible car pas de mail avec la session github
    .find({ name: session.user.name })
    .toArray();
  return {
    props: {
      score: JSON.parse(JSON.stringify(score)),
    },
  };
}
