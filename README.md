# Angular Admin Panel

Angular 7 ve Angular Material ile başlatılmış bir yönetim paneli iskeleti: tembel yüklenen (lazy loading)
modüller, Material tablolar ve REST servisleri için genel bir CRUD servis sınıfı içerir. Proje başlangıç
aşamasında bırakılmıştır.

> **Not:** Bu depo 2019 yılında eğitim/örnek amaçlı yazıldı ve artık güncellenmiyor. Bağımlılıkları eskidir ve
> bilinen güvenlik açıkları içerir; üretimde kullanmayın.

## İçerik

| Klasör (`src/app/`) | Ne yapar |
|---|---|
| `admin/` | `/admin/user` ve `/admin/role` sayfaları: Material tablolar (rol listesinde sıralama, filtreleme ve sayfalama); şimdilik örnek veriyle çalışır, servislere bağlı değildir |
| `user/` | `/user/login` ve `/user/signup` sayfaları |
| `theme/` | Üst bilgi, alt bilgi ve giriş bileşenleri |
| `service/abstract/` | `CrudService<T, ID>`: `save`, `update`, `findOne`, `findAll`, `delete` işlemlerini `HttpClient` ile yapan soyut sınıf |
| `service/` | Bu sınıftan türeyen `UserService` ve `PersonService` |
| `model/` | `User`, `Person`, `UserRole` modelleri |

Servislerin adresi `src/environments/environment.ts` içindeki `server` değerinden gelir; şu an deneme amaçlı
herkese açık bir sahte REST servisine (JSONPlaceholder) bakar.

## Teknolojiler

- Angular 7.2, Angular Material / CDK 7.2, RxJS 6.3, TypeScript 3.2
- Bootstrap 4.2, Font Awesome 4.7, jQuery 3.3
- Angular CLI 7.2, Karma/Jasmine, Protractor

## Çalıştırma

Angular 7 araçları güncel Node sürümleriyle sorun çıkarabilir; Node 10 gibi eski bir sürüm (örneğin `nvm`
ile) kullanın.

```bash
npm install
npm start        # ng serve, http://localhost:4200
npm run build    # çıktı dist/ klasörüne
```

Kendi arka ucunuzu kullanmak için `src/environments/environment.ts` içindeki `server` değerini değiştirin.
`environment.prod.ts` dosyasında bu değer tanımlı değildir; üretim derlemesi alacaksanız oraya da ekleyin.
