<template lang="html">
<div>
  <h1>{{msg}}</h1>
  <router-link to='./goods'><div class='go'>Go</div></router-link>
</div>
</template>
<script>
export default {
  name: 'Index',
  data () {
    return {
      msg: 'Welcome to ZZMall !'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1{
  font-weight: normal;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  margin-top: 100px;
}
.go{
  width: 150px;
  margin: auto;
  color: #000;
  padding: 20px;
  font-size: 30px;
  /*font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;*/
  /*font-family: 'Courier New', Courier, monospace;*/
  /*font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;*/
  /*font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;*/
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  /*font-family: Arial, Helvetica, sans-serif;*/
  border: 1px solid #000;
  border-radius: 10px;
  margin-top: 100px;
}
.go:hover{
  color: #37a4a4;
  border: 1px solid #37a4a4;
}
</style>
