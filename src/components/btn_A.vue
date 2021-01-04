<template>
  <div ref="wrap_b" class="general-wrap">
    <div class="btn_A-wrap">
      <button ref="b">{{ btn.name }}</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'btn_type_A',
  props: {
    btn: {
      value: {
        type: Object,
        default: {
          name: 'btn',
          wrap_class: '',
          btn_b: ''
        }
      }
    }
  },
  methods: {
  },
  mounted() {
    if (this.btn.wrap_class) {
      this.$refs.wrap_b.className += ` ${this.btn.wrap_class}`
    }
    if (this.btn.margin) {
      this.$refs.wrap_b.style.margin += this.btn.margin
    }
    if (this.btn.btn_b) {
      this.$refs.b.className += ` ${this.btn.btn_b}`
    }
  },
  updated() {
  }
}
</script>

<style scoped>
.general-wrap{
  display: flex;
  position: relative;
  overflow: visible;
}
.btn_A-wrap{
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  overflow: visible;
}
.general-wrap.small:hover .btn_A-wrap:before{
  position: absolute;
  content: '';
  background: url("../assets/btn_border.png") no-repeat 100% 100%;
  background-size: cover;
  width: 10rem;
  height: 29px;
  top: 0;
  left: 0;
  transition: all .5s;
  animation: border_on_small both .5s;
}
.general-wrap.little:hover .btn_A-wrap:before{
  position: absolute;
  content: '';
  background: url("../assets/btn_border.png") no-repeat 100% 100%;
  background-size: cover;
  width: 6rem;
  height: 29px;
  top: 0;
  left: 0;
  transition: all .5s;
  animation: border_on_little both .5s;
}
button{
  position: relative;
  display: flex;
  background: url("../assets/bg.png");
  background-size: contain;
  color: white;
  text-transform: uppercase;
  box-shadow: 0 0 0 2px #bab5a1;
  z-index: 20!important;
}
button:before{
  border: none!important;
}
button:after{
  background: #041e3ebf;
}

.general-wrap.full{
  max-width: 100%;
  width: 100%;
}
.general-wrap.big{
  max-width: 30rem;
  width: 30rem;
}
.general-wrap.small{
  max-width: 10rem;
  width: 10rem;
}
.general-wrap.little{
  max-width: 6rem;
  width: 6rem;
}
.general-wrap.little button{
  justify-content: center;
}

@keyframes border_on_small{
  0%{
    width: 10rem;
    height: 29px;
    top: 0;
    left: 0;
  }
  100%{
    width: 11.5rem;
    height: calc(29px + 1rem);
    top: -.5rem;
    left: -.75rem;
  }
}
@keyframes border_on_little{
  0%{
    width: 6rem;
    height: 29px;
    top: 0;
    left: 0;
  }
  100%{
    width: 7.5rem;
    height: calc(29px);
    top: 1rem;
    left: -.75rem;
  }
}

</style>
