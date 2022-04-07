<template>
  <header class="header">
      <div class="header-content">
      <div class="top-menu">

        <div class="header-menu-btn">
            <button @click="toggleElement"> <font-awesome-icon size="xl" icon="fa-solid fa-bars" /> </button>

        </div>


          <div class="logo-left">
          <a><img src="../assets/img/logo.jpg"> </a>
          </div>


          <div class="navbar">
              <ul class="nav-navbar">

                  <li class="search-field">
                      <div class="header-search">
                          <span class="search-icon"><font-awesome-icon icon="fa-solid fa-magnifying-glass" /> </span>
                          <input type="search" placeholder="Поиск">
                      </div>
                  </li>

                  <li class="notification">
                      <button type="button">
                          <span class="notification-icon"><font-awesome-icon size="2x" icon="fa-solid fa-bell " /> </span>
                      </button>
                  </li>

                  <li class="account">
                      <button type="button">
                          <span class="account-item">
                              <img src="../assets/img/account.png">
                          </span>
                      </button>
                  </li>
              </ul>
          </div>

      </div>

      <div class="submenu" v-if = "isOpen">
        <div class="header-search">
            <span class="search-icon"><font-awesome-icon icon="fa-solid fa-magnifying-glass" /> </span>
            <input type="search" placeholder="Поиск">
        </div>

        <ul class="header-column-items">
            <li class="task-board-menu">
                <a class="task-board">
                    <span class="left-menu-txt">Доска задач</span>
                </a>
            </li>

            <li class="task-board-menu">
                <a class="task-board">
                    <span class="left-menu-txt">Мои заказы</span>
                </a>
            </li>

            <li class="schedule-menu">
                <a class="schedule">
                    <span class="left-menu-txt">Расписание</span>
                </a>
            </li>

            <li class="workers-menu">
                <a class="workers">
                    <span class="left-menu-txt">Работники</span>
                </a>
            </li>

            <li class="clients-menu">
                <a class="clients">
                    <span class="left-menu-txt">Клиенты</span>
                </a>
            </li>

            <li class="account-menu">
                <img src="../assets/img/account.png">
                <a class="account-header"> Имя пользователя</a>
            </li>
        </ul>
      </div>
     </div>
  </header>
</template>

<script>
export default {
  name: "Header",

   data(){
    return {
        isOpen: false
    }
   },
   methods: {
    toggleElement() {
        this.isOpen = !this.isOpen
        }
    }
}
    </script>

<style src="../assets/style/header_style.css"></style>