<template>
  <div class="footer">
    <div class="footer-logo">
      <img src="/imgs/logo-footer.png" alt="">
      <p>小米商城</p>
    </div>
    <div class="footer-link">
      <a href="">河畔一角主页</a><span>|</span>
      <a href="">Vue全栈课程</a><span>|</span>
      <a href="">React全家桶课程</a><span>|</span>
      <a href="">微信支付专项课程（H5+小程序+Node+Mongo）</a>
    </div>
    <div class="Copyright">Copyright ©2020 <span class="domain">mi.futurefe.com</span> All Rights Reserved.</div>
  </div>
</template>
<script>
export default {
  name:'nav-footer'
}
</script>
<style scoped lang="scss">
  .footer{
    height:234px;
    border-top:4px solid #FF6600;
    background-color: #333333;
    color: #999999;
    font-size:16px;
    text-align: center;
    .footer-logo{
      margin:46px 0 31px 0;
      img{
        width:53px;
        height:36px;
        margin-bottom:13px;
      }
    }
    .footer-link{
      a{
        color: #999999;
        display:inline-block;
      }
      span{
        display: inline-block;
        margin:0 10px;
      }
    }
    .Copyright{
      margin-top:13px;
      .domain{
        color:#FF6600;
      }
    }
  }
</style>