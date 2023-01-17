import DreamsIcon from "../../../assets/pictures/logo-dreams.svg";

type LogoProps = {
  className?: string;
};

const DreamsLogo = (props: LogoProps) => (
  <img
    src={DreamsIcon}
    className={`${props.className} w-full max-w-full block`}
  />
);

export default DreamsLogo;
