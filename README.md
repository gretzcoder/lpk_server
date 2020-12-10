# lpk_server

Server for lpk with express, graphql, and mysql

## Cara meng-install

    1. melalui cli, masuk ke main direktori program
    2. install dependencies dengan mengetikan perintah "npm install" (pastikan pc terhubung ke internet)
    3. edit file .env dan sesuaikan dengan kebutuhan
    4. buat db dengan nama sesuai dengan file .env
    5. ketik perintah "npm start" untuk menjalankan server (pastikan mysql sudah jalan)

## Seeding database dengan dummy data

    1. melalui cli, masuk ke main direktori program /src/db
    2. ketikkan perintah "npx sequelize db:seed:all" untuk mengisi database dengan dummy data
    3. database berhasil di isi

## Menjalankan server

    1. melalui cli, masuk ke main direktori program
    2. ketik perintah "npm start" untuk menjalankan server (pastikan mysql sudah jalan)
    3. buka browser dan masuk ke http://localhost:8000/

[mungkin kamu akan tertarik dengan ekstensi browser ini](https://altair.sirmuel.design/)

### Login dan Registrasi

    1. ambil token dari dummy data admin dengan query mutation berikut:

```
mutation{
  login(email: "emailAdmin@mail.com", password:"passwordAdmin"){
    token
  }
}
```

    2. atau registrasi akun peserta baru dengan query mutation:

```
mutation {
  signUp(email: "yourEmail@mail.com", password: "yourPassword") {
    token
  }
}
```

    3. tambahkan header Authorization dengan token yang didapat
    4. coba dengan query berikut :

```
query{
 selfAccount{
    email
  }
}
```

    5. enjoy the ride dan jangan lupa baca dokumentasi
