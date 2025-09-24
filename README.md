# Harry Potter Actors Search 🔮

Et frontend-prosjekt der man kan søke etter skuespillere fra Harry Potter-universet og få opp informasjon om dem (navn, hus, fødselsdato, øyefarge, hårfarge, osv.).  
Hvis navnet ikke finnes i databasen, vil en feilmelding vises.

---

## 📂 Project Structure / Prosjektstruktur
├── index.html # Main HTML file / Hoved-HTML
├── style.css # Styling / Utseende
├── index.js # Logic / Funksjonalitet


---

## 🛠️ Technologies Used / Teknologier brukt

- **HTML5** → Struktur (markup).
- **CSS3** → Layout og design (bl.a. flexbox, farger, skjuling).
- **Vanilla JavaScript** → DOM-manipulasjon, klikk-eventer og logikk.

---

## 🚀 Features / Funksjonalitet

- 🔍 **Search**: Brukeren kan skrive inn navnet på en skuespiller fra Harry Potter.
- ✅ **Valid actor**: Viser informasjon i en resultatboks (`container2`).
- ❌ **Invalid actor**: Viser en rød feilmelding (`feilmelding`) med beskjed om at navnet ikke finnes.
- 🎭 **Dynamic content**: Informasjon oppdateres direkte i DOM via `innerHTML`.

---

## 📸 Key Components / Viktige komponenter

### HTML
- `#container2` → Inneholder resultatene (skuespillerinfo).
- `#feilmelding` → Vises dersom navnet ikke finnes.
- Flere `<p>` med `id` som fylles av JS:  
  `name`, `actor`, `species`, `gender`, `house`, `dateOfBirth`, `ancestry`, `eyeColour`, `hairColour`.

### CSS
- `.hidden` → Brukes for å skjule elementer (`display: none;`).
- `#feilmelding` → Rød bakgrunn + border, sentrert tekst.
- `info_div` → Blå bakgrunn, avrundede kanter, tydelig gruppering av info.

### JavaScript
- Lytter på knapp:  
  ```js
  document.getElementById("oppgi_but").addEventListener("click", ...)
