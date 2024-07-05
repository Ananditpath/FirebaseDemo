import * as Yup from "yup";
import { IMAGES } from "../assets";
import PhoneInput from "react-phone-input-2";
export const BASE_URL = "https://journeyjoyapi.project-demo.info:3007/v1";
export const BASE_URL_DOCS = "https://journeyjoyapi.project-demo.info:3007";
export const maxLines = 6;
export const API_ERROR_MESSAGE = "Something wents wrong";
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]{2,}\.[a-zA-Z]{2,}$/;
const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

export const validateSchema = Yup.object().shape({
  email: Yup.string()
    .required("Email Address is required")
    .matches(emailRegex, "Please enter a valid email")
    .email("Please enter a valid email"),
  password: Yup.string()
    .required("Password is required")
    .min(8, "Password must be 8 or more characters"),
});
export const validateFotgotPasswordSchema = Yup.object().shape({
  email: Yup.string()
    .email("Please enter a valid email")
    .matches(emailRegex, "Please enter a valid email")
    .required("Email Address is required"),
});

export const resetPasswordValidationSchema = Yup.object().shape({
  password: Yup.string()
    .required("Password is required")
    .min(8, "Pasword must be 8 or more characters"),
  confirmPassword: Yup.string()
    .required("Confirm Password is required")
    .oneOf([Yup.ref("password")], "Password does not match"),
});

export const AgencySchema = Yup.object().shape({
  email: Yup.string()
    .email("Please enter a valid email")
    .matches(emailRegex, "Please enter a valid email")
    .required("Email Address is required"),
  fullname: Yup.string()
    .matches(/^[^<>]*$/, "Full Name cannot contain HTML tags")
    .matches(/^(?!https?:\/\/|www\.)[^<>]*$/, "Full Name cannot contain URLs")
    .required("Full Name is required")
    .max(50, "Full Name must be at most 50 characters"),
  agencyName: Yup.string()
    .matches(/^[^<>]*$/, "Agency Name cannot contain HTML tags")
    .matches(/^(?!https?:\/\/|www\.)[^<>]*$/, "Agency Name cannot contain URLs")
    .required("Agency Name is required")
    .max(50, "Agency Name must be at most 50 characters"),
  agencyPhone: Yup.string()
    .matches(phoneRegExp, "Phone number is not valid")
    .required("Phone number is required"),
  agencyAddress1: Yup.string()
    .required("Agency Address 1 is required")
    .matches(/^[^<>]*$/, "Agency Address 1 cannot contain HTML tags")
    .matches(
      /^(?!https?:\/\/|www\.)[^<>]*$/,
      "Agency Address 1 cannot contain URLs"
    )
    .max(50, "Agency Address 1 must be at most 50 characters"),

  location: Yup.string()
    .required("Location is required")
    .matches(/^[^<>]*$/, "Location cannot contain HTML tags")
    .matches(/^(?!https?:\/\/|www\.)[^<>]*$/, "Location cannot contain URLs")
    .max(50, "Location must be at most 50 characters"),
  country: Yup.object().required("Country is required"),
  city: Yup.object().required("City is required"),
  state: Yup.object().required("State is required"),
  pincode: Yup.string()
    .matches(/^[0-9]+$/, "Pincode must contain only digits")
    .max(6, "Pincode must not be more than 6 digits")
    .required("Pincode is required"),
  ownerName: Yup.string()
    .matches(/^[^<>]*$/, "Owner Name cannot contain HTML tags")
    .matches(/^(?!https?:\/\/|www\.)[^<>]*$/, "Owner Name cannot contain URLs")
    .required("Owner Name is required")
    .max(50, "Owner Name must be at most 50 characters"),
});

export const LoginImages = IMAGES.car4;

