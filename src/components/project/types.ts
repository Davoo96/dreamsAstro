export enum ProjectEnum {
  NOVO_RESIDENCE = "NOVO_RESIDENCE",
  JABUTICABEIRA = "JABUTICABEIRA",
  VIEW = "VIEW"
}

export type ProjectProps = {
  title: string;
  text: string;
  subtext: string;
  link: string;
  background: ProjectEnum;
};
