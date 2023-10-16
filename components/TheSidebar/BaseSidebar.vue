<template>
  <div class="tac base-sidebar row" :class="isCollapsed ? 'open' : 'close'">
    <div class="w-100 col-12 wrapper">
      <h5 class="mb-2 header d-flex justify-content-between">
        <img src="@/assets/images/Logo.svg" alt=""/><span
          @click="handleCollapse"
      >
          <Icon name="arrow-left-bg"
          /></span>
      </h5>
      <el-menu
          default-active="1"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          --active-color="#c4c4c4"
      >
        <div v-for="(menuItem, index) in menuItems" :key="index">
          <el-sub-menu
              :index="index + 1 + ''"
              v-if="menuItem.children.length"
              :expand-open-icon="ArrowDown"
              :expand-close-icon="ArrowRight"
          >
            <template #title>
              <span @click="routeChange(menuItem)" :key="counter">
                <Icon :name="menuItem.icon"/>
                <span>{{ menuItem.title }}</span>
              </span>
            </template>
            <el-menu-item-group>
              <NuxtLink
                  :to="subMenuItem.route"
                  v-for="(subMenuItem, subMenuIndex) in menuItem.children"
                  :key="subMenuIndex"
              >
                <el-menu-item
                    :index="index + 1 + ' - ' + (subMenuIndex + 1)"
                    class="ferr"
                ><span class="circle"></span>{{ subMenuItem.title }}
                </el-menu-item>
              </NuxtLink>
            </el-menu-item-group>
          </el-sub-menu>
          <el-menu-item
              :index="index + 1 + ''"
              v-if="!menuItem.children.length"
              class="far"
          >
            <Icon :name="menuItem.icon"/>
            <span>{{ menuItem.title }}</span>
          </el-menu-item>
        </div>

        <el-menu-item>
          <Icon name="exit"/>
          <span>Log Out</span>
        </el-menu-item>
      </el-menu>
    </div>
  </div>
</template>

<script setup>
import {ref} from "vue";

//import icons

import Icon from "@/components/TheIcon/Icon.vue";
import ArrowRight from "@/components/TheIcon/single-icons/ArrowRight.vue";
import ArrowDown from "@/components/TheIcon/single-icons/ArrowDown.vue";

//state

