<template>
  <div class="home">
    <h1>Test_btn_A</h1>
    <div class="test-zone d-flex align-items-center">
     <btn_type_A v-for="item in test_btns" :btn="item" :key="item.name"></btn_type_A>
    </div>
  </div>
</template>

<script>
import btn_type_A from '@/components/btn_A';

export default {
  name: 'Home',
  data: () => ({
    test_btns: [
      {
        name: 'Yes',
        wrap_class: 'little',
      },
      {
        name: 'No',
        wrap_class: 'little',
        margin: '0 0 0 40px'
      }
    ]
  }),
  components: {
    btn_type_A
  }
}
</script>
