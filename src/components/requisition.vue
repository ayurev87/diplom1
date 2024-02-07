<template>
    <section id="requisition" class="requisition">
        <div class="container">
            <div class="requisition-content">
                <h2>{{ submitYourApplication }}</h2>
                <h4>{{ submitNumTelefon }}</h4>
                <div class="requisition-block">
                    <h4>Выберите марку</h4>
                    <div class="requisition-ListBlok">
                        <div class="requisition-ListBlok-left">
                            <select v-model="selectedMarka">
                                <option v-for="auto in getAutoItems" :key="auto.id" v-bind:value="auto.id">
                                    <h6>{{ auto.name }}</h6>
                                </option>
                            </select>
                        </div>
                        <div class="requisition-ListBlok-right">
                            <select v-model="selectedModel">
                                <option v-for="models in getAutoModel(selectedMarka)" :key="models.id"
                                    v-bind:value="models.id">
                                    <h6>{{ models.name }}</h6>
                                </option>
                            </select>
                        </div>

                    </div>
                    <div class="requisition-lock">
                        <h4><span class="requisition-lock-gradition">Артикул замка:
                            </span>{{ getArticulLock[selectedMarka].idModels[selectedModel].indexLock }}</h4>
                        <h4>{{ getArticulLock[selectedMarka].idModels[selectedModel].Lux }} руб. - Люкс</h4>
                        <h4>{{ getArticulLock[selectedMarka].idModels[selectedModel].Pro }} руб. - Pro</h4>
                    </div>
                    <button class="btn" onclick="location.href='#openModal'">
                        <h6>{{ btn_requisition }}</h6>
                    </button>
                </div>
            </div>
            <div class="requisition-modal" id="openModal">
                <div class="requisition-modal-dialog">
                    <div class="requisition-modal-content">
                        <div class="requisition-modal-header">

                            <a href="#close" title="Close" class="close">
                                <img src="@/assets/close.svg">
                            </a>
                        </div>
                        <div class="requisition-modal-body">
                            <div class="requisition-modal-title">
                                <h4>Ваши данные под надежной защитой.<br>
                                    Заполните форму ниже:</h4>
                            </div>
                            <div class="input">
                                <input v-model="setName" type="text" name="text" class="requisition-modal-name"
                                    placeholder="Ваше имя" required>
                            </div>
                            <div class="input">
                                <input v-model="setTel" type="tel" name="tel" class="requisition-modal-tel" value="+7"
                                    pattern="\+7\s?[\(]{0,1}9[0-9]{2}[\)]{0,1}\s?\d{3}[-]{0,1}\d{2}[-]{0,1}\d{2}"
                                    placeholder="+7(___)___-__-__" required>
                            </div>
                            <button class="btn" v-on:click="onlyNumbers()">
                                <h6>отправить заявку</h6>
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </div>


    </section>
</template>

<script type="module">
import emailjs from 'emailjs-com';
import { mapGetters } from 'vuex';

export default {
    name: 'requisitionBlock',
    data() {
        return {
            submitYourApplication: 'Оставть заявку',
            submitNumTelefon: 'Оставьте номер телефона и узнайте решение за 20 минут!',
            selectedMarka: "0",
            selectedModel: "0",
            btn_requisition: "Оставить заявку",
            failedValidation: {
                setTel: null
            },
            setTel: "",
            setName: ""
        }
    },
    computed: {
        ...mapGetters(['getAutoItems', 'getArticulLock']),


    },
    methods: {
        getAutoModel(num) {
            let arrayModels = this.getAutoItems[num].models;
            return arrayModels;
        },
        onlyNumbers() {
            this.failedValidation.setTel = /^\+7?([0-9]{3})\)?([0-9]{3})([0-9]{2})([0-9]{2})$/.test(this.setTel) ? true : false;
            console.log(this.failedValidation)
            this.secondReg();
        },
        secondReg() {
            if (this.failedValidation.setTel) {
                this.sendEmail();


            }
            else {
                // если проверка не пройдена
                alert('Неверный номер телефон')
            }
        },
        sendEmail() {
            try {
                emailjs.init('iV6Pm357YzCffuisj');
                emailjs.send('service_88qu5fh', 'template_6vrtg3k', {
                    auto: this.getAutoItems[this.selectedMarka].name,
                    model: this.getAutoItems[this.selectedMarka].models[this.selectedModel].name,
                    zamok: this.getArticulLock[this.selectedMarka].idModels[this.selectedModel].indexLock,
                    luk: this.getArticulLock[this.selectedMarka].idModels[this.selectedModel].Lux,
                    pro: this.getArticulLock[this.selectedMarka].idModels[this.selectedModel].Pro,
                    name: this.setName,
                    tel: this.setTel

                });
                alert('успешно отправить данных');

            } catch (error) {
                alert('Ошибки не отправлено');
                console.log({ error })
            }
        }


    }
}

