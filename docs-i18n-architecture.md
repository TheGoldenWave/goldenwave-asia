# i18n Architecture

Translations are stored once under `shared/locales/` and are intended to be shared by frontend and backend code.

```txt
shared/locales/
├── zh/
│   ├── common.json
│   ├── validation.json
│   ├── ui.json
│   └── errors.json
└── en/
    ├── common.json
    ├── validation.json
    ├── ui.json
    └── errors.json
```

## Intended stack

| Side | Library | Purpose |
|---|---|---|
| Frontend | react-i18next + i18next | Translation hooks and components |
| Frontend | i18next-browser-languagedetector | Browser/cookie language detection |
| Backend | nestjs-i18n | NestJS modular i18n |

## Language switch sync

```txt
User switches language
→ Cookie `gw-lang` is written
→ axios `Accept-Language` should be updated
→ i18n.changeLanguage() runs in app code
→ later API requests automatically carry Accept-Language
```

The current static prototype mirrors this by loading `shared/locales/{lang}/common.json`, writing `gw-lang`, and exposing `window.__acceptLanguage` for future axios integration.

## Coverage target

- Frontend initialization config
- Component translation usage
- Language switch function
- Backend module config
- Service translation call
- DTO validation message i18n
