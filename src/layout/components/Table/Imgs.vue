<template>
  <span class="img">
    <img v-for="(img, key) in imgs" :key="key" :src="img" :alt="img" @click="showImg(img)" />

    <el-dialog title="图片" :visible.sync="show_img" style="text-align: center">
      <el-carousel trigger="click">
        <el-carousel-item v-for="(img, key) in imgs" :key="key">
          <img :src="img" alt="" class="show-img">
        </el-carousel-item>
      </el-carousel>
    </el-dialog>
  </span>
</template>

<script>
export default {
  name: "Imgs",
  props: {
    imgs: Array
  },
  data() {
    return {
      show_img: false,
      c_img: ""
    };
  },
  watch: {
    imgs(img) {
      let width = 100 / 3;
      document
        .querySelector(".img img")
        .setAttribute("style", `width: ${width}%`);
    }
  },
  methods: {
    showImg(img) {
      this.c_img = img;
      this.show_img = true;
    }
  }
};
</script>
<style>
.img > img {
  width: 30%;
  height: 50px;
  margin-left: 10px;
}
.dialog_img {
  max-width: 100%;
  max-height: 100%;
}
.show-img {
    width: auto;
    height: auto;
    max-width: 100%;
    max-height: 100%;
}
</style>


