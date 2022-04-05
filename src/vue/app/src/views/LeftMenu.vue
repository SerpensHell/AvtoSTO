<template >
    <div class="wrapper" v-if="isOpen">
        <aside class="left-menu">
            <div class="menu-btn">
                <button @click="toggleElement"> <font-awesome-icon size="xl" icon="fa-solid fa-chevron-left" /> </button>
            </div>
        <div class="menu-list">
            <ul class="sidebar">
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

           </ul>
       </div>
    </aside>
 </div>


        <div class = "open-btn"  v-else="isOpen">
            <button @click="toggleElement"> <font-awesome-icon size="xl" icon="fa-solid fa-bars" /> </button>
        </div>


</template>

<script>
export default {
  name: "LeftMenu",

  data(){
    return {
        isOpen: true
        }
    },
    methods: {
        toggleElement() {
            this.isOpen = !this.isOpen
        }
    }
    }
 </script>

 <style src="../assets/style/leftmenu_style.css"></style>