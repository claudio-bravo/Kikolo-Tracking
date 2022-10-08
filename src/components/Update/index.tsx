import styled from "./styles.module.scss";
import { Formik, FormikProps } from "formik";
import { InputComponet } from "../input/input";
import { ArrowRight, ArrowUpRight } from "phosphor-react";

export function Update() {
  function handleFormSubmit(values: any) {
    console.log(values);
  }
  return (
    <div id="containerMain">
      <Formik
        initialValues={{}}
        // validationSchema={checkoutSchema}
        onSubmit={handleFormSubmit}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          setFieldValue,
        }: FormikProps<any>) => (
          <form className={styled.form} onSubmit={handleSubmit}>
            <div className={styled.firstDiv}>
              <div className={styled.groupID}>
                <p className={styled.title}>Grupo ID</p>
                <div className={styled.field}>5590695599696 </div>
              </div>
              <div className={styled.trackingCode}>
                <p className={styled.title}>Código de Rastreio</p>
                <div className={styled.field}>5590695599696</div>
              </div>
            </div>
            <div className={styled.divDate}>
              <p className={styled.title}>Data estimada de entrega</p>
              <div className={styled.divDateContent}>
                <InputComponet
                  type="text"
                  name="checkin_product"
                  id="datepicker"
                  placeholder="DD/MM/YY"
                />
              </div>
            </div>

            <div className={styled.field} id={styled.routeOne}>
              <span>Rotas</span>
            </div>
            <p className={styled.title}>Localização atual</p>
            <div className={styled.field} id={styled.routelocat}>
              <span>
                A remessa partiu de uma intalação dos correios de Angola -LUANDA
                - Cazenga para MALANJE - Malanje
              </span>
            </div>
            <div className={styled.field} id={styled.routeOne}>
              <span>Atualizar Rota</span>
            </div>

            <div className={styled.firstDiv}>
              <div className={styled.groupID}>
                <p className={styled.title}>Selecione a opção de roteamento</p>
                <select
                  name="route_select"
                  id="route_select"
                  placeholder="Selecione a opcao"
                >
                  <option label="Chegou" value="Chegou"></option>
                  <option label="Encaminhado" value="Encaminhado"></option>
                  <option label="Processado em" value="Processado em"></option>
                  <option
                    label="A remessa partiu de"
                    value="A remessa partiu de"
                  ></option>
                  <option label="Entregue" value="Entregue"></option>
                  <option
                    label="A remessa foi recebida"
                    value="A remessa foi recebida"
                  ></option>
                </select>
              </div>
              <div className={styled.trackingCode}>
                <p className={styled.title}>Titulo da localização</p>
                <InputComponet
                  type="text"
                  name="description"
                  placeholder="Ex: nas instações do Kikolo online"
                />
              </div>
            </div>
            <div className={styled.firstDiv}>
              <div className={styled.groupID}>
                <p className={styled.title}>Cidade actual</p>
                <select
                  name="route_select"
                  id="route_select"
                  placeholder="Selecione a opcao"
                >
                  <option label="Chegou" value="Chegou"></option>
                  <option label="Encaminhado" value="Encaminhado"></option>
                  <option label="Processado em" value="Processado em"></option>
                  <option
                    label="A remessa partiu de"
                    value="A remessa partiu de"
                  ></option>
                  <option label="Entregue" value="Entregue"></option>
                  <option
                    label="A remessa foi recebida"
                    value="A remessa foi recebida"
                  ></option>
                </select>
              </div>
              <div className={styled.trackingCode}>
                <p className={styled.title}>Cidade de entrega</p>
                <select
                  name="route_select"
                  id="route_select"
                  placeholder="Selecione a opcao"
                >
                  <option label="Chegou" value="Chegou"></option>
                  <option label="Encaminhado" value="Encaminhado"></option>
                  <option label="Processado em" value="Processado em"></option>
                  <option
                    label="A remessa partiu de"
                    value="A remessa partiu de"
                  ></option>
                  <option label="Entregue" value="Entregue"></option>
                  <option
                    label="A remessa foi recebida"
                    value="A remessa foi recebida"
                  ></option>
                </select>
              </div>
            </div>
            <div className={styled.firstDiv}>
              <div className={styled.groupID}>
                <p className={styled.title}>Munícipio actual</p>
                <select
                  name="route_select"
                  id="route_select"
                  placeholder="Selecione a opcao"
                >
                  <option label="Chegou" value="Chegou"></option>
                  <option label="Encaminhado" value="Encaminhado"></option>
                  <option label="Processado em" value="Processado em"></option>
                  <option
                    label="A remessa partiu de"
                    value="A remessa partiu de"
                  ></option>
                  <option label="Entregue" value="Entregue"></option>
                  <option
                    label="A remessa foi recebida"
                    value="A remessa foi recebida"
                  ></option>
                </select>
              </div>
              <div className={styled.trackingCode}>
                <p className={styled.title}>Munícipio de entrega</p>
                <select
                  name="route_select"
                  id="route_select"
                  placeholder="Selecione a opcao"
                >
                  <option label="Chegou" value="Chegou"></option>
                  <option label="Encaminhado" value="Encaminhado"></option>
                  <option label="Processado em" value="Processado em"></option>
                  <option
                    label="A remessa partiu de"
                    value="A remessa partiu de"
                  ></option>
                  <option label="Entregue" value="Entregue"></option>
                  <option
                    label="A remessa foi recebida"
                    value="A remessa foi recebida"
                  ></option>
                </select>
              </div>
            </div>
            <div className={styled.buttonDiv}>
              <div className={styled.ButtonContent}>
                <span className={styled.previewTitle}>
                  Preview: clique no botão visualizar
                  <ArrowRight size={20} />
                </span>
                <button className={styled.buttonPreview} type="button">
                  Visualizar
                </button>
              </div>
              <div className={styled.previewFather}>
                <div className={styled.field} id={styled.preview}></div>
              </div>
            </div>
            <div className={styled.buttonSaveFather}>
              <button className={styled.buttonSave} type="button">
                Salvar
              </button>
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
}