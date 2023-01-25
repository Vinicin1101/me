<template>
  <div class="container my-5">
    <h1 class="text-center">{{ project.title }}</h1>
    <div class="row">
      <div class="col-lg-6">
        <img :src="project.image" class="img-fluid" />
      </div>
      <div class="col-lg-6">
        <h2>Descrição</h2>
        <p>{{ project.description }}</p>
        <h2>Detalhes</h2>
        <ul>
          <li>Categoria: {{ project.category }}</li>
          <li>Link: <a :href="project.link">GitHub</a></li>
          <li>
            App: <a :href="project.link">{{ project.test }}</a>
          </li>
        </ul>

        <div class="">
          <h2>Tecnologias</h2>
          <ul>
            <li
              v-for="t in project.technologies"
              :class="`
                ${t.type}
                badge badge-primary
                font-weight-light
                pl-2
                pr-2
                pt-1
                pb-1
                mr-2
                `"
              :key="t"
            >
              {{ t.name }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: this.project.title,
    }
  },
  data() {
    return {
      project: {
        title: 'Title',
        image: 'https://via.placeholder.com/600x400',
        description: 'Uma descrição detalhada',
        releaseDate: '01 de janeiro de 2020',
        category: 'Desenvolvimento Web',
        link: 'https://github.com/vinicin1101/world-popularion',
        test: 'https://3d.vinicin.host',
        technologies: [
          { name: 'JavaScript', type: 'js' },
          { name: 'ThreeJs', type: '3D' },
          { name: 'ExpressJs', type: 'express' },
        ],
      },
    }
  },
}
</script>

<style>
/* Adicione estilos adicionais aqui */
</style>
