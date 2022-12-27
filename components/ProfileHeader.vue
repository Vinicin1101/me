<template>
  <article class="d-flex justify-content-center pt-5 bg-black">
    <section class="profile d-flex flex-column align-items-center">
      <div class="picture position-relative" @click="showProfile">
        <!-- Imagem do gravatar -->
        <img
          :src="`${profile.picture.LOW}`"
          alt="profile_picture"
          class="profile_pic rounded-circle"
          id="profile_pic"
          data-toggle="modal"
          data-target="#myModal"
        />
      </div>

      <label class="profile_name mt-2 mb-1 text-white">{{
        profile.name
      }}</label>

      <bio class="text-center text-muted mt-2 mb-4">{{ profile.bio }}</bio>

      <nav class="profile_tags mb-3">
        <ul class="col d-flex flex-wrap justify-content-center mb-2 mt-2 gap-3">
          <li
            v-for="tag in profile.tagsTipadas"
            :key="tag"
            :class="`${tag.type} badge badge-secondary`"
          >
            {{ tag.value }}
          </li>
        </ul>
      </nav>
    </section>
  </article>
</template>
  
  <script>
export default {
  name: 'Profile-Header',

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
        tags: ['Aprendiz', 'DEV', 'Python', 'Spring', 'Nuxt', 'Brasil'],
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
      const img = document.querySelector('#profile_pic')
      // const btnClose = document.querySelector('#close_pic')
      const div = document.querySelector('div.picture.position-relative')

      // condição de ativação do popup
      if (div.classList.contains('active')) {
        // trocando a resolução da imagem
        img.setAttribute('src', this.profile.picture.LOW)

        // desativando o popup
        div.classList.remove('active')

        // desbloqueando o scroll
        document.body.style.overflow = 'auto'

        // desativando o botao de fechar
        // btnClose.style.display = 'none'
      } else {
        // Trocando a resuolução da imagem
        img.setAttribute('src', this.profile.picture.HIGH)

        // ativando o popup
        div.classList.add('active')

        // bloqueando o scroll
        document.body.style.overflow = 'hidden'

        // ativando o botao de fechar
        // btnClose.style.display = 'block'
        // btnClose.style.position = 'absolute'

        // posicionamento calculado com base na tela e na imagem
        // btnClose.style.left = `calc(50% + 120px)`
        // btnClose.style.top = `calc(50% - 150px)`
        // btnClose.style.zIndex = '10000'
      }
    },
  },
}
</script>