export const CarSchema = Yup.object().shape({
  car_no: Yup.string()
    .required("Car number is required")
    .matches(
      /[A-Z]{2}-[0-9]{2}-[A-Z]{1,2}-[0-9]{4}/,
      "Car number is not in proper format"
    ),
  car_model: Yup.string()
    .required("Car model is required")
    .matches(/^[^<>]*$/, "Car model cannot contain HTML tags")
    .matches(/^(?!https?:\/\/|www\.)[^<>]*$/, "Car model cannot contain URLs")
    .max(50, "Car model must be at most 50 characters"),
  manufacturing_year: Yup.string().required("Manufacture year is required"),
  description: Yup.string()
    .required("Description is required")
    .max(255, "Description must be at most 255 characters")
    .matches(/^[^<>]*$/, "Description cannot contain HTML tags")
    .matches(/^(?!https?:\/\/|www\.)[^<>]*$/, "Description cannot contain URLs")
    .max(255, "Description must be at most 255 characters"),
  price: Yup.string()
    .required("Price is required")
    .matches(/^\d{2}$/, "Price must contain only two digits"),
  seats: Yup.string().required("Seats is required"),
  carstype_id: Yup.object().required("CarType is required"),
  fueltype_id: Yup.object().required("FuelType is required"),
  car_color: Yup.string()
    .required("Car Color is required")
    .max(50, "Car color must be at most 50 characters")
    .matches(/^[^<>]*$/, "Car Color cannot contain HTML tags")
    .matches(/^(?!https?:\/\/|www\.)[^<>]*$/, "Car Color cannot contain URLs")
    .max(50, "Car Color must be at most 50 characters"),
  transmission: Yup.string().required("Transmission is required"),
  air_condition: Yup.string().required("AirCondition  is required"),
  is_available: Yup.string().required("isAvailable year is required"),
});

export const TripSchema = Yup.object().shape({
  title: Yup.string()
    .required("Title is required!")
    .matches(/^[^<>]*$/, "Title cannot contain HTML tags")
    .matches(/^(?!https?:\/\/|www\.)[^<>]*$/, "Title cannot contain URLs")
    .max(50, "Title must be at most 50 characters"),
  tripstype_id: Yup.string()
    .required("Please select a valid trip type!")
    .transform((value) => {
      return value?.title;
    }),
  price: Yup.string().required("Price is required!"),
  seats: Yup.string().required("Seats is required!"),
  description: Yup.string()
    .required("Description is required!")
    .matches(/^[^<>]*$/, "Description cannot contain HTML tags")
    .matches(/^(?!https?:\/\/|www\.)[^<>]*$/, "Description cannot contain URLs")
    .max(255, "Description must be at most 255 characters"),
  start_date: Yup.string().required("Start data is required!"),
  start_time: Yup.string().required("Start time is required!"),
  end_date: Yup.string().required("End date is required!"),
  end_time: Yup.string().required("End time is required!"),
});

export const DriversSchema = Yup.object().shape({
  fullName: Yup.string()
    .required("Full Name  is required")
    .matches(/^[^<>]*$/, "Full Name cannot contain HTML tags")
    .matches(/^(?!https?:\/\/|www\.)[^<>]*$/, "Full Name cannot contain URLs")
    .max(50, "Full Name must be at most 50 characters"),
  email: Yup.string()
    .email("Please enter a valid email")
    .matches(emailRegex, "Please enter a valid email")
    .required("Email Address is required"),
  mobileNumber: Yup.string()
    .required("Mobile number is required")
    .matches(/^[0-9]+$/, "Mobile number must contain only digits")
    .min(10, "Mobile number must be exactly 10 digits")
    .max(10, "Mobile number must be exactly 10 digits"),
});

export const CouponSchema = Yup.object().shape({
  coupon_name: Yup.string()
    .required("Coupon Name is required")
    .matches(/^[^<>]*$/, "Coupon Name cannot contain HTML tags")
    .matches(/^(?!https?:\/\/|www\.)[^<>]*$/, "Coupon Name cannot contain URLs")
    .max(50, "Coupon Name  must be at most 50 characters"),
  coupon_module_type: Yup.string().required("Module Type is required"),
  coupon_type: Yup.string().required("Coupon Type is required"),
  sub_coupon_type: Yup.string().required("Sub Coupon Type is required"),
  coupon_code: Yup.string().required("Coupon Code is required"),
  discount: Yup.number()
    .required("Discount is required")
    .typeError("Discount must be a number")
    .min(0, "Discount must be greater than or equal to 0")
    .max(100, "Discount must be less than or equal to 100"),
  expire_date: Yup.date()
    .nullable()
    .typeError("Expire Date must be a valid date")
    .required("Expire Date is required"),
});

export const AgencyPaymentSchema = Yup.object().shape({
  account_holder_name: Yup.string()
    .required("Account Holder Name is required")
    .matches(
      /^[a-zA-Z\s]+$/,
      "Account Holder Name must contain only characters"
    ),
  account_number: Yup.string()
    .required("Account Number is required")
    .matches(/^\d{8,17}$/, "Account Number must be between 8 to 17 digits")
    .matches(/^\d+$/, "Account Number must contain only digits"),
  customer_id: Yup.string()
    .required("Customer ID is required")
    .matches(
      /^[a-zA-Z0-9]+$/,
      "Customer ID must contain only characters and digits"
    )
    .length(11, "Customer ID must be exactly 11 characters long"),
  ifsc_code: Yup.string()
    .required("IFSC Code is required")
    .matches(
      /^[a-zA-Z0-9]+$/,
      "IFSC Code must contain only characters and digits"
    )
    .length(11, "IFSC Code must be exactly 11 characters long"),
  bank_name: Yup.string().required("Bank Name is required"),
  branch: Yup.string().required("Branch is required"),
});

