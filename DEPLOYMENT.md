# 🚀 Инструкция по деплою Meteo.Kaz

## Вариант 1: Деплой через GitHub (Рекомендуется)

### Шаг 1: Создайте репозиторий на GitHub

1. Перейдите на https://github.com/new
2. Назовите репозиторий: `meteo-kaz`
3. Выберите "Public" (если хотите, чтобы было видно всем)
4. Нажмите "Create repository"

### Шаг 2: Загрузите код на GitHub

1. Откройте PowerShell в папке проекта:
```powershell
cd c:\Users\USER\Desktop\казпроект
```

2. Инициализируйте Git и добавьте удаленный репозиторий:
```bash
git config --global user.name "Ваше имя"
git config --global user.email "ваш@email.com"

git add .
git commit -m "Initial commit: Meteo.Kaz flood monitoring system"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/meteo-kaz.git
git push -u origin main
```

### Шаг 3: Настройте GitHub Pages и Actions

1. Перейдите в Settings репозитория
2. Выберите "Pages" слева
3. Под "Source" выберите:
   - Branch: `gh-pages`
   - Folder: `/ (root)`
4. Сохраните

### Шаг 4: Проверьте GitHub Actions

1. Перейдите на вкладку "Actions" в репозитории
2. Убедитесь, что workflow "Deploy to GitHub Pages" запустился
3. Дождитесь завершения (должна быть зеленая галочка ✅)

### Шаг 5: Проверьте сайт

Ваш сайт будет доступен по адресу:
```
https://YOUR_USERNAME.github.io/meteo-kaz
```

---

## Вариант 2: Локальный деплой (для тестирования)

### Запуск backend API:
```powershell
cd c:\Users\USER\Desktop\казпроект\backend
node server.js
```
Сервер будет работать на: `http://localhost:3003`

### Запуск frontend в разработке:
```powershell
cd c:\Users\USER\Desktop\казпроект\frontend
npm start
```
Откройте: `http://localhost:4201`

### Собрать для продакшена:
```powershell
cd c:\Users\USER\Desktop\казпроект\frontend
npm run build
```
Результат будет в папке: `frontend/dist/kazproject-frontend`

---

## Вариант 3: Деплой на собственный сервер (например, Vercel, Heroku, или VPS)

### Подготовка:
1. Убедитесь, что код загружен на GitHub
2. Выберите платформу для деплоя

### На Vercel (самый простой вариант):

1. Перейдите на https://vercel.com
2. Нажмите "Import Project"
3. Выберите ваш репозиторий `meteo-kaz`
4. Vercel автоматически определит это как Angular проект
5. Нажмите "Deploy"

Ваш сайт будет доступен по ссылке типа:
```
https://meteo-kaz.vercel.app
```

### На Heroku (для backend API):

1. Установите Heroku CLI с https://devcenter.heroku.com/articles/heroku-cli
2. Создайте `Procfile` в корне проекта:
```
web: node backend/server.js
```

3. Выполните:
```bash
heroku login
heroku create meteo-kaz-api
git push heroku main
```

---

## Вариант 4: Развернуть собственный домен

### Привязать домен к GitHub Pages:

1. Купите домен (например, на registrar.kz)
2. В Settings репозитория → Pages → Custom domain
3. Введите ваш домен: `meteo-kaz.kz`
4. Выполните в терминале:
```bash
echo "meteo-kaz.kz" > frontend/dist/kazproject-frontend/CNAME
git add .
git commit -m "Add custom domain"
git push
```

---

## 🔄 Автоматическое обновление

Когда вы делаете push в main ветку, GitHub Actions автоматически:
1. ✅ Собирает Angular приложение
2. ✅ Тестирует код (если добавить тесты)
3. ✅ Публикует на GitHub Pages или выбранный сервер

---

## 📊 Структура развертывания

```
Frontend (Angular)
├── GitHub Pages / Vercel
└── http://meteo-kaz.kz

Backend API (Node.js)
├── Heroku / VPS
└── https://api.meteo-kaz.kz:3003
```

---

## ⚠️ Важно перед деплоем

1. ✅ Все файлы загружены на GitHub
2. ✅ Backend работает и доступен
3. ✅ Frontend собирается без ошибок
4. ✅ Переведены все текста на RU/KK
5. ✅ API URL правильно настроен в frontend

---

## 🆘 Решение проблем

### Ошибка: "404 на GitHub Pages"
- Убедитесь, что включена ветка `gh-pages` в Settings → Pages

### Ошибка: "API недоступен"
- Проверьте, что backend сервер запущен
- Убедитесь, что CORS включен в `backend/server.js`

### Ошибка: "Cannot GET /"
- Переустановите зависимости: `npm install`
- Пересоберите: `npm run build`