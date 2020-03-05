import styled from "styled-components";
import Head from "../components/Head";
import { useEffect } from "react";
import PageClipper from "components/PageClipper";
import ContactFooter from "components/ContactFooter";
import Fade from "react-reveal/Fade";
import es from "public/locales/es/podcast.json";
import Logo from "public/assets/img/layout/logo.svg";
import Spotify from "public/assets/img/casestudies/salvajenada/spotify.svg";
import Apple from "public/assets/img/layout/applepodcasts.svg";
import Google from "public/assets/img/layout/googlepodcasts.svg";

function Podcast(props) {
  let {
    page_title,
    meta_description,
    headerTitle,
    title,
    p,
    podcasts
  } = es.podcast_page;

  useEffect(() => {
    props.setTitle(headerTitle);
  }, [props.locale]);

  return (
    <PageClipper>
      <Head
        title={page_title}
        description={meta_description}
        canonical={"https://acueducto.studio/podcast"}
        image={"og_image_podcast.png"}
        lang={props.lang}
      />
      <PodcastGrid>
        <h1>{title}</h1>
        <span>
          por <Logo />
        </span>
        <p>{p}</p>
        <LogoList>
          <p>Escúchalo en </p>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://open.spotify.com/show/2YLB7SOeJsLp5DtDuIwX8t"
          >
            <Spotify />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://podcasts.apple.com/us/podcast/cuando-el-r%C3%ADo-suena/id1500473556?uo=4"
          >
            <Apple />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://podcasts.google.com/?feed=aHR0cHM6Ly9mZWVkcy5idXp6c3Byb3V0LmNvbS84OTU5NzIucnNz"
          >
            <Google />
          </a>
        </LogoList>
        <PodcastList>
          {podcasts.map((pod, index) => (
            <Pod key={"belief" + index}>
              <Fade>
                <iframe
                  src={pod.url}
                  frameBorder="0"
                  allowtransparency="true"
                  allow="encrypted-media"
                ></iframe>
              </Fade>
            </Pod>
          ))}
        </PodcastList>
      </PodcastGrid>
      <ContactFooter />
    </PageClipper>
  );
}
export default React.memo(Podcast);

const PodcastGrid = styled.div`
  background-color: ${props => props.theme.colors.background};
  background-image: url("assets/img/layout/podcast_back.svg");
  background-size: cover;
  background-position: top right;
  grid-template-columns: repeat(12, 1fr);
  grid-gap: 0.2rem 2.5rem;
  width: 100%;
  display: grid;
  padding: 10% 4%;
  position: relative;
  h1 {
    grid-column: 2 / span 10;
    letter-spacing: 0;
    line-height: 100%;
    font-size: 7rem;
    margin-bottom: 0;
    max-width: 810px;
    color: ${props => props.theme.colors.foreground};
  }
  span {
    grid-column: 2 / span 10;
    color: ${props => props.theme.colors.accent};
    svg * {
      fill: ${props => props.theme.colors.accent};
    }
  }
  p {
    grid-column: 2 / span 8;
    padding-top: 2.5rem;
    color: ${props => props.theme.colors.foreground_low};
    position: relative;
    max-width: 600px;
  }
  @media (max-width: 1250px) {
    h1 {
      font-size: 6rem;
    }
  }
  @media (max-width: 950px) {
    h1 {
      font-size: 5rem;
    }
  }
  @media (max-width: 800px) {
    h1 {
      font-size: 4rem;
    }
  }
  @media (max-width: 600px) {
    p,
    h1,
    span,
    div,
    ul {
      grid-column-start: 1;
    }
    p {
      grid-column-end: 12;
    }
    h1 {
      line-height: 0.9;
      padding-top: 5%;
      padding-bottom: 3%;
      grid-column-end: 12;
    }
  }
`;

const PodcastList = styled.ul`
  grid-column: 2 / span 7;
  list-style: none;
  margin-top: 5%;
  @media (max-width: 950px) {
    grid-column: 2 / span 10;
  }
  @media (max-width: 600px) {
    grid-column: 2 / span 12;
  }
`;

const Pod = styled.li`
  grid-column: 2 / span 10;
  position: relative;
  margin-bottom: 5%;
  iframe {
    height: 160px;
    width: 100%;
  }
`;

const LogoList = styled.div`
  grid-column: 2 / span 10;
  display: flex;
  align-items: center;
  padding-top: 2.5rem;
  p {
    padding: 0 6px 0 0;
  }
  a {
    display: flex;
    max-height:30px;
  }
  svg {
    width: 30px;
    box-sizing: content-box;
    padding: 0 10px 0 10px;
    transition: transform 0.3s cubic-bezier(0.455, 0.03, 0.515, 0.955);
    @media (hover: hover) and (pointer: fine) {
      &:hover {
        transform: scale(1.1);
        cursor: pointer;
      }
    }
  }
`;