</script>

<style lang="scss" scoped>
@import "@/scss/_vars";

.requisition {
    background-image: url('@/assets/image13.png'), url('@/assets/image17.png');
    background-repeat: no-repeat;
    background-position: left top 10%, right top;
    height: 624px;
    padding-top: 26px;
    background-size: auto;


    &-content {
        padding-left: 20px;
        padding-right: 20px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        & h2 {
            background: $linear-gradient;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            padding-bottom: 14px;
            font-weight: 700;
        }

        & h4 {
            font-weight: 600;
            padding-bottom: 30px;
        }
    }

    &-block {
        padding-top: 34px;
        border-radius: 30px;
        box-shadow: 0px 22px 50px -17px #000;
        background-color: rgba(27, 27, 27, 0.6);
        width: 100%;
        backdrop-filter: blur(40px);
        display: flex;
        flex-direction: column;
        align-items: center;


        & h4 {
            padding-bottom: 30px;
        }

        & .btn {
            margin-top: 31px;
            margin-bottom: 26px;
        }


    }

    &-ListBlok {
        width: 100%;

        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));

        gap: 25px;

        & div {
            border-radius: 50px;
            border: 2px solid transparent;
            background-image: $linear-gradient;
            background-origin: border-box;
            background-clip: border-box;
        }

        &-left {
            margin-left: 61px;
        }

        &-right {
            margin-right: 61px;
        }

        & select {
            padding: 20px;
            width: 100%;
            height: 62px;
            border-radius: 50px;
            border: 0px;
            background-color: #121212;
            color: #fff;
            font-size: 18px;
            font-weight: 500;
            text-align: left;
            text-transform: uppercase;
            -moz-appearance: button-arrow-up;
            -webkit-appearance: button-arrow-up;
            appearance: none;
            outline: none;
            position: relative;

            pointer-events: visibleStroke;

            & option {

                padding: 20px;
                background-color: #121212;
                border-radius: 20px;
                outline: 8px ridge rgba(170, 50, 220, .6);
                ;
            }
        }

        & select:focus-visible {
            outline: 0px;
            border: 0px;
        }
    }

    &-lock {
        padding-top: 18px;
        text-align: center;

        & h4 {
            padding-bottom: 0px;
        }

        & span {
            background: $linear-gradient;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            padding-bottom: 14px;
            font-weight: 700;
            padding-right: 5px;
        }
    }

    &-modal {
        position: fixed;
        display: flex;
        justify-content: center;
        align-items: center;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background: rgba(0, 0, 0, 0.5);
        z-index: 1050;
        opacity: 0;
        -webkit-transition: opacity 200ms ease-in;
        -moz-transition: opacity 200ms ease-in;
        transition: opacity 200ms ease-in;
        pointer-events: none;

        &:target {
            opacity: 1;
            pointer-events: auto;
            overflow-y: auto;
        }

        &-dialog {
            position: relative;
            width: 600px;
            height: 590px;
            margin: 10px;
        }

        &-content {
            position: relative;
            display: flex;
            flex-direction: column;
            border-radius: 30px;
            box-shadow: 0px 22px 50px -17px rgb(0, 0, 0);
            backdrop-filter: blur(50px);
            background: rgba(27, 27, 27, 0.8);
            background-clip: padding-box;
            width: 100%;
            height: 100%;
            outline: 0;
        }

        &-header {
            display: flex;
            justify-content: right;
        }

        &-title h4 {
            text-align: center;
            padding-bottom: 74px;
        }

        &-body {
            position: relative;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            padding: 15px;
            overflow: auto;
        }

        & .input {

            width: 387px;
            height: 62px;
            border-radius: 50px;
            text-transform: uppercase;
            background-image: linear-gradient(#121212, #121212), $linear-gradient;
            background-origin: border-box;
            background-clip: content-box, border-box;
            margin-bottom: 24px;
            padding: 2px;
            position: relative;
        }

        & input {
            margin-left: 33px;
            margin-top: 19px;
            font-size: 18px;
            line-height: 22px;
            color: #fff;
            background-color: #121212;
            border: 0px;
            outline: none;

            :focus-visible {
                border: 0px;


            }

            &::before,
            &::after {
                box-sizing: border-box;
            }
        }
    }
}

.close {
    padding-top: 31px;
    padding-right: 37px;
}

.close:focus,
.close:hover {
    cursor: pointer;
    opacity: .5;
}

@media screen and (max-width: 834px) {
    .requisition {
        background-image: none;

        &-content {
            padding-left: 20px;
            padding-right: 20px;
        }
    }
}

@media screen and (max-width: 430px) {
    .requisition {
        &-content {
            text-align: center;
        }

        &-ListBlok {
            &-left {
                margin-left: 0px;
            }

            &-left option {
                width: 350px;
            }

            &-right {
                margin-right: 0px;
            }

        }
    }

}
</style>