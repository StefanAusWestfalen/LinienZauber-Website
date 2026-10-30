# LinienZauber – Website

Ein statischer One-Pager auf Deutsch und Englisch: reines HTML, CSS und ein kleines Skript, ohne Build-Schritt, ohne Cookies und ohne fremde Server (Roboto liegt in `assets/fonts`, OFL-Lizenz).

| Datei | Inhalt |
|---|---|
| `index.html` | die Seite mit allen deutschen Texten (gilt auch ohne JavaScript) |
| `i18n.js` | die englischen Texte und der Sprachwechsel |
| `style.css` | Neon-Look des Spiels: Nachtblau, Glasröhren, Cyan, Magenta, Gold, Grün |
| `assets/img` | App-Icon und zehn iPad-Screenshots (1200 × 824): Intro, Modus-Auswahl mit allen acht Karten und je ein Bild der Modi (aus der iPad-Tour `IPadTourTests`, um 90° gedreht und verkleinert) |
| `assets/fonts` | Roboto Regular, Medium, Bold mit `OFL.txt` |

## Sprache

Die Seite wählt die Sprache selbst, bevor sie gezeichnet wird:

1. `?lang=de` oder `?lang=en` in der Adresse, z. B. für Links in englischen Beiträgen,
2. sonst die frühere Wahl über den Schalter **DE / EN** (im Browser gespeichert),
3. sonst die Browsersprachen: die erste deutsche oder englische gewinnt, jede andere Sprache bekommt Englisch.

Der Name bleibt in jeder Sprache **LinienZauber**, wie im Spiel und im App Store. Die englische Fassung zeigt unter dem Titel nur, was er bedeutet: „Line Magic“ (`hero.alias`, auf Deutsch leer und ausgeblendet).

Neue Texte bekommen im HTML ein `data-i18n="schlüssel"` (Attribute: `data-i18n-attr="alt:schlüssel"`) und in `i18n.js` die englische Fassung unter demselben Schlüssel.

## Ansehen

```bash
cd Website && python3 -m http.server 8080
```

Dann <http://localhost:8080> bzw. <http://localhost:8080/?lang=en> öffnen. Die Animation „Haus vom Nikolaus“ ruht, wenn im System „Bewegung reduzieren“ eingeschaltet ist; dann steht das Haus fertig gezeichnet da.

## Kostenlos veröffentlichen

Der Ordner `Website` ist die komplette Seite; jeder Hoster für statische Seiten genügt.

- **Cloudflare Pages** – kostenlos, verbindet sich auch mit privaten GitHub-Repositorys. Projekt anlegen, Repository wählen, *Build command* leer lassen, *Build output directory* `Website`. Jeder Push auf `main` veröffentlicht neu. Eigene Domain und HTTPS inklusive. Alternativ „Direct Upload“: den Ordner hochziehen.
- **Netlify** – kostenloser Tarif; am schnellsten über *Netlify Drop*: den Ordner `Website` ins Browserfenster ziehen. Mit Git: *Base directory* `Website`, kein Build-Befehl.
- **GitHub Pages** – kostenlos nur für öffentliche Repositorys; für das private `ShortesPath` bräuchte es einen bezahlten GitHub-Plan oder ein eigenes öffentliches Repository nur mit diesem Ordner.
- **Codeberg Pages** oder **Neocities** – weitere kostenlose Hoster für statische Seiten.

Vor dem Veröffentlichen in Deutschland: Eine öffentliche Website braucht in der Regel ein **Impressum** (§ 5 DDG) und eine **Datenschutzerklärung** (der Hoster protokolliert Zugriffe). Beides ist hier bewusst noch nicht enthalten, weil Name, Anschrift und Kontakt hineingehören.