export const bannerValidationSchema = Yup.object().shape({
  banner_name: Yup.string().required("Banner name is required"),
  category_type: Yup.string().required("Banner Category is required"),
  banner_type: Yup.string().required("Banner type is required"),
  banner_discount: Yup.number()
    .required("discount is required")
    .oneOf([5, 10, 15, 20, 25], "Invalid discount value"),
  files: Yup.mixed().required("File is required"),
});

export const carNoMaskConfig = {
  mask: "**-##-**-####",
  definitions: {
    "#": /[0-9]/,
    "*": /[A-Za-z]/,
  },
};

export const agencyPhoneMaskConfig = {
  mask: "###-###-####",
  definitions: {
    "#": /[0-9]/,
  },
};

export const countries = [
  { code: "AD", label: "Andorra", phone: "376" },
  {
    code: "AE",
    label: "United Arab Emirates",
    phone: "971",
  },
  { code: "AF", label: "Afghanistan", phone: "93" },
  {
    code: "AG",
    label: "Antigua and Barbuda",
    phone: "1-268",
  },
  { code: "AI", label: "Anguilla", phone: "1-264" },
  { code: "AL", label: "Albania", phone: "355" },
  { code: "AM", label: "Armenia", phone: "374" },
  { code: "AO", label: "Angola", phone: "244" },
  { code: "AQ", label: "Antarctica", phone: "672" },
  { code: "AR", label: "Argentina", phone: "54" },
  { code: "AS", label: "American Samoa", phone: "1-684" },
  { code: "AT", label: "Austria", phone: "43" },
  {
    code: "AU",
    label: "Australia",
    phone: "61",
    suggested: true,
  },
  { code: "AW", label: "Aruba", phone: "297" },
  { code: "AZ", label: "Azerbaijan", phone: "994" },
  {
    code: "BA",
    label: "Bosnia and Herzegovina",
    phone: "387",
  },
  { code: "BB", label: "Barbados", phone: "1-246" },
  { code: "BD", label: "Bangladesh", phone: "880" },
  { code: "BE", label: "Belgium", phone: "32" },
  { code: "BF", label: "Burkina Faso", phone: "226" },
  { code: "BG", label: "Bulgaria", phone: "359" },
  { code: "BH", label: "Bahrain", phone: "973" },
  { code: "BI", label: "Burundi", phone: "257" },
  { code: "BJ", label: "Benin", phone: "229" },
  { code: "BM", label: "Bermuda", phone: "1-441" },
  { code: "BN", label: "Brunei Darussalam", phone: "673" },
  { code: "BO", label: "Bolivia", phone: "591" },
  { code: "BR", label: "Brazil", phone: "55" },
  { code: "BS", label: "Bahamas", phone: "1-242" },
  { code: "BT", label: "Bhutan", phone: "975" },
  { code: "BW", label: "Botswana", phone: "267" },
  { code: "BY", label: "Belarus", phone: "375" },
  { code: "BZ", label: "Belize", phone: "501" },
  {
    code: "CD",
    label: "Congo, Democratic Republic of the",
    phone: "243",
  },
  {
    code: "CF",
    label: "Central African Republic",
    phone: "236",
  },
  {
    code: "CG",
    label: "Congo, Republic of the",
    phone: "242",
  },
  { code: "CH", label: "Switzerland", phone: "41" },
  { code: "CI", label: "Cote d'Ivoire", phone: "225" },
  { code: "CK", label: "Cook Islands", phone: "682" },
  { code: "CL", label: "Chile", phone: "56" },
  { code: "CM", label: "Cameroon", phone: "237" },
  { code: "CN", label: "China", phone: "86" },
  { code: "CO", label: "Colombia", phone: "57" },
  { code: "CR", label: "Costa Rica", phone: "506" },
  { code: "CU", label: "Cuba", phone: "53" },
  { code: "CV", label: "Cape Verde", phone: "238" },
  { code: "CW", label: "Curacao", phone: "599" },
  { code: "CY", label: "Cyprus", phone: "357" },
  { code: "CZ", label: "Czech Republic", phone: "420" },
  {
    code: "DE",
    label: "Germany",
    phone: "49",
    suggested: true,
  },
  { code: "DJ", label: "Djibouti", phone: "253" },
  { code: "DK", label: "Denmark", phone: "45" },
  { code: "DM", label: "Dominica", phone: "1-767" },
  {
    code: "DO",
    label: "Dominican Republic",
    phone: "1-809",
  },
  { code: "DZ", label: "Algeria", phone: "213" },
  { code: "EC", label: "Ecuador", phone: "593" },
  { code: "EE", label: "Estonia", phone: "372" },
  { code: "EG", label: "Egypt", phone: "20" },
  { code: "ER", label: "Eritrea", phone: "291" },
  { code: "ES", label: "Spain", phone: "34" },
  { code: "ET", label: "Ethiopia", phone: "251" },
  { code: "FI", label: "Finland", phone: "358" },
  { code: "FJ", label: "Fiji", phone: "679" },
  {
    code: "FM",
    label: "Micronesia, Federated States of",
    phone: "691",
  },
  { code: "FO", label: "Faroe Islands", phone: "298" },
  {
    code: "FR",
    label: "France",
    phone: "33",
    suggested: true,
  },
  { code: "GA", label: "Gabon", phone: "241" },
  { code: "GB", label: "United Kingdom", phone: "44" },
  { code: "GD", label: "Grenada", phone: "1-473" },
  { code: "GE", label: "Georgia", phone: "995" },
  { code: "GF", label: "French Guiana", phone: "594" },
  { code: "GH", label: "Ghana", phone: "233" },
  { code: "GI", label: "Gibraltar", phone: "350" },
  { code: "GL", label: "Greenland", phone: "299" },
  { code: "GM", label: "Gambia", phone: "220" },
  { code: "GN", label: "Guinea", phone: "224" },
  { code: "GQ", label: "Equatorial Guinea", phone: "240" },
  { code: "GR", label: "Greece", phone: "30" },
  {
    code: "GS",
    label: "South Georgia and the South Sandwich Islands",
    phone: "500",
  },
  { code: "GT", label: "Guatemala", phone: "502" },
  { code: "GU", label: "Guam", phone: "1-671" },
  { code: "GW", label: "Guinea-Bissau", phone: "245" },
  { code: "GY", label: "Guyana", phone: "592" },
  { code: "HK", label: "Hong Kong", phone: "852" },
  { code: "HN", label: "Honduras", phone: "504" },
  { code: "HR", label: "Croatia", phone: "385" },
  { code: "HT", label: "Haiti", phone: "509" },
  { code: "HU", label: "Hungary", phone: "36" },
  { code: "ID", label: "Indonesia", phone: "62" },
  { code: "IE", label: "Ireland", phone: "353" },
  { code: "IL", label: "Israel", phone: "972" },
  { code: "IN", label: "India", phone: "91" },
  {
    code: "IO",
    label: "British Indian Ocean Territory",
    phone: "246",
  },
  { code: "IQ", label: "Iraq", phone: "964" },
  {
    code: "IR",
    label: "Iran, Islamic Republic of",
    phone: "98",
  },
  { code: "IS", label: "Iceland", phone: "354" },
  { code: "IT", label: "Italy", phone: "39" },
  { code: "JM", label: "Jamaica", phone: "1-876" },
  { code: "JO", label: "Jordan", phone: "962" },
  {
    code: "JP",
    label: "Japan",
    phone: "81",
    suggested: true,
  },
  { code: "KE", label: "Kenya", phone: "254" },
  { code: "KG", label: "Kyrgyzstan", phone: "996" },
  { code: "KH", label: "Cambodia", phone: "855" },
  { code: "KI", label: "Kiribati", phone: "686" },
  { code: "KM", label: "Comoros", phone: "269" },
  {
    code: "KN",
    label: "Saint Kitts and Nevis",
    phone: "1-869",
  },
  {
    code: "KP",
    label: "Korea, Democratic People's Republic of",
    phone: "850",
  },
  { code: "KR", label: "Korea, Republic of", phone: "82" },
  { code: "KW", label: "Kuwait", phone: "965" },
  { code: "KY", label: "Cayman Islands", phone: "1-345" },
  { code: "KZ", label: "Kazakhstan", phone: "7" },
  {
    code: "LA",
    label: "Lao People's Democratic Republic",
    phone: "856",
  },
  { code: "LB", label: "Lebanon", phone: "961" },
  { code: "LC", label: "Saint Lucia", phone: "1-758" },
  { code: "LI", label: "Liechtenstein", phone: "423" },
  { code: "LK", label: "Sri Lanka", phone: "94" },
  { code: "LR", label: "Liberia", phone: "231" },
  { code: "LS", label: "Lesotho", phone: "266" },
  { code: "LT", label: "Lithuania", phone: "370" },
  { code: "LU", label: "Luxembourg", phone: "352" },
  { code: "LV", label: "Latvia", phone: "371" },
  { code: "LY", label: "Libya", phone: "218" },
  { code: "MA", label: "Morocco", phone: "212" },
  { code: "MC", label: "Monaco", phone: "377" },
  {
    code: "MD",
    label: "Moldova, Republic of",
    phone: "373",
  },
  { code: "ME", label: "Montenegro", phone: "382" },
  {
    code: "MF",
    label: "Saint Martin (French part)",
    phone: "590",
  },
  { code: "MG", label: "Madagascar", phone: "261" },
  { code: "MH", label: "Marshall Islands", phone: "692" },
  {
    code: "MK",
    label: "Macedonia, the Former Yugoslav Republic of",
    phone: "389",
  },
  { code: "ML", label: "Mali", phone: "223" },
  { code: "MM", label: "Myanmar", phone: "95" },
  { code: "MN", label: "Mongolia", phone: "976" },
  { code: "MO", label: "Macao", phone: "853" },
  {
    code: "MP",
    label: "Northern Mariana Islands",
    phone: "1-670",
  },
  { code: "MQ", label: "Martinique", phone: "596" },
  { code: "MR", label: "Mauritania", phone: "222" },
  { code: "MS", label: "Montserrat", phone: "1-664" },
  { code: "MT", label: "Malta", phone: "356" },
  { code: "MU", label: "Mauritius", phone: "230" },
  { code: "MV", label: "Maldives", phone: "960" },
  { code: "MW", label: "Malawi", phone: "265" },
  { code: "MX", label: "Mexico", phone: "52" },
  { code: "MY", label: "Malaysia", phone: "60" },
  { code: "MZ", label: "Mozambique", phone: "258" },
  { code: "NA", label: "Namibia", phone: "264" },
  { code: "NC", label: "New Caledonia", phone: "687" },
  { code: "NE", label: "Niger", phone: "227" },
  { code: "NG", label: "Nigeria", phone: "234" },
  { code: "NI", label: "Nicaragua", phone: "505" },
  { code: "NL", label: "Netherlands", phone: "31" },
  { code: "NO", label: "Norway", phone: "47" },
  { code: "NP", label: "Nepal", phone: "977" },
  { code: "NR", label: "Nauru", phone: "674" },
  { code: "NU", label: "Niue", phone: "683" },
  { code: "NZ", label: "New Zealand", phone: "64" },
  { code: "OM", label: "Oman", phone: "968" },
  { code: "PA", label: "Panama", phone: "507" },
  { code: "PE", label: "Peru", phone: "51" },
  { code: "PF", label: "French Polynesia", phone: "689" },
  { code: "PG", label: "Papua New Guinea", phone: "675" },
  { code: "PH", label: "Philippines", phone: "63" },
  { code: "PK", label: "Pakistan", phone: "92" },
  { code: "PL", label: "Poland", phone: "48" },
  {
    code: "PM",
    label: "Saint Pierre and Miquelon",
    phone: "508",
  },
  { code: "PN", label: "Pitcairn", phone: "870" },
  {
    code: "PS",
    label: "Palestine, State of",
    phone: "970",
  },
  { code: "PT", label: "Portugal", phone: "351" },
  { code: "PW", label: "Palau", phone: "680" },
  { code: "PY", label: "Paraguay", phone: "595" },
  { code: "QA", label: "Qatar", phone: "974" },
  { code: "RO", label: "Romania", phone: "40" },
  { code: "RS", label: "Serbia", phone: "381" },
  { code: "RW", label: "Rwanda", phone: "250" },
  { code: "SA", label: "Saudi Arabia", phone: "966" },
  { code: "SB", label: "Solomon Islands", phone: "677" },
  { code: "SC", label: "Seychelles", phone: "248" },
  { code: "SD", label: "Sudan", phone: "249" },
  { code: "SE", label: "Sweden", phone: "46" },
  { code: "SG", label: "Singapore", phone: "65" },
  { code: "SH", label: "Saint Helena", phone: "290" },
  { code: "SI", label: "Slovenia", phone: "386" },
  { code: "SK", label: "Slovakia", phone: "421" },
  { code: "SL", label: "Sierra Leone", phone: "232" },
  { code: "SM", label: "San Marino", phone: "378" },
  { code: "SN", label: "Senegal", phone: "221" },
  { code: "SO", label: "Somalia", phone: "252" },
  { code: "SR", label: "Suriname", phone: "597" },
  { code: "SS", label: "South Sudan", phone: "211" },
  {
    code: "ST",
    label: "Sao Tome and Principe",
    phone: "239",
  },
  { code: "SV", label: "El Salvador", phone: "503" },
  {
    code: "SX",
    label: "Sint Maarten (Dutch part)",
    phone: "1-721",
  },
  {
    code: "SY",
    label: "Syrian Arab Republic",
    phone: "963",
  },
  { code: "SZ", label: "Swaziland", phone: "268" },
  {
    code: "TC",
    label: "Turks and Caicos Islands",
    phone: "1-649",
  },
  { code: "TD", label: "Chad", phone: "235" },
  { code: "TG", label: "Togo", phone: "228" },
  { code: "TH", label: "Thailand", phone: "66" },
  { code: "TJ", label: "Tajikistan", phone: "992" },
  { code: "TK", label: "Tokelau", phone: "690" },
  { code: "TL", label: "Timor-Leste", phone: "670" },
  { code: "TM", label: "Turkmenistan", phone: "993" },
  { code: "TN", label: "Tunisia", phone: "216" },
  { code: "TO", label: "Tonga", phone: "676" },
  { code: "TR", label: "Turkey", phone: "90" },
  {
    code: "TT",
    label: "Trinidad and Tobago",
    phone: "1-868",
  },
  { code: "TV", label: "Tuvalu", phone: "688" },
  {
    code: "TW",
    label: "Taiwan",
    phone: "886",
  },
  {
    code: "TZ",
    label: "United Republic of Tanzania",
    phone: "255",
  },
  { code: "UA", label: "Ukraine", phone: "380" },
  { code: "UG", label: "Uganda", phone: "256" },
  {
    code: "US",
    label: "United States",
    phone: "1",
    suggested: true,
  },
  { code: "UY", label: "Uruguay", phone: "598" },
  { code: "UZ", label: "Uzbekistan", phone: "998" },
  {
    code: "VA",
    label: "Holy See (Vatican City State)",
    phone: "379",
  },
  {
    code: "VC",
    label: "Saint Vincent and the Grenadines",
    phone: "1-784",
  },
  { code: "VE", label: "Venezuela", phone: "58" },
  {
    code: "VG",
    label: "British Virgin Islands",
    phone: "1-284",
  },
  {
    code: "VI",
    label: "US Virgin Islands",
    phone: "1-340",
  },
  { code: "VN", label: "Vietnam", phone: "84" },
  { code: "VU", label: "Vanuatu", phone: "678" },
  { code: "WF", label: "Wallis and Futuna", phone: "681" },
  { code: "WS", label: "Samoa", phone: "685" },
  { code: "XK", label: "Kosovo", phone: "383" },
  { code: "YE", label: "Yemen", phone: "967" },
  { code: "YT", label: "Mayotte", phone: "262" },
  { code: "ZA", label: "South Africa", phone: "27" },
  { code: "ZM", label: "Zambia", phone: "260" },
  { code: "ZW", label: "Zimbabwe", phone: "263" },
];

