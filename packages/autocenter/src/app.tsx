import React, { Suspense } from "react";
import ErrorBoundary from "./error-boundary";
import Loading from "./loading";

const Pneus = React.lazy(() => import("pneusApp/ListaPneus"));
const Acessorios = React.lazy(() => import("acessoriosApp/ListaAcessorios"));

const Autocenter = () => {
  return (
    <div>
      <div className="heading">
        <h1>Autocenter</h1>
      </div>
      <div className="promocoes">
        <h2>Promoções</h2>

        <div className="promocoes-list">
          <h3>Pneus</h3>
          <ErrorBoundary errorMessage="Ops.. Serviço de pneus indisponível">
            <Suspense fallback={<Loading />}>
              <Pneus somentePromocoes={false} onSelected={(item) => console.log(item)} />
            </Suspense>
          </ErrorBoundary>
        </div>

        <div className="promocoes-list">
          <h3>Acessórios</h3>
          <ErrorBoundary errorMessage="Ops.. Serviço de acessórios indisponível">
            <Suspense fallback={<Loading />}>
              <Acessorios somentePromocoes={true} onSelected={(item) => console.log(item)} />
            </Suspense>
          </ErrorBoundary>
        </div>

      </div>
    </div>
  );
};

export default Autocenter;
