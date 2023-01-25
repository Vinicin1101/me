<template>
  <main>
    <Header></Header>
    <div class="container my-5">
      <h1 class="text-center" data-aos="zoom-in-down">
        {{ project[`${path}`].title }}
      </h1>
      <div>
        <ul class="text-center">
          <li
            v-for="t in project[`${path}`].technologies"
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
        <div class="col-lg-6" data-aos="zoom-in-right" data-aos-delay="400">
          <img :src="project[`${path}`].image" class="img-fluid" />
        </div>
        <div class="col-lg-6" data-aos="zoom-in-left" data-aos-delay="400">
          <h2>Descrição</h2>
          <p>{{ project[`${path}`].description }}</p>
          <h2>Detalhes</h2>
          <ul>
            <li>Categoria: {{ project[`${path}`].category }}</li>
            <li>Repositório: <a :href="project[`${path}`].repo">GitHub</a></li>
            <li>
              App:
              <a :href="project[`${path}`].deploy">Deploy</a>
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

export default {
  head() {
    return {
      title: this.project.title,
    }
  },
  data() {
    return {
      path: this.$route.params.path,
      project: {
        pj1: {
          title: 'Escala Populacional em 3D',
          image: '/images/3d.png',
          description:
            'Um pequeno projeto para aprender mais sobre a tecnologia ThreeJs e como ela pode ser usada para adicionar elementos 3D às páginas web. Eu busquei explorar as diferentes funcionalidades e recursos disponíveis, como iluminação, texturas e pós processamento, e ver como eles podem ser combinados para criar experiências imersivas para o usuário. Por fim, estou ansioso para dar continuidade e implementar novas funcionalidade, corrigir alguns bugs',
          releaseDate: '24 de janeiro de 2023',
          category: 'Desenvolvimento Web',
          repo: 'https://github.com/vinicin1101/world-population',
          deploy: 'https://3d.vinicin.host',
          technologies: [
            { name: 'JavaScript', type: 'js' },
            { name: 'ThreeJs', type: '3D' },
            { name: 'ExpressJs', type: 'js' },
          ],
        },
      },
    }
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
