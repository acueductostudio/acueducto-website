import styled from "styled-components";
import Fade from "react-reveal/Fade";
import Link from "next/link";
import Arrow from "./../../Arrow";

const NextStudy = ({ link, n }) => {
  return (
    <Link href={link}>
      <Wrapper>
        <LogoContainer>
          <Fade>
            <Logo
              style={{
                backgroundImage: `url(/static/assets/img/casestudies/${link}/portfolio_logo.svg)`
              }}
            />
          </Fade>
        </LogoContainer>
        <Fade>
          <p>{n.p}</p>
          <ArrowContainer>
            <Arrow />
          </ArrowContainer>
        </Fade>
      </Wrapper>
    </Link>
  );
};

export default React.memo(NextStudy);

const ArrowContainer = styled.div`
  margin-top: 10%;
`;

const LogoContainer = styled.div`
  width: 100%;
  max-width: 700px;
  position: relative;
`;

const Logo = styled.div`
  padding-bottom: 20%;
  background-size: 90%;
  background-position: 50% 50%;
  transition: 0.3s ease all;
  background-repeat: no-repeat;
  transform: scale(0.97);
  transform-origin: 50% 0;
`;

const Wrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  position: relative;
  height: auto;
  flex: 0 0 auto;
  margin: 0 2px;
  width: 100%;
  padding: 9% 7% 8%;
  cursor: pointer;
  p {
    margin-top: 2%;
    border-bottom: 2px solid transparent;
    transition: 0.3s ease all;
  }
  &:hover {
    ${Logo} {
      transform: scale(1);
    }
    svg {
      * {
        stroke: ${props => props.theme.colors.accent};
      }
    }
  }
  @media (max-width: 900px) {
    padding-top: 15%;
  }
  @media (max-width: 600px) {
    &:hover svg * {
      stroke: ${props => props.theme.colors.foreground};
    }
    svg {
      border: 2px solid ${props => props.theme.colors.foreground_low};
      padding: 10px;
      border-radius: 50%;
      width: 45px;
      height: 45px;
      bottom: -10px;
    }
  }
  @media (max-width: 450px) {
    ${Logo} {
      margin-bottom: 5%;
    }
  }
`;