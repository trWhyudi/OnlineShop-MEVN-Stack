<template>
  <div class="product-container">
    <img
      class="product-image"
      :src="`http://localhost:8000${item.imageUrl}`"
      alt=""
    />
    <div class="details-wrap">
      <h3>{{ item.name }}</h3>
      <p>{{ formatPrice(item.price) }}</p>
    </div>
    <button class="remove-button" @click="$emit('remove-item', item.code)">
      Remove
    </button>
  </div>
</template>

<script>
export default {
  props: {
    item: Object,
  },

  methods: {
    formatPrice(price) {
      return new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
        minimumFractionDigits: 0,
      }).format(price);
    },
  },
};
</script>

<style scoped>
.product-container {
  align-content: "center";
  border-bottom: 1px solid #ddd;
  display: flex;
  padding: 16px;
  width: 100%;
}

.product-image {
  flex: 1;
  height: 100px;
  max-width: 100px;
}

.details-wrap {
  padding: 0 16px;
  flex: 3;
}

.remove-button {
  flex: 1;
  margin: auto;
}
</style>
