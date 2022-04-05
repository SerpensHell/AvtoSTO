<template>
  <div class="wrapper">
    <Header></Header>
    <LeftMenu></LeftMenu>
  </div>
</template>

<script>
import Header from "./Header";
import LeftMenu from "./LeftMenu";
export default {
name: 'Home',
components: {Header, LeftMenu}
}
</script>