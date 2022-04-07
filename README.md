# Browser Technologies @cmda-minor-web 20-21

### User story

_Ik wil een enquête kunnen invullen over de minor Web Development, met verschillende antwoordmogelijkheden. Als ik de enquête niet afkrijg, wil ik later weer verder gaan met waar ik ben gebleven._

## Functies

Met deze applicatie kan je een enquete invullen voor de minor web. Je vult eerst je naam en studenten nummer in, dit wordt ook opgeslagen in local storage (als dit gesupport is). Je komt na het opsturen bij de resultaten pagina waar je je ingevulde data kan zien.

## Wat is Progressive Enhancement?
Je kan Progressive Enhancement heel makkelijk uitleggen met een kleine metafoor. Je moet bedenken dat je een cake heb. Deze cake is op zich al lekker, maar om hem nog beter te maken kan je er dingen achteraf op toevoegen. Dit doe je ook met een website of webapplicatie. Je maakt de core van de app zodat het de functionaliteiten heeft die het moet hebben en dan ga je kijken hoe je het nog kan uitbreiden zodat je app beter wordt. 

Als je dit toepast zorg je ervoor dat je de meeste stabiliteit heb voor browsers. Niet alle browsers ondersteunen evenveel, dus als je ervoor zorgt dat je alle basis functionaliteiten zo makkelijk mogelijk erin krijgt zorg je ervoor dat de meeste browsers het kunnen gebruiken, en dan breid je het nog is uit om het effectiever te maken voor de browsers die het ondersteunen.

Je hebt ook graceful degradation. Hier laat je je gebruikers weten wat er van je app te gebruiken is op welke browsers. Je laat bijvoorbeeld weten dat een bepaalde feature niet te gebruiken is op edge omdat edge het niet ondersteunt.

Bronnen: _Progressive Enhancement: What It Is, And How To Use It? (2009, 22 april). Smashing Magazine. https://www.smashingmagazine.com/2009/04/progressive-enhancement-what-it-is-and-how-to-use-it/_

_Gustafson, A., Cheinman, K., McGovern, G., Dauer, J., Bucher, A., & Glushien, N. (2008, 7 oktober). Understanding Progressive Enhancement. A List Apart. https://alistapart.com/article/understandingprogressiveenhancement/_

_freeCodeCamp.org. (2018, 7 november). What is Progressive Enhancement, and why it matters. https://www.freecodecamp.org/news/what-is-progressive-enhancement-and-why-it-matters-e80c7aaf834a/_

## Functional, Reliable, Usable & Pleasurable

De functional/reliable is mijn HTML, je ziet als de css/js uit staat een sterke html basis. Hierdoor kan je nog steeds de enquête invullen, verzenden en bekijken. Als de browser het ondersteund wordt er required gebruikt om het formulier te valideren. De data wordt opgeslagen in Voorhees.json om dit weer op te kunnen halen.

Usable is de CSS, ik heb de styling van windows 98 als inspiratie genomen. Het formulier krijgt een duidelijke layout die opgedeelt is in 4 delen. Het overzicht staat in een ouderwetse tabel. 

Voor pleasurable heb ik de footer toegevoegd met alleen div’s om de semantiek van de website als deze geen css heeft toch kloppend te maken. Ook wordt localstorage gebruikt om je naam en nummer op te slaan zodat deze onthouden worden als je weg gaat van het formulier.

Ik heb @supports gebruikt in css om te checken of dingen gesupport worden, jammer genoeg wordt @supports ook niet door alles gesupport, hier heb ik ook mee opgelet. 

Zo kan je @supports gebruiken:
```css
@supports ( display: flex ) {
   ul {
      display: flex;
    }
}
```

Je kan ook via javascript kijken of iets gesupport is, dat doe je zo:
```javascript
if (typeof(Storage) !== "undefined") {
   // code voor localStorage
} else {
   console.log('localStorage is not supported')
}
```
## Schetsen 
![breakdown](https://user-images.githubusercontent.com/30145681/162204166-76f638f3-7a0c-47c0-bb31-789398c3e6e2.png)



## Future features

- Verbeterde form validator
- Beter onthouden waar je bent gebleven

## Licence

Dit project is voorzien van een MIT licence. Zie de pagina LICENCE voor meer informatie.

## Resources

Lessen & leraren

W3 Schools
