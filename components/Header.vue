<template>
  <header class="d-flex bg-black">
    <nav class="navbar navbar-expand-sm navbar-dark justify-content-center bg-black mx-auto">
      <div class="navbar-toggler">
        <span class="btn buttom-primary nav-to" @click="showNav()">X</span>
      </div>
      <div
        class="collapse navbar-collapse"
        id="navbarNav"
        :class="{ show: isNavOpen }"
      >
        <ul class="navbar-nav">
          <li class="nav-item btn-link mr-3">
            <a id="projects" href="projects" class="btn buttom-primary" :hover="{ true : currentPath === 'projects' }">Projetos</a>
          </li>
          
          <li class="nav-item btn-link mr-3">
            <a id="index" href="/" class="btn buttom-primary" :hover="{ true : currentPath === 'index' }">Home</a>
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