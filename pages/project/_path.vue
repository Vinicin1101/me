<template>
  <main>
    <Header></Header>
    <div class="container my-5">
      <h1 class="text-center" data-aos="zoom-in-down">
        {{ project.title }}
      </h1>
      <div>
        <ul class="text-center">
          <li
            v-for="t in project.technologies"
            :class="`
                ${t.type}
                badge badge-primary
                font-weight-light
                btn
                buttom-secondary
                pl-2
                pr-2
                pt-1
                pb-1
                mr-2
                `"
            :key="t"
            data-aos="zoom-in-down"
            data-aos-delay="200"
          >
            {{ t.name }}
          </li>
        </ul>
      </div>
      <div class="row">
        <div class="col-lg-6" data-aos="zoom-in-right" data-aos-delay="300">
          <img :src="project.image" class="img-fluid" />
        </div>
        <div class="col-lg-6" data-aos="zoom-in-left" data-aos-delay="300">
          <h2>Descrição</h2>
          <p>{{ project.description }}</p>
          <h2>Detalhes</h2>
          <ul>
            <li>Categoria: {{ project.category }}</li>
            <li>
              Repositório:
              <a target="_blank" :href="project.repo">GitHub</a>
            </li>
            <li>
              App:
              <a target="_blank" :href="project.deploy">Deploy</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <Footer></Footer>
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
      title: this.project.title,
    }
  },

  async asyncData({ params }) {
    console.log(params)

    const { data } = await $axios.get(
      'https://fringe-obsidian-louse.glitch.me/my/project/?id=' + params.path
    )

    console.log(data.project[0])

    return { project: data.project[0] }
  },

  methods: {},

  mounted() {
    // Montando a diretiva aos
    AOS.init()
    Vue.directive('aos', AOS.init)
  },
}
</script>

<style>
/* Adicione estilos adicionais aqui */
</style>
