<template>
  <section>
    <nuxt-content :document="page" />
  </section>
</template>

<script>
export default {
  data() {
    return { page: null };
  },
  props: {
    sectionName: {
      type: String,
      required: true,
    },
  },
  async fetch() {
    this.page = await this.$nuxt.context
      .$content(this.$i18n.locale, "sections", this.sectionName)
      .fetch();
  },
};
</script>