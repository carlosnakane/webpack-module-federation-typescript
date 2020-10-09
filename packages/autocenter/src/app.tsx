import React, { Suspense } from "react";
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
        <Suspense fallback={<Loading />}>
          <div className="promocoes-list">
            <h3>Pneus</h3>
            <Pneus somentePromocoes={true} onSelected={() => { }} />
          </div>
        </Suspense>
        <Suspense fallback={<Loading />}>
          <div className="promocoes-list">
            <h3>Acessórios</h3>
            <Acessorios somentePromocoes={true} onSelected={() => { }} />
          </div>
        </Suspense>
      </div>
    </div>
  );
};

export default Autocenter;
