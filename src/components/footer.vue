<template>
    <footer class="footer">
        <div class="container">
            <div class="footer-title">
                <h2><span>Блокиратор руля форт защита</span>и комфорт</h2>
            </div>
        </div>
        <div class="footer-image">
            <img class="footer-image-warp" src="@/assets/footer.png" alt="">
            <img src="@/assets/headlights.png" alt="" class="footer-image-blink">
        </div>
        <div class="container">
            <div class="footer-button">
                <button class="btn" onclick="location.href='#requisition'">
                    <h6>Купить сейчас</h6>
                </button>
            </div>

        </div>
        <div class="footer-bottom">
            <a href="#header"><img src="@/assets/footer-logo.svg"></a>
            <p class="text">©ГАРАНТ-СПБ 2021 Все права защищены</p>
        </div>


    </footer>
</template>

<script>


export default {
    name: 'FooterBlock',
}
</script>

<style lang="scss" scoped>
@import "@/scss/_vars";

.footer {
    box-sizing: content-box;
    background-color: $backgroundBlack;
    background-image: url('@/assets/footerBG1.png'), url('@/assets/footerBG2.png');
    background-repeat: no-repeat, no-repeat;
    background-position: top -31px left, top 410px right;
    background-size: 80%, 80%;

    &-title {
        padding-left: 20px;
        padding-right: 20px;
        display: flex;
        justify-content: center;
        padding-top: 95px;
        padding-bottom: 98px;

        & span {
            background: $linear-gradient;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }
    }

    &-image {
        overflow: hidden;
        box-sizing: content-box;
        position: relative;
        display: flex;
        justify-content: center;

        &-warp {
            padding-left: calc(50% - 424.5px);
            padding-right: calc(50% - 424.5px);
            width: 100%;
        }

        &-blink {
            position: absolute;
            top: 60px;
            animation-name: blink-1;
            animation-duration: 4s;
            animation-timing-function: ease;
            animation-delay: 1.4s;
            animation-iteration-count: infinite;
            animation-direction: normal;
            animation-fill-mode: none;

        }

    }

    &-button {
        padding-top: 46px;
        display: flex;
        justify-content: center;
        padding-bottom: 66px;
    }

    &-bottom {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 15px;

        & p {
            font-weight: 400;
            color: #A9A9A9;
            padding-bottom: 58px;
        }
    }
}

@keyframes blink-1 {

    0% {
        opacity: 1;
    }

    25% {
        opacity: 0;
    }

    50% {
        opacity: 1;
    }

    75% {
        opacity: 0;
    }

    100% {
        opacity: 1;
    }
}

@media screen and (max-width: 834px) {
    .footer {
        background-image: none, url('@/assets/footerBG2.png');

        &-image {
            &-warp {
                max-width: 637px;
            }

            &-blink {
                display: none;
            }
        }
    }
}
</style>