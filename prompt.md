# Prompt per a generar el CV en React/Next.js

**Rol:** Actua com un desenvolupador expert en React, Next.js i Tailwind CSS.
**Tasca:** Reescriure el fitxer `src/app/cv_render/page.tsx` per crear una pàgina web que simuli visualment el meu currículum en una sola pàgina, basant-te en el PDF original.

## 1. Dades (`private/bio.ts`)
Assumeix que importem les dades de `private/bio.ts`.

## 2. Layout de la pàgina (`src/app/cv_render/page.tsx`)
El disseny ha de ser net, d'aspecte professional i ocupar exclusivament **una sola pàgina** (evitant l'scroll innecessari).

L'estructura ha de ser exactament aquesta:

### Part Superior (Capçalera)
Crea una capçalera dividida en dues parts:
- **A l'esquerra:** - Nom complet en lletra gran i destacada.
  - A sota del nom: Títol professional o d'estudis.
- **A la dreta (Contacte):** - Web del portafolis (`url`).
  - Número de telèfon.
  - Ubicació.

### Part Central (Cos del CV)
A sota de la capçalera, divideix el contingut en dues columnes:

**Columna Esquerra:**
- **Secció Perfil:** Títol i a sota la descripció del perfil professional.
- **Secció Altres Dades:** Títol i a sota els idiomes i el permís de conduir.
- **Secció Disponibilitat:** Títol i a sota la descripció de la disponibilitat.

**Columna Dreta:**
- **Secció Experiència:** Títol i llistat de les experiències.
- **Secció Habilitats Tècniques:** Títol i llistat de les habilitats.
- **Secció Educació:** Títol i llistat de la formació acadèmica.

## 3. Restriccions Tècniques
- Utilitza Tailwind CSS per a l'estil (Flexbox/Grid).
- Utilitza etiquetes semàntiques (`<header>`, `<main>`, `<section>`).
- Ajusta els marges, el padding i la mida de la lletra perquè tot el contingut quedi ben distribuït i encaixi visualment en una sola pàgina.
- Retorna tot el codi complet per al fitxer `src/app/cv_render/page.tsx`.