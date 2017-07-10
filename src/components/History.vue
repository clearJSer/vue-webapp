<template lang="html">
  <div class="history-box">
    <div class="header">
      <a href="" class="menu"><span class="yo-ico">&#xe603;</span></a>
      跑步历史
    </div>
    <div class="date">
      <a href=""><span class="yo-ico">&#xe603;</span></a>
      <span>2017年7月</span>
      <a href=""><span class="yo-ico">&#xe603;</span></a>
    </div>
  </div>
</template>

<script >
    export default{}
</script>

<style lang="scss" scoped>
  @import '../style/usage/core/reset.scss';
  .history-box{
    width:100%;
    height:100%;
    .header{
      text-align:center;
      line-height:0.4rem;
      background:#3d4d6b;
      height:0.6rem;
      width:100%;
      padding-top:0.2rem;
      color:#fff;
      position:relative;
      .menu{
        position:absolute;
        left:0.1rem;
        top:0.2rem;
      }
    }

    .date{
      padding:0 .2rem;
      display:flex;
      justify-content:center;
      align-items:center;
      width:100%;
      height:0.4rem;
      background:#282f39;
      a{
        display:inline-block;
        width:0.2rem;
      }
      span{
        color:#fff;
        flex:1;
        text-align:center;
      }
    }
  }
</style>
