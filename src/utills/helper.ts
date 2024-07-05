import { colors } from "@mui/material";
import * as yup from "yup";

export const loginSchema = yup
  .object()
  .shape({
    email: yup
      .string()
      .email("Please enter a valid email!")
      .required("Email cannot be empty!"),
    password: yup
      .string()
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
        "Password must be strong!"
      )
      .required("Please enter a valid password!"),
  })
  .required();

export const isFunction = (fn: Function) => {
  if (typeof fn === "function") {
    return true;
  }
  return false;
};

export const convertToGraphData = (data: any) => {
  return [
    {
      id: "Trips",
      color: colors.red[100],
      data: data?.map((item: any) => {
        return { x: item.month, y: item.tripRevenue };
      }),
    },
    {
      id: "Cars",
      color: colors.blue[100],
      data: data?.map((item: any) => {
        return { x: item.month, y: item.carRevenue };
      }),
    },
  ];
};

export const isImage = (type: string) => {
  return type === ".png" || type === ".jpg" || type === ".jpeg";
};

export const isImageType = (type: string) => {
  return type === "image/jpeg" || type === "image/png" || type === "image/jpg";
};

export const toCapitalCase = (string:String) => {
  return string ? string.charAt(0).toUpperCase() + string.slice(1) : '';
};


export const stringSorting = (valueA:string,valueB:string,order:string) =>{
  if (order === "asc") {
    if (valueA < valueB) {
      return -1;
    } else if (valueA > valueB) {
      return 1;
    }
    return 0;
  } else {
    if (valueA > valueB) {
      return -1;
    } else if (valueA < valueB) {
      return 1;
    }
    return 0;
  }
}


export const  capitalizeFirstLetterInLine = (line:string)=> {
    const words = line.split(' ');

    const capitalizedWords = words.map(word => {
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    });

    return capitalizedWords.join(' ');
}


export const formatIndianCurrencyWithSymbol = (number:number | string) => {
  const hasDecimal = Number(number) % 1 !== 0;
  const formattedNumber = Number(number).toLocaleString('en-IN', {
    style: 'currency',
    currency: 'INR',
    minimumFractionDigits: hasDecimal ? 2 : 0,
    maximumFractionDigits: 2,
  });
  return formattedNumber;
};
