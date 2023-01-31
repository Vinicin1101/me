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
        <div class="col-lg-6" data-aos="zoom-in-right" data-aos-delay="300">
          <img :src="project[`${path}`].image" class="img-fluid" />
        </div>
        <div class="col-lg-6" data-aos="zoom-in-left" data-aos-delay="300">
          <h2>Descrição</h2>
          <p v-html="project[`${path}`].description"></p>
          <h2>Detalhes</h2>
          <ul>
            <li>Categoria: {{ project[`${path}`].category }}</li>
            <li>
              Repositório:
              <a target="_blank" :href="project[`${path}`].repo">GitHub</a>
            </li>
            <li>
              App:
              <a target="_blank" :href="project[`${path}`].deploy">Deploy</a>
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
            { name: 'JavaScript', type: 'lan' },
            { name: 'ThreeJs', type: 'lib' },
            { name: 'ExpressJs', type: 'fw' },
          ],
        },
        pj2: {
          title: 'API de Cadastro e Login com ExpressJS',
          image: '/images/api.png',
          description:
            'Este projeto tem como objetivo criar uma API segura e completa para autenticação de usuários em aplicações web. Serão implementadas funcionalidades de cadastro, login, recuperação de senha, validação de dados e geração de tokens JWT. Além disso, serão utilizadas boas práticas de segurança para garantir a integridade dos dados dos usuários.',
          releaseDate: '30 de janeiro de 2023',
          category: 'Desenvolvimento Web',
          repo: 'https://github.com/vinicin1101/treinando-express',
          deploy: 'https://3d.vinicin.host',
          technologies: [
            { name: 'MySQL', type: 'db' },
            { name: 'Express', type: 'fw' },
            { name: 'JWT', type: 'sec' },
            { name: 'Bcrypt', type: 'sec' },
          ],
        },
        pj3: {
          title: 'Cronopédia - Descontinuada',
          image: '/images/crono.png',
          description:
            'A Cronopédia foi um projeto escolar, desenvolvido por @André Victor, <a href="https://github.com/Tiago-Mart">@Tiago Martins</a> e Vinícius Serafim. O objetivo era criar uma aplicação web para criação de artigos totalmente reponsiva.',
          releaseDate: '28 de novembro de 2022',
          category: 'Desenvolvimento Web',
          repo: 'https://github.com/Cronopedia/Cronopedia',
          technologies: [
            { name: 'Java', type: 'lan' },
            { name: 'Spring', type: 'fw' },
            { name: 'JWT', type: 'sec' },
            { name: 'Nuxt', type: 'fw' },
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

<style scoped>
img {
  aspect-ratio: 3/2;
  width: 100%;
  background-color: #000;
}
</style>
