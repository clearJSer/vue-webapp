<template lang="html">
  <div class="history-box" id="history-box">
    <my-header title="跑步历史" :showmenu="showmenu"/>
    <div class="date">
      <a href=""><span class="yo-ico pre">&#xe602;</span></a>
      <span >2017年7月</span>
      <a href=""><span class="yo-ico">&#xe602;</span></a>
    </div>

    <div class="report">
        <img src="../assets/images/report.png" alt="运动数据tong">
    </div>
    <div class="tip">
      <p>当月无数据</p>
      <div class="point"></div>
    </div>
    
    <div class="report">
        <img src="../assets/images/pic1.png" alt="运动数据tong" class="run">
    </div>
  </div>
</template>

<script >
  import Header from './Header'
  export default{
    data(){
      return{
      "showmenu": true
      }
    },
    components: {
      'my-header': Header
    }
  }
</script>

<style lang="scss" scoped>
  @import '../style/usage/app.scss';
  .history-box{
    width:100%;
    height:100%;
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
      .pre{
        transform:rotate(30deg);
      }
    }

    .report{
      img{
        width:100%;
        height:100%;
      }
    }
    .tip{
      @include flexbox()
      @include flex-direction(column)
      @include align-items(center)
      padding:0.1rem 0;
      p{
        color:#5a808d;
        font-size:0.15rem;
      }
      .point{
          margin-top:.1rem;
          width:0.15rem;
          height:0.15rem;
          @include border-radius(50%);
          background:#5a808d;
      }
      .run{
        @include border(.05rem solid #fff)
      }
    }

  }
</style>
