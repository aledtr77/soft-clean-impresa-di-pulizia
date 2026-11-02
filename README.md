# Soft & Clean — landing page

Landing page in italiano costruita con Vite, Tailwind CSS e JavaScript vanilla.

## Avvio

```bash
npm install
npm run dev
```

Per la build: `npm run build`.

## Pubblicazione su GitHub Pages

Il workflow `.github/workflows/deploy.yml` pubblica automaticamente la branch `main` su
`https://aledtr77.github.io/soft-clean-impresa-di-pulizia/`. La build imposta il percorso
di base del repository; la build locale e quella per altri host restano alla radice (`/`).

## Da completare prima dell'uso pubblico

- Confermare con l'impresa le sei categorie di servizio e il testo descrittivo.
- Inserire recapiti, zona servita e un eventuale collegamento WhatsApp reale.
- Collegare il modulo a un backend o servizio di form, gestire gli errori di rete e pubblicare l'informativa privacy completa prima di raccogliere dati.
- Il sito usa il logo scontornato approvato, in formato WebP (`public/assets/logo-scontornato.webp`). La sorgente trasparente è in `branding/logo-scontornato.png`; la foto di riferimento è in `branding/logo-riferimento.png`. Non è disponibile una versione SVG vettoriale.

Il modulo corrente verifica i campi nel browser e mostra chiaramente che **nessun dato viene inviato o salvato**.

## Fotografie

Le fotografie illustrative sono state scaricate da Pexels e distribuite secondo la [licenza Pexels](https://www.pexels.com/license/):

- `hero-soggiorno.jpg`: [Mateusz Pielech](https://www.pexels.com/photo/minimalist-living-room-interior-with-natural-light-33054903/)
- `cura-dettagli.jpg`: [Polina Tankilevitch](https://www.pexels.com/photo/a-person-cleaning-the-table-with-cleaning-cloth-4440608/)
- `ambiente-accogliente.jpg`: [Lisa Anna](https://www.pexels.com/photo/interior-of-a-modern-minimalist-living-room-19889139/)

Le immagini non raffigurano lavori, personale o locali di Soft & Clean.
