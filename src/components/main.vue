<template>
    <section class="main">
        <div class="container main-content">
            <div class="main-top">
                <div class="main-top-content">
                    <h1>{{ title }}</h1>
                    <h4>{{ subtitle }}</h4>
                    <button class="btn">
                        <h6>{{ btn_pickUp }}</h6>
                    </button>
                </div>
                <div class="main-top-image">
                    <img src="@/assets/top-image.png">
                </div>
            </div>
            <div class="main-content">
                <h4 class="main-content-title">{{ info_content }}</h4>
                <div class="main-content-autoTitle">
                    <h4><span v-for="auto in getAutoItems" :key="auto.id">{{ auto.name }}<span v-if="auto.id < 22">,&#32;
                            </span>
                            <span v-else>.</span></span>
                    </h4>
                </div>
                <div class="main-content-autoImg">
                    <img v-for="auto in   getAutoItems  " :key="auto.id" :src="require(`@/assets/marok/${auto.logo}`)"
                        alt="">
                </div>
            </div>
        </div>

    </section>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    name: 'mainBlock',
    data() {
        return {
            title: 'ЧТО ВЫБРАТЬ ЗАЩИЩАЯ АВТОМОБИЛЬ?',
            subtitle: 'УЖЕ УСТАНОВЛЕНА МЕХАНИЧЕСКАЯ ЗАЩИТА?',
            btn_pickUp: 'ПОДОБРАТЬ ЗАМОК',
            info_content: 'Ведущие специалисты в сфере защиты автомобилей от угона советуют использовать от угона электронные и механические устройства в комплексе. Механические блокираторы – оптимальный выбор, который отлично сочетается с сигнализацией и автозапуском, а так же со штатной базовой системой защиты. Доступно:',

        }
    },
    computed: {
        ...mapGetters(['getAutoItems'])
    }

}
</script>

<style lang="scss" scoped>
@import "@/scss/_vars";

.main {
    background-color: #121212;
    background-image: url('@/assets/main_background.png');
    background-repeat: no-repeat;
    background-position-y: -112px;
    background-position-x: center;
    padding-bottom: 53px;

    &-top {
        display: flex;
        justify-content: center;
        gap: 17px;
        padding-bottom: 76px;

        &-content {
            padding-top: 93px;

            & h1 {
                padding-bottom: 6px;
            }

            & h4 {
                padding-bottom: 45px;
                color: $nobel;
            }
        }
    }

    &-content {
        &-title {
            font-weight: 500;
            text-align: center;
            padding-bottom: 37px;
        }

        &-autoTitle {
            text-transform: uppercase;
            text-align: center;
        }

        &-autoImg {
            padding-top: 52px;
            display: grid;
            column-gap: 20px;
            row-gap: 52px;
            grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
            align-items: center;
            justify-items: center;

            & img {
                width: 100px;
            }
        }
    }
}
</style>