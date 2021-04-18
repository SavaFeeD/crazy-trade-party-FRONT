<template>
  <section class="d-flex justify-content-center flex-column">
    <div class="wrap-slider d-flex justify-content-center">
      <div class="wrap-slide">
        <span class="left" :onclick="next"><i class="fas fa-angle-left"></i></span>
        <img :src="item" :alt="item" v-for="(item, i) in slide" :key="item"
            class="disable-slide"
            :class="{'active-slide' : active_slide(i)}">
        <span class="right" :onclick="next"><i class="fas fa-angle-right"></i></span>
      </div>
    </div>
    <div class="d-flex justify-content-center mt-3">
      <input v-for="i in range(slide.length)"
           :id="i"
           v-model='slide_num'
           :value="i"
           type="radio"
           :name="'slide_'+name_slider"
           :key="i"
           >
    </div>
  </section>
</template>

<script>

export default {
  name: 'slider',
  data: () => ({
    slide_num: 0
  }),
  props: {
    slide: {
      value: {
        type: Array
      }
    },
    name_slider: {
      value: {
        type: Array
      }
    }
  },
  methods: {
    active_slide(i) {
      return this.slide_num == i
    },

    next() {
      if (this.slide_num < this.slide.length-1) {
        this.slide_num += 1
      } else {
        this.slide_num = 0
      }
    },

    prev() {
      if (this.slide_num == 0) {
        this.slide_num = this.slide.length-1
      } else {
        this.slide_num -= 1
      }
    },

    range(start, stop, step) {
      if (typeof stop == 'undefined') {
        stop = start;
        start = 0;
      }

      if (typeof step == 'undefined') {
        step = 1;
      }

      if ((step > 0 && start >= stop) || (step < 0 && start <= stop)) {
        return [];
      }

      let result = [];
      for (let i = start; step > 0 ? i < stop : i > stop; i += step) {
        result.push(i);
      }

      return result;
    }
  }
}
</script>

<style scoped>

.disable-slide{
  display: none;
}
.active-slide{
  display: block!important;
}

section{
  width: 100%;
}

.wrap-slide{
  width: 1024px;
  height: 413px;
  display: flex;
  justify-content: center;
  position: relative;
  align-items: center;
}

img{
  position: absolute;
  height: 413px;
}

span{
  position: absolute;
  width: 30px;
  height: 30px;
  border-radius: 5px;
  background-color: grey;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
  opacity: .2;
  cursor: pointer;
  transition: all .3s;
}
.wrap-slide:hover span{
  opacity: .4;
}
span:hover{
  opacity: .9;
}
span.left{
  left: 30px;
}
span.right{
  right: 30px;
}

[type="radio"]{
  margin: 5px;
}
</style>
