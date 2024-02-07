<template>
    <section class="advantage">
        <div class="container">
            <div class="advantage-outContent">
                <h2>Почему мы?</h2>
                <h3>Мы официальный дистрибьютор</h3>
                <div class="advantage-colonna">
                    <div class="advantage-content">
                        <ul class="advantage-lists">
                            <li v-for="list in advantageLists" :key="list.id">
                                <img :src="require('@/assets/' + list.img)" alt="">
                                <h5>{{ list.text }}</h5>
                            </li>
                        </ul>
                    </div>
                    <div class="advantage-image">
                        <img src="@/assets/certificate.png" alt="" class="sertificate">
                        <img src="@/assets/minisetki.svg" alt="" class="minisetki">

                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>


export default {
    name: 'AdvantageBlock',
    data() {
        return {
            advantageLists: [
                {
                    img: 'iconMedal.svg',
                    text: 'Уникальный оригинальный Замок Гарант Блок Люкс.'
                },
                {
                    img: 'iconProtection.svg',
                    text: 'Продукция застрахована от подделок.'
                },
                {
                    img: 'iconRub.svg',
                    text: 'Цена от производителя.'
                },
                {
                    img: 'iconLike.svg',
                    text: 'Гарантия качества.'
                },
                {
                    img: 'iconTools.svg',
                    text: 'Доверьте установку профессионалам.'
                },
            ]
        }
    },
}
</script>

<style lang="scss" scoped>
@import "@/scss/_vars";

.advantage {
    background-color: $backgroundBlack;

    &-outContent {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-left: 20px;
        padding-right: 20px;
    }

    & h2 {
        padding-top: 58px;
        text-transform: uppercase;
        background: $linear-gradient;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }

    & h3 {
        font-weight: 600;
        padding-top: 15px;
        padding-bottom: 74px;
    }

    &-colonna {
        //display: flex;
        padding-left: 10px;
        padding-right: 10px;
        gap: 50px;
        width: 100%;
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
    }

    &-lists {
        display: flex;
        flex-direction: column;
        gap: 52px;

        & li {
            display: flex;
            gap: 42px;
            max-width: 461px;
            align-items: center;

        }

    }

    &-image {
        position: relative;
        display: flex;
        justify-content: center;


        & .minisetki {
            position: absolute;
            right: 0px;
            top: 0px;
            z-index: 1;

        }

        & .sertificate {
            margin-top: 26px;
            margin-right: 20px;
            position: relative;
            border-radius: 20px;
            z-index: 2;

        }
    }
}
</style>