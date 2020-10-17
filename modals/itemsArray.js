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