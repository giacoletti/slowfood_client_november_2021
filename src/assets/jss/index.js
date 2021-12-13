const containerFluid = {
  paddingRight: "15px",
  paddingLeft: "15px",
  marginRight: "auto",
  marginLeft: "auto",
  width: "100%",
};

const container = {
  ...containerFluid,
  "@media (min-width: 576px)": {
    maxWidth: "540px",
  },
  "@media (min-width: 768px)": {
    maxWidth: "720px",
  },
  "@media (min-width: 992px)": {
    maxWidth: "960px",
  },
  "@media (min-width: 1200px)": {
    maxWidth: "1140px",
  },
};

const drawerWidth = 260;

const transition = {
  transition: "all 0.33s cubic-bezier(0.685, 0.0473, 0.346, 1)",
};

const boxShadow = {
  boxShadow:
    "0 10px 30px -12px rgba(0, 0, 0, 0.42), 0 4px 25px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)",
};

const defaultFont = {
  fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  fontWeight: "300",
  lineHeight: "1.5em",
};

const primaryColor = "#9c27b0";
const successColor = "#4caf50";
const infoColor = "#00acc1";
const warningColor = "#ff9800";
const dangerColor = "#f44336";
const roseColor = "#e91e63";

export {
  container,
  containerFluid,
  transition,
  boxShadow,
  defaultFont,
  primaryColor,
  successColor,
  infoColor,
  warningColor,
  dangerColor,
  roseColor,
  drawerWidth
};