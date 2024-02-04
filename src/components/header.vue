<template>
    <header class="header">
        <div class="container nav">
            <div class="nav_left">
                <svg width="132.000000" height="70" viewBox="0 0 132 70" fill="none">
                    <path class="logo" />
                </svg>
                <div class="nav_title">
                    <h6>{{ title }}</h6>
                    <h6>{{ subtitle }}</h6>
                </div>
            </div>
            <div class="nav_right">
                <a v-bind:href="'tel:' + tel">
                    <h4>{{ tel }}</h4>
                </a>
                <a v-bind:href="'viber://chat?number=' + mobTel">
                    <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path class="viber" />
                    </svg>
                </a>
                <a v-bind:href="'whatsapp://send?phone=' + mobTel">
                    <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path class="whastapp" />
                    </svg>
                </a>
                <button>
                    {{ btn_call }}
                </button>
            </div>

        </div>
    </header>
</template>

<script>

export default {
    name: 'headerBlock',
    data() {
        return {
            title: 'Гарант-СПБ',
            subtitle: 'Официальный дистрибьютор ООО "ФИЛМ"',
            btn_call: 'Заказать звонок',
            tel: '+7(812)989-42-32',
            mobTel: '79270000000',
        }
    },
}
</script>

<style lang="scss" scoped>
@import "@/scss/_vars";

.header {
    background-color: $backgroundBlack;
}


.nav {
    height: 141px;
    display: flex;
    justify-content: space-around;
    align-items: center;

    &_left {
        display: flex;
        align-items: center;
        gap: 7.8px;
        padding-right: 10px;
    }

    &_title h6 {
        font-weight: 600;
    }

    &_right {
        display: flex;
        align-items: center;
        gap: 15px;


        & h4 {
            background: $linear-gradient;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            padding-right: 5px;
        }

        & button {
            padding: 20px;
            background-color: #000;
            border: 2px solid $white ;
            border-radius: $list-border-radius;


            font-size: 16px;
            line-height: 20px;
            font-weight: 600;
            color: #fff;

        }

        & button:active {
            background-color: #fff;
            color: #000;
        }
    }



}
</style>