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

        <!-- <bio class="text-center text-muted mt-2 mb-4">{{ profile.bio }}</bio> -->

        <nav
          class="profile_tags mb-3"
          data-aos="zoom-in-down"
          data-aos-delay="300"
        >
          <ul
            class="col d-flex flex-wrap justify-content-center mb-2 mt-2 gap-3"
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

        <section class="container">
          <div class="row">
            <div
              class="col-md-8 offset-md-2 mt-3 justify"
              data-aos="zoom-in-down"
              data-aos-delay="400"
            >
              <h2 class="text-center">Sobre mim</h2>
              <p v-html="profile.sobre.resume"></p>

              <p v-html="profile.sobre.experience"></p>
            </div>
          </div>
        </section>

        <section class="container">
          <div class="col-md-8 offset-md-2 mt-3" data-aos="zoom-in-up">
            <h2 class="text-center">Formação</h2>
            <p v-html="profile.formacao.if"></p>

            <p v-html="profile.formacao.curso"></p>
          </div>
        </section>
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
    const profile = data.info[0]
    return { profile }
  },

  methods: {
    showProfile() {
      // selecionando os elementos
      const $img = $('.profile_pic')
      const $div = $('div.picture.position-relative')

      // condição de ativação do popup
      if ($div.hasClass('active')) {
        // trocando a resolução da imagem
        $img.attr('src', this.profile.picture.LOW)

        // desativando o popup
        $div.removeClass('active')

        // desbloqueando o scroll
        $('body').css('overflow', 'auto')
      } else {
        // Trocando a resuolução da imagem
        $img.attr('src', this.profile.picture.HIGH)

        // ativando o popup
        $div.addClass('active')

        // bloqueando o scroll
        $('body').css('overflow', 'hidden')
      }
    },

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