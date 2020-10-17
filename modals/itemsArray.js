import React from "react"
import {
  FontAwesome5,
  FontAwesome,
  AntDesign,
  Fontisto,
} from "@expo/vector-icons";

export const icons=[
  {
    title:"monthly" ,
    icon: <FontAwesome5 name="calendar-alt" size={45} color="black" /> ,
    color:"blue"

  },
   {
     title:"importance",
     icon:<FontAwesome name="exclamation" size={45} color="black" />,
     color:"white"
   },
  {
    title:"necessary",
    icon:<AntDesign name="pushpin" size={45} color="black" />,
    color:"white"
  },
  {
    title:"price",
    icon:<Fontisto name="wallet" size={45} color="black" />,
    color:"white"
  }
]

export const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

export const important = ["high", " average","low"];
export const necessary = ["yes", "maybe"," no"];
export const price = ["Highest to Lowest", "Lowest to highest "];

export const position = [
  0,
  0,
  110.18181610107422,
  226.5454559326172 ,
  347.2727355957031,
  466.5454406738281,
  583.6363525390625,
  682.1818237304688,
  818.5454711914062,
  934.5454711914062,
  1047.272705078125,
  1047.272705078125,
];