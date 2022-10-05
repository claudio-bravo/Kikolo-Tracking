import {
  CaretUp,
  InstagramLogo,
  FacebookLogo,
  WhatsappLogo,
} from "phosphor-react";
import React from "react";

import styled from "./styles.module.scss";

export function Footer() {
  function scrollToTop() {
    return window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <footer className={styled.footer}>
      <div id="containerMain">
        <div className={styled.container}>
          <div className={styled.socialMedia}>
            <div className={styled.icons}>
              <a href="https://instagram.com" target="_blank">
                <InstagramLogo size={30} />
              </a>
              <a href="https://facebook.com" target="_blank">
                <FacebookLogo size={30} />
              </a>
              <a href="https://whatsapp.com" target="_blank">
                <WhatsappLogo size={30} />
              </a>
            </div>
          </div>
          <div className={styled.text}>
            <span>© 2022 Kikolo Onine TODOS OS DIREITOS RESERVADOS</span>
            <span className={styled.privacy}>Política de Privacidade</span>
          </div>
          <button type="button" onClick={scrollToTop} aria-label="scrollToTop">
            <CaretUp size={28} />
          </button>
        </div>
      </div>
    </footer>
  );
}
