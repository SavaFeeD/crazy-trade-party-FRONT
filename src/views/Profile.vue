<template>
  <div class="profile">
    <h1 class="m-4">Profile</h1>
    <div class="container">
      <div class="row">
        <section class="col-4 o-cursor">
          <blockquote class="cursor-wrap">
            <img src="../assets/cursor.svg" class="cursor" alt="cursor">
            <ul class="d-flex flex-column">
              <router-link
                  to="info"
                  active-class="active"
                  @mouseover="liMouse"
                  @mouseout="liMouseOut">
                  <button><cite>My profile</cite></button>
              </router-link>
              <router-link
                  to="settings"
                  active-class="active"
                  @mouseover="liMouse"
                  @mouseout="liMouseOut">
                  <button><cite>Settings</cite></button>
              </router-link>
              <router-link
                  to="exit"
                  active-class="active"
                  @mouseover="liMouse"
                  @mouseout="liMouseOut">
                  <button><cite>Exit</cite></button>
              </router-link>
            </ul>
          </blockquote>
        </section>

        <section class="col-8">
          <router-view/>
        </section>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    user: {
      id: null,
      slug: '',
      name: 'Test Data'
    }
  }),
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
      let li = document.querySelector('.o-cursor .active')
      let o = document.querySelector('.o-cursor')
      let t = li.getBoundingClientRect().y - o.getBoundingClientRect().y + 10
      let cursor = document.querySelector('.cursor')
        cursor.style.top = `${t}px`;
    }
  },
  created() {
    this.user.slug = this.$route.params.slug
  },
  mounted() {
    this.liMouseOut()
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
