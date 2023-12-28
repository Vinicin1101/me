<template>
    <div class="experiences p-2 my-4">
        <h4>{{ exp.enterprise }}</h4>
        <p class="font-weight-light">
            {{ exp.role }}
        <ul class="tags d-flex flex-wrap mb-2 mt-2 gap-3 p-0">
            <li v-for="tag in exp.tags" :key="tag"
                :class="`${tag.type} badge badge-primary btn buttom-secondary font-weight-light pl-2 pr-2 pt-1 pb-1`">
                {{ tag.value }}
            </li>
        </ul>
        </p>
        <p>{{ exp.desc }}</p>
    </div>
</template>

<script>
export default {
  props: {
    exp: {
      type: Object,
      default: Object(),
    },
  },

  data() {
    return {
      exp: Object(),
    }
  },
}
</script>