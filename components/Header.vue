<template>
  <header class="d-flex bg-black">
    <nav class="navbar navbar-expand-lg navbar-dark bg-black mx-auto">
      <a
        href="#"
        class="profile-link vertical-align-center navbar-brand"
        v-if="!isNavOpen"
      >
        <img
          src="http://www.gravatar.com/avatar/f8e067eb1582177fb3b223a6fddf279f?s=90&r=g&d=identicon"
          alt="profile_picture"
          class="profile_pic rounded-circle"
          id="profile_pic"
        />
      </a>
      <button class="navbar-toggler" type="button" @click="showNav()">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div
        class="collapse navbar-collapse"
        id="navbarNav"
        :class="{ show: isNavOpen }"
      >
        <ul class="navbar-nav">
          <a
            href="#"
            class="profile-link ml-0 vertical-align-center navbar-brand"
            v-if="isNavOpen"
          >
            <img
              src="http://www.gravatar.com/avatar/f8e067eb1582177fb3b223a6fddf279f?s=90&r=g&d=identicon"
              alt="profile_picture"
              class="profile_pic rounded-circle"
              id="profile_pic"
            />
          </a>

          <li class="nav-item btn-link mr-3">
            <a id="projects" href="projects" class="btn buttom-primary" :hover="{ true : currentPath === 'projects' }">Projetos</a>
          </li>

          <li class="nav-item btn-link mr-3">
            <a id="experiences" href="experiences" class="btn buttom-primary" :hover="{ true: currentPath === 'experiences' }">Experiências</a>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<style scoped>
/* Ajusta o menu */
.show > ul {
  margin-top: 1em;
  display: flex;
  flex-direction: column;
  align-items: center;
}

header {
  padding: 10px;
}
.profile_pic {
  width: 50px !important;
  height: 50px !important;

  transform: 0.2s;
}

.profile_pic:hover {
  filter: grayscale(0);
}

.profile-link {
  float: left;
}
</style>

<script>
import { boolean } from 'webidl-conversions'
import $ from 'jquery'

export default {
  props: {
    profile: {
      type: boolean,
      default: true,
    },
  },

  data() {
    return {
      isNavOpen: false,
      currentPath: "",
    }
  },

  methods: {
    showNav() {
      this.isNavOpen = !this.isNavOpen
      if (this.isNavOpen) {
        $('navbar-collapse')
          .addClass('d-flex')
          .addClass('flex-column')
          .addClass('align-items-center')
      }

      $('navbar-collapse')
        .removeClass('d-flex')
        .removeClass('flex-column')
        .removeClass('align-items-center')
    },
  },

  created() {
    // Atualiza o caminho atual quando a página é carregada
    this.currentPath = this.$route.name;
  },
  
  mounted() {
    setTimeout(() => {
      $(`#${this.currentPath}`).animate().addClass('isHere');
    }, 500);
  }
}
</script>