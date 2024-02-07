<template>
    <section class="protection">
        <div class="container ">
            <div class="protection-background">
                <div class="protection-header">
                    <h2><span>Надежная защита</span><br>для самых угоняемых автомобилей...</h2>
                    <h6>... разработан механический бесштыревой блокиратор рулевого вала Гарант Форт</h6>
                </div>
                <div class="protection-colonna">
                    <div class="protection-content">
                        <ul class="protection-list">
                            <li v-for="list in   protectionList  " :key="list.id">
                                <div class="img"><img :src="require('@/assets/' + list.img)"></div>
                                <h6>{{ list.title }}</h6>
                            </li>
                        </ul>
                    </div>
                    <div class="protection-empty"></div>
                </div>
            </div>
        </div>
    </section>
</template>

<script >
export default {
    name: 'ProtectionBlock',
    data() {
        return {
            protectionList: [
                {
                    img: 'zamok.svg',
                    title: 'максимальная криминальная стойкость механизма секретов Abloy Protec (1,97 млрд комбинаций)'
                },
                {
                    img: '4mm.svg',
                    title: 'замок установлен в толстостенном корпусе толщиной не менее 4 мм'
                },
                {
                    img: '10.svg',
                    title: 'рулевой вал блокируется ригелем из высокопрочной стали диаметром 10 мм'
                },
                {
                    img: 'protection.svg',
                    title: 'полностью безопасен в эксплуатации'
                },
                {
                    img: 'freez.svg',
                    title: 'надёжен в разных климатических условиях'
                },
            ]
        }
    },
}
</script>

<style lang="scss" scoped>
@import "@/scss/_vars";

.protection {
    background-color: #fff;

    &-background {
        background-image: url('@/assets/background-protection.png');
        background-repeat: no-repeat;
        background-position: top 50px right;
        background-size: 80%;
    }

    &-colonna {
        padding-left: 20px;
        padding-right: 20px;

        display: grid;
        grid-template-columns: 1fr 1fr;
        padding-bottom: 130px;
    }

    &-header {
        padding-top: 77px;
        padding-left: 20px;
        padding-right: 20px;
        max-width: 560px;

        & h2 {
            color: #000;
            font-weight: 500;
            padding-bottom: 20px;
            text-transform: uppercase;

            & span {
                font-weight: 700;
                background: $linear-gradient;
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
            }
        }

        & h6 {
            color: #333;
            font-weight: 400;
        }
    }

    &-list {
        padding-top: 27px;
        padding-bottom: 103;
        display: flex;
        flex-direction: column;
        gap: 10px;

        & li {
            display: grid;
            grid-template-columns: 80px 1fr;
            gap: 20px;
            align-items: center;

            & .img {

                width: 60px;
                height: 60px;
                display: flex;
                justify-content: center;
                align-items: center;
            }

            & h6 {
                color: #333;
                max-width: 480px;
                font-weight: 600;
            }

        }
    }
}

@media screen and (max-width: 834px) {
    .protection {
        &-background {
            background-size: 50%;
            background-position-y: center;
        }

        &-header {
            max-width: 600px;
            padding-top: 37px;
        }

        &-colonna {
            grid-template-columns: 2fr 1fr;
        }
    }

}

@media screen and (max-width: 430px) {
    .protection {
        &-colonna {
            display: flex;
            flex-direction: column-reverse;
            padding-bottom: 31px;
        }

        &-empty {
            height: 299px;
        }

        &-background {

            background-position-y: 179px;
            background-size: 100%;
        }
    }
}
</style>