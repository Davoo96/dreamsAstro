type LogoProps = {
  className?: string;
};

const WhatsappLogo = ({ className }: LogoProps) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    fill="none"
  >
    <path
      fill="currentColor"
      d="M12 2.438a9.562 9.562 0 0 0-8.344 14.23l-.825 2.879a1.303 1.303 0 0 0 1.622 1.622l2.878-.825a9.563 9.563 0 1 0 4.67-17.907Zm0 18c-1.514 0-3-.409-4.303-1.182a.638.638 0 0 0-.29-.075.412.412 0 0 0-.15.019l-3.113.89a.187.187 0 0 1-.234-.234l.89-3.112a.563.563 0 0 0-.056-.44A8.437 8.437 0 1 1 12 20.437Zm4.828-6.863-1.922-1.097a1.313 1.313 0 0 0-1.322.019l-1.2.722a3.882 3.882 0 0 1-1.603-1.603l.722-1.2a1.312 1.312 0 0 0 .019-1.322l-1.097-1.922a1.218 1.218 0 0 0-1.05-.61 3.187 3.187 0 0 0-3.187 3.179 8.063 8.063 0 0 0 8.062 8.072h.01a3.188 3.188 0 0 0 3.178-3.188 1.219 1.219 0 0 0-.61-1.05Zm-2.569 3.113h-.009A6.947 6.947 0 0 1 7.313 9.74a2.062 2.062 0 0 1 2.062-2.053.112.112 0 0 1 .075.037l1.097 1.922a.188.188 0 0 1-.01.187l-.871 1.472a.534.534 0 0 0-.038.516 5.119 5.119 0 0 0 2.55 2.55.533.533 0 0 0 .516-.038l1.472-.871a.187.187 0 0 1 .187-.01l1.922 1.097c.022.02.035.046.038.075a2.062 2.062 0 0 1-2.053 2.063Z"
    />
  </svg>
);

export default WhatsappLogo;