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
        align-items-center
        justify-content-center
      "
    >
      <a
        v-bind="c"
        v-for="c in projects"
        :key="c"
        :href="`/project/${c.ref_id}`"
        class="card bg-white p-3 text-center"
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
import $axios from 'axios'
export default {
  head() {
    return {
      title: 'Meus projects',
    }
  },

  async asyncData() {
    const { data } = await $axios.get('http://127.0.0.1:3000/api/my/projects')

    return { projects: data.projects }
  },
}
</script>

<style scoped>
.card {
  text-decoration: none;

  width: 300px;
  height: 200px;

  border-bottom: 2px solid blueviolet;
  border-right: 2px solid blueviolet;
  border-top: 2px solid rgb(238, 103, 238);
  border-left: 2px solid rgb(238, 103, 238);

  transition: all 0.5s;
}

.card:hover {
  border-top: 2px solid blueviolet;
  border-left: 2px solid blueviolet;
  border-bottom: 2px solid rgb(238, 103, 238);
  border-right: 2px solid rgb(238, 103, 238);
  box-shadow: rgba(240, 46, 170, 0.4) 5px 5px, rgba(240, 46, 170, 0.3) 10px 10px,
    rgba(240, 46, 170, 0.2) 15px 15px, rgba(240, 46, 170, 0.1) 20px 20px,
    rgba(240, 46, 170, 0.05) 25px 25px;
}
.card-content-heading {
  color: blueviolet;
}

.card:hover .card-content-heading h3 {
  text-decoration: underline;
}

.card-content-body p {
  color: rgb(118, 104, 128);
}
</style>