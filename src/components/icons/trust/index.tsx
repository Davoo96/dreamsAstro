type TrustIconProps = {
  className?: string;
};

const TrustIcon = ({ className }: TrustIconProps) => (
  <svg
    className={className}
    width="76"
    height="76"
    viewBox="0 0 76 76"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="38" cy="38" r="37.5" fill="white" stroke="white" />
    <path
      d="M20.0404 25.8678L26.2858 29.4678L19.2831 41.6055L13.0377 38.0054L20.0404 25.8678ZM30.4662 31.449C31.1406 31.1791 31.8978 30.8784 32.5723 30.6707C32.0256 31.0978 31.5465 31.6049 31.1509 32.1748C30.2276 33.586 29.4807 36.8745 30.4353 38.8351C30.6233 39.26 30.9235 39.6255 31.3038 39.8924C31.6841 40.1592 32.13 40.3173 32.5934 40.3495C34.9689 40.5464 35.5395 38.7832 35.9133 37.6214C36.0105 37.1697 36.2052 36.7448 36.4839 36.3763C36.8894 36.0843 37.3558 35.8878 37.848 35.8015C38.3402 35.7153 38.8455 35.7415 39.3262 35.8781C40.872 36.7911 47.3348 42.9013 49.8558 45.4326C49.9878 45.6879 50.0514 45.973 50.0405 46.2602C50.0296 46.5474 49.9446 46.8269 49.7936 47.0714C49.7019 47.2353 49.5737 47.3758 49.4189 47.4822C49.2642 47.5885 49.087 47.6579 48.9012 47.6849L45.6955 44.8009C45.5428 44.6647 45.3422 44.5948 45.1379 44.6064C44.9336 44.6181 44.7423 44.7104 44.6061 44.8631C44.4699 45.0158 44.4 45.2164 44.4116 45.4207C44.4233 45.625 44.5156 45.8163 44.6683 45.9525L47.8946 48.8575C47.883 49.1596 47.7914 49.4532 47.6292 49.7083C47.467 49.9635 47.24 50.171 46.9714 50.3097C46.5251 50.5796 46.1417 50.5899 46.0481 50.4963L46.0378 50.486L46.0253 50.4752L43.3593 48.0786C43.2066 47.9424 43.0061 47.8724 42.8018 47.8841C42.5975 47.8957 42.4062 47.9881 42.27 48.1408C42.1338 48.2935 42.0638 48.494 42.0755 48.6983C42.0872 48.9026 42.1795 49.0939 42.3322 49.2301L44.8321 51.4812C44.7606 51.8549 44.5671 52.1942 44.282 52.4461C43.971 52.7468 43.4934 53.027 43.1202 52.8821L41.0763 51.1805C40.9179 51.0508 40.7147 50.9892 40.511 51.0091C40.3073 51.0289 40.1198 51.1286 39.9895 51.2864C39.8592 51.4442 39.7967 51.6472 39.8157 51.851C39.8347 52.0547 39.9336 52.2427 40.0908 52.3736L41.9893 53.94C41.9602 53.9797 41.9251 54.0148 41.8854 54.0439C41.595 54.2618 40.9724 54.376 40.0075 54.1682C40.1303 53.787 40.1577 53.3814 40.0871 52.9871C40.0166 52.5928 39.8503 52.2219 39.6029 51.9069C39.1476 51.2937 38.5132 50.8369 37.7872 50.5996C37.7309 49.8088 37.3791 49.0681 36.8018 48.5248C36.3646 48.0717 35.8178 47.7393 35.2143 47.5599C35.198 46.9933 35.0297 46.4414 34.727 45.9622C34.455 45.4815 34.0739 45.0715 33.6144 44.7651C33.1549 44.4587 32.6299 44.2646 32.0816 44.1984C32.0125 43.808 31.8623 43.4365 31.6408 43.1077C31.4192 42.779 31.1313 42.5003 30.7954 42.2896C30.3308 42.0147 29.7966 41.8802 29.2572 41.9022C28.7178 41.9243 28.1963 42.1021 27.7557 42.414C27.158 42.8488 26.6146 43.3538 26.1374 43.9182C25.7745 43.5444 25.4219 43.1713 25.3591 43.0885C24.6436 42.0409 22.8484 40.9202 21.8424 40.3495L26.2516 32.7243C27.4858 32.6416 29.0008 32.0396 30.4633 31.4484L30.4662 31.449ZM36.5456 29.9956C36.5558 29.9854 36.5558 29.9956 36.5558 29.9854C36.6802 29.9334 38.0497 29.4353 41.7428 29.8507C43.6576 30.0854 45.463 30.871 46.94 32.1121C47.4306 32.5779 48.0414 32.8976 48.7038 33.0353L53.1751 40.7746C52.5629 41.3972 51.2664 42.725 50.3951 43.7727C47.6978 41.1067 41.8055 35.5255 40.1039 34.5286C39.3352 34.2139 38.4959 34.1124 37.6743 34.2347C36.8528 34.357 36.0794 34.6987 35.4357 35.2237C34.9432 35.7627 34.6005 36.4214 34.4417 37.1341C34.0268 38.4311 33.7883 38.8768 32.7195 38.794C32.5242 38.7858 32.3356 38.7205 32.177 38.6062C32.0184 38.4919 31.8967 38.3336 31.8271 38.1509C31.2045 36.875 31.6508 34.2194 32.4394 33.0262C33.3107 31.7086 35.7073 30.3911 36.5478 29.9968L36.5456 29.9956ZM55.4976 27.2892L62.5019 39.4166L56.2565 43.016L49.2538 30.8886L55.4976 27.2892ZM36.3989 54.7805C36.0527 54.6457 35.7659 54.392 35.5898 54.065L37.2394 52.0421C37.7591 52.189 38.1993 52.536 38.4634 53.007C38.5981 53.2769 38.7019 53.6918 38.121 54.2727C37.9243 54.5282 37.6518 54.7151 37.3425 54.8064C37.0332 54.8977 36.7029 54.8889 36.3989 54.7811V54.7805ZM32.8924 53.0167C32.5229 52.8065 32.2399 52.4721 32.0936 52.0729L34.5935 49.0127C35.0146 49.0762 35.4001 49.2854 35.6828 49.6039C36.0251 49.9462 36.347 50.4855 36.1701 50.9112L34.2716 53.2347C34.0437 53.328 33.7945 53.357 33.5513 53.3186C33.308 53.2802 33.0805 53.1758 32.8924 53.0167ZM29.6348 51.3465C29.3116 51.2525 29.0193 51.0742 28.7878 50.8299C28.5563 50.5856 28.3939 50.2842 28.3172 49.9565L31.7615 45.7448C32.0977 45.7533 32.4256 45.851 32.7117 46.0277C32.9978 46.2044 33.2319 46.454 33.39 46.7508C33.6805 47.2278 33.7221 47.674 33.5869 47.8087C33.5766 47.819 33.5766 47.8292 33.5663 47.8401L33.5458 47.8606L30.7446 51.2946C30.7388 51.2999 30.7351 51.3073 30.7344 51.3151C30.7241 51.3254 30.7241 51.3357 30.7138 51.3357C30.5997 51.4812 30.1637 51.5326 29.6348 51.346V51.3465ZM25.6821 47.2381C26.0298 46.5505 26.447 45.9004 26.9272 45.298C27.4257 44.7077 27.9824 44.1692 28.5888 43.6905C28.788 43.5408 29.0265 43.4523 29.2751 43.4357C29.5237 43.4191 29.7718 43.4751 29.9891 43.5969C30.1784 43.72 30.3331 43.8895 30.4383 44.0893C30.5436 44.2891 30.596 44.5124 30.5906 44.7382L27.1258 48.9916C26.9062 49.0434 26.677 49.0371 26.4606 48.9735C26.2442 48.9099 26.0481 48.791 25.8915 48.6287C25.7205 48.4451 25.6091 48.214 25.572 47.9659C25.535 47.7177 25.5739 47.4642 25.6838 47.2386L25.6821 47.2381ZM11.5957 38.9498L19.1793 43.3276C19.2948 43.398 19.428 43.434 19.5633 43.4315C19.6302 43.4312 19.6966 43.4206 19.7602 43.4001C19.9575 43.3452 20.1252 43.2148 20.2269 43.0372L21.0258 41.6574C22.0216 42.228 23.5365 43.1929 24.0444 43.9296C24.3903 44.3426 24.7573 44.7374 25.144 45.1125C24.7865 45.5945 24.4805 46.1126 24.231 46.6583C24.0383 47.0855 23.9579 47.5549 23.9974 48.0218C24.037 48.4888 24.1952 48.938 24.457 49.3266C24.7189 49.7153 25.0757 50.0307 25.4936 50.2428C25.9115 50.4549 26.3767 50.5567 26.845 50.5385C27.0194 51.0618 27.3138 51.537 27.7047 51.9261C28.0955 52.3152 28.5721 52.6074 29.0961 52.7794C29.629 52.9786 30.2046 53.0358 30.7663 52.9454C31.0716 53.4945 31.506 53.961 32.0319 54.3046C32.6746 54.7648 33.469 54.9616 34.2522 54.8547C34.5201 55.3323 34.9105 55.7298 35.3832 56.0062C35.8349 56.2761 36.3509 56.4194 36.8771 56.4211C37.6942 56.4013 38.4732 56.0712 39.0557 55.4978C39.6588 55.6951 40.2883 55.8 40.9228 55.8088C41.3219 55.8363 41.7222 55.7773 42.0964 55.6359C42.4707 55.4944 42.8099 55.2739 43.0911 54.9894C43.2345 54.8278 43.347 54.6414 43.4232 54.4393C44.1525 54.3779 44.8345 54.0534 45.3422 53.5263C45.7637 53.1266 46.0777 52.6271 46.2552 52.0741C46.781 52.0532 47.2923 51.8959 47.7388 51.6176C48.1933 51.3645 48.582 51.0083 48.8739 50.5777C49.1657 50.1471 49.3525 49.6541 49.4193 49.1382C49.7695 49.0464 50.0982 48.8865 50.3866 48.6676C50.6749 48.4486 50.9173 48.175 51.0998 47.8623C51.3609 47.4394 51.5211 46.9621 51.5679 46.4673C51.6147 45.9725 51.5469 45.4736 51.3697 45.0092C52.0544 44.1482 53.2368 42.9031 53.9734 42.1561L55.291 44.4386C55.3928 44.6163 55.5605 44.7467 55.7578 44.8015C55.8213 44.8216 55.8875 44.8318 55.9541 44.8318C56.0893 44.8343 56.2225 44.7983 56.3381 44.7279L63.9216 40.3501C64.0101 40.2996 64.0876 40.232 64.1496 40.1513C64.2117 40.0705 64.2571 39.9782 64.2832 39.8798C64.3093 39.7813 64.3155 39.6787 64.3015 39.5778C64.2875 39.4769 64.2536 39.3798 64.2018 39.2922L56.4214 25.8255C56.3196 25.6479 56.1519 25.5175 55.9546 25.4626C55.7553 25.4138 55.5451 25.4396 55.3635 25.5351L47.7799 29.9129C47.6713 29.9764 47.5796 30.0652 47.5127 30.1719C47.4459 30.2785 47.4058 30.3997 47.3959 30.5252C45.7996 29.2962 43.8988 28.5251 41.8974 28.2946C37.6748 27.8176 36.0982 28.4607 35.8699 28.5645C35.8077 28.5959 35.434 28.7722 34.9153 29.0518C33.6702 28.4504 31.8237 29.1973 29.863 29.9751C28.9876 30.3506 28.0903 30.6728 27.176 30.94L27.9851 29.5397C28.0875 29.3621 28.1155 29.1512 28.063 28.953C28.0105 28.7548 27.8818 28.5854 27.7049 28.4818L20.1214 24.104C20.0333 24.0515 19.9352 24.018 19.8334 24.0055C19.7317 23.993 19.6284 24.0019 19.5302 24.0315C19.333 24.0864 19.1653 24.2168 19.0635 24.3944L11.3156 37.8913C11.2126 38.0688 11.1842 38.2799 11.2367 38.4782C11.2893 38.6766 11.4184 38.8466 11.5957 38.9498Z"
      fill="#1F2224"
    />
  </svg>
);
export default TrustIcon;