<template>
  <main>
    <Header :profile="false" />
    <article class="m-5">
      <section class="profile d-flex flex-column align-items-center">
        <div class="picture position-relative" @click="showProfile">
          <!-- Imagem do gravatar -->
          <img
            :src="`${profile.picture.LOW}`"
            alt="profile_picture"
            class="profile_pic rounded-circle"
            id="profile_pic"
            data-aos="zoom-in-down"
            data-aos-delay="100"
          />
        </div>

        <h3
          class="profile_name mt-2 mb-1"
          data-aos="zoom-in-down"
          data-aos-delay="200"
        >
          {{ profile.name }}
        </h3>

        <bio class="text-center text-muted mt-2 mb-4">{{ profile.bio }}</bio>

        <nav
          class="profile_tags mb-3"
          data-aos="zoom-in-down"
          data-aos-delay="300"
        >
          <ul
            class="tags flex-row d-flex flex-wrap justify-content-center mb-2 mt-2 gap-3"
          >
            <li
              v-for="tag in profile.tagsTipadas"
              :key="tag"
              :class="`${tag.type} badge badge-primary btn buttom-secondary font-weight-light pl-2 pr-2 pt-1 pb-1`"
            >
              {{ tag.value }}
            </li>
          </ul>
        </nav>

        <article class="container">
          <section class="row">
            <div
              class="col-md-8 offset-md-2 mt-3 justify"
              data-aos="zoom-in-down"
              data-aos-delay="400"
            >
              <h2 class="text-center">Sobre mim</h2>
              <p v-html="profile.sobre.resume"></p>

              <p v-html="profile.sobre.experience"></p>
            </div>
          </section>
        </article>

        <article class="container">
          <div class="col-md-8 offset-md-2 mt-3" data-aos="zoom-in-up" data-aos-delay="500">
            <h2 class="text-center">Formação</h2>
            <p v-html="profile.formacao.ifsp"></p>

            <p v-html="profile.formacao.cursos"></p>
          </div>
        </article>
      </section>
    </article>
    <Footer />
  </main>
</template>


<script>
import AOS from 'aos'
import Vue from 'vue'
import $ from 'jquery'
import $axios from 'axios'

export default {
  head() {
    return {
      title: 'Sobre mim',
    }
  },

  async asyncData() {
    const { data } = await $axios.get(
      'https://fringe-obsidian-louse.glitch.me/my/info'
    )
    return { profile: data }
  },

  methods: {
    getDelay(e) {
      const time = (this.profile.tagsTipadas.indexOf(e) + 1) * 200
      return time
    },
  },

  mounted() {
    AOS.init()
    Vue.directive('aos', AOS.init)
  },
}
</script>
