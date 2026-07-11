export type ItemPropsType = {
  className?: string;
  text: string;
  url: string;
  onClick: React.MouseEventHandler<HTMLAnchorElement>;
  "data-nav-item"?: boolean;
};

const Item = ({
  className,
  text,
  url,
  onClick,
  "data-nav-item": dataNavItem
}: ItemPropsType) => (
  <li className={className} data-nav-item={dataNavItem || undefined}>
    <a href={url} onClick={onClick}>
      {text}
    </a>
  </li>
);

export default Item;
