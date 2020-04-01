<template lang="html">
<div class='f0'>
  <h1>ZZMall</h1>
  <div class='f05'></div>
  <div class='f10'>
  <ul class="nav nav-tabs justify-content-end">
    <li class="nav-item">
      <a class="nav-link" href="#">购物车</a>
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
  <zi-card shadow><p>ddd</p></zi-card><br>
  <zi-card hoverable><p>美区小火箭</p></zi-card>
  </div>
</div>
</template>
<style scoped>
h1{
  font-weight: normal;
  float: left;
  margin-left: 40px;
  padding: 10px;
  border: 0px solid #000;
}
.f05{
    position: absolute;
    width: 50%;
    height: 30px;
    z-index: 999;
    right: 0;
    border: 0px solid #000;
    background-color: #fff;
}
.f10{
    height: 50px;
    border: 0px solid #000;
}
a{
    margin-top: 40px;
    color: #000;
}
.f20{
    margin-top: 50px;
}
card{
    width: 200px;
}
</style>
