import Head from "components/Head";
import { useEffect } from "react";
import es from "public/locales/es/diagnosticodigital.json";
import PageClipper from "components/PageClipper";
import Diagnostico from "components/diagnosticoDigital/Diagnostico";
import ContactFooter from "components/ContactFooter";
import TitleSection from "components/shared/TitleSection";

function DiagnosticoDigital(props) {
  let {
    page_title,
    meta_description,
    headerTitle,
    intro,
  } = es.diagnosticodigital_page;

  useEffect(() => {
    props.setTitle(headerTitle);
  }, [props.locale]);

  return (
    <PageClipper>
      <Head
        title={page_title}
        description={meta_description}
        canonical={"https://acueducto.studio/diagnosticodigital"}
        image={"og_image_podcast.png"}
        lang={props.lang}
      />
      <TitleSection {...intro} />
      <Diagnostico />
      <ContactFooter />
    </PageClipper>
  );
}
export default React.memo(DiagnosticoDigital);