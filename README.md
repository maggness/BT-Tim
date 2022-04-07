# Browser Technologies @cmda-minor-web 20-21

### User story

_Ik wil een enquête kunnen invullen over de minor Web Development, met verschillende antwoordmogelijkheden. Als ik de enquête niet afkrijg, wil ik later weer verder gaan met waar ik ben gebleven._

## Functies

Met deze applicatie kan je een enquete invullen voor de minor web. Je vult eerst je naam en studenten nummer in, dit wordt ook opgeslagen in local storage (als dit gesupport is). Je komt na het opsturen bij de resultaten pagina waar je je ingevulde data kan zien.

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
## Breakdown schets 

![](https://user-images.githubusercontent.com/30145681/162193754-c53e62ab-dd59-400d-8154-6138a31486a3.jpeg)
![](https://user-images.githubusercontent.com/30145681/162193765-637c7886-5db9-4e05-b107-3765c1ee9fb4.jpeg)
![](https://user-images.githubusercontent.com/30145681/162193771-51556293-51cb-4d69-9ddf-c2a04f102e95.jpeg)


## Future features

- Verbeterde form validator
- Beter onthouden waar je bent gebleven

## Licence

Dit project is voorzien van een MIT licence. Zie de pagina LICENCE voor meer informatie.

## Resources

Lessen & leraren

W3 Schools
