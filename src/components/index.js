import affix from "./affix/affix";
import alert from "./alert/alert";
import anchor from "./anchor/anchor";
import backTop from './back-top/back-top';
import badge from "./badge/badge";
import breadcrumb from "./breadcrumb/breadcrumb";
import button from "./button/button";
import card from "./card/card";
import carousel from "./carousel/carousel";
import carouselItem from './carousel/carousel-item';
import checkbox from "./checkbox/checkbox";
import checkboxGroup from './checkbox/checkbox-group';
import collapse from "./collapse/collapse";
import collapseItem from './collapse/collapse-item';
import datePicker from './date-picker/date-picker';
import dialog from "./dialog/dialog";
import drawer from "./drawer/drawer";
import dropdown from "./dropdown/dropdown";
//grid 空着
import icon from "./icon/icon";
import input from "./input/input";
import inputNumber from './input-number/input-number';
import layout from "./layout/layout";
import loadingBar from './loading-bar';
import menu from "./menu/menu";
import menuItem from './menu/menu-item';
import menuGroup from './menu/menu-group';
import message from "./message/message";
import notification from "./notification/notification";
import pager from "./pager/pager";
import popover from "./popover/popover";
import progress from "./progress/progress";
import radio from "./radio/radio";
import rate from "./rate/rate";
import select from "./select/select";
import slider from "./slider/slider";
import steps from "./steps/steps";
import step from "./steps/step";
import Switch from './switch/switch';
import table from "./table/table";
import tabs from "./tabs/tabs";
import tag from "../styles/tag";
import tooltip from "./tooltip/tooltip";
import transfer from "./transfer/transfer";
import tree from "./tree/tree";
import upload from "./upload/upload";

const mine = [
  affix,
  alert,
  anchor,
  backTop,
  badge,
  breadcrumb,
  button,
  card,
  carousel,
  carouselItem,
  checkbox,
  checkboxGroup,
  collapse,
  collapseItem,
  datePicker,
  dialog,
  drawer,
  dropdown,
  icon,
  input,
  inputNumber,
  layout,
  loadingBar,
  menu,
  menuItem,
  menuGroup,
  message,
  notification,
  pager,
  popover,
  progress,
  radio,
  rate,
  select,
  slider,
  steps,
  step,
  Switch,
  table,
  tabs,
  tag,
  tooltip,
  transfer,
  tree,
  upload
];
const install = function (Vue, opts = {}) {
  Object.keys(mine).forEach((key => {
    Vue.component(mine[key].name, mine[key]);
  }))
}