<template>
  <div class="bg-color10 q-px-md">
    <!--menu-list-->
    <q-list separator>
      <q-item class="q-px-none">
        <q-item-section class="text-color1">
          КОМПАНИЯ
        </q-item-section>

        <q-item-section side>
          <q-icon name="arrow_drop_down" color="color1" size="1rem"/>
        </q-item-section>
      </q-item>

      <q-item class="q-px-none">
        <q-item-section class="text-color1">
          КАК КУПИТЬ
        </q-item-section>

        <q-item-section side>
          <q-icon name="arrow_drop_down" color="color1" size="1rem"/>
        </q-item-section>
      </q-item>

      <q-item class="q-px-none">
        <q-item-section class="text-color1">
          РАЗДЕЛЫ КАТАЛОГА
        </q-item-section>

        <q-item-section side>
          <q-icon name="arrow_drop_down" color="color1" size="1rem"/>
        </q-item-section>
      </q-item>

      <q-item class="q-px-none">
        <q-item-section class="text-color1">
          ПОЛЕЗНОЕ
        </q-item-section>

        <q-item-section side>
          <q-icon name="arrow_drop_down" color="color1" size="1rem"/>
        </q-item-section>
      </q-item>
    </q-list>

    <!--logo-->
    <div class="q-pt-md">
      <ac-icon-logo_with_name style="width: 209px; height: 32px" class="fill-primary"/>
    </div>

    <!--phones-->
    <div class="text-ts1 text-color1 q-pt-md">
      <div>
        +7 (727) 258 01 58
      </div>

      <div class="q-pt-sm">
        +7 (778) 746 00 01
      </div>
    </div>

    <!--work-schedule-->
    <div class="q-pt-md">
      <div class="text-ts3 text-color3">
        График работы
      </div>

      <div class="text-ts1 text-color1 q-pt-sm">
        Пн - Вс 10:00 – 20:00
      </div>
    </div>

    <!--social buttons-->
    <div class="q-pt-lg">
      <div class="row items-center q-gutter-sm">
        <ac-icon-facebook style="width: 24px; height: 24px"/>
        <ac-icon-twitter style="width: 24px; height: 24px"/>
        <ac-icon-vk style="width: 24px; height: 24px"/>
        <ac-icon-ok style="width: 24px; height: 24px"/>
        <ac-icon-instagram style="width: 24px; height: 24px"/>
        <ac-icon-youtube style="width: 24px; height: 24px"/>
      </div>
    </div>

    <!--market buttons-->
    <div class="q-pt-lg">
      <div class="row items-center q-gutter-sm">
        <img src="~assets/Googleplay.svg" alt="" style="width: 128px; height: 38px"/>

        <img src="~assets/Appstore.svg" alt="" style="width: 128px; height: 38px"/>
      </div>
    </div>

    <!--payment logos-->
    <div class="q-pt-lg">
      <div class="row items-center q-gutter-sm">
        <ac-icon-bc_visa style="width: 37px; height: 14px"/>

        <ac-icon-bc_master style="width: 18px; height: 14px"/>

        <ac-icon-bc_maestro style="width: 18px; height: 14px"/>

        <ac-icon-bc_processing style="width: 73px; height: 14px"/>
      </div>
    </div>

    <div class="q-pt-md"/>
  </div>
</template>

<script>
export default {
  props: {},
}
</script>
