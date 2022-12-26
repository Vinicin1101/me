<template>
  <header>
    <a href="profile" class="profile-link" v-if="profile">
      <img
        src="http://www.gravatar.com/avatar/f8e067eb1582177fb3b223a6fddf279f?s=90&r=g&d=identicon"
        alt="profile_picture"
        class="profile_pic rounded-circle"
        id="profile_pic"
      />
    </a>
    <nav class="btns d-flex justify-content-center mb-3">
      <ul>
        <li class="btn-link mr-3">
          <a href="#" class="btn btn-primary">Home</a>
        </li>

        <li class="btn-link mr-3">
          <a href="projects" class="btn btn-primary">Projetos</a>
        </li>
      </ul>
    </nav>
    <div class="clearfix"></div>
  </header>
</template>

<style scoped>
header {
  padding: 10px;
}
#profile_pic {
  width: 50px;
  height: 50px;
}

.profile-link {
  float: left;
  line-height: 65px;
}
</style>

<script>
import { boolean } from 'webidl-conversions'

export default {
  props: {
    profile: {
      type: boolean,
      default: true,
    },
  },
}
</script>