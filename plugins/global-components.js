import Vue from "vue";
import Nav from "@/components/global/nav";
import Logo from "@/components/global/logo";
import MainButton from "@/components/global/button";
import MainInput from "@/components/global/input";

const components = {
  Nav,
  Logo,
  MainButton,
  MainInput
};

Object.entries(components).forEach(([name, component]) => {
  Vue.component(name, component);
});
