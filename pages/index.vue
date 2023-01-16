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
          />
        </div>

        <h3 class="profile_name mt-2 mb-1">{{ profile.name }}</h3>

        <!-- <bio class="text-center text-muted mt-2 mb-4">{{ profile.bio }}</bio> -->

        <nav class="profile_tags mb-3">
          <ul
            class="col d-flex flex-wrap justify-content-center mb-2 mt-2 gap-3"
          >
            <li
              v-for="tag in profile.tagsTipadas"
              :key="tag"
              :class="`${tag.type} badge badge-primary btn buttom-secondary font-weight-light pl-2 pr-2 pt-1 pb-1`"
              data-aos="zoom-in-down"
              :data-aos-delay="`${getDelay(tag)}`"
            >
              {{ tag.value }}
            </li>
          </ul>
        </nav>

        <section class="container">
          <div class="row">
            <div
              class="col-md-8 offset-md-2 mt-3 justify"
              data-aos="zoom-in-up"
            >
              <h2 class="text-center">Sobre mim</h2>
              <p>
                Eu sou um desenvolvedor iniciante com uma paixão por tecnologia
                e aprendizado constante. Apesar de ainda não ter experiência
                profissional, possuo uma formação sólida em programação e
                habilidades de resolução de problemas. Estou ansioso para
                aplicar o que aprendi em projetos futuros e continuar
                desenvolvendo minhas habilidades.
              </p>

              <p>
                Tenho experiência em trabalhar com linguagens de programação
                como <i>Java</i>, <i>Python</i> e <i>JS</i>, além de ter
                conhecimento básico de ferramentas de desenvolvimento de
                software, como <i>Git</i> e <i>Linux</i>. Além disso, sou capaz
                de trabalhar em equipe eficazmente para alcançar objetivos
                comuns. Estou sempre procurando por novos desafios e
                oportunidades para crescer como desenvolvedor e adquirir
                experiência profissional.
              </p>
            </div>
          </div>
        </section>

        <section class="container">
          <div class="col-md-8 offset-md-2 mt-3" data-aos="zoom-in-up">
            <h2 class="text-center">Formação</h2>
            <p>
              Fui aluno do Instituto Federeal de São Paulo no campus de Bragança
              Paulista. Durante minha formação, tive a oportunidade de estudar
              uma variedade de tópicos, incluindo redes de computadores,
              desenvolvimento web, lógica de programação. Além disso, completei
              diversos projetos de programação, incluindo desenvolvimento de
              sistemas web utilizando o framework
              <i>Nuxt</i>.
            </p>

            <p>
              Adicionalmente, eu tenho completado alguns cursos online para
              ampliar minhas habilidades e conhecimentos, como por exemplo, um
              curso de desenvolvimento web utilzando
              <i>Nodejs utilizando Express.Js</i> e <i>MongoDB</i> oferecido
              pela <i>Samsung Ocean</i>, outro curso de programação em
              <i>Python</i> pela USP (Universidade de São Paulo). Estou sempre
              em busca de novos desafios e oportunidades para crescer como
              desenvolvedor e continuar aprendendo.
            </p>
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

export default {
  head() {
    return {
      title: 'Sobre mim',
    }
  },

  data() {
    return {
      profile: {
        name: 'Vinicius Serafim',
        email: 'vserafim_o@outlook.com',
        picture: {
          HIGH: 'http://www.gravatar.com/avatar/f8e067eb1582177fb3b223a6fddf279f?s=512&r=g&d=identicon',
          LOW: 'http://www.gravatar.com/avatar/f8e067eb1582177fb3b223a6fddf279f?s=90&r=g&d=identicon',
        },
        bio: 'Você vive hoje uma vida que gostaria de viver por toda a eternidade?',
        tagsTipadas: [
          { type: 'level', value: 'Aprendiz' },
          { type: 'skill', value: 'Dev' },
          { type: 'skill', value: 'Python' },
          { type: 'skill', value: 'Spring' },
          { type: 'skill', value: 'Nuxt' },
          { type: 'location', value: 'Brasil' },
        ],
      },

      isProfileVisible: true,
    }
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
      return (this.profile.tagsTipadas.indexOf(e) + 1) * 100
    },
  },

  mounted() {
    AOS.init()
    Vue.directive('aos', AOS.init)
  },
}
</script>