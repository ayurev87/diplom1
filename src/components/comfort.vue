<template>
    <section class="comfort">
        <div class="container">
            <div class="comfort-content">
                <h2><span>...или привычный для тебя</span>комфорт?</h2>
                <div class="image">
                    <img src="@/assets/setki.svg" alt="setki" class="setki">
                    <img src="@/assets/comfort.png" alt="" class="img">

                </div>
                <h6>Простота использования блокиратора Гарант Форт достигается бесштыревой схемой конструкции замка. Для
                    блокировки и разблокировки рулевого вала достаточно повернуть ключ в механизме секретов, расположенном в
                    удобном месте рядом с рулевым колесом. Это обеспечивает максимальный комфорт в эксплуатации замка</h6>
                <div class="button">
                    <button class="btn">
                        Где купить?
                    </button>
                </div>
            </div>
        </div>
    </section>
</template>

<script>


export default {
    name: 'ComfortBlock',
}
</script>

<style lang="scss" scoped>
@import "@/scss/_vars";

.comfort {
    background-color: $backgroundBlack;
    padding-top: 66px;

    &-content {
        display: flex;
        flex-direction: column;
        padding-left: 22px;
        padding-right: 22px;

        & h2 {
            text-align: right;
            text-transform: uppercase;
            padding-bottom: 40px;

            & span {
                background: $linear-gradient;
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                font-weight: 500;
            }
        }

        & .image {
            position: relative;

            & .setki {
                position: absolute;
                bottom: -22px;
                left: -24px;
                z-index: 2;
            }

            & .img {
                width: 100%;
                border-radius: 50px;
                filter: brightness(50%);


            }
        }

        & h6 {
            padding-top: 40px;
            text-align: right;
            font-weight: 400;
            opacity: 0.6;
        }

        .button {
            padding-top: 30px;
            display: flex;
            justify-content: right;

            & .btn {
                width: 260px;
                height: 75px;

            }

        }
    }
}

@media screen and (max-width: 834px) {
    .comfort {
        padding-top: 45px;

        &-content {
            h2 {
                padding-bottom: 30px;
            }
        }

    }
}
</style>