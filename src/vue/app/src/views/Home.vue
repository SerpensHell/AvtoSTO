<template>
  <div class="wrapper">
    <Header></Header>


  </div>
</template>

<script>
import Header from "./Header";
import LeftMenu from "./LeftMenu";
import Board from "./Board";
export default {
name: 'Home',
components: {Header, LeftMenu, Board}
}
</script>