<template>
  <header>
    <section class="profile">
      <div class="picture">
        <!-- Imagem do gravatar -->
        <img
          :src="`${profile.imageURL}`"
          alt="profile_picture"
          class="profile_pic"
          id="profile_pic"
          @click="showProfile()"
        />
        <input type="button" value="X" id="close_pic" @click="showProfile()" />
      </div>
      <label class="profile_name">{{ profile.name }}</label>

      <bio>"{{ profile.bio }}"</bio>

      <nav class="profile_tags">
        <ul>
          <li v-for="tag in profile.tags" :key="tag">{{ tag }}</li>
        </ul>
      </nav>

      <nav class="btns">
        <ul>
          <li class="btn-link"><a href="#" class="btn-primary">Home</a></li>

          <li class="btn-link">
            <a href="mailto:vserafim_o@outlook.com" class="btn-primary"
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
        imageURL:
          'https://www.gravatar.com/avatar/f8e067eb1582177fb3b223a6fddf279f?s=90&r=g&d=identicon',
        bio: 'O amor é a compensação da morte.',
        tags: ['Estudante', 'IFSP'],
      },
    }
  },

  methods: {
    showProfile() {
      const img = document.querySelector('#profile_pic')
      const btnClose = document.querySelector('#close_pic')
      const div = document.querySelector('div.picture')

      // condição de ativação do popup
      if (div.classList.contains('active')) {
        // trocando a resolução da imagem
        img.setAttribute(
          'src',
          'https://www.gravatar.com/avatar/f8e067eb1582177fb3b223a6fddf279f?s=90&r=g&'
        )

        // desativando o popup
        div.classList.remove('active')

        // desbloqueando o scroll
        document.body.style.overflow = 'auto'

        // desativando o botao de fechar
        btnClose.style.display = 'none'
      } else {
        // Trocando a resuolução da imagem
        img.setAttribute(
          'src',
          'https://www.gravatar.com/avatar/f8e067eb1582177fb3b223a6fddf279f?s=512&r=g'
        )

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
