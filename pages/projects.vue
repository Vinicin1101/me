<template>
  <main>
    <Header />

    <div
      class="
        container
        mt-4
        mr-auto
        d-flex
        flex-wrap
        gap-4
        justify-content-center
      "
    >
      <a
        v-bind="c"
        v-for="c in projetos"
        :key="c"
        :href="`/project/${c.path}`"
        class="card retro p-3 text-center"
      >
        <div class="card-content-heading">
          <h3>{{ c.title }}</h3>
        </div>
        <div class="card-content-body">
          <p>{{ c.description }}</p>
        </div>
      </a>
    </div>

    <Footer />
  </main>
</template>
  
  <script>
export default {
  head() {
    return {
      title: 'Meus projetos',
    }
  },

  data() {
    return {
      projetos: [
        {
          title: 'Escala Populacional em 3D',
          description:
            'Um pequeno projeto para aprender mais sobre a tecnologia ThreeJs',
          path: 'pj1',
        },
        {
          title: 'API Express',
          description:
            'Inicio do desenvolvimento de uma pequena API para autenticação de usuários em aplicações web',
          path: 'pj2',
        },
        {
          title: 'Cronopédia',
          description: 'Projeto de conclusão do curso de informática',
          path: 'pj3',
        },
      ],
    }
  },
}
</script>

<style scoped>
.card {
  text-decoration: none;

  width: 300px;
  height: 200px;

  border-radius: 0.25rem;
  border: 1px solid #000;

  transition: 0.2s !important;
}

.card.retro:hover {
  text-decoration: none;

  width: 300px;
  height: 200px;

  border: 1px solid #fff;
  background: #ffabee;
  box-shadow: 0.4rem 0.4rem #000;

  border: 1px solid #000;

  transform: translate(-0.4rem, -0.4rem) !important;
}

.card.neon:hover {
  box-shadow: rgba(240, 46, 170, 0.35) 5px 5px,
    rgba(240, 46, 170, 0.2) 10px 10px, rgba(240, 46, 170, 0.1) 15px 15px,
    rgba(240, 46, 170, 0.05) 20px 20px;

  transform: translate(-0.25rem, -0.25rem) !important;
}

.card-content-heading {
  color: #333;
}

.card:hover .card-content-heading {
  color: #000;
}

.card-content-body p {
  color: rgb(118, 104, 128);
}

.card:hover .card-content-body p {
  color: #000;
}
</style>