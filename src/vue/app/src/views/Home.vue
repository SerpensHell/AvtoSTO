<template>
  <div class="wrapper">
    <Header></Header>
    <LeftMenu></LeftMenu>
    <Board></Board>
    <Schedule></Schedule>

  </div>
</template>

<script>
import Header from "./Header";
import LeftMenu from "./LeftMenu";
import Board from "./Board";
import Schedule from "./Schedule";
export default {
name: 'Home',
components: {Header, LeftMenu, Board, Schedule}
}
</script>