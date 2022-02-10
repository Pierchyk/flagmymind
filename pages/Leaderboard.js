import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Leaderboard from "../components/Leaderboard";
import { connectToDatabase } from "../lib/db";

export default function LeaderboardPage(props) {
  // console.log("props");
  // console.log(props);
  // console.log("scoreArray");
  const scoreArray = Object.entries(props);
  // console.log(scoreArray);
  // console.log("foreach");
  // scoreArray.map((zone) => {
  //   console.log(zone[1]);
  // });

  // const zones = ["Europe", "Africa", "Americas", "Asia", "Oceania", "World"];

  // const useFilter = (scoreArray) => {
  //   return scoreArray.filter((value, index, self) => {
  //     return self.indexOf(value) === index;
  //   });
  // };

  // const result = useFilter(arr);
  // console.log(result);

  // const Tableaux = zones.forEach((zone) => {
  //   console.log("il me faudrait un tableau pour : ", zone);
  //   return <Leaderboard zone={zone} />;
  // });

  // const displayCountry = randomFlags.map((key) => (
  //   <div className="p-3">
  //     <Image
  //       className=""
  //       id={indexedCountries[`${key}`].cca3}
  //       key={indexedCountries[`${key}`].cca3}
  //       src={indexedCountries[`${key}`].flags.png}
  //       // src={`https://countryflagsapi.com/png/${country.cca3}`}
  //       height={50}
  //       width={80}
  //       onClick={checkFlag}
  //     />
  //   </div>

  // console.log(Tableaux);

  // const scores = props.score;
  // scores.forEach((score) => {
  //   console.log(score.zone);
  // });

  return (
    <div id="profil">
      <Navbar />
      <div className="grid gap-5 grid-cols-3 grid-rows-2 my-5 mx-10">
        {scoreArray.map((key, zone) => {
          return <Leaderboard zone={key[0]} scores={key[1]} />;
        })}
      </div>
      <Footer />
    </div>
  );
}

export async function getServerSideProps(context) {
  const client = await connectToDatabase();
  const db = client.db(process.env.MONGODB_DB);

  const scoreEurope = await db
    .collection("Score")
    .find({ zone: "Europe" })
    .toArray();
  const scoreAfrica = await db
    .collection("Score")
    .find({ zone: "Africa" })
    .toArray();
  const scoreAmericas = await db
    .collection("Score")
    .find({ zone: "Americas" })
    .toArray();
  const scoreAsia = await db
    .collection("Score")
    .find({ zone: "Asia" })
    .toArray();
  const scoreOceania = await db
    .collection("Score")
    .find({ zone: "Oceania" })
    .toArray();
  const scoreWorld = await db
    .collection("Score")
    .find({ zone: "World" })
    .toArray();

  return {
    props: {
      Europe: JSON.parse(JSON.stringify(scoreEurope)),
      Africa: JSON.parse(JSON.stringify(scoreAfrica)),
      Americas: JSON.parse(JSON.stringify(scoreAmericas)),
      Asia: JSON.parse(JSON.stringify(scoreAsia)),
      Oceania: JSON.parse(JSON.stringify(scoreOceania)),
      World: JSON.parse(JSON.stringify(scoreWorld)),
    },
  };
}
