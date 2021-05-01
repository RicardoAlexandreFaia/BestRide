# Projeto Best Ride

#### Alterações do ultimo commit:

1. Recuperar Conta
2. Alterações ao login para haver a possibilidade de recuperar conta
3. Google Mapa no menu

> Para Iniciar a app turista, execute os seguinte comandos:

```
    cd BestRide

```

---

```
    ionic serve turista_app

```

---

#### Tecnologias Usadas:

1. Ionic
2. Angular

---

## Para Executar em emulador Android:

> ionic build --prod && npx cap copy && npx cap sync android && npx cap open android

---

#### Bibliotecas Implementadas a instalar:

```
1. npm install @ionic-native/geolocation
2. npm install @ionic-native/native-geocoder
3. npm i @ionic-native/core
4. npm install --save @ionic-native/core@latest @ionic-native/google-maps@latest
5. npm i --save @capacitor-community/facebook-login
6. npm i @codetrix-studio/capacitor-google-auth
7. npm install @ngx-translate/core @ngx-translate/http-loader --save
```

---

## Nota :

> Para Iniciar o login do Facebook ou da Google, e
> aconselhavel emular o proprio usando o android studio (Android) ou o Xcode (IOS) ja que o browser nao consegue implementar as bibliotecas necessarias.

>Ajuste no menu que aparecia no login, agora só aparece depois do login

---

## TODO :

> 1. Sugestões no mapa para roteiros;
> 2. Melhoria no memu
> 3. Suporte de varios idiomas
