Сайт естественно был создан не без сторонних ресурсов, где использовалась СУБД PostgreSQL*, для которой используется клиент PgAdmin.
Для демонстрации работоспособности без скачивания сторонних приложений и самого проекта прикладываю ссылку на видео-обзор
https://disk.yandex.ru/i/Uk4n1E9XP5oVWA

*Изучив PostgreSQL могу сказать, что он потребляет меньше ресурсов, но при этом по отзывам медленнее MSSQL (проверить сам не мог, т.к. не имею огромных БД), ну и плюсом заметил его в учебном плане ВУЗа :)
```

Создаем базу данных в консоли при помощи утилиты psql

```
"C:\Program Files\PostgreSQL\16\bin\psql" -U postgres
Пароль: qwerty

postgres=# CREATE DATABASE ArtDB;

postgres=# \q
```

Имя БД и логин-пароль прописывам в `server/.env`

```
DB_HOST=localhost
DB_NAME=ArtDB
DB_USER=postgres
DB_PASS=qwerty
DB_PORT=5432
```

Переходим в директорию `shop/server`, устанавливаем пакеты, запускаем сервер

```
cd /path/to/shop/server
npm install
npm run start-dev
```

Переходим в директорию `shop/client`, устанавливаем пакеты, запускаем клиент

```
cd /path/to/shop/client
npm install
npm start
```

Таблицы базы данных будут созданы при первом запуске приложения, но они будут пустыми. Можно импортировать базу данных из файла `database.sql` при помощи консоли

```
"C:\Program Files\PostgreSQL\16\bin\psql" -U postgres ArtDB < "путь к файлу/database.sql"
Пароль: qwerty

```

Пользователь `user@mail.ru`, пароль `qwerty`
Пользователь `admin@mail.ru`, пароль `qwerty`

