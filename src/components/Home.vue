<template lang="html">
  <div class="index-box">
    <header class="index-header">
      <a href="javascript:;" @click.stop="openMenu" ><span class="yo-ico">&#xe603;</span></a>
      <a href="javascript:;"><span class="yo-ico myicon">&#xe6ef;</span></a>
    </header>
    <section class="top-section">
      <ul>
        <li> 
          <p><span class="yo-ico myicon">&#xe66c;</span></p>
          <p><span class="num">0</span><span>min</span></p>
          <p><span>累计时长</span></p>
        </li>
        <li>
          <p><span class="yo-ico myicon">&#xe647;</span></p>
          <p><span class="num">00</span><span>″</span></p>
          <p><span>平均配速</span></p>
        </li>
        <li>
          <p><span class="yo-ico myicon">&#xe73c;</span></p>
          <p><span class="num">0</span><span></span></p>
          <p><span>累计次数</span></p>
        </li>
      </ul>
    </section>
    <section class="km">
      <div class="km-box">
        <span class="km-num">{{kmNum}}</span>
        <span class="km-text">km</span>
        <span>{{addKm}}</span>
      </div>
    </section>
    <section class="btn">
      <div class="btn-box" v-if="isGo" @click.stop="go">GO</div>
      <div class="btn-box" v-else @click.stop="stop">STOP</div>
    </section>
  </div>
</template>

<script >
    export default{
      data(){
        return{
          kmNum:"0.00",
          isGo:true,
          timer: null
        }
      },
      computed:{
        addKm(){
          if(this.$store.state.start){
            this.add()
            this.isGo = false
          }
        }
      },
      methods:{
        stop(){
          this.$store.commit('stop')
          console.log(this.$store.state.start)
          clearInterval(this.timer)
          this.isGo = true
          clearInterval(this.timer)
          this.kmNum = '0.00'
        },
        openMenu:function(){
         this.$store.commit('vuexOpenMenu')
        },
        go(){
          //跳转到开始跑步页面
          this.$router.push({name:'Go'})
        },
        add(){
          this.timer = setInterval(()=>{
            this.kmNum  = (parseFloat(this.kmNum)+0.01).toFixed(2)
            if(this.kmNum > 2){
              clearInterval(this.timer)
            }
          },1000)
        }
      },
      mounted(){
       // this.add()
       console.log(this.$store.state.start)
      }
    }
</script>

<style lang="scss" scoped>
  @import '../style/usage/app.scss';

  .index-box{
    span{
      color:rgba(255,255,255,.9);
    }
    .myicon{
      font-size:.22rem;
    }
    height:100%;
    width:100%;
    background:#fc782e;
    .index-header{
      @include flexbox();
      @include justify-content(space-between);
      padding:0.2rem 0.15rem 0;
      heigth:0.4rem;
    }
    .top-section{
      ul{
        margin-top:0.2rem;
        @include flexbox();
        @include justify-content(space-between);
        padding:0 .4rem;
        li{
          p{
             @include flexbox();
             @include justify-content(center);
             @include align-items(flex-end);

          }
          .num{
            font-size:.16rem;
          }
        }
      }
    }
    .km{
      @include flexbox();
      @include justify-content(center); 
       @include align-items(center);
      height:50%;
      .km-box{
         @include flexbox();
         @include align-items(flex-end);
        .km-num{
          font-size:0.7rem;
          color:#fff;
        }
        .km-text{
          padding-left:0.1rem;
          line-height:0.7rem;
        }
      }
    }

    .btn{
       @include flexbox();  
       @include justify-content(center);
       @include align-items(center);
       .btn-box{
          width:1.7rem;
          height:0.6rem;
          border:2px solid #fff;
          @include  border-radius(0.3rem);
          text-align:center;
          line-height:0.6rem;
          font-weight:900;
          font-size:0.2rem;
          color:#fff;
       }
    }
  }  
</style>
