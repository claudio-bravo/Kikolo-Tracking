import Link from "next/link";
import { MagnifyingGlass, Package } from "phosphor-react";
import styled from "./styles.module.scss";

export function Partners() {
  return (
    <section className={styled.section}>
    <div id="containerMain">
      <main className={styled.main}>
        <div className={styled.firstcontainer}>
          <div className={styled.firstContentDiv}>
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
          <div className={styled.contentDiv}>
            <div className={styled.cardInfo}>
              <div className={styled.groupId}>
                <p className={styled.title}>Grupo ID</p>
                <span className={styled.textBold}>309453938n34934354892</span>
              </div>
              <div className={styled.trackingId}>
                <p className={styled.title}>Correios de Angola</p>
                <span className={styled.textGray}>Nº/Rastreamento #
                  <Link href="/tracking">
                    <span className={styled.textColorize}> 8483408302</span>
                  </Link> 
                </span>
              </div>
              <div className={styled.shippedPendingDelivery}>
                <p className={styled.title}>Enviado aguardando entrega</p>
                <span className={styled.textGray}>Enviado <span className={styled.textBold}>Sep 8, 2022</span></span>
              </div>
            </div>
            <div className={styled.cardInfo}>
              <div className={styled.groupId}>
                <p className={styled.title}>Grupo ID</p>
                <span className={styled.textBold}>309453938n34934354892</span>
              </div>
              <div className={styled.trackingId}>
                <p className={styled.title}>Correios de Angola</p>
                <span className={styled.textGray}>Nº/Rastreamento #
                  <Link href="/tracking">
                    <span className={styled.textColorize}> 8483408302</span>
                  </Link> 
                </span>
              </div>
              <div className={styled.shippedPendingDelivery}>
                <p className={styled.title}>Enviado aguardando entrega</p>
                <span className={styled.textGray}>Enviado <span className={styled.textBold}>Sep 8, 2022</span></span>
              </div>
            </div>
            <div className={styled.cardInfo}>
              <div className={styled.groupId}>
                <p className={styled.title}>Grupo ID</p>
                <span className={styled.textBold}>309453938n34934354892</span>
              </div>
              <div className={styled.trackingId}>
                <p className={styled.title}>Correios de Angola</p>
                <span className={styled.textGray}>Nº/Rastreamento #
                  <Link href="/tracking">
                    <span className={styled.textColorize}> 8483408302</span>
                  </Link> 
                </span>
              </div>
              <div className={styled.shippedPendingDelivery}>
                <p className={styled.title}>Enviado aguardando entrega</p>
                <span className={styled.textGray}>Enviado <span className={styled.textBold}>Sep 8, 2022</span></span>
              </div>
            </div>
            <div className={styled.cardInfo}>
              <div className={styled.groupId}>
                <p className={styled.title}>Grupo ID</p>
                <span className={styled.textBold}>309453938n34934354892</span>
              </div>
              <div className={styled.trackingId}>
                <p className={styled.title}>Correios de Angola</p>
                <span className={styled.textGray}>Nº/Rastreamento #
                  <Link href="/tracking">
                    <span className={styled.textColorize}> 8483408302</span>
                  </Link> 
                </span>
              </div>
              <div className={styled.shippedPendingDelivery}>
                <p className={styled.title}>Enviado aguardando entrega</p>
                <span className={styled.textGray}>Enviado <span className={styled.textBold}>Sep 8, 2022</span></span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
    </section>
  );
}