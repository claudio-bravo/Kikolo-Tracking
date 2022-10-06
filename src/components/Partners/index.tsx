import { MagnifyingGlass, Package } from "phosphor-react";
import styled from "./styles.module.scss";
//import { History } from "./History";

export function Partners() {
  return (
    <section className={styled.section}>
    <div id="containerMain">
      <main className={styled.main}>
        <div className={styled.firstcontainer}>
          <div className={styled.contentDiv}>
            <div className={styled.divbox}>
              <div className={styled.search}>
                <input type="text" placeholder="Insira o código de rastreio..."/>
                <button type="button">
                  <MagnifyingGlass size={18} className={styled.svg}/>
                </button>
              </div>
              <div className={styled.package}>
                <Package size={28} />
                <h1>Todos os pacotes</h1>
              </div>
            </div>
          </div>
          <h1 className={styled.user}>Correios de Angola</h1>
        </div>

        <div className={styled.secondcontainer}>
        
        </div>
      </main>
      {/* <History /> */}
    </div>
    </section>
  );
}