export const statesWithCities = [
  {
    state: "Andhra Pradesh",
    cities: [
      "Visakhapatnam",
      "Vijayawada",
      "Guntur",
      "Tirupati",
      "Nellore",
      "Kurnool",
      "Rajahmundry",
      "Kakinada",
      "Kadapa",
      "Anantapur",
      "Chittoor",
    ],
  },
  {
    state: "Arunachal Pradesh",
    cities: [
      "Itanagar",
      "Naharlagun",
      "Pasighat",
      "Roing",
      "Tezu",
      "Tawang",
      "Bomdila",
      "Ziro",
      "Daporijo",
      "Along",
      "Miao",
    ],
  },
  {
    state: "Assam",
    cities: [
      "Guwahati",
      "Dibrugarh",
      "Jorhat",
      "Silchar",
      "Nagaon",
      "Tinsukia",
      "Tezpur",
      "Bongaigaon",
      "Dhubri",
      "Diphu",
      "Sivasagar",
    ],
  },
  {
    state: "Bihar",
    cities: [
      "Patna",
      "Gaya",
      "Bhagalpur",
      "Muzaffarpur",
      "Nalanda",
      "Bihar Sharif",
      "Darbhanga",
      "Motihari",
      "Chhapra",
      "Arrah",
      "Purnia",
    ],
  },
  {
    state: "Chhattisgarh",
    cities: [
      "Raipur",
      "Bhilai",
      "Durg",
      "Bilaspur",
      "Korba",
      "Raigarh",
      "Jagdalpur",
      "Ambikapur",
      "Rajnandgaon",
      "Dhamtari",
      "Janjgir",
    ],
  },
  {
    state: "Goa",
    cities: [
      "Panaji",
      "Margao",
      "Vasco da Gama",
      "Mapusa",
      "Ponda",
      "Bicholim",
      "Curchorem",
      "Sanguem",
      "Cuncolim",
      "Sanquelim",
      "Valpoi",
    ],
  },
  {
    state: "Gujarat",
    cities: [
      "Ahmedabad",
      "Surat",
      "Vadodara",
      "Rajkot",
      "Bhavnagar",
      "Jamnagar",
      "Junagadh",
      "Gandhinagar",
      "Anand",
      "Navsari",
      "Morbi",
    ],
  },
  {
    state: "Haryana",
    cities: [
      "Faridabad",
      "Gurgaon",
      "Panipat",
      "Ambala",
      "Rohtak",
      "Hisar",
      "Karnal",
      "Sonipat",
      "Yamunanagar",
      "Panchkula",
      "Bhiwani",
    ],
  },
  {
    state: "Himachal Pradesh",
    cities: [
      "Shimla",
      "Mandi",
      "Dharamshala",
      "Solan",
      "Palampur",
      "Kullu",
      "Una",
      "Bilaspur",
      "Chamba",
      "Nahan",
      "Sundarnagar",
    ],
  },
  {
    state: "Jharkhand",
    cities: [
      "Ranchi",
      "Jamshedpur",
      "Dhanbad",
      "Bokaro Steel City",
      "Deoghar",
      "Phusro",
      "Hazaribagh",
      "Giridih",
      "Ramgarh",
      "Medininagar",
      "Chirkunda",
    ],
  },
  {
    state: "Karnataka",
    cities: [
      "Bangalore",
      "Hubballi",
      "Mysuru",
      "Gulbarga",
      "Belgaum",
      "Davanagere",
      "Ballari",
      "Bijapur",
      "Shivamogga",
      "Tumkur",
      "Raichur",
    ],
  },
  {
    state: "Kerala",
    cities: [
      "Thiruvananthapuram",
      "Kochi",
      "Kozhikode",
      "Kollam",
      "Thrissur",
      "Kannur",
      "Kottayam",
      "Alappuzha",
      "Palakkad",
      "Malappuram",
      "Pathanamthitta",
    ],
  },
  {
    state: "Madhya Pradesh",
    cities: [
      "Indore",
      "Bhopal",
      "Jabalpur",
      "Gwalior",
      "Ujjain",
      "Sagar",
      "Dewas",
      "Satna",
      "Ratlam",
      "Rewa",
      "Morena",
    ],
  },
  {
    state: "Maharashtra",
    cities: [
      "Mumbai",
      "Pune",
      "Nagpur",
      "Nashik",
      "Thane",
      "Pimpri-Chinchwad",
      "Kalyan-Dombivli",
      "Vasai-Virar",
      "Aurangabad",
      "Navi Mumbai",
      "Solapur",
    ],
  },
  {
    state: "Manipur",
    cities: [
      "Imphal",
      "Thoubal",
      "Bishnupur",
      "Churachandpur",
      "Kakching",
      "Senapati",
      "Tamenglong",
      "Ukhrul",
      "Jiribam",
      "Kangpokpi",
      "Chandel",
    ],
  },
  {
    state: "Meghalaya",
    cities: [
      "Shillong",
      "Tura",
      "Nongstoin",
      "Jowai",
      "Baghmara",
      "Resubelpara",
      "Williamnagar",
      "Mairang",
      "Nongpoh",
      "Mawlai",
      "Khliehriat",
    ],
  },
  {
    state: "Mizoram",
    cities: [
      "Aizawl",
      "Lunglei",
      "Saiha",
      "Champhai",
      "Kolasib",
      "Serchhip",
      "Lawngtlai",
      "Mamit",
      "Hnahthial",
      "Khawzawl",
      "Saitual",
    ],
  },
  {
    state: "Nagaland",
    cities: [
      "Kohima",
      "Dimapur",
      "Mokokchung",
      "Tuensang",
      "Wokha",
      "Zunheboto",
      "Phek",
      "Mon",
      "Longleng",
      "Kiphire",
      "Peren",
    ],
  },
  {
    state: "Odisha",
    cities: [
      "Bhubaneswar",
      "Cuttack",
      "Rourkela",
      "Berhampur",
      "Sambalpur",
      "Puri",
      "Balasore",
      "Bhadrak",
      "Baripada",
      "Jharsuguda",
      "Bargarh",
    ],
  },
  {
    state: "Punjab",
    cities: [
      "Ludhiana",
      "Amritsar",
      "Jalandhar",
      "Patiala",
      "Bathinda",
      "Hoshiarpur",
      "Mohali",
      "Batala",
      "Pathankot",
      "Moga",
      "Abohar",
    ],
  },
  {
    state: "Rajasthan",
    cities: [
      "Jaipur",
      "Jodhpur",
      "Kota",
      "Bikaner",
      "Ajmer",
      "Udaipur",
      "Bhilwara",
      "Alwar",
      "Bharatpur",
      "Sikar",
      "Pali",
    ],
  },
  {
    state: "Sikkim",
    cities: [
      "Gangtok",
      "Namchi",
      "Gyalshing",
      "Mangan",
      "Jorethang",
      "Rangpo",
      "Singtam",
      "Naya Bazar",
      "Ravangla",
      "Majitar",
      "Soreng",
    ],
  },
  {
    state: "Tamil Nadu",
    cities: [
      "Chennai",
      "Coimbatore",
      "Madurai",
      "Tiruchirapalli",
      "Salem",
      "Tirunelveli",
      "Tirupur",
      "Erode",
      "Vellore",
      "Thoothukudi",
      "Nagercoil",
    ],
  },
  {
    state: "Telangana",
    cities: [
      "Hyderabad",
      "Warangal",
      "Nizamabad",
      "Karimnagar",
      "Ramagundam",
      "Khammam",
      "Mahbubnagar",
      "Nalgonda",
      "Adilabad",
      "Suryapet",
      "Miryalaguda",
    ],
  },
  {
    state: "Tripura",
    cities: [
      "Agartala",
      "Udaipur",
      "Dharmanagar",
      "Kailasahar",
      "Belonia",
      "Ambassa",
      "Khowai",
      "Sonamura",
      "Santirbazar",
      "Kumarghat",
      "Bishalgarh",
    ],
  },
  {
    state: "Uttar Pradesh",
    cities: [
      "Lucknow",
      "Kanpur",
      "Ghaziabad",
      "Agra",
      "Meerut",
      "Varanasi",
      "Allahabad",
      "Bareilly",
      "Aligarh",
      "Moradabad",
      "Saharanpur",
    ],
  },
  {
    state: "Uttarakhand",
    cities: [
      "Dehradun",
      "Haridwar",
      "Roorkee",
      "Haldwani",
      "Kashipur",
      "Rudrapur",
      "Rishikesh",
      "Pithoragarh",
      "Ramnagar",
      "Manglaur",
      "Mussoorie",
    ],
  },
  {
    state: "West Bengal",
    cities: [
      "Kolkata",
      "Howrah",
      "Durgapur",
      "Asansol",
      "Siliguri",
      "Maheshtala",
      "Rajpur Sonarpur",
      "South Dumdum",
      "Bardhaman",
      "Kharagpur",
      "Haldia",
    ],
  },
];

