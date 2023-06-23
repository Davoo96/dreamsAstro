export enum ServiceEnum {
  INCORPORATION = "INCORPORATION",
  CONSTRUCTION = "CONSTRUCTION",
  MANAGEMENT = "MANAGEMENT",
  PROJECTS = "PROJECTS"
}

export type ServiceProps = {
  title: string;
  backgroundImage: ServiceEnum;
};
