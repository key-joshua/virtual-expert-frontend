import Head from "next/head";
import React from "react";
import AboutC from "../src/components/about/about";

const About = ({
  aboutData,
  aboutTeamData,
  aboutUniquetData,
  aboutUniquetListData,
  teams,
  metaAbout,
}) => {
  return (
    <>
      <Head>
        <title>
          {metaAbout.title
            ? `Virtual Experts |  ${metaAbout.title}`
            : "virtual Experts | Home"}
        </title>
        <meta
          name="description"
          content={
            metaAbout.description
              ? ` ${metaAbout.description}`
              : "virtual Experts"
          }
        />
        <meta
          name="keyword"
          content="amazon fba consultant,
        amazon seo services,
        amazon seo consultant,
        amazon seo agency"
        />
      </Head>
      <AboutC
        aboutData={aboutData}
        aboutTeamData={aboutTeamData}
        aboutUniquetData={aboutUniquetData}
        aboutUniquetListData={aboutUniquetListData}
        teams={teams}
      />
    </>
  );
};

export default About;

export async function getServerSideProps() {
  const aboutResponse = await fetch(
    "https://virtual-expert-backend.herokuapp.com/about"
  );
  const aboutData = await aboutResponse.json();

  const aboutUniqueResponse = await fetch(
    "https://virtual-expert-backend.herokuapp.com/aboutUnique"
  );
  const aboutUniquetData = await aboutUniqueResponse.json();

  const aboutUniqueListResponse = await fetch(
    "https://virtual-expert-backend.herokuapp.com/aboutUniqueList"
  );
  const aboutUniquetListData = await aboutUniqueListResponse.json();

  const aboutTeamResponse = await fetch(
    "https://virtual-expert-backend.herokuapp.com/aboutTeam"
  );
  const aboutTeamData = await aboutTeamResponse.json();

  const resTeams = await fetch("https://virtual-expert-backend.herokuapp.com/teams");
  const teams = await resTeams.json();

  const resMetaAbout = await fetch(
    "https://virtual-expert-backend.herokuapp.com/metaAbout"
  );
  const metaAbout = await resMetaAbout.json();

  return {
    props: {
      aboutData: aboutData[0],
      aboutUniquetData: aboutUniquetData[0],
      aboutUniquetListData: aboutUniquetListData,
      aboutTeamData: aboutTeamData[0],
      teams,
      metaAbout: metaAbout[0],
    },
  };
}
