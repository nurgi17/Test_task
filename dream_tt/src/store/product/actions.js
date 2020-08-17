// import { axios } from 'boot/axios'

export function get (ctx, { id, params }) {
  return (new Promise(resolve => setTimeout(resolve, 200))).then(() => {
    return {
      data: {
        name: 'Телефон сотовый SAMSUNG SM A 505 Galaxy A50 FZKUS (black)',
        rating: 4,
        review_count: 16,
        discount: 20,
        photos: [
          'https://www.mechta.kz/export/1cbitrix/import_files/85/85bc667f-57a9-11ea-a22d-005056b6dbd7.jpeg',
          'https://www.mechta.kz/export/1cbitrix/import_files/85/85bc6680-57a9-11ea-a22d-005056b6dbd7.jpeg',
          'https://www.mechta.kz/export/1cbitrix/import_files/85/85bc6681-57a9-11ea-a22d-005056b6dbd7.jpeg',
          'https://www.mechta.kz/export/1cbitrix/import_files/85/85bc6682-57a9-11ea-a22d-005056b6dbd7.jpeg',
          'https://www.mechta.kz/export/1cbitrix/import_files/85/85bc6683-57a9-11ea-a22d-005056b6dbd7.jpeg',
          'https://www.mechta.kz/export/1cbitrix/import_files/85/85bc6684-57a9-11ea-a22d-005056b6dbd7.jpeg',
        ],
        colors: [
          { id: 1, name: 'color1', value: '#4786B9' },
          { id: 2, name: 'color2', value: '#86929B' },
          { id: 3, name: 'color3', value: '#AFAFAF' },
          { id: 4, name: 'color4', value: '#EA96B9' },
          { id: 5, name: 'color5', value: '#CCA20E' },
          { id: 6, name: 'color6', value: '#FFFFFF' },
        ],
        models: [
          { id: 1, name: '16ГБ', cost: 119890 },
          { id: 2, name: '32ГБ', cost: 145790 },
          { id: 3, name: '64ГБ', cost: 165960 },
        ],
        deliveryDate: '27 декабря',
        availabilityAddresses: [
          { address: 'пр. Республики, 45', cnt: 30 },
          { address: 'пр. Богенбая, 39', cnt: 25 },
          { address: 'ул. Куйши Дина, д. 31', cnt: 7 },
          { address: 'ул. Сатпаева, 13', cnt: 30 },
          { address: 'ул. Амман, 14', cnt: 22 },
          { address: 'пр. Кабанбай батыра, 21', cnt: 14 },
          { address: 'ул. Косшыгулулы, 24', cnt: 26 },
        ],
        specs: {
          sm: [
            { label: 'Диагональ экрана, дюйм', value: '6,3 (16 см)' },
            { label: 'Разрешение фотокамеры, Мпикс', value: '20+2' },
            { label: 'Встроенная память, Гб', value: '64' },
            { label: 'Модель процессора', value: 'Huawei Kirin 710' },
            { label: 'Технология изготовления дисплея', value: 'IPS TFT' },
          ],
          lg: [
            {
              name: 'Процессор',
              items: [
                { label: 'Процессор, (МГц, количество ядер)', value: '1600/ 1350 МГц, 8 ядер' },
              ],
            },
            {
              name: 'Экран',
              items: [
                { label: 'Диагональ экрана, дюйм', value: '6,2 (15,7 см)' },
                { label: 'Разрешение дисплея, пикс', value: '1520х720' },
                { label: 'Сенсорный дисплей', value: 'да' },
                { label: 'Датчик ориентации экрана:', value: 'есть' },
                { label: 'Технология изготовления дисплея:', value: 'TFT' },
                { label: 'Количество цветов дисплея:', value: '16 млн.' },
              ],
            },
            {
              name: 'Память',
              items: [
                { label: 'Встроенная память, Гб:', value: '32' },
                { label: 'Объем оперативной памяти, Гб:', value: '2' },
                { label: 'Тип карты памяти:', value: 'microSD' },
              ],
            },
            {
              name: 'SIM карта',
              items: [
                { label: 'SIM-карта:', value: 'две, Nano-SIM' },
              ],
            },
            {
              name: 'Стандарт',
              items: [
                { label: 'Стандарты сети:', value: '2G, 3G, 4G LTE' },
              ],
            },
            {
              name: 'Операционная система',
              items: [
                { label: 'Мобильная ОС:', value: 'Android' },
              ],
            },
          ],
        },
        description: `
<h4 style="text-align: center;">Galaxy S20 | S20+ | S20 Ultra</h4>
<p><img src="https://www.mechta.kz/upload/iblock/010/01029c791b4a4838f8a336cf01d00831.jpg" width="100%" /></p>
<hr />
<h4 style="text-align: center;">Новая эра в фотографии</h4>
<p style="text-align: center;">Встречайте Galaxy S20 | S20+ | S20 Ultra. Cнимайте в революционном разрешении 8K и получайте сверхчеткие фотографии высокого качества прямо из видео.Добавьте к этому надежную защиту Samsung Knox, интеллектуальный аккумулятор, супермощный процессор и большой объем памяти для всех ваших файлов. Откройте новую главу в истории мобильных устройств.</p>
<hr />
<p style="text-align: center;"><img src="https://mechta.kz/upload/iblock/79d/79d0683bdae818c92627a784466dcc4d.jpg" width="60%" /></p>
<hr />
<h4 style="text-align: center;">ДА БУДЕТ НОЧЬ</h4>
<h4 style="text-align: center;">СЪЕМКА НОЧЬЮ КАК ДНЕМ</h4>
<p style="text-align: center;">Мы увеличили размер сенсора почти втрое, чтобы вы получили максимум от вашей ночной съемки</p>
<p style="text-align: center;"><img src="https://www.mechta.kz/upload/iblock/174/174696ad4c7355becaf000c5a929ba1c.jpg" alt="" width="100%" /></p>
        `,
        videos: [
          'https://youtu.be/Lr5W2OlURSg',
          'https://youtu.be/XXcSLulh8D8',
          'https://youtu.be/5QS5cT5nMuQ',
        ],
        reviews: [
          {
            id: 1,
            usr_name: 'Ерлан',
            dt: '17 декабря 2018',
            city: 'Павлодар',
            rate: 4,
            use_period: 'Использую менее месяца',
            note: 'Покупал своей девушке на подарок, она довольна как слон. Экран яркий и контрастный, камера хорошая, батарею держит смело 2 дня, отпечаток пальца срабатывает мгновенно и совсем не дорогой',
            positive_aspects: 'Хорошая цена, камера, экран',
            negative_aspects: 'Не хватает производительности, игры это откровенно не его стихия.',
            like_count: 2,
            dislike_count: 0,
            replies: [
              {
                id: 3,
                usr_name: 'Данияр',
                is_stuff: true,
                dt: '17 декабря 2018',
                note: 'Мы рады что вы довольны покупкой, ждем еще вас в нашем магазине. Этот телефон не геймерского сегмента, по этому он не подойдет для последних тайтлов, но аркадные игры он запустит с хорошим фремрейтом.',
              },
            ],
          },
          {
            id: 2,
            usr_name: 'Василий',
            dt: '28 ноября 2018',
            city: 'Алматы',
            rate: 5,
            use_period: 'Использую менее месяца',
            note: 'Придерживаюсь той политики, что лучше один раз переплатить, чем потом постоянно что-то еще покупать. Да, стоимость высокая и с этим сложно не согласиться, но вот и качество не уступает.',
            positive_aspects: 'Современный дизайн. Четкость изображения, хороший угол обзора. Интуитивно понятное меню. Неплохой звук динамиков. Хорошая камера.',
            negative_aspects: 'Несоответствие внешнего вида телефона с фото на сайте (в реальности выглядит интереснее :) ).',
            like_count: 1,
            dislike_count: 0,
          },
        ],
        similars: [
          {
            img: 'https://mechta.kz/export/an_files/8b96d0b3-8d25-11ea-a22d-005056b6dbd7-86631.jpeg',
            name: 'Huawei P20 Smart',
            cost: 279999,
          },
          {
            img: 'https://mechta.kz/export/an_files/43232fd0-d5ff-11e9-a224-005056b6dbd7-90712.jpeg',
            name: 'Телефон сотовый HUAWEI P40 Black',
            oCost: 549890,
            cost: 399890,
          },
          {
            img: 'https://mechta.kz/export/an_files/c44a4641-bc87-11e8-a219-005056b6dbd7-441693.jpeg',
            name: 'Телефон сотовый APPLE iPhone XS Max 256GB (Space grey)',
            oCost: 549890,
            cost: 399990,
          },
          {
            img: 'https://mechta.kz/export/an_files/43232fd3-d5ff-11e9-a224-005056b6dbd7-78574.jpeg',
            name: 'Телефон сотовый APPLE iPhone 11 128GB (White)',
            cost: 419890,
          },
          {
            img: 'https://mechta.kz/export/an_files/21da86b8-94cb-11ea-a22d-005056b6dbd7-474539.png',
            name: 'Телефон сотовый SAMSUNG SM G 988 Galaxy S20 Ultra 128GB BZWDS',
            oCost: 579890,
            cost: 399890,
          },
        ],
        seens: [
          {
            img: 'https://www.mechta.kz/export/an_files/85bc667f-57a9-11ea-a22d-005056b6dbd7-151310.jpeg',
            name: 'Телефон сотовый SAMSUNG SM G 980 Galaxy S20 128GB FLBDS (Blue)',
            oCost: 429890,
            cost: 299890,
          },
          {
            img: 'https://www.mechta.kz/export/an_files/edc2015b-602d-11e9-a220-005056b6dbd7-84567.jpeg',
            name: 'Телефон сотовый SAMSUNG SM A 105 Galaxy A10 FZKGS (black)',
            oCost: 64890,
            cost: 54890,
          },
          {
            img: 'https://www.mechta.kz/export/an_files/43232fc9-d5ff-11e9-a224-005056b6dbd7-74690.jpeg',
            name: 'Телефон сотовый APPLE iPhone 11 64GB (White)',
            cost: 389890,
          },
        ],
        compare: {
          fields: [
            { id: 1, name: 'Формат' },
            { id: 2, name: 'Поддержка 3D' },
            { id: 3, name: 'Диагональ, дюймы' },
            { id: 4, name: 'Матрица' },
            { id: 5, name: 'Разрешение' },
            { id: 6, name: 'Bluetooth' },
            { id: 7, name: 'Wi-Fi' },
            { id: 8, name: 'USB' },
            { id: 9, name: 'Встроенная камера' },
            { id: 10, name: 'Доступ в интернет' },
            { id: 11, name: 'Гарантия' },
            { id: 12, name: '3D очки в комплекте' },
            { id: 13, name: 'Бренд' },
            { id: 14, name: 'Страна производитель' },
          ],
          products: [
            {
              img: 'https://www.mechta.kz/export/1cbitrix/import_files/85/85bc667f-57a9-11ea-a22d-005056b6dbd7.jpeg',
              name: 'SAMSUNG SM A 515 Galaxy A51 128GB',
              rating: 4,
              review_count: 16,
              oCost: 100890,
              cost: 99890,
              values: {
                1: '16:9',
                2: 'есть',
                3: '6,4”',
                4: 'IPS',
                5: 'QUAD UHD (2160x1080)',
                6: 'Нет',
                7: 'Есть',
                8: 'Есть',
                9: 'Нет',
                10: 'Есть',
                11: '12 месяцев',
                12: 'Нет',
                13: 'Samsung',
                14: 'Китай',
              },
            },
            {
              img: 'https://www.mechta.kz/export/1cbitrix/import_files/79/79133aec-0a62-11e9-a21c-005056b6dbd7.jpeg',
              name: 'Huawei P Smart Plus White',
              rating: 4,
              review_count: 8,
              cost: 199890,
              values: {
                1: '16:9',
                2: 'Нет',
                3: '6,7”',
                4: 'GTS',
                5: 'QUAD UHD (2160x1080)',
                6: 'Нет',
                7: 'Есть',
                8: 'Есть',
                9: 'Нет',
                10: 'Есть',
                11: '6 месяцев',
                12: 'Нет',
                13: 'Samsung',
                14: 'Китай',
              },
            },
            {
              img: 'https://www.mechta.kz/export/1cbitrix/import_files/79/79133aec-0a62-11e9-a21c-005056b6dbd7.jpeg',
              name: 'Iphone P Smart Plus White',
              rating: 4,
              review_count: 8,
              cost: 134890,
              values: {
                1: '16:9',
                2: 'Нет',
                3: '6,7”',
                4: 'GTS',
                5: 'QUAD UHD (2160x1080)',
                6: 'Нет',
                7: 'Есть',
                8: 'Есть',
                9: 'Нет',
                10: 'Есть',
                11: '6 месяцев',
                12: 'Нет',
                13: 'Samsung',
                14: 'Китай',
              },
            },
          ],
        },
        locations: {
          shops: [
            { lon: 71.41868989322256, lat: 51.09662699437465 },
            { lon: 71.42532530101045, lat: 51.09127029953509 },
            { lon: 71.42532530101045, lat: 51.09127029953509 },
            { lon: 71.41119474146961, lat: 51.1110297726539 },
            { lon: 71.42437038013864, lat: 51.10464551751211 },
            { lon: 71.42679649911746, lat: 51.09544906355199 },
            { lon: 71.40472078373551, lat: 51.09446372559856 },
          ],
          services: [
            { lon: 71.42368978701776, lat: 51.14161404957185 },
            { lon: 71.42941052564493, lat: 51.141533943442646 },
            { lon: 71.42631831583638, lat: 51.13768030053344 },
            { lon: 71.41942696503246, lat: 51.13603582715388 },
            { lon: 71.41869655728571, lat: 51.141326762184754 },
          ],
        },
      },
    }
  })

  // return axios.get('product/${id}', { params })
}
