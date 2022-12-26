<template>
  <main>
    <Header :profile="false" />
    <ProfileHeader />
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