import styled from "./styles.module.scss";

export function Main() {
  return (
    <section className={styled.section}>
      <h1 className={styled.title}>Siga a sua encomenda</h1>
      <main className={styled.main}>
        <div className={styled.container}>
          <input type="text" placeholder="Insira o código de rastreio..."/>
          <button type="button">
            Buscar
          </button>
        </div>
      </main>
    </section>
  );
}
