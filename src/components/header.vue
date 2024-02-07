<template>
    <header class="header" id="header">
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
            <div class="nav_gambuger">
                <input id="nav_gambuger_toggle" type="checkbox" />
                <label class="nav_gambuger_btn" for="nav_gambuger_toggle">
                    <span></span>
                </label>
                <ul class="nav_gambuger_box">
                    <li> <a class="nav_gambuger_box_tel" v-bind:href="'tel:' + tel">
                            <h4>{{ tel }}</h4>
                        </a></li>
                    <li><a class="nav_gambuger_box_viber" v-bind:href="'viber://chat?number=' + mobTel">
                            <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path class="viber" />
                            </svg>
                        </a>
                        <a v-bind:href="'whatsapp://send?phone=' + mobTel">
                            <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path class="whastapp" />
                            </svg>
                        </a>
                    </li>
                    <li> <button>
                            {{ btn_call }}
                        </button></li>
                    <li>
                        <h5 class="nav_gambuger_title">Адреса магазинов</h5>
                        <p class="nav_gambuger_subtitle"> Наш офис:</p>
                        <p class="nav_gambuger_text">Санкт-Петербург, ул. Софийская<br> д.8 к.1</p>
                        <p class="nav_gambuger_subtitle"> Официальный<br>
                            установочный центр: </p>
                        <p class="nav_gambuger_text">Ул, Шоссейная 1Г, Бугры</p>
                        <p class="nav_gambuger_subtitle"> Отдел продаж:</p>
                        <p class="nav_gambuger_text">+7(812) 989-42-32</p>
                        <p class="nav_gambuger_subtitle">Оптовый отдел:</p>
                        <p class="nav_gambuger_text">+7(903) 095-61-77</p>
                        <p class="nav_gambuger_subtitle">E-mail:</p>
                        <p class="nav_gambuger_text">garant-spb-78@mail.ru</p>
                    </li>
                </ul>
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

        & button,
        .nav_gambuger_box button {
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

    &_gambuger {
        display: none;
    }



}

@media screen and (max-width: 834px) {
    .nav {
        padding-left: 22px;
        padding-right: 22px;

        &_left {
            gap: 7px;

            & svg {
                width: 100px;
            }

            & h6 {
                font-size: 12px;
                line-height: 15px;
                font-weight: 600;
            }

        }

        &_right {
            gap: 8px;

            & svg {
                width: 24.11px;
                height: 24.11px;
            }

            & h4 {
                font-size: 16px;
                line-height: 20px;
                font-weight: 600;
            }

            & button {
                font-size: 13px;
            }
        }
    }


}

@media screen and (max-width: 430px) {
    .nav {
        height: 103px;

        &_right {
            display: none;
        }

        &_gambuger {
            display: flex;
        }
    }

    #nav_gambuger {
        &_toggle {
            opacity: 0;

            &:checked+.nav_gambuger_btn>span {
                transform: rotate(45deg);
            }

            &:checked+.nav_gambuger_btn>span::before {
                top: 0;
                transform: rotate(0deg);
            }

            &:checked+.nav_gambuger_btn>span::after {
                top: 0;
                transform: rotate(90deg);
            }

            &:checked~.nav_gambuger_box {
                right: 0 !important;
            }
        }
    }

    .nav_gambuger {
        &_btn {
            position: fixed;
            top: 38px;
            right: 26px;
            width: 26px;
            height: 26px;
            cursor: pointer;
            z-index: 1;

            &>span,
            &>span::before,
            &>span::after {
                display: block;
                position: absolute;
                width: 100%;
                height: 2px;
                background-color: #fff;
                transition-duration: .25s;
            }

            &>span::before {
                content: '';
                top: -8px;
            }

            &>span::after {
                content: '';
                top: 8px;
            }
        }

        &_box {
            display: flex;
            flex-direction: column;
            align-items: center;
            position: fixed;
            top: 103px;
            right: -120%;
            width: 100%;
            height: 100%;
            padding: 27px 16px 0px 16px;
            list-style: none;
            box-shadow: 0px 22px 50px -17px #000;
            background-color: rgba(27, 27, 27, 0.6);
            gap: 30px;
            backdrop-filter: blur(40px);
            transition-duration: .25s;

            & button {
                padding: 20px;
                background-color: #000;
                border: 2px solid $white ;
                border-radius: $list-border-radius;
                width: 260px;

                font-size: 16px;
                line-height: 20px;
                font-weight: 600;
                color: #fff;

                &:active {
                    background-color: #fff;
                    color: #000;

                }


            }

            &_tel {
                & h4 {
                    background: $linear-gradient;
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                }


            }

            &_viber {
                padding-right: 15px;
            }
        }

        &_title {
            text-align: center;
            font-size: 20px;
            font-weight: 600;
            padding-bottom: 14px;
        }

        &_subtitle {
            text-align: center;
            font-size: 16px;
            font-weight: 600;
            background: $linear-gradient;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            padding-bottom: 10px;
        }

        &_text {
            text-align: center;
            font-size: 16px;
            font-weight: 600;
            color: #fff;
            padding-bottom: 25px;
        }


    }
}
</style>