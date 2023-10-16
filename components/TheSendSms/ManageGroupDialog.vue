<template>
  <InfoBox
      :infoOptions="infoOptions"
      :title="'Guide'"
      class="mb-3"
      v-motion
      :initial="initial"
      :enter="enter"
      :delay="200"
  />
      <ManageGroupTable v-motion :initial="initial" :enter="enter" :delay="200"/>
  <h5 style="margin-top: 50px" class="label" v-motion :initial="initial" :enter="enter" :delay="200">
    Add New Group
  </h5>
  <div class="f-item" v-motion :initial="initial" :enter="enter" :delay="200">
    <label for="fullName">Name</label>
    <input
        type="text"
        placeholder="Name"
        id="Name"
        v-model="manageGroupState.name"
    />
  </div>
  <div class="f-item" v-motion :initial="initial" :enter="enter" :delay="200">
    <label for="Description">Description</label>
    <textarea
        id="Description"
        cols="30"
        rows="10"
        v-model="manageGroupState.description"
        placeholder="Description"
    ></textarea>
  </div>

  <div class="f-item" v-motion :initial="initial" :enter="enter" :delay="200">
    <el-checkbox
        label="Access to subcategory users"
        v-model="manageGroupState.status"
    >Access to subcategory users
    </el-checkbox
    >
    <button @click="createGroups" type="button" class="primary">Add Group</button>
  </div>


  <!--  ===============================================================================================================-->
  <!--  <h5 class="label" v-motion :initial="initial" :enter="enter" :delay="200">-->
  <!--    Merge Group-->
  <!--  </h5>-->

  <!--  <div class="f-item" v-motion :initial="initial" :enter="enter" :delay="200">-->
  <!--    <label for="sourceGroup">Source group</label>-->
  <!--    <el-select-->
  <!--      v-model="manageGroupState.sourceGroup"-->
  <!--      class="select-box"-->
  <!--      placeholder="Source  group"-->
  <!--      size="large"-->
  <!--      id="sourceGroup"-->
  <!--    >-->
  <!--      <el-option-->
  <!--        v-for="sourceGroup in sourceGroups"-->
  <!--        :key="sourceGroup.value"-->
  <!--        :label="sourceGroup.label"-->
  <!--        :value="sourceGroup.value"-->
  <!--      />-->
  <!--    </el-select>-->
  <!--  </div>-->
  <!--  <div class="f-item" v-motion :initial="initial" :enter="enter" :delay="200">-->
  <!--    <label for="sourceGroup">Destinition group</label>-->
  <!--    <el-select-->
  <!--      v-model="manageGroupState.destinitionGroup"-->
  <!--      class="select-box"-->
  <!--      placeholder="Source  group"-->
  <!--      size="large"-->
  <!--      id="sourceGroup"-->
  <!--    >-->
  <!--      <el-option-->
  <!--        v-for="destinition in destinitionGroups"-->
  <!--        :key="destinition.value"-->
  <!--        :label="destinition.label"-->
  <!--        :value="destinition.value"-->
  <!--      />-->
  <!--    </el-select>-->
  <!--  </div>-->
  <!--  <div class="f-item" v-motion :initial="initial" :enter="enter" :delay="200">-->
  <!--    <el-checkbox-->
  <!--      label="Delete the Source group"-->
  <!--      v-model="manageGroupState.access"-->
  <!--      >Delete the Source group</el-checkbox-->
  <!--    >-->
  <!--  </div>-->
  <Alert :title="alert.title" :show="alert.show" :variant="alert.variant" :alertType="alert.alertType"
         :text="alert.text"/>
</template>

<script setup>
import InfoBox from "@/components/TheInfoBox/InfoBox.vue";
import ManageGroupTable from "@/components/TheSendSms/ManageGroupTable.vue";
import {ref} from "vue";
import Alert from "@/components/TheAlert/Alert.vue";

//state

const infoOptions = ref([
  "By deleting a group automatically, only contacts who are members of this group will be deleted, and if a contact is a member of several groups, it will not be deleted.",
  ". If you check the Access to subcategory users box, your phone book will be displayed in the panel of all subusers.",
]);
const manageGroupState = ref({
  name: "",
  status: false,
  sourceGroup: "",
  description: "",
  destinitionGroup: "",
});


const sourceGroups = [
  {
    value: "Group 1",
    label: "Group 1",
  },
  {
    value: "Group 2",
    label: "Group 2",
  },
];
const destinitionGroups = [
  {
    value: "Group 1",
    label: "Group 1",
  },
  {
    value: "Group 2",
    label: "Group 2",
  },
];

//animation variables

const initial = {
  x: -50,
  opacity: 0,
  transition: {
    stiffness: 100,
  },
};
const enter = {
  x: 0,
  opacity: 1,
  transition: {
    stiffness: 100,
    ease: "easeInOut",
  },
};


//new
import {useGContactStore} from "../../store/posibilities";
const router = useRouter();
const gContactStore = useGContactStore();
const alert = ref({
  text: "",
  show: false,
  alertType: "",
  variant: "",
  title: ''
})
const okAlert = () => {
  alert.value.show = true
  alert.value.text = "Done successfully"
  alert.value.title = "Success"
  alert.value.alertType = "success"
  alert.value.variant = "outlined"
  setTimeout(() => {
    alert.value.show = false
    router.go('/posibilities/contact')
  }, 3000);
};
//======================================================================================================================

const errorAlert = () => {
  alert.value.show = true
  alert.value.text = "An error was encountered"
  alert.value.title = "Error"
  alert.value.alertType = "error"
  alert.value.variant = "outlined"
  setTimeout(() => {
    alert.value.show = false
  }, 3000);
};

const createGroups = async () => {
  const result = await gContactStore.createGContact(manageGroupState.value)
  if (result.status === 201) {
    okAlert()
  } else {
    errorAlert()
  }
}
</script>
