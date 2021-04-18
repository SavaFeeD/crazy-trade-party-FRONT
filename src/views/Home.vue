<template>
  <div class="home">
    <h1>Open data market</h1>
    <div class="test-zone d-flex align-items-center">
      <div class="mt-5 w-100">
        <slider :slide='general_slide_img' name_slider="general"></slider>
      </div>
    </div>
  </div>
</template>

<script>
import slider from '@/components/slider'

export default {
  name: 'Home',
  data: () => ({
    general_slide_img: [
      '../../img/home/slider/bigdata.png', '../../img/home/slider/line_chart.png',
      '../../img/home/slider/morechart.png', '../../img/home/slider/excel_data.png'
    ]
  }),
  components: {
    slider
  }
}
</script>
