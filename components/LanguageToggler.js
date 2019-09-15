import styled from "styled-components";
import Language from "../static/assets/img/layout/language.svg";

const LanguageToggler = ({ hasLoaded, doChangeTheme }) => (
  <Toggler reveal={hasLoaded}>
    <Language onClick={doChangeTheme}/>
  </Toggler>
);

export default LanguageToggler;

const Toggler = styled.div`
  cursor: pointer;
  bottom: 50%;
  display: flex;
  z-index: 10;
  height: 100%;
  mix-blend-mode: exclusion;
  pointer-events: none;
  justify-content: flex-end;
  align-items: center;
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  right: 0;
  padding-right: 35px;
  margin: 0px auto;
  max-width: 1500px;
  opacity: ${props => props.reveal ? 1 : 0};
  transition: opacity .3s ease .3s;
  svg {
    width: 33px;
    pointer-events: auto;
    padding: 15px;
    box-sizing: content-box;
    .fill * {
      fill: ${props => props.theme.colors.white};
    }
    .stroke * {
      fill: none;
      stroke-width: ${props => props.theme.stroke};
      stroke: ${props => props.theme.colors.white};
    }
  }
`;
