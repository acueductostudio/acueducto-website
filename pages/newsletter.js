import styled from "styled-components";
import Head from "../components/Head";
import { useEffect, useState } from "react";
import PageClipper from "components/PageClipper";
import PinnedSection from "components/shared/PinnedSection";
import Cookies from "js-cookie/dist/js.cookie";

function Newsletter(props) {
  const [emailValue, setEmailValue] = useState("");

  useEffect(() => {
    props.setTitle("newsletter");
  }, [props.locale]);

  const handleChange = event => {
    setEmailValue(event.target.value);
  };

  const saveEmailToCookie = () => {
    console.log("cookieSet");
    Cookies.set("email", emailValue);
  };

  return (
    <PageClipper>
      <Head
        title={"Newsletter"}
        description={"Suscríbete a nuestra newsletter"}
        canonical={"https://acueducto.studio/newsletter"}
        lang={props.lang}
      />
      <PinnedSection title={"newsletter"}>
        <ol>Join our newsletter here: </ol>
        <iframe
          width="100%"
          height="380px"
          frameBorder="0"
          align="middle"
          src="https://www.ref-r.com/campaign_user/p?brandid=29930&campaignid=24953&bid_e=E8B4779269585E561D693F2479FE12AF&t=420&email=&fname="
        ></iframe>
        {/*                   <Subscribe>
<div id="mc_embed_signup">
            <form
              action="https://studio.us19.list-manage.com/subscribe/post?u=c9d7bbb792de4cdbe363fad75&amp;id=434dbf9f3b"
              method="post"
              id="mc-embedded-subscribe-form"
              name="mc-embedded-subscribe-form"
              target="_blank"
              noValidate
              onSubmit={saveEmailToCookie}
            >
              {emailValue}
              <div id="mc_embed_signup_scroll">
                <label htmlFor="mce-EMAIL">Subscribe</label>
                <input
                  type="email"
                  name="EMAIL"
                  id="mce-EMAIL"
                  placeholder="email address"
                  required
                  value={emailValue}
                  onChange={handleChange}
                />
                 <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups--> 
                 <div
                style={{ position: "absolute", left: "-5000px" }}
                aria-hidden="true"
              >
                <input
                  type="text"
                  name="b_c9d7bbb792de4cdbe363fad75_434dbf9f3b"
                  tabIndex="-1"
                />
              </div> 
                <div>
                  <input
                    type="submit"
                    name="subscribe"
                    id="mc-embedded-subscribe"
                  />
                </div>
              </div>
            </form>
          </div>
        </Subscribe> */}
      </PinnedSection>
    </PageClipper>
  );
}
export default React.memo(Newsletter);

const Subscribe = styled.div`
  #mc_embed_signup {
  }
`;