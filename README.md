### Hexlet tests and linter status:
[![Actions Status](https://github.com/rnikolaenkov/ai-for-developers-project-386/actions/workflows/hexlet-check.yml/badge.svg)](https://github.com/rnikolaenkov/ai-for-developers-project-386/actions)

## Automation

The repository uses GitHub Actions for two project-owned workflows:

- `ci.yml` runs on `push` and `pull_request` for `master` and executes the full verification pipeline:
  `npm run spec:build`, backend tests, frontend unit tests, frontend build, and Playwright e2e tests.
- `release-please.yml` runs on `push` to `master` and creates or updates a release PR with a proposed version bump and `CHANGELOG.md` updates.

## Release Process

`release-please` treats the root [package.json](/Users/romchik/projects/lesson/ai-for-developers-project/package.json) as the single repository release version.

For correct changelog generation and semantic version suggestions, merged commits should follow Conventional Commits, for example:

- `feat: add admin bookings filter`
- `fix: validate booking slot conflicts`
- `chore: update CI workflow`

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
