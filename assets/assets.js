import user_image from "./user-image.png";
import code_icon from "./code-icon.png";
import code_icon_dark from "./code-icon-dark.png";
import edu_icon from "./edu-icon.png";
import edu_icon_dark from "./edu-icon-dark.png";
import project_icon from "./project-icon.png";
import project_icon_dark from "./project-icon-dark.png";
import vscode from "./vscode.png";
import firebase from "./firebase.png";
import figma from "./figma.png";
import git from "./git.png";
import mongodb from "./mongodb.png";
import right_arrow_white from "./right-arrow-white.png";
import logo from "./logo.png";
import logo_new from "./logo_new.png";
import logo_dark from "./logo_dark.png";
import mail_icon from "./mail_icon.png";
import mail_icon_dark from "./mail_icon_dark.png";
import profile_img from "./profile-img.png";
import download_icon from "./download-icon.png";
import hand_icon from "./hand-icon.png";
import header_bg_color from "./header-bg-color.png";
import moon_icon from "./moon_icon.png";
import sun_icon from "./sun_icon.png";
import arrow_icon from "./arrow-icon.png";
import arrow_icon_dark from "./arrow-icon-dark.png";
import menu_black from "./menu-black.png";
import menu_white from "./menu-white.png";
import close_black from "./close-black.png";
import close_white from "./close-white.png";
import web_icon from "./web-icon.png";
import mobile_icon from "./mobile-icon.png";
import ui_icon from "./ui-icon.png";
import graphics_icon from "./graphics-icon.png";
import right_arrow from "./right-arrow.png";
import send_icon from "./send-icon.png";
import right_arrow_bold from "./right-arrow-bold.png";
import right_arrow_bold_dark from "./right-arrow-bold-dark.png";
import python_icon from "./Python.png";
import sql_icon from "./MySql.png";
import excel_icon from "./Excel.png";
import html_icon from "./Html.png";
import css_icon from "./Css.png";
import js_icon from "./Js.png";
import dbt_icon from "./Dbt.png";
import tableau_icon from "./Tableau.png";
import powerbi_icon from "./PowerBI.png";
import profile_new from "./profile_img_new.jpeg";
import coursera_logo from "./Coursera-Logo.png";
import powerbi300_logo from "./PL-300.png";
import sqlhackerrank_logo from "./sql-hackerrank.jpg";
export const assets = {
  user_image,
  code_icon,
  code_icon_dark,
  edu_icon,
  edu_icon_dark,
  project_icon,
  project_icon_dark,
  vscode,
  firebase,
  figma,
  git,
  mongodb,
  python_icon,
  sql_icon,
  excel_icon,
  dbt_icon,
  powerbi_icon,
  tableau_icon,
  html_icon,
  css_icon,
  js_icon,
  right_arrow_white,
  logo,
  logo_new,
  logo_dark,
  mail_icon,
  mail_icon_dark,
  profile_img,
  profile_new,
  download_icon,
  hand_icon,
  header_bg_color,
  moon_icon,
  sun_icon,
  arrow_icon,
  arrow_icon_dark,
  menu_black,
  menu_white,
  close_black,
  close_white,
  web_icon,
  mobile_icon,
  ui_icon,
  graphics_icon,
  right_arrow,
  send_icon,
  right_arrow_bold,
  right_arrow_bold_dark,
  coursera_logo,
  powerbi300_logo,
  sqlhackerrank_logo,
};

export const projects = [
  {
    slug: "https://github.com/BaoMinhHuynh/Australia-Crashes-Data-warehouse",
    title: "Fatal Crash Analysis",
    subtitle: "Data Transform Project",
    description:
      "This project analyzes fatal crash data to identify patterns and trends in road safety.",
    image: "/fatal-crash.jpg",
    tags: ["SQL", "Google Bigquery", "Dbt", "Power BI"],
  },
  {
    slug: "supply-chain-sales-analysis",
    title: "Supply Chain & Sales Analysis",
    subtitle: "Data Analysis Project",
    description:
      "This project focuses on analyzing supply chain and sales data to improve sales strategies.",
    image: "/supply-chain.jpg",
    tags: ["Python", "Power BI"],
  },
  {
    slug: "https://github.com/BaoMinhHuynh/Telecom-project",
    title: "Telecom Customer Churn Analysis",
    subtitle: "Data Analysis Project",
    description:
      "This project analyzes telecom customer data to identify factors contributing to customer churn.",
    image: "/telecom.jpg",
    tags: ["Python", "Excel", "Taleau"],
  },
  {
    slug: "https://github.com/BaoMinhHuynh/Hate-Speech-Detection",
    title: "Hate Speech Detection",
    subtitle: "Machine Learning Project",
    description:
      "This project uses machine learning to detect hate speech in comment on social media.",
    image: "/social-media.jpg",
    tags: ["Python"],
  },
];

export const infoList = [
  {
    icon: assets.code_icon,
    iconDark: assets.code_icon_dark,
    title: "Languages",
    description: "Python, SQL, Excel, HTML, CSS, JS",
  },
  {
    icon: assets.edu_icon,
    iconDark: assets.edu_icon_dark,
    title: "Education",
    description: "UIT in Information Technology",
  },
  {
    icon: assets.project_icon,
    iconDark: assets.project_icon_dark,
    title: "Projects",
    description: "Built more than 4 projects",
  },
];

export const toolsData = [
  { title: "Python", img: assets.python_icon },
  { title: "SQL", img: assets.sql_icon },
  { title: "Excel", img: assets.excel_icon },
  { title: "dbt", img: assets.dbt_icon },
  { title: "Tableau", img: assets.tableau_icon },
  { title: "Power BI", img: assets.powerbi_icon },
  { title: "HTML", img: assets.html_icon },
  { title: "CSS", img: assets.css_icon },
  { title: "JavaScript", img: assets.js_icon },
  { title: "VS Code", img: assets.vscode },
  { title: "Figma", img: assets.figma },
  { title: "Git", img: assets.git },
];

export const certList = [
  {
    logo: assets.powerbi300_logo,
    title: "PL-300 Microsoft Power BI Data Analyst Associate",
    issuer: "Microsoft",
    credentialUrl:
      "https://learn.microsoft.com/api/credentials/share/en-gb/HuynhBaoMinh-5986/D41D823071DA1113?sharingId=7DA4A1B929BC7A4E",
  },
  {
    logo: assets.coursera_logo,
    title: "Basic Statistics Certificate",
    issuer: "Coursera",
    credentialUrl:
      "https://coursera.org/share/38c6664301e7f82b4802b3744423d09d",
  },
  {
    logo: assets.coursera_logo,
    title: "Unilever Supply Chain Data Analyst",
    issuer: "Coursera",
    credentialUrl:
      "https://coursera.org/share/f2b6195f4392157861e4229809d7eb43",
  },
  {
    logo: assets.sqlhackerrank_logo,
    title: "HackerRank SQL: Advanced Certificate ",
    issuer: "HackerRank",
    credentialUrl: "https://www.hackerrank.com/certificates/6290f76f7821",
  },
];
