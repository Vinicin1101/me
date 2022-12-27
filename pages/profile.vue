<template>
  <main>
    <Header :profile="false" />
    <ProfileHeader />
    <article class="body">
      <p>
        Estou trabalhando nisso, peço que volte mais tarde.
        <i class="bx bxs-heart"></i>
      </p>
    </article>
    <Footer />
  </main>
</template>

<script>
export default {
  head() {
    return {
      title: 'Sobre mim',
    }
  },
}
</script>