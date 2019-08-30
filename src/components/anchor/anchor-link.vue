<template>
    <div class="mine-anchor-link">
        <a :href="href">{{title}}</a>
        <slot></slot>
    </div>
</template>

<script>
  const sharpMatcherRegx = /#([^#]+)$/;
  export default {
    name: "mine-anchor-link",
    data() {
      return {
        currentLink: '', //当前锚点连接
        currentId: '',
        scrollContainer: null //滚动容器，一般是window
      }
    },
    props: {
      href: {
        type: String,
      },
      title: {
        type: String,
        required: true
      }
    },
    methods: {
      hashChange() {
        let url = window.location.href;
        const sharpLinkMatch = sharpMatcherRegx.exec(url);
        if (!sharpLinkMatch) return;
        this.currentLink = sharpLinkMatch[0];
        this.currentId = sharpLinkMatch[1];
      },
      handlerScroll(e) {
        const scrollTop = document.documentElement.scrollTop || document.body.scrollTop || e.target.scrollTop;
        console.log('Hahaha',scrollTop)
      }
    },
    mounted() {
      window.addEventListener('scroll', this.handlerScroll);//监听滚动事件
      window.addEventListener('hashchange', this.handlerScroll) //监听hash改变事件
    }
  }
</script>

<style>

</style>