import ColaborationIcon from "@components/icons/colaboration";
import EthicsIcon from "@components/icons/ethics";
import Innovation from "@components/icons/innovation";
import QualityIcon from "@components/icons/quality";
import RespectIcon from "@components/icons/respect";
import Responsability from "@components/icons/responsability";
import TransparencyIcon from "@components/icons/transparency";
import TrustIcon from "@components/icons/trust";
import type { ValueEnum, ValueProps } from "./types";

const iconsStrategy: { [key in ValueEnum]: React.ReactNode } = {
  TRUST: <TrustIcon />,
  RESPECT: <RespectIcon />,
  TRANSPARENCY: <TransparencyIcon />,
  QUALITY: <QualityIcon />,
  ETHICS: <EthicsIcon />,
  COLABORATION: <ColaborationIcon />,
  RESPONSABILITY: <Responsability />,
  INNOVATION: <Innovation />
};

const Value = ({ icon, label }: ValueProps) => (
  <div className="flex justify-center items-center flex-col flex-nowrap">
    {iconsStrategy[icon]}
    <p className="text-orange-300 font-bold text-base mt-4">{label}</p>
  </div>
);

export default Value;
