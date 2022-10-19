# Таблица пользователей на VueJS v3 (TypeScript) + Pinia

## Project setup

```
npm i -g @vue/cli
yarn install
```

### Compiles and hot-reloads for development

```
yarn serve
```

### Compiles and minifies for production

```
yarn build
```

### Lints and fixes files

```
yarn lint
```

### Условия задачи

```
Задача: ​Написать web-приложение, используя VueJS v3 (TypeScript) + Pinia + тесты на утилитарные функции

- Таблица с пользователями. Данные получит Get-запросом. JSON доступен по
адресу:

https://gist.githubusercontent.com/bunopus/f48fbb06578003fb521c7c1a54fd906a/raw/e5767c1e7f172c6375f064a9441f2edd57a79f15/test_users.json

- Панель с фильтрами.

Таблица ​​должна показывать следующие столбцы:
- Имя
- Возраст
- Пол
- Департамент
- Адрес в формате “Город, Улица”

Должна быть возможность отсортировать таблицу по любому столбцу
(убывание/возрастание).

Панель фильтров ​должна показывать опции, разделённые по группам:
- Пол
- Департамент
- Город

Опции должны генерироваться на основании данных. Т.е. в фильтре “пол”, например,
две опции: “female” и “male”. В поле город -- все возможные города и т. д. Опции
представляют собой “Checkbox [Значение Фильтра] (4)”. Цифра в скобках показывает
сколько раз этот фильтр встречается в отфильтрованной коллекции.
При нажатии на checkbox таблица должна фильтроваться по соответствующему
значению. При этом, все остальные фильтры должны пересчитаться. Нулевые
фильтры (те, которые не применимы к коллекции) не показываются на экране.

Например: при нажатии на фильтр “Пол” - “female” в таблице отфильтровываются все
женщины. При этом фильтр “male” показываться не должен.

Требования к вёрстке:
● Страница должна быть сверстана вручную (без использования Bootstrap, Foundation
и тп).
● При разрешении экрана:
    ○ >= 900px фильтры должны располагаться горизонтально (один за
    другим). Таблица с фильтрами имеет максимальную ширину 1200px
    ○ < 900px фильтры должны располагаться вертикально (в один столбец).
    А также должен скрываться столбец “Адрес”. Таблица растягивается на всю
    возможную ширину.


```

### В разработке использовалось

```
vue create vue-3-pinia-grocery-app
vue add typescript
- Use class-style component syntax? No
```
