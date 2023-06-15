## NodeJS with Express
Ini aplikasi pertamaku untuk mempelajari nodejs <br>

## Pengujian
- Nodejs v18.16.0
- NPM v9.5.1

## Instalasi
```sh
npm install
cp .env.example .env # edit .env
# import 'databases/db.sql' ke mysql

npm run dev
```

## Postman
Set method menjadi "POST" dan inputkan url ```http://localhost:3000/api/login```. <br>
Klik tab ```body``` dan pilih option ```raw```
```json
{
    "email": "superadmin@demo.com",
    "password": "123456"
}
```

## Catatan
Repo ini akan saya gunakan seterusnya sebagai template pembelajaran yang saya lakukan. <br>


## Source
- [Juliest88/mysql-node-express](https://github.com/Juliest88/mysql-node-express)