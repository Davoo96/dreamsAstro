type EthicsIconProps = {
  className?: string;
};

const EthicsIcon = ({ className }: EthicsIconProps) => (
  <svg
    className={className}
    width="76"
    height="76"
    viewBox="0 0 76 76"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="38" cy="38" r="37.5" fill="white" stroke="white" />
    <mask
      id="mask0_20_4186"
      maskUnits="userSpaceOnUse"
      x="16"
      y="16"
      width="44"
      height="44"
    >
      <path d="M59.3685 16H16V59.3685H59.3685V16Z" fill="white" />
    </mask>
    <g mask="url(#mask0_20_4186)">
      <path
        d="M52.1888 31.4021V25.3364C52.5893 25.2043 52.9372 24.9482 53.1823 24.6051C53.4274 24.262 53.5569 23.8498 53.552 23.4282V22.7489H52.1888V23.4305C52.1888 23.6113 52.117 23.7847 51.9892 23.9125C51.8614 24.0403 51.688 24.1121 51.5072 24.1121C51.3265 24.1121 51.1531 24.0403 51.0253 23.9125C50.8975 23.7847 50.8256 23.6113 50.8256 23.4305C50.831 23.1605 50.7818 22.8921 50.6809 22.6416C50.5801 22.391 50.4298 22.1633 50.239 21.9722C50.0481 21.7811 49.8207 21.6304 49.5702 21.5292C49.3198 21.4281 49.0515 21.3785 48.7815 21.3834H40.6733V20.2933L37.8772 16.0678L35.0829 20.2933V21.3154H26.9044C26.6345 21.3104 26.3663 21.3599 26.116 21.4609C25.8656 21.5619 25.6382 21.7123 25.4473 21.9032C25.2565 22.0941 25.106 22.3215 25.005 22.5718C24.9041 22.8222 24.8546 23.0903 24.8596 23.3602C24.8596 23.541 24.7878 23.7143 24.66 23.8422C24.5321 23.97 24.3588 24.0418 24.178 24.0418C23.9972 24.0418 23.8239 23.97 23.6961 23.8422C23.5682 23.7143 23.4964 23.541 23.4964 23.3602V22.6786H22.1338V23.3602C22.1288 23.7819 22.2582 24.1943 22.5033 24.5375C22.7484 24.8807 23.0965 25.1369 23.497 25.269V31.3347L16.0001 44.9642V45.1687C15.9958 45.7965 16.1163 46.4189 16.3545 46.9998C16.5927 47.5807 16.9438 48.1085 17.3876 48.5526C17.8314 48.9967 18.359 49.3482 18.9398 49.5867C19.5205 49.8253 20.1428 49.9461 20.7707 49.9422H27.586C28.2135 49.9461 28.8356 49.8254 29.4162 49.587C29.9967 49.3486 30.5242 48.9974 30.9679 48.5536C31.4117 48.1099 31.7629 47.5824 32.0013 47.0019C32.2397 46.4213 32.3604 45.7992 32.3565 45.1717V44.9671L24.8596 31.3342V25.269C25.26 25.137 25.608 24.8808 25.8531 24.5377C26.0982 24.1946 26.2277 23.7824 26.2228 23.3608C26.2174 23.2699 26.2314 23.1789 26.2637 23.0937C26.2961 23.0086 26.3461 22.9313 26.4105 22.8669C26.4749 22.8025 26.5522 22.7525 26.6373 22.7201C26.7224 22.6878 26.8135 22.6738 26.9044 22.6792H35.1508V24.0424H37.127V25.5415C36.5605 25.699 36.0608 26.0371 35.7041 26.5046C35.3474 26.9721 35.1531 27.5433 35.1508 28.1313C35.143 28.7217 35.3335 29.2975 35.6918 29.7668C36.0501 30.236 36.5555 30.5714 37.127 30.7194V32.3551C36.5529 32.5092 36.0438 32.8445 35.6754 33.3111C35.307 33.7777 35.099 34.3506 35.0823 34.9449V48.3721L36.718 49.1926L33.7197 52.8725V54.0311C32.5819 54.2096 31.545 54.788 30.7955 55.6624C30.046 56.5369 29.633 57.65 29.6307 58.8017V59.4833H45.9871V58.7993C45.9763 57.6606 45.5688 56.5613 44.8349 55.6906C44.101 54.8199 43.0866 54.2323 41.9661 54.0288V52.8016L38.8313 49.1897L40.603 48.3692L40.535 34.9431C40.5389 34.3434 40.3385 33.7602 39.9669 33.2895C39.5953 32.8188 39.0745 32.4887 38.4902 32.3533V30.8571C39.105 30.7347 39.6584 30.4029 40.0561 29.9183C40.4537 29.4337 40.671 28.8262 40.671 28.1993C40.671 27.5724 40.4537 26.9649 40.0561 26.4803C39.6584 25.9957 39.105 25.6639 38.4902 25.5415V24.1098H40.6733V22.7489H48.7129C48.8038 22.7436 48.8948 22.7575 48.9799 22.7899C49.0651 22.8222 49.1424 22.8722 49.2068 22.9366C49.2712 23.001 49.3212 23.0783 49.3536 23.1635C49.3859 23.2486 49.3999 23.3396 49.3945 23.4305C49.3896 23.8521 49.5191 24.2644 49.7641 24.6075C50.0092 24.9506 50.3572 25.2067 50.7577 25.3387V31.4045L43.2608 45.0328V45.2373C43.2569 45.8649 43.3776 46.487 43.616 47.0675C43.8543 47.648 44.2056 48.1755 44.6493 48.6193C45.0931 49.063 45.6206 49.4143 46.2011 49.6526C46.7816 49.891 47.4037 50.0117 48.0313 50.0078H54.8466C55.4742 50.0117 56.0963 49.891 56.6768 49.6526C57.2574 49.4143 57.7848 49.063 58.2286 48.6193C58.6723 48.1755 59.0236 47.648 59.2619 47.0675C59.5003 46.487 59.621 45.8649 59.6172 45.2373V45.0328L52.1888 31.4021ZM27.586 48.5737H20.7707C19.9859 48.5704 19.226 48.2978 18.618 47.8016C18.01 47.3054 17.5907 46.6156 17.4301 45.8474H30.9253C30.7654 46.6159 30.3465 47.3062 29.7387 47.803C29.1308 48.2998 28.3709 48.5729 27.586 48.5767V48.5737ZM30.5163 44.4848H17.8403L24.1786 32.9699L30.5163 44.4848ZM44.556 58.1178H31.0619C31.2129 57.3268 31.6367 56.6139 32.2593 56.1033C32.882 55.5927 33.664 55.3167 34.4693 55.3234H41.1504C41.9519 55.3298 42.7271 55.6105 43.3468 56.119C43.9664 56.6275 44.3932 57.3329 44.556 58.1178ZM40.603 53.3472V53.9608H35.0829V53.3472L37.8092 50.0758L40.603 53.3472ZM39.1718 34.9449L39.2398 47.5528L37.8086 48.2344L36.4455 47.5528V34.9461C36.4455 34.5845 36.5891 34.2378 36.8447 33.9821C37.1004 33.7265 37.4471 33.5829 37.8086 33.5829C38.1702 33.5829 38.5169 33.7265 38.7725 33.9821C39.0282 34.2378 39.1718 34.5845 39.1718 34.9461V34.9449ZM39.3084 28.1296C39.3073 28.4908 39.1633 28.8369 38.9079 29.0923C38.6525 29.3477 38.3064 29.4917 37.9452 29.4928H37.8086C37.4471 29.4928 37.1004 29.3491 36.8447 29.0935C36.5891 28.8378 36.4455 28.4911 36.4455 28.1296C36.4455 27.768 36.5891 27.4213 36.8447 27.1657C37.1004 26.91 37.4471 26.7664 37.8086 26.7664H37.9452C38.1257 26.7611 38.3054 26.7928 38.4733 26.8595C38.6411 26.9262 38.7936 27.0266 38.9213 27.1543C39.0489 27.2821 39.1491 27.4346 39.2157 27.6025C39.2823 27.7705 39.3138 27.9502 39.3084 28.1307V28.1296ZM39.3084 22.6792H36.446V20.7024L37.8772 18.5217L39.3084 20.7024V22.6792ZM51.5072 32.9699L57.8449 44.4871H45.169L51.5072 32.9699ZM54.9146 48.5767H48.0999C47.3151 48.5733 46.5552 48.3007 45.9472 47.8045C45.3392 47.3083 44.9199 46.6185 44.7593 45.8503H58.2551C58.0945 46.6185 57.6752 47.3083 57.0672 47.8045C56.4592 48.3007 55.6994 48.5733 54.9146 48.5767Z"
        fill="#1F2224"
      />
    </g>
  </svg>
);

export default EthicsIcon;