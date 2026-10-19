# Deployment checklist

## Before deploy
- [ ] Replace any placeholder project URLs only with real repository/demo links.
- [ ] Put the final resume PDF at `frontend/public/resume.pdf`.
- [ ] Verify email, GitHub and LinkedIn URLs.
- [ ] Build frontend with `npm run build`.
- [ ] Run backend and test `/api/health`, `/api/projects`, and `/api/contact`.
- [ ] Test form validation, error state, and database persistence.
- [ ] Test keyboard-only navigation, reduced-motion preference, and mobile layout.
- [ ] Add anti-spam protection/rate limiting before publishing the public contact API.

## Frontend
- [ ] Deploy `frontend` as a Vercel project.
- [ ] Root directory: `frontend`
- [ ] Build command: `npm run build`
- [ ] Output directory: `dist`
- [ ] Set `VITE_API_BASE_URL` to the deployed API origin.
- [ ] Ensure `resume.pdf` exists in `public`.

## Backend
- [ ] Deploy `backend` to a Java-capable host.
- [ ] Build: `mvn clean package`
- [ ] Start: `java -jar target/portfolio-api.jar`
- [ ] Set `DB_URL`, `DB_USERNAME`, `DB_PASSWORD`.
- [ ] Set `DB_DDL_AUTO=validate` after schema/migrations are managed.
- [ ] Set `CORS_ALLOWED_ORIGINS` to the exact production frontend origin.
- [ ] Verify provider's Java version, port binding, health checks, free-tier limits, and sleep policy.

## Database
- [ ] Confirm managed MySQL-compatible provider has a currently available free tier.
- [ ] Configure SSL/TLS if required by provider.
- [ ] Allow backend connectivity only as provider supports.
- [ ] Use a strong password and never commit it.
- [ ] Check backup/export options and storage limits.
