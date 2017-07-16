<template>
  <div id="app" @click="clickHideMenu">

    <router-view></router-view>
    
    <transition name="slideInRight">
      <div class="menu-box" v-bind:class="openMenu">
        <header>
          <a href="" class='userHeader'>&nbsp;这里是头像</a>
          <dl>
            <dt>红色柠檬</dt>
            <dd><img src="../assets/images/vip.jpg" alt=""></dd>
          </dl>
        </header>
        <section>
          <ul>
            <router-link tag="li" exact :to="tab.router" :key="i" v-for="(tab,i) in tagBarData" @click.native="changeTab(i)" active-class="active">
             <span class="yo-ico menu-ico" v-html="tab.iconText"></span>
             <span class="name">{{tab.title}}</span>
            </router-link>
          </ul>
        </section>
       </div>
      </transition>
    </div>
</template>

<script>
const tagBarData = [
  {
    title:'运  动',
    iconText:'&#xe601;',
    router:'/home'
  },
  {
    title:'跑步历史',
    iconText:'&#xf02be;',
    router:'/history'
  },
  {
    title:'跑 友 圈',
    iconText:'&#xe77d;',
    router:'/friends'
  },
  {
    title:'活 动',
    iconText:'&#xe604;',
    router:'/activity'
  },
  {
    title:'勋 章 馆',
    iconText:'&#xe617;',
    router:'/medal'
  },
   {
    title:'通 讯 录',
    iconText:'&#xe678;',
    router:'/addressList'
  },
   {
    title:'我  的',
    iconText:'&#xe507;',
    router:'/my'
  }
]
export default {
  name: 'app',
  data(){
    return{
      tagBarData : tagBarData,
      hideMenu : false,
      showMenu :false
    }
  },
  computed:{
    openMenu(){
      if(this.$store.state.isOpenMenu=="first"){
        //app 首次打开不展示菜单
        // return{
        //   slideInRight:false,
        //   slideInLeft:true
        // }
        return;
      }else if(this.$store.state.isOpenMenu){
        return{
          slideInRight:true,
          slideInLeft:false
        }
      }else{
        return{
          slideInRight:false,
          slideInLeft:true
        }
      }
    }
  },
  mounted(){
  },
  methods:{
    changeTab:function(i){
      this.$store.commit('vuexCloseMenu')
    },
    clickHideMenu(){
      this.$store.commit('vuexCloseMenu')
    }
  }
}
</script>

<style lang="scss">
  @import '../style/usage/app.scss';
  @font-face {
    font-family: 'yofont';
    src: url('../assets/iconfont.woff') format('woff'),
         url('../assets/iconfont.ttf') format('truetype');
  }
  #app {
    height:100%;
    width:100%;
    position:relative;
  }

  $menu-background :#33333b;
  .menu-box{
    position:absolute;
    top:0;
    left:-80%;
    @include flexbox();
    @include flex-direction(column)
    width:80%;
    height:100%;
    background:$menu-background;
    padding-top:.3rem;
    header{
      height:.6rem;
      width:100%;
      padding-left:0.2rem;
      @include flexbox();
      a{
        display:block;
        width:.5rem;
        height:.5rem;
        background:#fff;
        @include border-radius(50%)
      }
      dl{
        margin-left:0.2rem;
        dt{
          color:#fff;
          font-size:.14rem;
        }
        dd{
          img{
            width:0.6rem;
            height:0.2rem;
          }
        }
      }
    }

    section{
      ul{
        li{
          @include flexbox();
          @include align-items(center)
          @include border(0 0 0 8px,$menu-background)
          padding-left:0.2rem;
          height:0.5rem;
          width:100%;
        .menu-ico{
            margin-right:0.1rem;
          font-size:0.2rem;
        }
        .name{
          line-height:.3rem;
          margin-top:0.04rem;
        }
          span{
            color:#fff;
            font-size:0.2rem;
          }
        }
        li.active{
          background:#666;
          @include  border(0 0 0 8px,orange);
        }
      }
    }
    
  }

  @keyframes slideInLeft {
    from {
      left: 0%;
      visibility: visible;
    }

    to {
      left:-80%;
    }
  }

  .slideInLeft {
    animation: slideInLeft 0.3s;
    animation-fill-mode: forwards;
  }
  @keyframes slideInRight {
    from {
      left: -80%;
      visibility: visible;
    }
    to {
      left: 0%;
    }

  }
  .slideInRight {
    animation: slideInRight 0.3s;
    animation-fill-mode: forwards;
  }

</style>
