type LogoProps = {
  className?: string;
};

const InstagramLogo = ({ className }: LogoProps) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    fill="none"
  >
    <path
      fill="currentColor"
      stroke="#000"
      stroke-width=".2"
      d="M12 15.1a3.11 3.11 0 0 0 3.1-3.1 3.1 3.1 0 1 0-3.1 3.1ZM9.555 8.342a4.4 4.4 0 1 1 4.89 7.317 4.4 4.4 0 0 1-4.89-7.317Zm-1.68-5.617h8.25a5.15 5.15 0 0 1 5.15 5.15v8.25a5.15 5.15 0 0 1-5.15 5.15h-8.25a5.15 5.15 0 0 1-5.15-5.15v-8.25a5.15 5.15 0 0 1 5.15-5.15Zm11.807 14.873a3.85 3.85 0 0 0 .293-1.473v-8.25a3.85 3.85 0 0 0-3.85-3.85h-8.25a3.85 3.85 0 0 0-3.85 3.85v8.25a3.85 3.85 0 0 0 3.85 3.85h8.25a3.85 3.85 0 0 0 3.557-2.377ZM17.9 7.125a1.025 1.025 0 1 1-2.05 0 1.025 1.025 0 0 1 2.05 0Z"
    />
  </svg>
);

export default InstagramLogo;
