<template>
  <b-container class="printDepartures">
    <div
      class="hotelDeparture page-break"
      v-for="hotel in printDepartures"
      :key="hotel.name"
    >
      <b-row>
        <b-col align="center">
          <img class="anex_logo" src="../assets/anex-tour.jpg" />
        </b-col>
      </b-row>
      <div class="info_block">
        <b-row>
          <b-col>
            <h3 align="center">ИНФОРМАЦИЯ О ВЫЕЗДЕ</h3>
          </b-col>
        </b-row>
        <b-row class="info_caption">
          <b-col cols="4"> Отель </b-col>
          <b-col cols="*">
            {{ hotel.name }}
          </b-col>
        </b-row>
        <b-row class="info_caption">
          <b-col cols="4"> Дата вылета </b-col>
          <b-col cols="*">
            {{ hotel.date }}
          </b-col>
        </b-row>
        <b-row class="info_caption">
          <b-col cols="4"> Время вылета </b-col>
          <b-col cols="*">
            {{ hotel.time }}
          </b-col>
        </b-row>

        <b-row class="info_caption">
          <b-col cols="4"> Номер рейса </b-col>
          <b-col cols="*">
            {{ hotel.flight }}
          </b-col>
        </b-row>

        <b-row class="info_caption">
          <b-col cols="4"> Время выезда из отеля </b-col>
          <b-col cols="*">
            {{ hotel.hotelPickupTime }}
          </b-col>
        </b-row>
      </div>
      <b-row>
        <b-col>
          <b-table
            class="tourists"
            striped
            hover
            small
            :items="
              hotel.tourists.length > maxPerList
                ? hotel.tourists.slice(0, hotel.tourists.length / 2)
                : hotel.tourists
            "
            :fields="fields"
          ></b-table>
        </b-col>
        <b-col v-if="hotel.tourists.length > maxPerList">
          <b-table
            class="tourists"
            striped
            hover
            small
            :items="hotel.tourists.slice(hotel.tourists.length / 2)"
            :fields="fields"
          ></b-table>
        </b-col>
      </b-row>

      <div class="info_warning">
        <p>Обращаем Ваше внимание:</p>
        <ul>
          <li>
            В соответствии с Международными правилами в день выезда из отеля
            номер освобождается максимум до 12 часов дня. Дальнейшее пребывание
            в номере возможно только при наличии свободных номеров в отеле и за
            дополнительную плату, установленную Администрацией отеля.
          </li>
          <li>
            Время выезда из отеля назначается в зависимости от времени вылета
            самолета и с учетом времени, необходимого на дорогу до Аэропорта. За
            день до Вашего отъезда информация предоставляется отельным гидом,
            согласно Вашему времени и рейсу, указанному в Вашем авиабилете.
          </li>
          <li>
            За день до выезда из отеля просьба убедиться на ресепшен отеля, что
            все Ваши счета за дополнительные услуги, которыми Вы пользовались во
            время своего отдыха, оплачены. Если нет - необходимо их оплатить.
          </li>
          <li>
            Если Ваш паспорт и любые другие документы оставались в сейфе или на
            ресепшен отеля, помните, что их необходимо взять с собой перед
            выездом и убедиться, что это именно Ваш паспорт и документы.
          </li>
          <li>
            За 15 минут до выезда из отеля необходимо быть полностью готовыми и
            сдать на стойку ресепшен ключи от сейфа и номера. В случае утери или
            не сдачи своевременно ключей от сейфа или номера Администрацией
            отеля предусмотрены штрафные санкции.
          </li>
          <li>
            При опоздании автобуса более чем на 15 минут необходимо связаться с
            Вашим отельным гидом для уточнения информации.
          </li>
          <li>
            В случае Вашего отсутствия на ресепшен в указанное время может
            расцениваться как отказ оттрансфера.
          </li>
        </ul>
      </div>
      <h5 align="center">ЖЕЛАЕМ ВАМ ПРИЯТНОГО ПОЛЕТА!</h5>
    </div>
  </b-container>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "PrintItem",
  data() {
    return {
      maxPerList: 13,
      fields: [
        {
          key: "num",
          sortable: false,
          label: " ",
        },
        {
          key: "name",
          sortable: false,
          label: "Фамилии пассажиров",
        },
      ],
    };
  },
  computed: {
    ...mapGetters({
      printDepartures: "printDepartures",
    }),
  },
  mounted() {
    window.print();
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@media print {
  .page-break {
    display: block;
    page-break-after: always;
  }
}
.info_warning {
  font-size: x-small;
}
.info_caption {
  font-size: large;
}
.info_block {
  padding-bottom: 30px;
}
.anex_logo {
  height: 80px;
  padding-bottom: 20px;
}
</style>
