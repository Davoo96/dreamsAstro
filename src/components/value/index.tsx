import Balcony from "@components/icons/balcony";
import ColaborationIcon from "@components/icons/colaboration";
import DoubleArrows from "@components/icons/doubleArrows";
import EthicsIcon from "@components/icons/ethics";
import Garage from "@components/icons/garage";
import Gourmet from "@components/icons/gourmet";
import Innovation from "@components/icons/innovation";
import Kitchen from "@components/icons/kitchen";
import Laundry from "@components/icons/laundry";
import Metrics from "@components/icons/metrics";
import QualityIcon from "@components/icons/quality";
import RespectIcon from "@components/icons/respect";
import Responsability from "@components/icons/responsability";
import Suites from "@components/icons/suites";
import TransparencyIcon from "@components/icons/transparency";
import TrustIcon from "@components/icons/trust";
import type { ValueEnum, ValueProps } from "./types";

const valueIconsStrategy: { [key in ValueEnum]: React.ReactNode } = {
  TRUST: <TrustIcon />,
  RESPECT: <RespectIcon />,
  TRANSPARENCY: <TransparencyIcon />,
  QUALITY: <QualityIcon />,
  ETHICS: <EthicsIcon />,
  COLABORATION: <ColaborationIcon />,
  RESPONSABILITY: <Responsability />,
  INNOVATION: <Innovation />,
  GOURMET: <Gourmet className="text-[#1F2224]" />,
  LAUNDRY: <Laundry className="text-[#1F2224]" />,
  DOUBLE_ARROWS: <DoubleArrows className="text-[#1F2224]" />,
  KITCHEN: <Kitchen className="text-[#1F2224]" />,
  METRICS: <Metrics className="text-[#1F2224]" />,
  SUITES: <Suites className="text-[#1F2224]" />,
  BALCONY: <Balcony className="text-[#1F2224]" />,
  GARAGE: <Garage className="text-[#1F2224]" />
};

const Value = ({ icon, label }: ValueProps) => (
  <div
    data-animate-type="motion-safe:animate-fadeRight"
    className="flex justify-start items-center flex-col flex-nowrap"
  >
    {valueIconsStrategy[icon]}
    <p className="text-orange-300 font-bold text-xs tablet:text-base mt-4 text-center">
      {label}
    </p>
  </div>
);

export default Value;
