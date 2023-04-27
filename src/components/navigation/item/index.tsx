export type ItemPropsType = {
  className?: string;
  text: string;
  url: string;
  onClick: React.MouseEventHandler<HTMLAnchorElement>;
};

const Item = ({ className, text, url, onClick }: ItemPropsType) => (
  <li className={className}>
    <a href={url} onClick={onClick}>
      {text}
    </a>
  </li>
);

export default Item;
