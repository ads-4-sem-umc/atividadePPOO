import { Props } from "./types";

const ListAndRegisterPageTemplate: React.FC<Props> = ({
  List,
  Register,
  name
}) => {
  return (
    <div className="w-full h-full flex p-6">
      <div className="w-full flex flex-col items-center">
        <p
          className="text-xl font-bold text-blue-500"
          style={{ marginBottom: "4rem" }}
        >
          Listagem de {name}
        </p>
        {List}
      </div>
      <div className="w-full flex flex-col items-center">
        <p
          className="text-xl font-bold text-blue-500"
          style={{ marginBottom: "4rem" }}
        >
          Cadastro de {name}
        </p>
        {Register}
      </div>
    </div>
  );
};

export default ListAndRegisterPageTemplate;
