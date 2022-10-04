import { User } from "phosphor-react";
import styled from "./styles.module.scss";

export function Header() {
  return (
    <header className={styled.header}>
      <div className={styled.container}>
        <div className={styled.content}>
          <a href="/">
            <img src="/image/logo.png" alt="logo" />
            <span className={styled.textK}>
              ikolo Online
            </span>
          </a>
          <div className={styled.login}>
            <User size={20} color="white" />
            <span>
              l<strong>ogin</strong>
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}
