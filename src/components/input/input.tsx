import { InputHTMLAttributes } from "react";
import styled from "./input.module.scss";

export function InputComponet(props: InputHTMLAttributes<any>) {
  return <input className={styled.componentInput} {...props} />;
}
