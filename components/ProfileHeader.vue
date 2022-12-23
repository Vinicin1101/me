<template>
  <header>
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

        <button class="bx bx-x" id="close_pic"></button>
      </div>

      <label class="profile_name mt-3 mb-0">{{ profile.name }}</label>

      <bio class="text-muted mt-2 mb-3">{{ profile.bio }}</bio>

      <nav class="profile_tags d-flex flex-wrap mb-3">
        <ul class="col flex-wrap mr-2 mb-3">
          <li
            v-for="tag in profile.tags"
            :key="tag"
            class="badge badge-secondary mr-2 mb-2"
          >
            {{ tag }}
          </li>
        </ul>
      </nav>

      <nav class="btns d-flex justify-content-center mb-3">
        <ul>
          <li class="btn-link mr-3">
            <a href="#" class="btn btn-primary">Home</a>
          </li>

          <li class="btn-link">
            <a :href="`mailto: ${profile.email}`" class="btn btn-primary"
              >Contato</a
            >
          </li>
        </ul>
      </nav>
    </section>
  </header>
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
        tags: ['Aprendiz', 'DEV', 'Python', 'Spring', 'Nuxt'],
      },

      isProfileVisible: true,
    }
  },

  methods: {
    showProfile() {
      const img = document.querySelector('#profile_pic')
      const btnClose = document.querySelector('#close_pic')
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
        btnClose.style.display = 'none'
      } else {
        // Trocando a resuolução da imagem
        img.setAttribute('src', this.profile.picture.HIGH)

        // ativando o popup
        div.classList.add('active')

        // bloqueando o scroll
        document.body.style.overflow = 'hidden'

        // ativando o botao de fechar
        btnClose.style.display = 'block'
        btnClose.style.position = 'absolute'

        // posicionamento calculado com base na tela e na imagem
        btnClose.style.left = `calc(50% + 120px)`
        btnClose.style.top = `calc(50% - 150px)`
        btnClose.style.zIndex = '10000'
      }
    },
  },
}
</script>
