# API Documentation

Dokumentasi singkat API Sistem Informasi Akreditasi

## **Pokja**

URL : `/api/pokja`\
Method : `GET`\
Respon :

```json
{
  "message": "List didapatkan",
  "data": [
    {
      "id": "id_pokja",
      "pokja": "nama_pokja"
    }
  ]
}
```

---

URL : `/api/pokja`\
Method : `POST`\
Format data :

```json
{
  "pokja": "nama_pokja"
}
```

Respon :

```json
{
  "message": "Pokja ditambahkan",
  "data": {
    "pokja": "nama_pokja"
  }
}
```

---

URL : `/api/pokja/:idpokja`\
Method : `DELETE`\
Respon :

```json
{
  "message": "Pokja dihapus"
}
```

## **Modul**

URL : `/api/modul?filter=nama_pokja`\
Method : `GET`\
Respon :

```json
{
  "message": "List didapatkan",
  "data": [
    {
      "id": "id_modul",
      "nama_modul": "nama_modul",
      "nama_file": "nama_file",
      "deskripsi": "deskripsi_modul"
    }
  ]
}
```

---

URL : `/api/modul/`\
Method : `POST`\
Format data :

```json
{
  "nama_file": ["upload_file"],
  "nama_modul": "nama_modul",
  "deskripsi": "deskripsi_modul",
  "id_pokja": "id_pokja"
}
```

Respon :

```json
{
  "message": "Modul ditambah",
  "data": {
    "nama_file": "nama_file",
    "nama_modul": "nama_modul",
    "deskripsi": "deskripsi_modul",
    "id_pokja": "id_pokja"
  }
}
```

---

URL : `/api/modul/:idmodul`\
Method : `GET`\
Respon : `file_modul.pdf`

---

URL : `/api/modul/:idmodul`\
Method : `PATCH`\
Format data :

```json
{
  "nama_file": ["upload_file"],
  "nama_modul": "nama_modul",
  "deskripsi": "deskripsi_modul",
  "id_pokja": "id_pokja"
}
```

Respon :

```json
{
  "message": "Modul diupdate",
  "where": {
    "id": "id_modul"
  },
  "data": {
    "nama_file": ["upload_file"],
    "nama_modul": "nama_modul",
    "deskripsi": "deskripsi_modul",
    "id_pokja": "id_pokja"
  }
}
```

---

URL : `/api/modul/:idmodul`\
Method : `DELETE`\
Respon :

```json
{
  "message": "Modul dihapus"
}
```

---

## **Modul**

URL : `/api/user`\
Method : `POST`\
Format data :

```json
{
  "username": "username",
  "password": "password",
  "nama": "nama_user",
  "email": "email_user",
  "id_pokja": "id_pokja"
}
```

Respon :

```json
{
  "message": "User ditambah",
  "data": {
    "username": "username",
    "password": "password",
    "nama": "nama_user",
    "email": "email_user",
    "id_pokja": "id_pokja"
  }
}
```

---

URL : `/api/user/:iduser`\
Method : `GET`\
Respon :

```json
{
  "message": "User didapatkan",
  "data": {
    "username": "username",
    "password": "password",
    "nama": "nama_user",
    "email": "email_user",
    "pokja": "nama_pokja"
  }
}
```

---

URL : `/api/user/:iduser`\
Method : `PATCH`\
Format data :

```json
{
  "password": "password",
  "nama": "nama_user",
  "email": "email_user",
  "id_pokja": "id_pokja"
}
```

Respon data :

```json
{
  "message": "User diupdate",
  "where": {
    "id": "id_user"
  },
  "data": {
    "password": "password",
    "nama": "nama_user",
    "email": "email_user",
    "id_pokja": "id_pokja"
  }
}
```
