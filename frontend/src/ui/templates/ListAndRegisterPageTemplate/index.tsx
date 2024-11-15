import { Props } from "./types";

const ListAndRegisterPageTemplate: React.FC<Props> = ({ List, Register }) => {
  return (
    <div className="w-full h-full flex p-6">
      <div className="w-full">{List}</div>
      <div className="w-full">{Register}</div>
    </div>
  );
};

export default ListAndRegisterPageTemplate;
