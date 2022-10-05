import styled from "./styles.module.scss";

export function TrackingHistory() {
  return (
    <section className={styled.trackingHistory}>
      <div className={styled.content}>
        <h1>Todas as atualizações de envio</h1>
        <div className={styled.tracking}>
            <div className={styled.trackingContent}>
                <span>Sexta-feira</span>
                <h4 className={styled.textBold}>16 de Setembro de 2022</h4>
                <span>14h:10min</span>
            </div>
            <span className={styled.delivered}>Entregue</span>
            <span>Área de Serviço: LUANDA - ANGOLA</span>
            <span>Grupo ID: JD014600010290277444</span>
        </div>

        <div className={styled.tracking}>
            <div className={styled.trackingContent}>
                <span>Quarta-feira</span>
                <h4 className={styled.textBold}>14 de Setembro de 2022</h4>
                <span>12h:34min</span>
            </div>

            <span className={styled.place}>Encaminhado para um agente terceirizado</span>
            <span>Área de Serviço: LUANDA - ANGOLA</span>
            <span>Grupo ID: JD014600010290277444</span>

            <div className={styled.moreDescription}>
                <span className={styled.time}>09h:34min</span>
                <span className={styled.place}>Chegou aos Correios de Angola</span>
                <span>Área de Serviço: LUANDA - ANGOLA</span>
                <span>Grupo ID: JD014600010290277444</span>
            </div>

        </div>
        </div>
    </section>
  );
}
