import { createGlobalStyle } from "styled-components";
import { colors } from "../constants/colors";

export default createGlobalStyle`

@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap");

body {
  margin: 0;
}

h1,
h2,
h3,
h4,
p,
a,
button {
  margin: 0;
  font-family: "Poppins";
}

a {
  color: #000;
  text-decoration: none;
}

button .gm-ui-hover-effect {
  margin: 5px !important;
}

textarea::placeholder {
  color: #aab5be;
  padding-bottom: 10px;
}

hr {
  display: block;
  height: 1px;
  border: 0;
  border-top: 1px solid #ccc;
  margin: 1em 0;
  padding: 0;
}

// Accordion
.css-9gjnh6-MuiPaper-root-MuiAccordion-root {
  box-shadow: none;
}

.css-haq6mo-MuiButtonBase-root-MuiAccordionSummary-root, .css-o4b71y-MuiAccordionSummary-content.Mui-expanded {
  margin: 0;
  padding: 0;
}

.css-9gjnh6-MuiPaper-root-MuiAccordion-root:before {
  position: initial;
}

.css-9gjnh6-MuiPaper-root-MuiAccordion-root.Mui-expanded {
  margin: 5px 0 10px;
}

.css-haq6mo-MuiButtonBase-root-MuiAccordionSummary-root {
  min-height: 0px;
} 

.css-haq6mo-MuiButtonBase-root-MuiAccordionSummary-root.Mui-expanded {
  min-height: 0px;
}

.css-o4b71y-MuiAccordionSummary-content {
  margin: 0;
}

.css-15v22id-MuiAccordionDetails-root {
  padding: 0;
}

// Calendar
.react-calendar {
  border: none !important;
  background-color: transparent !important;
}
.react-calendar button {
  padding: 12px !important;
  margin: 3px !important;
  border: 2px solid ${colors.mistyDay};
  color: ${colors.navy};
  /* background: ${colors.lavender}; */
  @media screen and (max-width: 767px) {
    padding: 12px !important;
  }
}
.react-calendar__navigation button {
  border: none !important;
  background-color: transparent;
  padding: 0 !important;
}
.react-calendar__month-view__weekdays__weekday {
  color: #161721;
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 18px;
}
.react-calendar__month-view__weekdays__weekday > abbr {
  text-decoration: none;
}
.react-calendar__navigation__next2-button,
.react-calendar__navigation__prev2-button {
  display: none;
}
.react-calendar__navigation__label__labelText {
  font-family: Poppins, sans-serif;
  font-weight: 600;
  font-size: 22px !important;
  margin: 0;
  @media screen and (max-width: 767px) {
    padding-left: 18px !important;
  }
}
.react-calendar__month-view__days__day {
  font-family: "Montserrat";
  font-weight: 400;
  font-size: 18.9px;
}
.react-calendar__navigation {
  position: relative;
  margin-bottom: 30px;
  /* display: none; */
}
.react-calendar__navigation button:enabled:hover {
  background-color: transparent;
}
.react-calendar__navigation__label {
  position: absolute;
  top: 23px;
  font-size: 22px;
  font-family: "Montserrat";
  font-weight: 700;
}
.react-calendar__navigation__prev-button {
  position: absolute;
  right: 42px;
  top: 21px;
  font-size: 22.5px !important;
}
.react-calendar__navigation__next-button {
  position: absolute;
  right: 0;
  top: 21px;
  font-size: 22.5px !important;
}
input[type="date"]::-webkit-inner-spin-button,
input[type="date"]::-webkit-calendar-picker-indicator {
  display: none;
  -webkit-appearance: none;
}
.react-calendar__tile {
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 21px;
  border-radius: 50px;
  background: #fff;
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 767px) {
    width: 50px;
    height: 46px;
  }
}
.react-calendar__tile:enabled:hover {
  background-color: ${colors.white};
}
.react-calendar__tile .selected {
  background-color: ${colors.brightBlue};
}

react-calendar__tile--active {
  background-color: ${colors.brightBlue};
  color: white;
  font-weight: 600;
}
.react-calendar__month-view__days__day--weekend {
  color: ${colors.black};
}
.react-calendar__tile:disabled {
  background-color: transparent;
  color: #cccdcc !important;
}
:focus-visible {
  outline: none;
}
::-webkit-scrollbar {
  width: 5px;
}
::-webkit-scrollbar-track {
  background-color: transparent;
}
::-webkit-scrollbar-thumb {
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
}
.react-date-picker {
  background: #f4f4f4;
}
.react-date-picker__wrapper {
  border: none;
}
.react-date-picker__inputGroup {
  padding: 20px;
  font-family: "Montserrat";
}
.react-calendar__tile--active {
  background: ${colors.brightBlue} !important;
  color: white !important;
}
.react-date-picker__clear-button {
  display: none;
}
.react-calendar__navigation__arrow {
  font-size: 30px;
}
.react-calendar__navigation button:disabled {
  background: none;
  color: black;
}
.react-calendar__navigation button:enabled:hover,
.react-calendar__navigation button:enabled:focus {
  background: none;
}
.date_without_slot {
  background: transparent !important;
  color: #727f88 !important;
  cursor: default;
  pointer-events: none;
}
`;
