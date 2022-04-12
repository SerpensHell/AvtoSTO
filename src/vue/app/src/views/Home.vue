<template>
  <div class="wrapper">
    <Header></Header>
    <LeftMenu></LeftMenu>
    <Board></Board>

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