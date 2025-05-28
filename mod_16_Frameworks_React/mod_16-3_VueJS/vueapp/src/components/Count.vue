<script setup>
import {ref, computed} from 'vue';

const CONST_VALUE = 20;

// const props = defineProps(['initialCount', 'number']);
const props = defineProps(['number', 'count']);
const emit = defineEmits(['onCountChange']);

const data = ref(0);

// const count = ref(props.initialCount || 0);

function changeCount() {
  // count.value++;
  // emit('onCountChange', props.number, count.value);
  const intData = parseInt(data.value);
  emit('onCountChange', props.count + (!isNaN(intData) ? intData : 1));
}

const mixedCount = computed(() => {
  return `Count plus constant is ${props.count + CONST_VALUE}`;
})

// onMounted(() => {
//   console.log(`Component mounted. Count is ${count.value}`);
// });

// function changeData(event) {
//   data.value = event.target.value;
// }
</script>

<template>
  <!--  <div v-if="count !== 1">-->
  <div>
    <p>Count is {{ count }}</p>
    <p>Mixed Count is {{ mixedCount }}</p>
<!--    <input type="text" :value="data" @input="changeData"/>-->
    <input type="text" v-model="data" />
    <button @click="changeCount">Click me!</button>
  </div>
  <!--  </div>-->
  <!--  <div v-else>Nothing</div>-->
</template>

<style scoped>
</style>