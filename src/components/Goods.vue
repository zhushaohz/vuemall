<template lang="html">
<div class='f0'>
  <h1>ZZMall</h1>
  <div class='f05'></div>
  <div class='f10'>
  <ul class="nav nav-tabs justify-content-end">
    <li class="nav-item">
      <a class="nav-link" href="#"><shopping-cart-icon /> 购物车</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">我的订单</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">我的账户</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">联系我们</a>
    </li>
  </ul>
  </div>
  <div class='f20'>
      <div class='f21'>
          <a><zi-card hoverable style='height:90px'>
              美区小火箭
              <zi-button>加入购物车</zi-button><zi-button>立即购买</zi-button>
            </zi-card></a>
      </div>
      <div class='f21'>
          <a><zi-card hoverable style='height:90px'>美区Quan</zi-card></a>
      </div>
      <div class='f21'>
          <a><zi-card hoverable style='height:90px'>美区QuanX</zi-card></a>
      </div>
      <div class='f21'>
          <a><zi-card hoverable style='height:90px'>美区礼品卡$10</zi-card></a>
      </div>
  </div>
</div>
</template>
<style scoped>
h1 {
  font-weight: normal;
  position: absolute;
  left: 40px;
  top: 0px;
  padding: 10px;
  border: 0px solid #000;
}
.f05 {
  position: absolute;
  width: 50%;
  height: 30px;
  z-index: 999;
  right: 0;
  border: 0px solid #000;
  background-color: #fff;
}
.f10 {
  height: 50px;
  border: 0px solid #000;
}
a {
  margin-top: 40px;
  color: #000;
}
.f20 {
  width: 90%;
  margin: auto;
  margin-top: 50px;
  border: 0px solid #000;
}
.f21{
  width: 70%;
  margin-top: 15px;
}
</style>
