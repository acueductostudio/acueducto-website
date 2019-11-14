import Fade from "react-reveal/Fade";

const Picture = ({ src, alt, mobileSize }) => {
  console.log(mobileSize);
  return (
    <Fade fraction={0.1}>
      <picture>
        <source
          srcSet={require(`static/assets/img/${src}?webp`)}
          type="image/webp"
        />
        <source
          srcSet={require(`static/assets/img/${src}`)}
          type={`image/${src.includes("png") ? "png" : "jpeg"}`}
        />
        <img src={src} alt={alt} />
      </picture>
    </Fade>
  );
};

export default Picture;