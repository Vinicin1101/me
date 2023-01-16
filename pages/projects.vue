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
        class="
          card
          bg-white
          p-3
          nowrap
          flex-direction-column
          align-items-center
          justify-content-around
          text-center
        "
        href="/projects/cronopedia"
      >
        <div class="card-content-heading">
          <h3>Cronopédia</h3>
        </div>
        <div class="card-content-body">
          <p>
            Projeto para criação de artigos desenvolvido em conjunto com
            <a href="https://github.com/Tiago-Mart" class="text-success"
              >@Tiago</a
            >
            e @André
          </p>
        </div>
      </a>

      <a
        class="
          card
          bg-white
          p-3
          nowrap
          flex-direction-column
          align-items-center
          justify-content-around
          text-center
        "
        href="/projects/titulo"
      >
        <div class="card-content-heading">
          <h3>Titulo</h3>
        </div>
        <div class="card-content-body">
          <p>Descrição bolada</p>
        </div>
      </a>

      <a
        class="
          card
          bg-white
          p-3
          nowrap
          flex-direction-column
          align-items-center
          justify-content-around
          text-center
        "
        href="/projects/titulo"
      >
        <div class="card-content-heading">
          <h3>Titulo</h3>
        </div>
        <div class="card-content-body">
          <p>Descrição bolada</p>
        </div>
      </a>

      <a
        class="
          card
          bg-white
          p-3
          nowrap
          flex-direction-column
          align-items-center
          justify-content-around
          text-center
        "
        href="/projects/titulo"
      >
        <div class="card-content-heading">
          <h3>Titulo</h3>
        </div>
        <div class="card-content-body">
          <p>Descrição bolada</p>
        </div>
      </a>

      <a
        class="
          card
          bg-white
          p-3
          nowrap
          flex-direction-column
          align-items-center
          justify-content-around
          text-center
        "
        href="/projects/titulo"
      >
        <div class="card-content-heading">
          <h3>Titulo</h3>
        </div>
        <div class="card-content-body">
          <p>Descrição bolada</p>
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

/* ISSO É UM PROTÓTIPO */
.card::after {
  content: 'PROTÓTIPO';

  position: absolute;

  font-size: 38pt;

  rotate: 30deg;

  opacity: 0.3;
  color: rgb(255, 0, 247);
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