<template>
  <blockquote class="cursor-wrap">
    <img src="../assets/cursor.svg" class="cursor" alt="cursor">
    <ul class="d-flex flex-column">
      <router-link v-for="item in list_route" :key="item.path"
          :to="item.path"
          :active-class="options.active_class"
          class="a_menu"
          @mouseover="liMouse"
          @mouseout="liMouseOut">
        <button><cite>{{ item.name }}</cite></button>
      </router-link>
    </ul>
  </blockquote>
</template>

<script>
export default {
  name: 'Arrow_menu',
  props: {
    list_route: {
      value: {
        type: Array,
        default: []
      }
    },
    options: {
      value: {
        type: Object,
        default: {
          profile: false,
          active_class: 'active'
        }
      }
    }},
  methods: {
    liMouse(e) {
      let li = e.target
      let o = document.querySelector('.o-cursor')
      let t = li.getBoundingClientRect().y - o.getBoundingClientRect().y + 10
      if (li.childNodes[0].tagName === undefined) t -= 10
      let cursor = document.querySelector('.cursor')
      cursor.style.top = `${t}px`;
    },
    liMouseOut() {
      let li = document.querySelector('.o-cursor .'+this.options.active_class)
      let o = document.querySelector('.o-cursor')
      let t = li.getBoundingClientRect().y - o.getBoundingClientRect().y + 10
      let cursor = document.querySelector('.cursor')
      cursor.style.top = `${t}px`;
    }
  },
  mounted() {
    this.liMouseOut()

    if (this.options['profile'] === true) {
      let menu = document.querySelectorAll('.a_menu')
      menu.forEach((el) => {
        el.addEventListener('click', () => {
          setTimeout(() => {
            document.querySelector('#profile_href').className = 'active'
          }, 100)
        })
      })
    }
    if (this.options['class_active'] === 'click') {
      let menu = document.querySelectorAll('.click')
      menu.forEach((el) => {
        el.addEventListener('click', () => {
          console.log(el)
          el.className = 'active'
        })
      })
    }

  },
  updated() {
    this.liMouseOut()
  }
}
</script>

<style scoped>
button:hover cite::before{
  background: #d4d2b4!important;
}
ul{
  padding: 0;
  margin: 0;
  list-style: none;
}
ul a:not(:last-child):not(:first-child){
  margin: 17px 0;
  width: 100%;
}
ul a *{
  width: 90%;
  align-items: flex-start;
  text-align: left;
}
ul a:hover *, ul a.active *{
  width: 100%;
}
ul a{
  margin: 0;
  width: 90%!important;
}
blockquote{
  margin-top: 0!important;
  margin-bottom: 0!important;
  padding-bottom: 0!important;
  padding-top: 0!important;
}
.cursor-wrap{
  position: relative;
}
.cursor{
  position: absolute;
  width: 30px;

  top: 10px;
  left: -30px;
  transition: top ease-in-out 0.3s;
}
blockquote:before {
  left: -2.3rem;
}
</style>
