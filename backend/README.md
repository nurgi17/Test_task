# backend

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
node server.js
```
### Database configuration
```
ER diagram
<p align="center"><img src="https://github.com/nurgi17/Test_task/blob/master/screenshots/Снимок%20экрана%202020-06-14%20в%2001.45.16.png"></p><br>
DDL -> You should create only aomi database on MySQL

```
```
DML -> 
Users:
INSERT INTO `users` (`id`,`first_name`,`last_name`,`middle_name`) VALUES (DEFAULT,'Петр','Петров','Петрович');
INSERT INTO `users` (`id`,`first_name`,`last_name`,`middle_name`) VALUES (DEFAULT,'Иван','Иванов','Иванович');
INSERT INTO `users` (`id`,`first_name`,`last_name`,`middle_name`) VALUES (DEFAULT,'Сидор','Сидоров','Сидорич');
----------------------------------------------------------------------------------------------------------------
INSERT INTO `items` (`id`,`name`,`price`,`userId`) VALUES (DEFAULT,'Ноутбук ASUS',270000,1);
INSERT INTO `items` (`id`,`name`,`price`,`userId`) VALUES (DEFAULT,'Iphone 7 128',95000,2);
INSERT INTO `items` (`id`,`name`,`price`,`userId`) VALUES (DEFAULT,'Macbook Pro 16',500000,3);
```
