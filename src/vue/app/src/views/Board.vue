<template>
    <div class="board">
        <div class="tasks-list-pc" >
            <div class="column-pc">
                <div class="list-header-pc">
                    <h2>Нужно сделать</h2>
                    <div class="task-composer-pc">
                        <a class="open-task-composer-pc">
                            <span class="icon-add-pc"><font-awesome-icon icon="fa-solid fa-plus" /></span>
                            <span class="add-a-task-pc">Добавить заказ</span>
                        </a>
                    </div>
                </div>

                <div class="tasks-field-pc">
                    <div class="task-card-pc">
                        <div class="task-pc">
                            <a>
                                <div class="task-content-pc">
                                    <div class="line1-pc">
                                        <div class="task-id-pc"># 388 </div>
                                        <div class="client-fio-pc">Тупикин Н.С.</div>
                                        <div class="edit-pc"> <font-awesome-icon icon="fa-solid fa-pencil" /></div>
                                    </div>
                                    <div class="car-brand-pc">Audi G8</div>
                                    <div class="plait-pc"><div class="number-pc"> A 777 AA </div> <div class="region-pc"> 31 </div></div>
                                    <div class="task-description-pc">Замена колодок заднего двигателя</div>
                                    <div class="line4-pc">
                                        <div class="master-fio-pc">Забелин А.Н.</div>
                                        <div class="price-pc">100000 <font-awesome-icon icon="fa-solid fa-ruble-sign" /> </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div class="column-pc">
                <div class="list-header-pc">
                    <h2>В процессе</h2>
                </div>
                <div class="tasks-field-pc">
                    <div class="task-card-pc">
                        <div class="task-pc">
                            <a>
                                <div class="task-content-pc">
                                    <div class="line1-pc">
                                        <div class="task-id-pc"># 388 </div>
                                        <div class="client-fio-pc">Тупикин Н.С.</div>
                                        <div class="edit-pc"> <font-awesome-icon icon="fa-solid fa-pencil" /></div>
                                    </div>
                                    <div class="car-brand-pc">Audi G8</div>
                                    <div class="plait-pc"><div class="number-pc"> A 777 AA </div> <div class="region-pc"> 31 </div></div>
                                    <div class="task-description-pc">Замена колодок заднего двигателя</div>
                                    <div class="line4-pc">
                                        <div class="master-fio-pc">Забелин А.Н.</div>
                                        <div class="price-pc">100000 <font-awesome-icon icon="fa-solid fa-ruble-sign" /> </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>


            <div class="column-pc">
                <div class="list-header-pc">
                    <h2>Готово</h2>
                </div>
                <div class="tasks-field-pc">
                    <div class="task-card-pc">
                        <div class="task-pc">
                            <a>
                                <div class="task-content-pc">
                                    <div class="line1-pc">
                                        <div class="task-id-pc"># 388 </div>
                                        <div class="client-fio-pc">Тупикин Н.С.</div>
                                        <div class="edit-pc"> <font-awesome-icon icon="fa-solid fa-pencil" /></div>
                                    </div>
                                    <div class="car-brand-pc">Audi G8</div>
                                    <div class="plait-pc"><div class="number-pc"> A 777 AA </div> <div class="region-pc"> 31 </div></div>
                                    <div class="task-description-pc">Замена колодок заднего двигателя</div>
                                    <div class="line4-pc">
                                        <div class="master-fio-pc">Забелин А.Н.</div>
                                        <div class="price-pc">100000 <font-awesome-icon icon="fa-solid fa-ruble-sign" /> </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>



        <div class="tasks-list-mobile" >
            <div class="button-column-mobile">
                <div class="button-name-mobile"> <h2>Нужно сделать</h2> </div>
                <div class="column-open-btn-mobile">
                    <button @click="toggleElement1"> <font-awesome-icon icon="fa-solid fa-chevron-down" /> </button>
                </div>
            </div>

            <div class="column-mobile" v-if="isOpen1">
                <div class="list-header-mobile">
                    <div class="task-composer-mobile">
                        <a class="open-task-composer-mobile">
                            <span class="icon-add-mobile"><font-awesome-icon icon="fa-solid fa-plus" /></span>
                            <span class="add-a-task-mobile">Добавить заказ</span>
                        </a>
                    </div>
                </div>

                <div class="tasks-field-mobile">
                    <div class="task-card-mobile">

                        <div class="task-mobile">
                            <a>
                                <div class="task-content-mobile">
                                    <div class="line1-mobile">
                                        <div class="task-id-mobile"># 388 </div>
                                        <div class="client-fio-mobile">Тупикин Н.С.</div>
                                        <div class="edit-mobile"><font-awesome-icon icon="fa-solid fa-pencil" /></div>
                                    </div>
                                    <div class="car-brand-mobile">Audi G8</div>
                                    <div class="plait-mobile"><div class="number-mobile"> A 777 AA </div> <div class="region-mobile"> 31 </div></div>
                                    <div class="task-description-mobile">Замена колодок заднего двигателя</div>
                                    <div class="line4-mobile">
                                        <div class="master-fio-mobile">Забелин А.Н.</div>
                                        <div class="price-mobile">100000 <font-awesome-icon icon="fa-solid fa-ruble-sign" /> </div>
                                    </div>
                                </div>
                            </a>
                        </div>

                        <div class="task-mobile">
                            <a>
                                <div class="task-content-mobile">
                                    <div class="line1-mobile">
                                        <div class="task-id-mobile"># 388 </div>
                                        <div class="client-fio-mobile">Тупикин Н.С.</div>
                                        <div class="edit-mobile"><font-awesome-icon icon="fa-solid fa-pencil" /></div>
                                    </div>
                                    <div class="car-brand-mobile">Audi G8</div>
                                    <div class="plait-mobile"><div class="number-mobile"> A 777 AA </div> <div class="region-mobile"> 31 </div></div>
                                    <div class="task-description-mobile">Замена колодок заднего двигателя</div>
                                    <div class="line4-mobile">
                                        <div class="master-fio-mobile">Забелин А.Н.</div>
                                        <div class="price-mobile">100000 <font-awesome-icon icon="fa-solid fa-ruble-sign" /> </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>


            <div class="button-column-mobile">
                <div class="button-name-mobile"> <h2>В процессе</h2> </div>
                <div class="column-open-btn-mobile">
                    <button @click="toggleElement2"> <font-awesome-icon icon="fa-solid fa-chevron-down" /> </button>
                </div>
            </div>
            <div class="column-mobile" v-if="isOpen2">
                <div class="tasks-field-mobile">
                    <div class="task-card-mobile">
                        <div class="task-mobile">
                            <a>
                                <div class="task-content-mobile">
                                    <div class="line1-mobile">
                                        <div class="task-id-mobile"># 388 </div>
                                        <div class="client-fio-mobile">Тупикин Н.С.</div>
                                        <div class="edit-mobile"> <font-awesome-icon icon="fa-solid fa-pencil" /></div>
                                    </div>
                                    <div class="car-brand-mobile">Audi G8</div>
                                    <div class="plait-mobile"><div class="number-mobile"> A 777 AA </div> <div class="region-mobile"> 31 </div></div>
                                    <div class="task-description-mobile">Замена колодок заднего двигателя</div>
                                    <div class="line4-mobile">
                                        <div class="master-fio-mobile">Забелин А.Н.</div>
                                        <div class="price-mobile">100000 <font-awesome-icon icon="fa-solid fa-ruble-sign" /> </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div class="button-column-mobile">
                <div class="button-name-mobile"> <h2>Готово</h2> </div>
                <div class="column-open-btn-mobile">
                    <button @click="toggleElement3"> <font-awesome-icon icon="fa-solid fa-chevron-down" /> </button>
                </div>
            </div>
            <div class="column-mobile" v-if="isOpen3">
                <div class="tasks-field-mobile">
                    <div class="task-card-mobile">
                        <div class="task-mobile">
                            <a>
                                <div class="task-content-mobile">
                                    <div class="line1-mobile">
                                        <div class="task-id-mobile"># 388 </div>
                                        <div class="client-fio-mobile">Тупикин Н.С.</div>
                                        <div class="edit-mobile"> <font-awesome-icon icon="fa-solid fa-pencil" /></div>
                                    </div>
                                    <div class="car-brand-mobile">Audi G8</div>
                                    <div class="plait-mobile"><div class="number-mobile"> A 777 AA </div> <div class="region-mobile"> 31 </div></div>
                                    <div class="task-description-mobile">Замена колодок заднего двигателя</div>
                                    <div class="line4-mobile">
                                        <div class="master-fio-mobile">Забелин А.Н.</div>
                                        <div class="price-mobile">100000 <font-awesome-icon icon="fa-solid fa-ruble-sign" /> </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: "Board",

  data(){
    return {
        isOpen1: false,
        isOpen2: false,
        isOpen3: false,
        }
    },
    methods: {
        toggleElement1() {
            this.isOpen1 = !this.isOpen1
        },
        toggleElement2() {
            this.isOpen2 = !this.isOpen2
        },
        toggleElement3() {
            this.isOpen3 = !this.isOpen3
        }
    }
  }
 </script>

<style src="../assets/style/board_style.css"></style>