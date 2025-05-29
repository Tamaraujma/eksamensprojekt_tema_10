# Teknisk dokumentation for Tema 10 gruppeprojekt

Når man er flere der bidrager til en kodebase, lærer man hurtigt, at ens sædvanlige måder at gøre tingene på ikke nødvendigvis er logisk for alle.

Skriv derfor jeres fælles retningslinjer for punkterne herunder(tilføj gerne flere selv), sådan som det giver bedst mening for jer som gruppe. Dokumentationen sikre, at jeres fælles kodebase forbliver overskuelig, er let at arbejde med og til at forstå for alle, og at I undgå konflikter, og har nemmere ved at hjælpe hinanden undervejs.

## Projektstruktur:

Beslut, hvordan I vil organisere jeres projekt – struktur for mapper og filer.

- Hvordan organiserer I billeder, fonte og andre ressourcer?
  Vi organiserer billeder i assets mappen. Vi indætter fonte i Layout.astro og i generel.css som en fælles fil.

- Hvor placerer I boilerplate?(fx CSS- og JavaScript-filer, der bruges på tværs af projektet)
  Vi placerer det øverst i CSS- og i JavaScript-filer

- Hvor placerer I HTML, CSS- og JavaScript-filer til fx detaljevisning og listevisning?
  Vi har placeret Astro-filerne inde i pages mappen. CSS-filen har vi placeret under CSS mappen. JavaScript-filerne har vi placeret under js-filen.

## Navngivning:

Beslut hvordan i vil navngive filer og mapper for at sikre en ensartet struktur og undgå forvirring.

- Hvordan navngiver I filnavne? (fx små bogstaver, ingen mellemrum, brug af - eller _)
  Vi har navngivet filerne og mapperne med små bogstaver og med _ som fx. om_fredds.astro.

- Hvordan sikre I at det er til at forstå hvilke HTML-, CSS- og JavaScript-filer der høre sammen?
  I menu.astro filen har vi indsat JavaScripten inde i filen, men ellers navngiver vi dem samme navn, så de passer sammen fx. fordele.astro > fordele.js.

## Link til scripts:

- Hvor placerer I script referencer i HTML'en? (fx i <head> med defer attribute, eller sidst i <body>)?
  Vi placerer script nederst i <body> uden defer attribute.

## Git branches:

- Hvordan navngiver I branches, så alle kan forstår hvem der arbejder i branchen og på hvad?(fx feature-lotte-formular)
  Vi nanvgiver vores branches enten som: menu-tamara eller fordele-side.

## Arbejdsflow:

- Hvordan fordeler I arbejdet, så I undgår at flere arbejder i de samme filer samtidigt?
  Vi har hver tildelt en Astro-fil, ellers aftaler vi at fortælle hinanden hvilke filer vi arbejder i, så vi undgår konklifter i GitHub.

- Hvordan sikrer I, at commit-beskeder er beskrivende?
  Vi beskriver hvad vi har lavet, fx "menu færdig".

- Hvordan kommunikerer i om ændringer i main branchen når feature merges?
  Vi informerer hinanden på vores messenger gruppe.

## Kode:

- Hvordan skriver i funktioner i JavaScript?(fx med function keyword eller som arrow functions)
  Vi bruger arrow functions.

- Beslut hvilken CSS selector i benyttes til referener i henholdsvis CSS og JavaScript(fx. id'er til JavaScript og Classes til CSS)
  Vi har kun brugt classes.

- Skal filer have korte forklaringer som kommentarer?
  Vi har skrevet kommentarer nogle steder i vores kode.

# Funktionalitet

Dette afsnit skal forklare hvad I konkret har arbejde med, for at udvikle websitet. Tænk over hvilke interaktioner brugeren kan foretage på sitet? Eller hvordan websitet håndterer og præsenterer data? Eksempler på funktionalitet, der kan beskrives:

- Hentning af produkter fra API.
  Vi har lavet vores egen API på Supabase

- Filtrering af produkter baseret på brugerens valg.
  Vi har ikke filtrering, vi har kun filtreret i forhold til drikkevarer, new og mad.

Brug korte beskrivelser, som i eksemplerne herover

# API endpoints

Dette afsnit skal liste de endpoints fra API'et i har benyttet:

const url= "https://mzgerdkdpiuiptojhrqo.supabase.co/rest/v1/freds_menu?select=*"

# Dokumentation af Funktion

Dette afsnit skal beskrive en funktion I selv har udviklet. Det kunne eksempelvis være en funktion der generere en listen over fx. produkter:

- Beskrivelse: Hvad gør funktionen? Hvordan spiller den sammen med resten af koden?
  Funktionen tager fat i URL, som henter dataen for menuen. Så når man kommer klikker på menu siden, kan man se alle drikkevare, new og mad.

- Parametre: Hvilke input forventes (fx en værdi fra en dropdown eller URL'en)?
  I vores javsascript kode, filtrere den første if kun til drikkevarer.

- Returnerer: Beskriv, om funktionen returnerer en værdi eller blot manipulerer DOM’en.
  Funktionen menu_item returnerer en JSX-komponent. Vi har ikke en funktionen som manipulerer DOM'en.

- Eksempel på brug: Indsæt funktions-koden herunder(der hvor koden er i eksemplet) og vis, hvordan funktionen kaldes:
<!-- {data.map ((menu) => {
    if (menu.menu_category == "Drink") {
      return (
        <article class="menu_item">
            <p>{menu.slug} - {menu.price}</p>
        </article>
    );
  }
})} -->

```javascript
//funktionens kode:
function voresFunktion(sprog) {
  console.log(`${sprog} syntax highlighting`);
}
//hvordan funktionen kaldes:
voresFunktion("JavaScript");
```
