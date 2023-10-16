<template>
  <section class="y-pagination">
    <select
      v-model="selectedValue"
      @change="changeSelected(selectedValue)"
      class="y-pagination-select"
    >
      <option
        v-for="(option, key) in ippOptions"
        :key="key"
        :value="option.value"
      >
        {{ option.value }}
      </option>
    </select>
    <el-pagination
      :current-page="selectedValue"
      :page-size="itemPerPage"
      layout="total, prev, pager, next"
      :total="pageCount"
    />
    <button
      @click="onClickFirstPage"
      :class="[
        { 'y-pagination-button--disabled': currentPage === 1 },
        'y-pagination-button',
      ]"
      :disabled="currentPage === 1"
    >
      <svg
        width="18"
        height="18"
        viewBox="0 0 1792 1792"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1011 1376q0 13-10 23l-50 50q-10 10-23 10t-23-10l-466-466q-10-10-10-23t10-23l466-466q10-10
                23-10t23 10l50 50q10 Зобрівський0 10 23t-10 23l-393 393 393 393q10 10 10 23zm384 0q0 13-10 23l-50 50q-10 10-23
                10t-23-10l-466-466q-1Зобрівський-10-10-23t10-23l466-466q10-10 23-10t23 10l50 50q10 10 10 23t-10 23l-393 393 393
                393q10 10 10 23z"
        ></path>
      </svg>
    </button>
    <button
      @click="currentChangePrev"
      :class="[
        { 'y-pagination-button--disabled': currentPage === 1 },
        'y-pagination-button',
      ]"
      :disabled="currentPage === 1"
    >
      <svg
        width="18"
        height="18"
        viewBox="0 0 1792 1792"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1203 544q0 13-10 23l-393 393 393 393q10 10 10 23t-10 23l-50 50q-10 10-23
                10t-23-10l-466-466q-10-10-10-23t10-23l466-466q10-10 23-10t23 10l50 50q10 10 10 23z"
        ></path>
      </svg>
    </button>
    <section class="y-pagination-input-container">
      <span>{{ "page" }}</span>
      <input
        ref="input"
        class="y-pagination-input"
        type="text"
        v-model="jumpPage"
        @keyup.enter="jumpToPage(jumpPage)"
        @keypress="filterInput"
      />
      <span>{{ `from ${pageCount}` }}</span>
    </section>
    <button
      @click="currentChangeNext"
      :class="[
        { 'y-pagination-button--disabled': currentPage === pageCount },
        'y-pagination-button',
      ]"
      :disabled="currentPage === pageCount"
    >
      <svg
        width="18"
        height="18"
        viewBox="0 0 1792 1792"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1171 960q0 13-10 23l-466 466q-10 10-23
                10t-23-10l-50-50q-10-10-10-23t10-23l393-393-393-393q-10-10-10-23t10-23l50-50q10-10
                23-10t23 10l466 466q10 10 10 23z"
        ></path>
      </svg>
    </button>
    <button
      @click="onClickLastPage"
      :class="[
        { 'y-pagination-button--disabled': currentPage === pageCount },
        'y-pagination-button',
      ]"
      :disabled="currentPage === pageCount"
    >
      <svg
        width="18"
        height="18"
        viewBox="0 0 1792 1792"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M979 960q0 13-10 23l-466 466q-10 10-23
                10t-23-10l-50-50q-10-10-10-23t10-23l393-393-393-393q-10-10-10-23t10-23l50-50q10-10
                23-10t23 10l466 466q10 10 10 23zm384 0q0 13-10 23l-466 466q-10
                10-23 10t-23-10l-50-50q-10-10-10-23t10-23l393-393-393-393q-10-10-10-23t10-23l50-50q10-10 23-10t23
                10l466 466q10 10 10 23z"
        ></path>
      </svg>
    </button>
    <span class="y-pagination-text">{{
      `Show ${currentPage} - ${pageCount} from ${total}`
    }}</span>
  </section>
</template>

<script>
export default {
  props: {
    total: {
      type: Number,
    },
    itemPerPage: {
      type: Number,
    },
    currentPage: {
      type: Number,
    },
  },
  data() {
    return {
      selectedValue: 3,
      jumpPage: 1,
      ippOptions: [
        {
          value: 3,
          text: "3",
        },
        {
          value: 20,
          text: "50",
        },
        {
          value: 50,
          text: "50",
        },
        {
          value: 100,
          text: "100",
        },
      ],
    };
  },
  methods: {
    currentChangePrev() {
      const val = this.currentPage - 1;
      this.$emit("currentPage", val >= 1 ? val : 1);
    },
    currentChangeNext() {
      const val = this.currentPage + 1;
      this.$emit("currentPage", val <= this.pageCount ? val : this.pageCount);
    },
    onClickFirstPage() {
      this.$emit("currentPage", 1);
    },
    onClickLastPage() {
      this.$emit("currentPage", this.pageCount);
    },
    jumpToPage() {
      if (this.jumpPage > this.pageCount) {
        this.jumpPage = this.pageCount;
      }
      this.$emit("currentPage", parseInt(this.jumpPage, 10));
    },
    changeSelected(val) {
      this.selectedValue = val;
      this.$emit("itemPerPage", val);
    },
    filterInput(e) {
      const charCode = e.charCode;
      if (
        charCode !== 43 &&
        charCode > 31 &&
        (charCode < 48 || charCode > 57)
      ) {
        e.preventDefault();
      }
    },
  },
  computed: {
    pageCount() {
      return this.total ? Math.ceil(this.total / this.itemPerPage) : 1;
    },
    paginationDate() {
      const start = this.selectedValue * this.ippOptions;
      const end = start + this.ippOptions;
      return this.total.slice(start, end);
    },
  },
  mounted() {
    console.log(this.total);
  },
  watch: {
    currentPage(val) {
      this.jumpPage = val;
    },
  },
};
</script>

<style lang='scss' scoped>
.y-pagination {
  display: flex;
  padding: 7px;
  background-color: #e8e8e8;
  border: 1px solid #ccc;
  font-size: 12px;
  height: 22px;
  line-height: 22px;
  opacity: 0.7;
  &-select {
    width: 50px;
    margin-right: 15px;
    border-radius: 3px;
    border: 1px solid #ccc;
    background-color: #fbfbfb;
  }
  &-button {
    filter: grayscale(100%);
    cursor: pointer;
    background-color: #fbfbfb;
    border: 1px solid #ccc;
    border-radius: 3px;
    margin: 0 3px;
    &--disabled {
      cursor: default;
      opacity: 0.5;
    }
  }
  &-input-container {
    font-size: 12px;
    margin: 0 15px;
  }
  &-input {
    cursor: default;
    text-align: center;
    width: 30px;
    padding: 0 5px;
    margin: 0 5px;
    border-radius: 3px;
    border: 1px solid #ccc;
    background-color: #fbfbfb;
    height: 22px;
    line-height: 22px;
  }
}
</style>
