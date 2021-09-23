import React, { useEffect, useState } from "react";
import { Model } from "./model";
import { getList } from './service';

type Props = {
  onSelected: (selected: Model) => void,
  somentePromocoes: boolean;
};

const App = (props: Props) => {
  const { onSelected, somentePromocoes } = props;
  const [list, setList] = useState<Model[] | null>(null);

  useEffect(() => {
    (async () => {
      const result = await getList(somentePromocoes);
      setList(result);
    })();
  }, []);

  return (
    <div> 🚗
      {list == null ? 'Sem resultados' :
        <ul>
          {list.map(i => <li key={i.nome} onClick={() => onSelected(i)} className={i.precoPromocional ? 'promocao' : ''}>{i.nome}</li>)}
        </ul>
      }
    </div>
  );
};

export default App;
