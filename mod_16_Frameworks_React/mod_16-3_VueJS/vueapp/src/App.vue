<script setup>
import Count from './components/Count.vue';
import {ref, watch} from 'vue';

const count = ref(2);

const items = ref([
  {
    number: 1,
    // initialCount: 10,
  },
  {
    number: 2,
    // initialCount: 20,
  },
  {
    number: 3,
    // initialCount: 30,
  },
  {
    number: 4,
    // initialCount: 40,
  },
]);

// function onCountChangeHandler(countNumber, newCountValue) {
//   console.log(`Value for ${countNumber} changed to ${newCountValue}!`);
// }

function onCountChangeHandler(newCountValue) {
  count.value = newCountValue;
}

function addNewCount() {
  const number = items.value.length > 0 ? (items.value[items.value.length - 1].number + 1) : 1;

  items.value.push({
    number: number
  });
  console.log(items.value);
}

watch(count, (newValue, oldValue) => {
  console.log(`Count value changed from ${oldValue} to ${newValue}`);
})

const message = ('Hello Alena Consul-adviser!');
</script>

<template>
  <p>{{ message }}</p>
  <br>
  <!--  <Count v-bind:initial-count="10" v-on:on-count-change="onCountChangeHandler" v-bind:number="1" />-->
  <!--  <Count :initial-count="20" @on-count-change="onCountChangeHandler" :number="2" />-->
  <!--  <Count :initial-count="30" @on-count-change="onCountChangeHandler" :number="3" />-->
  <!--  <Count v-for='item in items' :initial-count="item.initialCount" @on-count-change="onCountChangeHandler"-->
  <!--         :number="item.number" :key="item.number"/>-->
  <Count v-for='item in items' @on-count-change="onCountChangeHandler"
         :number="item.number" :count="count" key="item.number"/>
  <br>
  <div>
    <button @click="addNewCount">Add new count!</button>
  </div>

</template>

<style scoped>
</style>
