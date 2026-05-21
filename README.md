### Hexlet tests and linter status:
[![Actions Status](https://github.com/rnikolaenkov/ai-for-developers-project-386/actions/workflows/hexlet-check.yml/badge.svg)](https://github.com/rnikolaenkov/ai-for-developers-project-386/actions)

## API contract

В репозиторий добавлена TypeSpec-спецификация API-контракта:

- [main.tsp](/Users/romchik/projects/lesson/ai-for-developers-project/main.tsp)
- [tspconfig.yaml](/Users/romchik/projects/lesson/ai-for-developers-project/tspconfig.yaml)

Контракт покрывает:

- админские маршруты владельца календаря для создания типов событий и просмотра предстоящих встреч;
- публичные маршруты для просмотра видов бронирования, получения доступных слотов и создания бронирования;
- бизнес-ограничения на окно записи в ближайшие 14 дней и глобальную занятость слота независимо от типа события.

Для генерации OpenAPI после установки зависимостей:

```bash
npm install
npm run spec:build
```
