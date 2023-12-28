<template>
  <main>
    <Header :profile="false" />
    <article class="m-5">
      <section class="profile d-flex flex-column align-items-center">
        <article class="container">
          <section class="col-md-8 offset-md-2 mt-3">
            <h2 class="text-center" data-aos="zoom-in-up" data-aos-delay="300">Experiências</h2>
            <div v-for="(exp, index) in experiences" :key="exp" class="experiences p-2"
              :data-aos="index % 2 === 0 ? 'zoom-in-right' : 'zoom-in-left'" data-aos-delay="300">
              <Experience :exp="exp" />
            </div>
          </section>

        </article>
      </section>
    </article>
    <Footer />
  </main>
</template>
  
  
<script>
import AOS from 'aos'
import Vue from 'vue'
import $axios from 'axios'

export default {
  head() {
    return {
      title: 'Experiências',
    }
  },

  async asyncData() {
    const { data } = await $axios.get(
      'https://fringe-obsidian-louse.glitch.me/my/experiences'
    )
    return { experiences: data }
  },

  mounted() {
    AOS.init()
    Vue.directive('aos', AOS.init)
  },
}
</script>