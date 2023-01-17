export type ItemPropsType = {
  className?: string;
  text: string;
  url: string;
};

const Item = ({ className, text, url }: ItemPropsType) => (
  <li className={className}>
    <a href={url}>{text}</a>
  </li>
);

export default Item;
