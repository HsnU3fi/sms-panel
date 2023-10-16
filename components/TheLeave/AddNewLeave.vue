<template>
  <form>
    <div class="form-item">
      <label class="d-flex align-items-center justify-content-between"
        >Tittle
      </label>
      <input type="text" placeholder="Tittle " v-model="state.title" />
    </div>
    <div class="form-item">
      <label for="Sender">Sender</label>
      <el-select
        v-model="state.sender"
        class="select-box"
        placeholder="Sender"
        size="large"
        id="sender"
      >
        <el-option
          v-for="sender in senderOptions"
          :key="sender.value"
          :label="sender.label"
          :value="sender.value"
        />
      </el-select>
    </div>
    <div class="form-item">
      <label for="Reciver">Reciver</label>
      <el-select
        v-model="state.reciver"
        class="select-box"
        placeholder="Reciver"
        size="large"
        id="Reciver"
      >
        <el-option
          v-for="reciver in reciverOptions"
          :key="reciver.value"
          :label="reciver.label"
          :value="reciver.value"
        />
      </el-select>
    </div>
    <div class="form-item">
      <label for="Type">Type</label>
      <el-select
        v-model="state.type"
        class="select-box"
        placeholder="Type"
        size="large"
        id="Type"
      >
        <el-option
          v-for="type in typeOptions"
          :key="type.value"
          :label="type.label"
          :value="type.value"
        />
      </el-select>
    </div>
    <div class="form-item">
      <label class="d-flex align-items-center justify-content-between"
        >Keyword
      </label>
      <input type="text" placeholder="Keyword " v-model="state.keyword" />
    </div>
    <div class="form-item">
      <label for="Separator">Separator</label>
      <el-select
        v-model="state.separator"
        class="select-box"
        placeholder="Separator"
        size="large"
        id="Separator"
      >
        <el-option
          v-for="separator in separatorOptions"
          :key="separator.value"
          :label="separator.label"
          :value="separator.value"
        />
      </el-select>
      <label for="" class="mt-2">Example: (vac@start date@end date)</label>
    </div>
    <div class="form-item">
      <label for="Maximum leave (Day)">Maximum leave (Day)</label>
      <el-select
        v-model="state.maxDayLeave"
        class="select-box"
        placeholder="Maximum leave (Day)"
        size="large"
        id="Type"
      >
        <el-option
          v-for="type in typeOptions"
          :key="type.value"
          :label="type.label"
          :value="type.value"
        />
      </el-select>
    </div>
    <div class="form-item">
      <label for=" Maximum Year leave (Day)"> Maximum Year leave (Day)</label>
      <el-select
        v-model="state.maxYearLeave"
        class="select-box"
        placeholder=" Maximum Year leave (Day)"
        size="large"
        id="Type"
      >
        <el-option
          v-for="type in typeOptions"
          :key="type.value"
          :label="type.label"
          :value="type.value"
        />
      </el-select>
    </div>
    <div class="form-item">
      <label for="  Maximum Month leave (Day)">
        Maximum Month leave (Day)</label
      >
      <el-select
        v-model="state.maxMonthLeave"
        class="select-box"
        placeholder="  Maximum Month leave (Day)"
        size="large"
        id="Type"
      >
        <el-option
          v-for="type in typeOptions"
          :key="type.value"
          :label="type.label"
          :value="type.value"
        />
      </el-select>
    </div>

    <h4 class="label">Response settings</h4>
    <div class="form-item">
      <label>Wrong keyword </label>
      <textarea
        placeholder="Wrong keyword "
        rows="8"
        v-model="state.wrongKeyword"
      ></textarea>
    </div>
    <div class="form-item">
      <label>Minimum application time </label>
      <textarea
        placeholder="Minimum application time "
        rows="8"
        v-model="state.minAppTime"
      ></textarea>
    </div>
    <div class="form-item">
      <label>Excessive leave </label>
      <textarea
        placeholder="Excessive leave "
        rows="8"
        v-model="state.excessiveTime"
      ></textarea>
    </div>
    <div class="form-item">
      <label>Awaiting the manager's approval </label>
      <textarea
        placeholder="Awaiting the manager's approval "
        rows="8"
        v-model="state.managerApproval"
      ></textarea>
    </div>

    <h4 class="label">Mobile verification settings</h4>
    <div class="form-item">
      <label>Phone numbers </label>
      <textarea
        placeholder="Phone numbers "
        rows="8"
        v-model="state.phoneNumbers"
      ></textarea>
    </div>

    <h4 class="label">Contct Group</h4>
    <div class="form-item">
      <el-checkbox-group v-model="state.checkbox">
        <el-checkbox
          v-for="(item, index) in checkboxGroup"
          :key="index"
          :label="item"
          >{{ item }}</el-checkbox
        >
      </el-checkbox-group>
    </div>
  </form>
</template>

<script setup>
import Icon from "@/components/TheIcon/Icon.vue";
import CalendarBlue from "@/components/TheIcon/single-icons/CalendarBlue.vue";
import ClockBlue from "@/components/TheIcon/single-icons/ClockBlue.vue";

//state

const state = ref({
  title: "",
  reciver: "",
  sender: "",
  type: "",
  keyword: "",
  maxDayLeave: "",
  maxYearLeave: "",
  maxMonthLeave: "",
  wrongKeyword: "",
  minAppTime: "",
  excessiveTime: "",
  managerApproval: "",
  phoneNumbers: "",
  sms: "",
});
const reciverOptions = [
  {
    value: "+19584753",
    label: "+19584753",
  },
  {
    value: "+19584753",
    label: "+19584753",
  },
  {
    value: "+19584753",
    label: "+19584753",
  },
];
const senderOptions = [
  {
    value: "+19584753",
    label: "+19584753",
  },
  {
    value: "+19584753",
    label: "+19584753",
  },
  {
    value: "+19584753",
    label: "+19584753",
  },
];
const typeOptions = [
  {
    value: "Daily",
    label: "Daily",
  },
  {
    value: "Weakly",
    label: "Weakly",
  },
  {
    value: "Monthly",
    label: "Monthly",
  },
  {
    value: "Yearly",
    label: "Yearly",
  },
];
const separatorOptions = [
  {
    value: "@",
    label: "@",
  },
  {
    value: "_",
    label: "_",
  },
  {
    value: ",",
    label: ",",
  },
  {
    value: "-",
    label: "-",
  },
];
const checkboxGroup = ["N1 Group Name", "N2 Group Name"];
</script>

<style>
</style>