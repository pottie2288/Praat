const HandyHand = ({
  width,
  height,
}: {
  width?: number | string;
  height?: number | string;
}) => (
  <svg
    width={width || 126}
    height={height || 135}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="stroke-text"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="7" cy="8" r="4" />
    <path d="M14 6.5a5 5 0 0 1 0 5" />
    <path d="M17 4a9 9 0 0 1 0 10" />
  </svg>
);

export default HandyHand;
