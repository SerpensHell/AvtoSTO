<template>
  <header class="header">
      <div class="header-content">
      <div class="top-menu">

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
      </div>
  </header>
</template>

export default {
  name: "Header"
}

<style src="../assets/style/header_style.css"></style>