const FlagUAIcon = () => {
  return (
    <svg
      width="20"
      height="15"
      viewBox="0 0 20 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_765_8457)">
        <rect
          width="20"
          height="14"
          transform="translate(0 0.5)"
          fill="white"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M-6 -4.5V19.5H26V-4.5H-6Z"
          fill="#3195F9"
        />
        <mask
          id="mask0_765_8457"
          style={{ maskType: "luminance" }}
          maskUnits="userSpaceOnUse"
          x="-6"
          y="-5"
          width="32"
          height="25"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M-6 -4.5V19.5H26V-4.5H-6Z"
            fill="white"
          />
        </mask>
        <g mask="url(#mask0_765_8457)">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M-6 7.5V19.5H26V7.5H-6Z"
            fill="#FECA00"
          />
        </g>
      </g>
      <defs>
        <clipPath id="clip0_765_8457">
          <rect
            width="20"
            height="14"
            fill="white"
            transform="translate(0 0.5)"
          />
        </clipPath>
      </defs>
    </svg>
  );
}

export default FlagUAIcon