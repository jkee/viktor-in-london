# Deployment

Hosted on **Railway**, served by Caddy as static files (see `Dockerfile`),
behind **Cloudflare** DNS.

## URLs

| URL | What |
|---|---|
| https://viktor-in-london.uk | primary (custom domain) |
| https://www.viktor-in-london.uk | same site |
| https://viktor-in-london.up.railway.app | Railway-provided fallback |

## Railway

- Project **london-map** in the "Victor Tarnavsky's Projects" workspace,
  service **london-map**, environment `production`.
- Build: the `Dockerfile` (Caddy `file-server` on `$PORT`). `.dockerignore`
  keeps docs and local config out of the image.

**Deploy** (from the project root, Railway CLI logged in):

```bash
railway up --detach --service london-map
```

Useful commands: `railway status`, `railway service logs`, `railway open`,
`railway domain list --service london-map`.

## DNS (Cloudflare, zone viktor-in-london.uk)

| Type | Name | Content |
|---|---|---|
| CNAME | `@` | `kzqcq77d.up.railway.app` |
| CNAME | `www` | `zm76qjie.up.railway.app` |
| TXT | `_railway-verify` | `railway-verify=e4d0…` (ownership proof) |
| TXT | `_railway-verify.www` | `railway-verify=f8a4…` (ownership proof) |

SSL/TLS encryption mode must be **Full (strict)** — "Flexible" causes a
redirect loop through the Cloudflare proxy.

## Notes

- The site is **public**; the walk notes are personal opinions. If that ever
  feels wrong, Caddy `basic_auth` in the Dockerfile is a two-line fix.
- No secrets anywhere in the repo; the only external services at runtime are
  OSM tiles, unpkg (Leaflet) and Google Fonts.
