# BEM-PUCK 🔥

**Triggered deploy - 2026-05-09**

## Fly.io deployment

### Prerequisites
- Install `flyctl`: https://fly.io/docs/hands-on/install-flyctl/
- Authenticate: `fly auth login`

### First-time launch
From the repo root:

```bash
fly launch --no-deploy
```

Use the existing `fly.toml` when prompted, then deploy:

```bash
fly deploy
```

### Ongoing deploys
- GitHub Actions deploys on pushes to `main` via `.github/workflows/deploy.yml`.
- Ensure `FLY_API_TOKEN` is set in repo secrets.