const isCollapsed = useSidebar();
const menuItems = ref([
  {
    title: "Users",
    route: "/",
    icon: "category",
    children: [
      {
        title: "Users",
        route: "/users/users",
      },
      {
        title: "Employees",
        route: "/users/employees",
      },
    ],
  },
  {
    title: "Send",
    route: "/",
    icon: "send",
    children: [
      {
        title: "Send SMS",
        route: "/send/send-sms",
      },
      {
        title: "Send Correspondence",
        route: "/send/send-correspondence",
      },
      {
        title: "Corresponding to Time",
        route: "/send/corresponding-to-time",
      },
      {
        title: "Smart Send",
        route: "/send/smart-send",
      },
      {
        title: "Bulk Shipping",
        route: "/send/bulk-shipping",
      },
      {
        title: "Smart Timer",
        route: "/send/smart-timer",
      },
      {
        title: "Send Timer",
        route: "/send/send-timer",
      },
      {
        title: "Occasional Send",
        route: "/send/occasional-send",
      },
      {
        title: "Gradual Send",
        route: "/send/gradual-send",
      },
    ],
  },
  {
    title: "Special Send",
    route: "/",
    icon: "special-send",

    children: [
      {
        title: "SMS Due",
        route: "/special-send/send-due",
      },
      {
        title: "Send From Mobile",
        route: "/special-send/send-from-mobile",
      },
      {
        title: "Timer Reminder",
        route: "/special-send/time-reminder",
      },
    ],
  },
  {
    title: "Messages",
    route: "/",
    icon: "message",
    children: [
      {
        title: "Recive",
        route: "/messages/recive",
      },
    ],
  },
  {
    title: "Possibilities",
    route: "/posibilities",
    icon: "posibilities",
    children: [
      {
        title: "Contact",
        route: "/posibilities/contact",
      },
      {
        title: "Login Control",
        route: "/posibilities/login-control",
      },

      {
        title: "Polls and contests",
        route: "/posibilities/pools-and-contests",
      },
      {
        title: "Advanced survey",
        route: "/posibilities/advanced-surveys",
      },
      {
        title: "Code Reader",
        route: "/posibilities/code-reader",
      },
      {
        title: "Add to list",
        route: "/posibilities/add-to-list",
      },
      {
        title: "Leave",
        route: "/posibilities/leave",
      },
    ],
  },
  {
    title: "Magic Tools",
    route: "/",
    icon: "magic-pen",
    children: [
      {
        title: "Catalog Email",
        route: "/magic-tools/catalog-email",
      },
      {
        title: "SMS transfer",
        route: "/magic-tools/sms-transfer",
      },
      {
        title: "SMS filter",
        route: "/magic-tools/sms-filter",
      },
      {
        title: "Scoring",
        route: "/magic-tools/scoring",
      },
      {
        title: "SMS Email",
        route: "/magic-tools/sms-email",
      },
      {
        title: "Special list",
        route: "/magic-tools/special-list",
      },
      {
        title: "SMS secretary",
        route: "/magic-tools/sms-secretary",
      },
      {
        title: "Smart secretary",
        route: "/magic-tools/smart-secretary",
      },
      {
        title: "Autoresponder",
        route: "/magic-tools/autoresponder",
      },
    ],
  },
  {
    title: "Services",
    route: "/",
    icon: "category",
    children: [
      {
        title: "Competition",
        route: "/services/competition",
      },
      {
        title: "Coding",
        route: "/services/coding",
      },
      {
        title: "Customer's Voice",
        route: "/services/customer-voice",
      },
      {
        title: "Turn Ratings",
        route: "/services/turn-ratings",
      },

      //old
      // {
      //   title: "Numbering",
      //   route: "/services/numbering",
      // },

      //new
      {
        title: "Numbering",
        route: "/services/numbers",
      },
    ],
  },
  {
    title: "Support ",
    route: "/",
    icon: "headphone",
    children: [],
  },
  {
    title: "Settings ",
    route: "/settings",
    icon: "gear",
    children: [
      {
        title: "Settings",
        route: "/settings",
      },
      {
        title: "Keyword",
        route: "/settings/keywords",
      },
      {
        title: "My Numbers",
        route: "/settings/my-numbers",
      },
      {
        title: "Fast Texts",
        route: "/settings/fast-texts",
      },
      {
        title: "Remote Control",
        route: "/settings/remote-control",
      },
      {
        title: "Change Password",
        route: "/settings/change-password",
      },
      {
        title: "Invitation to Cooperate",
        route: "/settings/invitation-to-cooperate",
      },
    ],
  },
  {
    title: "Financial ",
    route: "/",
    icon: "dollar",
    children: [
      {
        title: "View tariff",
        route: "/financial/tariff",
      },
      {
        title: "Financial transactions",
        route: "/financial/transactions",
      },
      {
        title: "Number of Charges",
        route: "/financial/numberofCharges",
      },
      {
        title: "Payments",
        route: "/financial/payments",
      },
      {
        title: "Online Recharge",
        route: "/financial/onlinerecharge",
      },
    ],
  },
  {
    title: "Reports ",
    route: "/",
    icon: "chart",
    children: [
      {
        title: "Mobile Report",
        route: "/reports/mobile-report",
      },
      {
        title: "Graphic Report",
        route: "/reports/graphic-report",
      },
      {
        title: "SMS Report",
        route: "/reports/sms-report",
      },
      {
        title: "Transactions Report",
        route: "/reports/transactions",
      },
      {
        title: "Function",
        route: "/reports/function",
      },
    ],
  },
  {
    title: "Extensions ",
    route: "/extentions",
    icon: "puzzle",
    children: [
      {
        title: "Wordpress",
        route: "/extentions/wordpress",
      },
    ],
  },
  {
    title: "Laboratory ",
    route: "/",
    icon: "labratory",
    children: [
      {
        title: "Password Recovery",
        route: "/labratory/password-recovery",
      },
      {
        title: "Contacts Form",
        route: "/labratory/contacts-form",
      },
      {
        title: "Receive Web Service",
        route: "/labratory/recive-web-service",
      },
      {
        title: "Send Web Service",
        route: "/labratory/send-web-service",
      },
      {
        title: "Online Registration",
        route: "/labratory/online-registration",
      },
      {
        title: "Login Fourm",
        route: "/labratory/login-fourm",
      },
    ],
  },
]);
const counter = ref(0);

//methods

const handleCollapse = () => {
  isCollapsed.value = !isCollapsed.value;
};
const handleOpen = (key, keyPath) => {
  menuItems.value[key - 1].icon += "-blue";
  counter.value++;
};
const handleClose = (key, keyPath) => {
  menuItems.value[key - 1].icon = menuItems.value[key - 1].icon.replace(
      "-blue",
      ""
  );
  counter.value++;
};
</script>