export const tripTypes = [
  { id: 1, title: "Nature Trip" },
  { id: 2, title: "Metropolitan Adventure" },
  { id: 3, title: "Island Escape" },
  { id: 4, title: "Mountain Retreat" },
  { id: 5, title: "Cruise Expedition" },
  { id: 6, title: "Sports Enthusiast Journey" },
  { id: 7, title: "Solo Travel Experience" },
  { id: 8, title: "Desert Safari" },
  { id: 9, title: "Romantic Getaway" },
  { id: 10, title: "Biking Adventure" },
  { id: 11, title: "Spiritual Journey" },
];

export const carsTypes = [
  { id: 1, title: "Sedan" },
  { id: 2, title: "HatchBack" },
  { id: 3, title: "SUVs" },
  { id: 4, title: "MUVs" },
  { id: 5, title: "Mini SUVs" },
  { id: 6, title: "Traveller" },
  { id: 7, title: "Convertible" },
  { id: 8, title: "Sports Car" },
  { id: 9, title: "Wagon" },
  { id: 10, title: "Coupe" },
  { id: 11, title: "Minivan" },
];

export const BOOKING_STATUS = {
  UPCOMING: "UPCOMING",
  ACTIVE: "ACTIVE",
  COMPLETED: "COMPLETED",
};

export const TRIP_STATUS = {
  UPCOMING: "UPCOMING",
  ACTIVE: "ACTIVE",
  COMPLETED: "COMPLETED",
};

export const BANNER_DISCOUNT = [5, 10, 15, 20, 25];
