import type { Topic } from "@/lib/types";

export const topics: Topic[] = [
  {
    id: "epi-01",
    group: "I. Epidemiológia és Kutatásmódszertan",
    number: 1,
    title: "Epidemiológia fogalma, tárgyköre és története",
    summary:
      "Az epidemiológia a betegségek és egészségi állapotok populációs előfordulását, eloszlását és okait vizsgálja.",
    blocks: [

      {
        type: "paragraph",
        text:
          "Az epidemiológia nem az egyes betegből indul ki, hanem populációkban gondolkodik. Alapkérdései: kiket, hol, mikor, milyen gyakran és miért érint egy egészségi probléma.",
      },
      {
        type: "bullets",
        title: "Tárgyköre",
        items: [
          "Betegségek gyakoriságának mérése: incidencia, prevalencia, mortalitás.",
          "Térbeli, időbeli és személyek szerinti eloszlás vizsgálata.",
          "Rizikó- és védő tényezők azonosítása.",
          "Megelőzés, szűrés és intervenciók értékelése.",
          "Népegészségügyi döntések támogatása.",
        ],
      },
      {
        type: "compare",
        title: "Fő megközelítések",
        items: [
          {
            label: "Deskriptív epidemiológia",
            text: "Leírja, hogy a betegség kiknél, hol, mikor és milyen gyakran fordul elő.",
          },
          {
            label: "Analitikus epidemiológia",
            text: "Okokat és összefüggéseket keres expozíciók és kimenetelek között.",
          },
          {
            label: "Intervenciós epidemiológia",
            text: "Beavatkozások hatását vizsgálja.",
          },
        ],
      },
      {
        type: "definition",
        title: "Alapfogalmak",
        text:
          "Populáció: a vizsgálat vagy következtetés célcsoportja. Expozíció: a betegséget befolyásoló tényező. Kimenetel: a vizsgált egészségi esemény vagy állapot.",
      },
      {
        type: "paragraph",
        text:
          "Hippokratész a környezet, életmód és éghajlat szerepét hangsúlyozta. John Snow a londoni kolerajárvány kapcsán a szennyezett ivóvíz szerepét igazolta. A modern epidemiológia fertőző és krónikus betegségekkel is foglalkozik.",
      },
      {
        type: "highlight",
        text:
          "Vizsgán: az epidemiológia populációs szemléletű tudomány, amely leír, magyaráz és megelőz.",
      },
    ],
  },
  {
    id: "epi-02",
    group: "I. Epidemiológia és Kutatásmódszertan",
    number: 2,
    title: "Megbetegedések arányának mérése - incidencia",
    summary:
      "Az incidencia az új esetek előfordulását méri meghatározott populációban, meghatározott idő alatt.",
    blocks: [

      {
        type: "paragraph",
        text:
          "Incidenciánál csak azok számítanak, akik a vizsgálat kezdetén még nem betegek, de veszélyeztetettek. Ezért az incidencia a betegség kialakulásáról ad információt.",
      },
      {
        type: "formula",
        title: "Kumulatív incidencia",
        formula: String.raw`\text{CI} = \frac{\text{új esetek száma}}{\text{kezdetben veszélyeztetett személyek száma}}`,
        explanation:
          "Kockázatként értelmezhető. Példa: 1000 egészséges emberből 1 év alatt 50 beteg lesz, ezért CI = 50 / 1000 = 5%.",
      },
      {
        type: "formula",
        title: "Incidencia ráta",
        formula: String.raw`\text{IR} = \frac{\text{új esetek száma}}{\text{összes személy-idő}}`,
        explanation:
          "Az új esetek keletkezési sebességét méri. Példa: 50 új eset / 2000 személy-év = 25 eset / 1000 személy-év.",
      },
      {
        type: "compare",
        title: "Kumulatív incidencia és incidencia ráta",
        items: [
          {
            label: "Kumulatív incidencia",
            text:
              "Kockázatot mér. Nevezője a kezdetben veszélyeztetett személyek száma. Zárt populációban ideális.",
          },
          {
            label: "Incidencia ráta",
            text:
              "Eseménykeletkezési sebességet mér. Nevezője a személy-idő. Nyitott populációban vagy eltérő követési idők esetén ideális.",
          },
        ],
      },
      {
        type: "paragraph",
        text:
          "Az incidenciát rizikótényezők vizsgálatára, járványok követésére, kohorsz vizsgálatokban és intervenciók értékelésére használjuk.",
      },
      {
        type: "highlight",
        text:
          "Vizsgán: az incidencia mindig új eseteket mér; kumulatív formája kockázat, rátája személy-időre vonatkozó sebesség.",
      },
    ],
  },

  {
    id: "epi-03",
    group: "I. Epidemiológia és Kutatásmódszertan",
    number: 3,
    title: "Megbetegedések arányának mérése - prevalencia",
    summary:
      "A prevalencia a meglévő esetek gyakoriságát mutatja meg adott populációban, adott időpontban vagy időszakban.",
    blocks: [

      {
        type: "paragraph",
        text:
          "A prevalencia minden fennálló esetet tartalmaz: régi és új eseteket is. Ezért főleg a betegségteher és az ellátási igény becslésére alkalmas.",
      },
      {
        type: "formula",
        title: "Alapképlet",
        formula: String.raw`\text{P} = \frac{\text{meglévő esetek száma}}{\text{vizsgált populáció létszáma}}`,
        explanation:
          "Példa: 100 000 lakosból 5000 cukorbeteg, ezért P = 5000 / 100 000 = 5%.",
      },
      {
        type: "compare",
        title: "Típusai",
        items: [
          {
            label: "Pontprevalencia",
            text:
              "Adott időpontban fennálló esetek aránya. Példa: hány ember cukorbeteg január 1-jén.",
          },
          {
            label: "Időszakprevalencia",
            text:
              "Adott időszak alatt fennálló esetek aránya. Példa: hány embernek volt depressziója 2026 során.",
          },
        ],
      },
      {
        type: "compare",
        title: "Incidencia és prevalencia",
        items: [
          {
            label: "Incidencia",
            text:
              "Új eseteket mér. Kockázat, okok és rizikótényezők vizsgálatára alkalmas.",
          },
          {
            label: "Prevalencia",
            text:
              "Meglévő eseteket mér. Betegségteher és egészségügyi kapacitás becslésére alkalmas.",
          },
        ],
      },
      {
        type: "formula",
        title: "Kapcsolat az incidenciával",
        formula: String.raw`\text{Prevalencia} \approx \text{Incidencia} \times \text{Betegségtartam}`,
        explanation:
          "A prevalencia nő, ha sok új eset keletkezik, vagy ha a betegség hosszú ideig fennáll.",
      },
      {
        type: "highlight",
        text:
          "Vizsgán: az incidencia új eseteket, a prevalencia meglévő eseteket mér.",
      },
    ],
  },

  {
    id: "epi-04",
    group: "I. Epidemiológia és Kutatásmódszertan",
    number: 4,
    title: "Rizikó mérés – Relatív Rizikó (Risk Ratio)",
    summary:
      "A relatív rizikó az exponált és nem exponált csoport betegségkockázatának hányadosa.",
    blocks: [

      {
        type: "paragraph",
        text:
          "A relatív rizikó kockázatokat hasonlít össze. Akkor számolható, ha ismerjük az exponált és nem exponált csoport teljes létszámát.",
      },
      {
        type: "formula",
        title: "Képlete",
        formula: String.raw`\text{RR} = \frac{\text{kockázat exponáltakban}}{\text{kockázat nem exponáltakban}}`,
        explanation:
          "2×2 táblában: RR = [a / (a+b)] / [c / (c+d)].",
      },
      {
        type: "compare",
        title: "Értelmezése",
        items: [
          {
            label: "RR = 1",
            text:
              "Nincs különbség az exponált és nem exponált csoport kockázata között.",
          },
          {
            label: "RR > 1",
            text:
              "Az expozíció növeli a betegség kockázatát. Rizikótényező lehet.",
          },
          {
            label: "RR < 1",
            text:
              "Az expozíció csökkenti a betegség kockázatát. Védő tényező lehet.",
          },
        ],
      },
      {
        type: "paragraph",
        text:
          "Példa: dohányzóknál a betegség kockázata 20%, nem dohányzóknál 10%. RR = 20% / 10% = 2, vagyis a dohányzók kockázata kétszeres.",
      },
      {
        type: "bullets",
        title: "Mikor használjuk?",
        items: [
          "Kohorsz vizsgálatban.",
          "Randomizált kontrollált vizsgálatban.",
          "Ha valódi kockázat számolható.",
        ],
      },
      {
        type: "highlight",
        text:
          "Vizsgán: a relatív rizikó kockázatokat hasonlít össze, ezért főleg kohorsz és intervenciós vizsgálatok mutatója.",
      },
    ],
  },

  {
    id: "epi-05",
    group: "I. Epidemiológia és Kutatásmódszertan",
    number: 5,
    title: "Rizikó mérése - Esély Hányados (Odds Ratio)",
    summary:
      "Az odds ratio az expozíció odds-át hasonlítja össze az esetek és kontrollok között.",
    blocks: [

      {
        type: "definition",
        title: "Odds",
        text:
          "Az odds az esemény bekövetkezésének és be nem következésének aránya.",
      },
      {
        type: "formula",
        title: "Odds képlete",
        formula: String.raw`\text{Odds} = \frac{\text{esemény bekövetkezik}}{\text{esemény nem következik be}}`,
        explanation:
          "Példa: ha 20 beteg és 80 nem beteg van, akkor az odds = 20 / 80 = 0,25.",
      },
      {
        type: "formula",
        title: "Odds ratio képlete",
        formula: String.raw`\text{OR} = \frac{a \times d}{b \times c}`,
        explanation:
          "2×2 táblában: a = exponált eset, b = nem exponált eset, c = exponált kontroll, d = nem exponált kontroll.",
      },
      {
        type: "compare",
        title: "Értelmezése",
        items: [
          {
            label: "OR = 1",
            text:
              "Nincs kapcsolat az expozíció és a betegség között.",
          },
          {
            label: "OR > 1",
            text:
              "Az expozíció gyakoribb az esetek között. Rizikótényező lehet.",
          },
          {
            label: "OR < 1",
            text:
              "Az expozíció ritkább az esetek között. Védő tényező lehet.",
          },
        ],
      },
      {
        type: "paragraph",
        text:
          "Példa: tüdőrákos eseteknél 80 dohányzó és 20 nem dohányzó, kontrolloknál 40 dohányzó és 60 nem dohányzó. OR = (80 × 60) / (20 × 40) = 6.",
      },
      {
        type: "compare",
        title: "OR és RR különbsége",
        items: [
          {
            label: "RR",
            text:
              "Kockázatokat hasonlít össze. Kohorsz és RCT vizsgálatban természetes mutató.",
          },
          {
            label: "OR",
            text:
              "Oddsokat hasonlít össze. Főleg eset-kontroll vizsgálatban használjuk.",
          },
        ],
      },
      {
        type: "highlight",
        text:
          "Vizsgán: eset-kontroll vizsgálatban általában OR-t számolunk, mert a valódi kockázat nem ismert.",
      },
    ],
  },

  {
    id: "epi-06",
    group: "I. Epidemiológia és Kutatásmódszertan",
    number: 6,
    title:
      "Mortalitás mutatói (mortalitási ráta, ok specifikus halálozás, kor specifikus halálozás, neonatális- és csecsemőhalálozás, anyai halálozás), és főbb jellemzői",
    summary:
      "A mortalitási mutatók a halálozás gyakoriságát és szerkezetét írják le egy populációban.",
    blocks: [

      {
        type: "formula",
        title: "Általános mortalitási ráta",
        formula: String.raw`\text{Mortalitási ráta} = \frac{\text{halálozások száma}}{\text{populáció létszáma}}`,
        explanation:
          "Gyakran 1000 vagy 100 000 főre adják meg. A populáció teljes halálozási szintjét mutatja.",
      },
      {
        type: "compare",
        title: "Fontos mortalitási mutatók",
        items: [
          {
            label: "Ok-specifikus halálozás",
            text:
              "Egy adott halálok miatti halálozás gyakorisága. Példa: daganatos halálozás.",
          },
          {
            label: "Kor-specifikus halálozás",
            text:
              "Egy adott korcsoport halálozási gyakorisága. Segít kiszűrni a korösszetétel hatását.",
          },
          {
            label: "Neonatális halálozás",
            text:
              "Az élveszületést követő első 28 napban bekövetkező halálozás.",
          },
        ],
      },
      {
        type: "compare",
        title: "Csecsemő- és anyai halálozás",
        items: [
          {
            label: "Csecsemőhalálozás",
            text:
              "Az 1 éves kor előtt bekövetkező halálozás aránya az élveszületésekhez viszonyítva.",
          },
          {
            label: "Anyai halálozás",
            text:
              "A terhességgel, szüléssel vagy gyermekággyal összefüggő anyai halálozás.",
          },
        ],
      },
      {
        type: "formula",
        title: "Csecsemőhalálozás",
        formula: String.raw`\text{Csecsemőhalálozás} = \frac{\text{1 év alatti halálozások száma}}{\text{élveszületések száma}}`,
        explanation:
          "Általában 1000 élveszületésre adják meg. Fontos egészségügyi és társadalmi fejlettségi mutató.",
      },
      {
        type: "paragraph",
        text:
          "A nyers mortalitási ráta erősen függ a populáció korösszetételétől. Idősebb populációban magasabb lehet akkor is, ha az ellátás nem rosszabb.",
      },
      {
        type: "highlight",
        text:
          "A mortalitási mutatók értelmezésénél mindig figyelembe kell venni a populáció összetételét, főleg az életkort.",
      },
    ],
  },

  {
    id: "epi-07",
    group: "I. Epidemiológia és Kutatásmódszertan",
    number: 7,
    title:
      "Betegségek korai felismerése - szűrővizsgálatok szerepe, alapvető jellemzői",
    summary:
      "A szűrővizsgálat tünetmentes személyek vizsgálata a betegség korai felismerése érdekében.",
    blocks: [

      {
        type: "paragraph",
        text:
          "A szűrés célja nem a végleges diagnózis, hanem a gyanús esetek kiszűrése. Pozitív szűrés után diagnosztikus vizsgálat szükséges.",
      },
      {
        type: "bullets",
        title: "Jó szűrőprogram feltételei",
        items: [
          "A betegség jelentős népegészségügyi probléma legyen.",
          "Legyen felismerhető korai vagy tünetmentes szakasza.",
          "Álljon rendelkezésre hatékony kezelés.",
          "A szűrőteszt legyen egyszerű, biztonságos és elfogadható.",
          "A szűrés haszna haladja meg a károkat és költségeket.",
        ],
      },
      {
        type: "compare",
        title: "Tesztjellemzők",
        items: [
          {
            label: "Szenzitivitás",
            text:
              "A valóban betegek közül hányat jelez pozitívnak a teszt.",
          },
          {
            label: "Specificitás",
            text:
              "A valóban nem betegek közül hányat jelez negatívnak a teszt.",
          },
          {
            label: "Pozitív prediktív érték",
            text:
              "A pozitív teszteredményűek közül hányan valóban betegek.",
          },
          {
            label: "Negatív prediktív érték",
            text:
              "A negatív teszteredményűek közül hányan valóban nem betegek.",
          },
        ],
      },
      {
        type: "formula",
        title: "Szenzitivitás és specificitás",
        formula: String.raw`\text{Szenzitivitás} = \frac{\text{valódi pozitív}}{\text{összes beteg}}, \quad \text{Specificitás} = \frac{\text{valódi negatív}}{\text{összes nem beteg}}`,
        explanation:
          "A szenzitív teszt kevés beteget hagy ki. A specifikus teszt kevés egészségest jelez tévesen betegnek.",
      },
      {
        type: "paragraph",
        text:
          "A szűrés lehetséges hátránya a téves pozitív eredmény, a téves negatív eredmény, a túldiagnosztizálás és a felesleges beavatkozás.",
      },
      {
        type: "highlight",
        text:
          "A szűrővizsgálat lényege a korai felismerés, de pozitív eredménye nem diagnózis, hanem további kivizsgálást igényel.",
      },
    ],
  },

  {
    id: "epi-08",
    group: "I. Epidemiológia és Kutatásmódszertan",
    number: 8,
    title: "Direkt és indirekt standardizálás",
    summary:
      "A standardizálás heterogén populációk mutatóit teszi összehasonlíthatóvá az összetételbeli különbségek kontrollálásával.",
    blocks: [

      {
        type: "paragraph",
        text:
          "Leggyakrabban életkor szerinti standardizálást végzünk. Erre azért van szükség, mert például egy idősebb populációban a nyers halálozás eleve magasabb lehet.",
      },
      {
        type: "compare",
        title: "Direkt és indirekt standardizálás",
        items: [
          {
            label: "Direkt standardizálás",
            text:
              "A vizsgált populáció rétegspecifikus rátáit alkalmazzuk a standard populáció szerkezetére.",
          },
          {
            label: "Indirekt standardizálás",
            text:
              "A standard populáció rétegspecifikus rátáit alkalmazzuk a vizsgált populáció szerkezetére.",
          },
        ],
      },
      {
        type: "formula",
        title: "Direkt standardizált ráta",
        formula: String.raw`\text{Standardizált ráta} = \frac{\sum(\text{rétegspecifikus ráta} \times \text{standard réteglétszám})}{\sum \text{standard populáció}}`,
        explanation:
          "A kérdés: milyen lenne a vizsgált populáció rátája, ha a standard populáció összetétele érvényesülne?",
      },
      {
        type: "formula",
        title: "Indirekt standardizálás - SMR",
        formula: String.raw`\text{SMR} = \frac{\text{megfigyelt esetek száma}}{\text{várt esetek száma}}`,
        explanation:
          "SMR > 1: több eset történt a vártnál. SMR < 1: kevesebb eset történt a vártnál.",
      },
      {
        type: "paragraph",
        text:
          "Direkt standardizálást akkor használunk, ha megbízható rétegspecifikus rátáink vannak. Indirekt standardizálás akkor hasznos, ha a vizsgált populáció kicsi vagy a saját ráták instabilak.",
      },
      {
        type: "highlight",
        text:
          "Direktnél a saját rátát visszük a standard populációra; indirektnél a standard rátát visszük a saját populációra.",
      },
    ],
  },

  {
    id: "epi-09",
    group: "I. Epidemiológia és Kutatásmódszertan",
    number: 9,
    title: "Várható élettartam, DALY",
    summary:
      "A várható élettartam az átlagosan várható életéveket, a DALY pedig az elveszített egészséges életéveket fejezi ki.",
    blocks: [

      {
        type: "paragraph",
        text:
          "Leggyakrabban születéskor várható élettartamként használjuk. A populáció halandósági viszonyait és általános egészségi állapotát jellemzi.",
      },
      {
        type: "definition",
        title: "DALY",
        text:
          "A DALY az elveszített egészséges életévek száma egy betegség vagy egészségi probléma miatt.",
      },
      {
        type: "formula",
        title: "DALY képlete",
        formula: String.raw`\text{DALY} = \text{YLL} + \text{YLD}`,
        explanation:
          "YLL: korai halálozás miatt elveszített életévek. YLD: betegséggel vagy fogyatékossággal leélt egészségkárosodott évek.",
      },
      {
        type: "formula",
        title: "YLL és YLD",
        formula: String.raw`\text{YLL} = \text{halálesetek száma} \times \text{elveszített életévek}, \quad \text{YLD} = \text{esetek száma} \times \text{időtartam} \times \text{súlyossági súly}`,
        explanation:
          "A súlyossági súly 0 és 1 közötti érték. 0 = teljes egészség, 1 = halállal egyenértékű egészségveszteség.",
      },
      {
        type: "paragraph",
        text:
          "Példa: egy betegség sok DALY-t okozhat, ha sok korai halált okoz, vagy ha hosszú ideig rontja az életminőséget.",
      },
      {
        type: "highlight",
        text:
          "A DALY a mortalitást és a betegségben leélt életminőség-romlást egyetlen mutatóban foglalja össze.",
      },
    ],
  },

  {
    id: "epi-10",
    group: "I. Epidemiológia és Kutatásmódszertan",
    number: 10,
    title: "Deskriptív epidemiológiai vizsgálatok - leíró- és ökológiai vizsgálatok",
    summary:
      "A deskriptív epidemiológia a betegségek előfordulását írja le személy, hely és idő szerint.",
    blocks: [
      {
        type: "paragraph",
        text:
          "A deskriptív vizsgálatok nem ok-okozati bizonyításra szolgálnak. Céljuk a betegségmintázatok felismerése és hipotézisek megfogalmazása.",
      },
      {
        type: "compare",
        title: "Alapkérdések",
        items: [
          {
            label: "Személy",
            text: "Kiket érint? Például életkor, nem, foglalkozás, társadalmi helyzet szerint.",
          },
          {
            label: "Hely",
            text: "Hol fordul elő? Például országok, régiók vagy települések között.",
          },
          {
            label: "Idő",
            text: "Mikor fordul elő? Például szezonális változás, járvány vagy hosszú távú trend.",
          },
        ],
      },
      {
        type: "definition",
        title: "Leíró vizsgálat",
        text:
          "Olyan vizsgálat, amely egy egészségi probléma gyakoriságát és eloszlását írja le, beavatkozás és ok-okozati tesztelés nélkül.",
      },
      {
        type: "definition",
        title: "Ökológiai vizsgálat",
        text:
          "Olyan vizsgálat, amelyben az elemzés egysége nem az egyén, hanem egy csoport vagy populáció.",
      },
      {
        type: "paragraph",
        text:
          "Példa ökológiai vizsgálatra: országok alkoholfogyasztását hasonlítjuk össze a májcirrózis halálozással. Ilyenkor populációs adatokat elemzünk.",
      },
      {
        type: "bullets",
        title: "Fő korlátok",
        items: [
          "Nem bizonyít közvetlen ok-okozati kapcsolatot.",
          "Egyéni szintű következtetés csak óvatosan vonható le.",
          "Ökológiai tévkövetkeztetés veszélye áll fenn.",
        ],
      },
      {
        type: "highlight",
        text:
          "A deskriptív epidemiológia fő szerepe a betegségek mintázatainak leírása és új kutatási kérdések felvetése.",
      },
    ],
  },

  {
    id: "epi-11",
    group: "I. Epidemiológia és Kutatásmódszertan",
    number: 11,
    title: "Deskriptív epidemiológiai vizsgálatok - keresztmetszeti vizsgálatok",
    summary:
      "A keresztmetszeti vizsgálat egy populáció állapotát méri egy adott időpontban vagy rövid időszakban.",
    blocks: [
      {
        type: "paragraph",
        text:
          "A keresztmetszeti vizsgálat pillanatképet ad. Egyszerre méri az expozíciót és a kimenetelt, ezért az időbeli sorrend gyakran nem tisztázható.",
      },
      {
        type: "formula",
        title: "Tipikus mutató",
        formula: String.raw`\text{Prevalencia} = \frac{\text{meglévő esetek száma}}{\text{vizsgált populáció létszáma}}`,
        explanation:
          "Keresztmetszeti vizsgálatban leggyakrabban prevalenciát mérünk.",
      },
      {
        type: "paragraph",
        text:
          "Példa: egy országos felmérésben megmérjük, hogy a felnőttek hány százaléka hipertóniás, dohányzik vagy fizikailag inaktív.",
      },
      {
        type: "bullets",
        title: "Előnyei",
        items: [
          "Gyors és viszonylag olcsó.",
          "Jól használható gyakoriság és betegségteher becslésére.",
          "Több expozíció és kimenetel egyszerre vizsgálható.",
        ],
      },
      {
        type: "bullets",
        title: "Hátrányai",
        items: [
          "Incidencia általában nem mérhető.",
          "Ok-okozati kapcsolat bizonyítása gyenge.",
          "Nem mindig tudható, hogy az expozíció vagy a betegség volt előbb.",
        ],
      },
      {
        type: "compare",
        title: "Jellemző használat",
        items: [
          {
            label: "Jó erre",
            text: "Krónikus betegségek, életmód, egészségmagatartás és ellátási igény leírására.",
          },
          {
            label: "Kevésbé jó erre",
            text: "Ritka betegségek és időbeli ok-okozati kapcsolatok vizsgálatára.",
          },
        ],
      },
      {
        type: "highlight",
        text:
          "A keresztmetszeti vizsgálat fő mutatója a prevalencia, és inkább leírásra alkalmas, nem oksági bizonyításra.",
      },
    ],
  },

  {
    id: "epi-12",
    group: "I. Epidemiológia és Kutatásmódszertan",
    number: 12,
    title: "Deskriptív epidemiológiai vizsgálatok - esettanulmányok, esetsorozatok",
    summary:
      "Az esettanulmány és esetsorozat ritka, új vagy szokatlan egészségi jelenségek részletes leírására szolgál.",
    blocks: [
      {
        type: "paragraph",
        text:
          "Ezek a vizsgálatok kis esetszámra épülnek. Nem kontrollcsoportosak, ezért ok-okozati bizonyításra nem alkalmasak.",
      },
      {
        type: "compare",
        title: "Esettípusok",
        items: [
          {
            label: "Esettanulmány",
            text: "Egyetlen beteg vagy esemény részletes bemutatása.",
          },
          {
            label: "Esetsorozat",
            text: "Több hasonló eset leírása közös jellemzők alapján.",
          },
        ],
      },
      {
        type: "paragraph",
        text:
          "Példa: új gyógyszermellékhatás gyanúja néhány betegnél. Másik példa: ritka fertőzés szokatlan klinikai megjelenése.",
      },
      {
        type: "bullets",
        title: "Mire jó?",
        items: [
          "Új betegség vagy jelenség felismerésére.",
          "Ritka kórképek bemutatására.",
          "Mellékhatások és szokatlan összefüggések jelzésére.",
          "Hipotézisek megfogalmazására.",
        ],
      },
      {
        type: "bullets",
        title: "Korlátai",
        items: [
          "Nincs kontrollcsoport.",
          "Gyakoriság és kockázat nem becsülhető megbízhatóan.",
          "Általánosíthatósága korlátozott.",
          "Ok-okozati kapcsolatot nem bizonyít.",
        ],
      },
      {
        type: "compare",
        title: "Helye az epidemiológiában",
        items: [
          {
            label: "Erőssége",
            text: "Korai figyelmeztető jel lehet új vagy ritka problémára.",
          },
          {
            label: "Gyengesége",
            text: "Csak leíró jellegű, további analitikus vizsgálatok szükségesek.",
          },
        ],
      },
      {
        type: "highlight",
        text:
          "Az esettanulmány és esetsorozat fő értéke a jelzés és hipotézisalkotás, nem az oksági bizonyítás.",
      },
    ],
  },

  {
    id: "epi-13",
    group: "I. Epidemiológia és Kutatásmódszertan",
    number: 13,
    title: "Analitikus epidemiológia vizsgálatok - eset-kontroll vizsgálat",
    summary:
      "Az eset-kontroll vizsgálat betegségből indul ki, és visszamenőleg vizsgálja a korábbi expozíciót.",
    blocks: [
      {
        type: "paragraph",
        text:
          "A vizsgálatban először eseteket és kontrollokat választunk ki. Ezután megnézzük, hogy a két csoport korábban milyen expozíciónak volt kitéve.",
      },
      {
        type: "compare",
        title: "Kiindulás",
        items: [
          {
            label: "Esetek",
            text: "Azok a személyek, akiknél a vizsgált betegség vagy kimenetel fennáll.",
          },
          {
            label: "Kontrollok",
            text: "Azok a személyek, akiknél a vizsgált betegség vagy kimenetel nem áll fenn.",
          },
        ],
      },
      {
        type: "formula",
        title: "Fő mutató",
        formula: String.raw`\text{OR} = \frac{a \times d}{b \times c}`,
        explanation:
          "Az odds ratio az expozíció odds-át hasonlítja össze az esetek és kontrollok között.",
      },
      {
        type: "paragraph",
        text:
          "Példa: tüdőrákos és nem tüdőrákos személyeket választunk ki, majd megvizsgáljuk, hogy korábban dohányoztak-e.",
      },
      {
        type: "bullets",
        title: "Előnyei",
        items: [
          "Ritka betegségek vizsgálatára alkalmas.",
          "Gyorsabb és olcsóbb, mint a kohorsz vizsgálat.",
          "Több expozíció vizsgálható egy betegséghez.",
        ],
      },
      {
        type: "bullets",
        title: "Hátrányai",
        items: [
          "Incidencia és valódi kockázat általában nem számolható.",
          "Szelekciós torzítás előfordulhat.",
          "Recall bias gyakori lehet.",
          "Az időbeli sorrend néha nehezebben bizonyítható.",
        ],
      },
      {
        type: "highlight",
        text:
          "Az eset-kontroll vizsgálat fő mutatója az OR, mert a betegek és kontrollok számát a kutató választja ki.",
      },
    ],
  },

  {
    id: "epi-14",
    group: "I. Epidemiológia és Kutatásmódszertan",
    number: 14,
    title: "Analitikus epidemiológiai vizsgálatok – kohorsz vizsgálat",
    summary:
      "A kohorsz vizsgálat expozícióból indul ki, és időben követi a kimenetel kialakulását.",
    blocks: [
      {
        type: "paragraph",
        text:
          "A vizsgálat elején a populációt expozíció szerint csoportosítjuk. Ezután követjük őket, és összehasonlítjuk a betegség előfordulását.",
      },
      {
        type: "compare",
        title: "Csoportok",
        items: [
          {
            label: "Exponáltak",
            text: "Akik ki vannak téve a vizsgált tényezőnek. Példa: dohányzók.",
          },
          {
            label: "Nem exponáltak",
            text: "Akik nincsenek kitéve a vizsgált tényezőnek. Példa: nem dohányzók.",
          },
        ],
      },
      {
        type: "formula",
        title: "Fő mutató",
        formula: String.raw`\text{RR} = \frac{\text{kockázat exponáltakban}}{\text{kockázat nem exponáltakban}}`,
        explanation:
          "Kohorsz vizsgálatban közvetlenül számolható incidencia és relatív rizikó.",
      },
      {
        type: "compare",
        title: "Típusai",
        items: [
          {
            label: "Prospektív kohorsz",
            text: "A jelenből indul, és a jövő felé követi a résztvevőket.",
          },
          {
            label: "Retrospektív kohorsz",
            text: "Múltbeli expozíciós adatokból indul, és meglévő adatok alapján vizsgálja a későbbi kimenetelt.",
          },
        ],
      },
      {
        type: "bullets",
        title: "Előnyei",
        items: [
          "Incidencia közvetlenül mérhető.",
          "Relatív rizikó számolható.",
          "Az időbeli sorrend jól vizsgálható.",
          "Több kimenetel vizsgálható egy expozícióból.",
        ],
      },
      {
        type: "bullets",
        title: "Hátrányai",
        items: [
          "Drága és időigényes lehet.",
          "Nagy minta szükséges ritka betegségekhez.",
          "Követési veszteség torzíthat.",
          "Konfundálás előfordulhat.",
        ],
      },
      {
        type: "highlight",
        text:
          "A kohorsz vizsgálat expozícióból indul ki, ezért alkalmas incidencia és relatív rizikó mérésére.",
      },
    ],
  },

  {
    id: "epi-15",
    group: "I. Epidemiológia és Kutatásmódszertan",
    number: 15,
    title: "Intervenciós vizsgálatok - randomizált kontrollált vizsgálat",
    summary:
      "Az RCT kísérletes vizsgálat, amelyben a résztvevőket véletlenszerűen osztják be intervenciós és kontrollcsoportba.",
    blocks: [
      {
        type: "paragraph",
        text:
          "Az RCT-ben a kutató aktívan beavatkozik. A randomizáció célja, hogy a csoportok a vizsgálat kezdetén összehasonlíthatók legyenek.",
      },
      {
        type: "compare",
        title: "Csoportok",
        items: [
          {
            label: "Intervenciós csoport",
            text: "Megkapja a vizsgált kezelést, programot vagy beavatkozást.",
          },
          {
            label: "Kontrollcsoport",
            text: "Placebót, szokásos kezelést vagy más összehasonlító ellátást kap.",
          },
        ],
      },
      {
        type: "bullets",
        title: "Fő jellemzők",
        items: [
          "Randomizáció.",
          "Kontrollcsoport.",
          "Előre meghatározott kimenetelek.",
          "Lehet vak vagy kettős vak elrendezés.",
          "Erős bizonyítékot ad ok-okozati kapcsolat vizsgálatára.",
        ],
      },
      {
        type: "formula",
        title: "Gyakori mutató",
        formula: String.raw`\text{RR} = \frac{\text{kockázat intervenciós csoportban}}{\text{kockázat kontrollcsoportban}}`,
        explanation:
          "RCT-ben gyakran számolható relatív rizikó, kockázati különbség és hatásnagyság.",
      },
      {
        type: "paragraph",
        text:
          "Példa: betegeket véletlenszerűen új gyógyszerre vagy placebóra osztanak, majd összehasonlítják a gyógyulás arányát.",
      },
      {
        type: "bullets",
        title: "Korlátai",
        items: [
          "Drága és szervezésigényes.",
          "Etikai okból nem minden expozíció vizsgálható.",
          "Szigorú beválasztás miatt a külső érvényesség korlátozott lehet.",
        ],
      },
      {
        type: "highlight",
        text:
          "Az RCT az oksági hatás vizsgálatának legerősebb vizsgálati elrendezése, mert randomizációval csökkenti a torzítást és konfundálást.",
      },
    ],
  },

  {
    id: "epi-16",
    group: "I. Epidemiológia és Kutatásmódszertan",
    number: 16,
    title: "Populációs intervenciós vizsgálat",
    summary:
      "A populációs intervenciós vizsgálat közösségi vagy populációs szinten értékeli egy beavatkozás hatását.",
    blocks: [
      {
        type: "paragraph",
        text:
          "Itt a beavatkozás nem egyénekre, hanem csoportokra, intézményekre vagy teljes közösségekre irányul. Célja a populáció egészségi állapotának javítása.",
      },
      {
        type: "compare",
        title: "Beavatkozás szintje",
        items: [
          {
            label: "Egyéni intervenció",
            text: "A beavatkozás egy személyre irányul. Példa: gyógyszeres kezelés.",
          },
          {
            label: "Populációs intervenció",
            text: "A beavatkozás közösségre vagy populációra irányul. Példa: dohányzásellenes kampány.",
          },
        ],
      },
      {
        type: "bullets",
        title: "Példák",
        items: [
          "Oltási program.",
          "Iskolai egészségfejlesztési program.",
          "Dohányzás visszaszorítását célzó szabályozás.",
          "Sóbevitel csökkentését célzó népegészségügyi program.",
          "Közösségi mozgásprogram.",
        ],
      },
      {
        type: "paragraph",
        text:
          "A hatást gyakran előtte-utána összehasonlítással vagy kontrollpopuláció bevonásával mérik. A vizsgált kimenetel lehet incidencia, prevalencia, mortalitás vagy egészségmagatartás.",
      },
      {
        type: "bullets",
        title: "Előnyei",
        items: [
          "Nagy populáció egészségét képes javítani.",
          "Valós élethelyzetben vizsgálja a beavatkozást.",
          "Jól használható népegészségügyi döntésekhez.",
        ],
      },
      {
        type: "bullets",
        title: "Korlátai",
        items: [
          "Randomizáció gyakran nehéz vagy nem lehetséges.",
          "Konfundáló tényezők befolyásolhatják az eredményt.",
          "A hatás mérése hosszabb időt igényelhet.",
          "Más párhuzamos társadalmi változások is hathatnak a kimenetelre.",
        ],
      },
      {
        type: "highlight",
        text:
          "A populációs intervenciós vizsgálat fő értéke, hogy valós közösségi környezetben méri egy népegészségügyi beavatkozás hatását.",
      },
    ],
  },

  {
    id: "epi-17",
    group: "I. Epidemiológia és Kutatásmódszertan",
    number: 17,
    title:
      "Mintavételhez kapcsolódó alapfogalmak (populáció, célpopuláció, beválasztási és kizárási kritériumok, minta, nem véletlenszerű mintavétel fogalma és formái)",
    summary:
      "A mintavétel célja, hogy a populáció egy részének vizsgálatából következtessünk a teljes populációra.",
    blocks: [
      {
        type: "paragraph",
        text:
          "A kutatásban ritkán vizsgálható a teljes populáció. Ezért mintát választunk, amelynek jól kell illeszkednie a kutatási kérdéshez.",
      },
      {
        type: "definition",
        title: "Populáció és célpopuláció",
        text:
          "A populáció az a csoport, amelyre a vizsgálat vagy következtetés vonatkozik. A célpopuláció az a pontosan meghatározott populáció, amelyre az eredményeket általánosítani szeretnénk.",
      },
      {
        type: "definition",
        title: "Minta",
        text:
          "A minta a populációból kiválasztott kisebb csoport, amelyen a vizsgálat ténylegesen történik.",
      },
      {
        type: "compare",
        title: "Beválasztás és kizárás",
        items: [
          {
            label: "Beválasztási kritérium",
            text: "Meghatározza, kik kerülhetnek be a vizsgálatba.",
          },
          {
            label: "Kizárási kritérium",
            text: "Meghatározza, kiket kell kizárni a vizsgálatból bizonyos okok miatt.",
          },
        ],
      },
      {
        type: "definition",
        title: "Nem véletlenszerű mintavétel",
        text:
          "Olyan mintavétel, ahol a bekerülés esélye nem ismert vagy nem véletlen mechanizmuson alapul.",
      },
      {
        type: "bullets",
        title: "Nem véletlenszerű mintavétel formái",
        items: [
          "Kényelmi mintavétel: könnyen elérhető személyek bevonása.",
          "Célzott mintavétel: előre meghatározott jellemzők alapján választunk.",
          "Hólabda mintavétel: résztvevők ajánlanak további résztvevőket.",
          "Kvótás mintavétel: előre meghatározott arányokat próbálunk tartani.",
        ],
      },
      {
        type: "highlight",
        text:
          "A mintavétel minősége meghatározza, hogy az eredmények mennyire általánosíthatók a célpopulációra.",
      },
    ],
  },

  {
    id: "epi-18",
    group: "I. Epidemiológia és Kutatásmódszertan",
    number: 18,
    title:
      "Mintavételhez kapcsolódó alapfogalmak (reprezentativitás, véletlenszerű mintavétel fogalma és a formái, a minta elemszámát meghatározó szempontok)",
    summary:
      "A reprezentatív és véletlenszerű minta célja, hogy a vizsgált minta jól tükrözze a célpopulációt.",
    blocks: [
      {
        type: "definition",
        title: "Reprezentativitás",
        text:
          "A minta akkor reprezentatív, ha lényeges jellemzőiben jól tükrözi a célpopuláció összetételét.",
      },
      {
        type: "paragraph",
        text:
          "A véletlenszerű mintavétel csökkenti a szelekciós torzítás esélyét. Ilyenkor a populáció tagjainak ismert, nem nulla esélyük van a mintába kerülésre.",
      },
      {
        type: "compare",
        title: "Véletlenszerű mintavételi formák",
        items: [
          {
            label: "Egyszerű véletlen mintavétel",
            text: "Minden elem azonos eséllyel kerülhet a mintába.",
          },
          {
            label: "Szisztematikus mintavétel",
            text: "A mintába minden k-adik elemet választjuk ki egy listából.",
          },
          {
            label: "Rétegzett mintavétel",
            text: "A populációt rétegekre bontjuk, majd minden rétegből mintát veszünk.",
          },
          {
            label: "Klaszteres mintavétel",
            text: "Először csoportokat választunk ki, majd ezek tagjait vizsgáljuk.",
          },
        ],
      },
      {
        type: "bullets",
        title: "A mintaelemszámot befolyásolja",
        items: [
          "A vizsgálat célja és típusa.",
          "A várt hatásnagyság.",
          "A változók szórása vagy gyakorisága.",
          "A kívánt pontosság.",
          "A választott szignifikanciaszint és statisztikai erő.",
          "A várható lemorzsolódás.",
        ],
      },
      {
        type: "paragraph",
        text:
          "Túl kicsi minta esetén nagy lehet a random hiba. Túl nagy minta felesleges erőforrás-felhasználást jelenthet.",
      },
      {
        type: "compare",
        title: "Kapcsolódó hibák",
        items: [
          {
            label: "Random hiba",
            text: "Véletlen ingadozásból ered, nagyobb mintával általában csökkenthető.",
          },
          {
            label: "Szelekciós torzítás",
            text: "Akkor alakul ki, ha a minta szisztematikusan eltér a célpopulációtól.",
          },
        ],
      },
      {
        type: "highlight",
        text:
          "A jó mintavétel célja nem a minél nagyobb minta, hanem a célpopulációt jól tükröző és megfelelő elemszámú minta.",
      },
    ],
  },

  {
    id: "epi-19",
    group: "I. Epidemiológia és Kutatásmódszertan",
    number: 19,
    title:
      "Zavaró tényezők és azok kontrollja az epidemiológiai vizsgálatokban",
    summary:
      "A zavaró tényező olyan külső változó, amely torzíthatja az expozíció és a kimenetel közötti kapcsolatot.",
    blocks: [
      {
        type: "paragraph",
        text:
          "Konfundálás akkor jön létre, ha egy harmadik tényező összefügg az expozícióval és a kimenetellel is. Emiatt látszólagos vagy torzított kapcsolat jelenhet meg.",
      },
      {
        type: "definition",
        title: "Zavaró tényező",
        text:
          "Olyan változó, amely kapcsolatban áll az expozícióval és a kimenetellel is, de nem része az oksági láncnak.",
      },
      {
        type: "paragraph",
        text:
          "Példa: kávéfogyasztás és tüdőrák kapcsolatát vizsgáljuk. A dohányzás zavaró tényező lehet, mert összefügghet a kávéfogyasztással és a tüdőrákkal is.",
      },
      {
        type: "compare",
        title: "Kontroll a vizsgálat tervezésekor",
        items: [
          {
            label: "Randomizáció",
            text:
              "Véletlenszerűen osztja el a zavaró tényezőket a csoportok között.",
          },
          {
            label: "Restrikció",
            text:
              "Csak bizonyos jellemzőjű személyeket engedünk be a vizsgálatba.",
          },
          {
            label: "Illesztés",
            text:
              "Az eseteket és kontrollokat fontos tényezők szerint hasonlóvá tesszük.",
          },
        ],
      },
      {
        type: "compare",
        title: "Kontroll az elemzéskor",
        items: [
          {
            label: "Rétegzés",
            text:
              "Külön elemzünk például korcsoportok vagy nemek szerint.",
          },
          {
            label: "Standardizálás",
            text:
              "Eltérő összetételű populációk mutatóit összehasonlíthatóvá teszi.",
          },
          {
            label: "Multivariábilis modell",
            text:
              "Statisztikai modellben egyszerre több zavaró tényezőt kontrollálunk.",
          },
        ],
      },
      {
        type: "highlight",
        text:
          "A zavaró tényezők kontrollja nélkül az expozíció és a kimenetel kapcsolata félrevezető lehet.",
      },
    ],
  },

  {
    id: "epi-20",
    group: "I. Epidemiológia és Kutatásmódszertan",
    number: 20,
    title:
      "Epidemiológia vizsgálatok során előforduló hibák (random hibák és torzítások)",
    summary:
      "Az epidemiológiai hibák lehetnek random hibák vagy szisztematikus torzítások.",
    blocks: [
      {
        type: "paragraph",
        text:
          "A random hiba véletlen ingadozásból ered. A torzítás szisztematikus eltérés, amely következetesen hibás irányba viheti az eredményt.",
      },
      {
        type: "compare",
        title: "Random hiba és torzítás",
        items: [
          {
            label: "Random hiba",
            text:
              "Véletlen mintavételi vagy mérési ingadozás. Nagyobb mintával általában csökkenthető.",
          },
          {
            label: "Torzítás",
            text:
              "Szisztematikus hiba. Nagyobb minta nem szünteti meg automatikusan.",
          },
        ],
      },
      {
        type: "compare",
        title: "Fontos torzítástípusok",
        items: [
          {
            label: "Szelekciós torzítás",
            text:
              "A vizsgálati csoportok kiválasztása miatt torzul az eredmény.",
          },
          {
            label: "Információs torzítás",
            text:
              "A mérés, adatgyűjtés vagy osztályozás hibája miatt torzul az eredmény.",
          },
          {
            label: "Recall bias",
            text:
              "A résztvevők eltérően emlékeznek vissza korábbi expozíciókra.",
          },
          {
            label: "Megfigyelői torzítás",
            text:
              "A kutató elvárásai befolyásolják az adatgyűjtést vagy értékelést.",
          },
        ],
      },
      {
        type: "paragraph",
        text:
          "Példa recall biasra: daganatos betegek részletesebben idézik fel korábbi expozícióikat, mint az egészséges kontrollok.",
      },
      {
        type: "bullets",
        title: "Csökkentés lehetőségei",
        items: [
          "Megfelelő mintavétel.",
          "Standardizált mérési módszerek.",
          "Validált kérdőívek.",
          "Vakítás, ha lehetséges.",
          "Megfelelő kontrollcsoport.",
          "Nagyobb minta a random hiba csökkentésére.",
        ],
      },
      {
        type: "highlight",
        text:
          "A random hiba a pontosságot, a torzítás az érvényességet rontja.",
      },
    ],
  },

  {
    id: "sport-01",
    group: "VII. Sport- és Egészségtudomány",
    number: 1,
    title: "Sporttudomány – egyetemes kultúra és testkultúra.",
    summary:
      "A sporttudomány a testkultúra tudományos vizsgálata, amely a mozgás, egészség, nevelés és társadalom kapcsolatát elemzi.",
    blocks: [
      {
        type: "paragraph",
        text:
          "A sport nemcsak teljesítmény, hanem kulturális és társadalmi jelenség is. Része az egészségmegőrzésnek, nevelésnek, közösségformálásnak és életmódnak.",
      },
      {
        type: "definition",
        title: "Egyetemes kultúra",
        text:
          "Az emberiség által létrehozott anyagi és szellemi értékek összessége.",
      },
      {
        type: "definition",
        title: "Testkultúra",
        text:
          "A testtel, mozgással, fizikai aktivitással és egészséggel kapcsolatos értékek, normák és gyakorlatok rendszere.",
      },
      {
        type: "bullets",
        title: "A testkultúra részei",
        items: [
          "Testnevelés.",
          "Sport.",
          "Rekreáció.",
          "Testedzés.",
          "Egészségmegőrzés.",
        ],
      },
      {
        type: "paragraph",
        text:
          "A sporttudomány interdiszciplináris terület. Kapcsolódik az élettanhoz, pedagógiához, pszichológiához, szociológiához, orvostudományhoz és egészségtudományhoz.",
      },
      {
        type: "highlight",
        text:
          "A sporttudomány a testkultúrán keresztül kapcsolja össze a mozgást, egészséget, nevelést és társadalmat.",
      },
    ],
  },

  {
    id: "sport-02",
    group: "VII. Sport- és Egészségtudomány",
    number: 2,
    title: "A magyar sporttudomány kialakulásának fázisai, önállóságának kritériumai.",
    summary:
      "A magyar sporttudomány fokozatosan vált önálló tudományterületté saját tárggyal, módszerekkel és intézményrendszerrel.",
    blocks: [
      {
        type: "paragraph",
        text:
          "A magyar sporttudomány fejlődése a testnevelés, orvostudomány, pedagógia és edzéselmélet kapcsolatából indult. Később önálló kutatási területté szerveződött.",
      },
      {
        type: "bullets",
        title: "Kialakulás fő fázisai",
        items: [
          "Testnevelési és gyakorlati sportismeretek megjelenése.",
          "Orvosi, élettani és pedagógiai szemlélet erősödése.",
          "Edzéselméleti és teljesítménydiagnosztikai kutatások fejlődése.",
          "Felsőoktatási és kutatóintézményi háttér kialakulása.",
          "Sporttudományi képzés és tudományos publikációk önállósodása.",
        ],
      },
      {
        type: "compare",
        title: "Kapcsolódó tudományterületek",
        items: [
          {
            label: "Élettan és orvostudomány",
            text:
              "A terhelés, alkalmazkodás, egészség és teljesítmény biológiai hátterét vizsgálja.",
          },
          {
            label: "Pedagógia",
            text:
              "A testnevelés, nevelés, tanítás és személyiségfejlesztés kérdéseivel kapcsolódik.",
          },
          {
            label: "Pszichológia és szociológia",
            text:
              "A motivációt, viselkedést, közösséget és társadalmi szerepeket elemzi.",
          },
        ],
      },
      {
        type: "bullets",
        title: "Az önállóság kritériumai",
        items: [
          "Saját vizsgálati tárgy.",
          "Saját kutatási módszerek.",
          "Saját fogalomrendszer.",
          "Tudományos intézményrendszer.",
          "Képzés, publikációk és szakmai szervezetek.",
        ],
      },
      {
        type: "paragraph",
        text:
          "A sporttudomány önállóságát az adja, hogy a sportot és fizikai aktivitást komplex módon vizsgálja: biológiai, pedagógiai, pszichológiai és társadalmi oldalról.",
      },
      {
        type: "highlight",
        text:
          "A magyar sporttudomány önállósága saját tárgyán, módszerein, intézményein és interdiszciplináris szemléletén alapul.",
      },
    ],
  },

  {
    id: "sport-03",
    group: "VII. Sport- és Egészségtudomány",
    number: 3,
    title: "A sporttudományi kutatások legfontosabb jellemzői, a fizikai aktivitás mértékének objektív és szubjektív mérési lehetőségei.",
    summary:
      "A sporttudományi kutatás a fizikai aktivitás, teljesítmény, egészség és társadalmi tényezők vizsgálatára irányul.",
    blocks: [
      {
        type: "paragraph",
        text:
          "A sporttudományi kutatás lehet élettani, pedagógiai, pszichológiai, társadalomtudományi vagy egészségtudományi irányú. Gyakran több módszert kombinál.",
      },
      {
        type: "bullets",
        title: "Kutatások jellemzői",
        items: [
          "Interdiszciplináris szemlélet.",
          "Emberi teljesítmény és egészség vizsgálata.",
          "Mérhető fizikai, pszichés és társadalmi változók.",
          "Kvantitatív és kvalitatív módszerek használata.",
          "Gyakorlati alkalmazhatóság az edzésben, oktatásban és egészségfejlesztésben.",
        ],
      },
      {
        type: "compare",
        title: "Fizikai aktivitás mérése",
        items: [
          {
            label: "Objektív mérés",
            text:
              "Eszközzel történik. Példa: lépésszámláló, pulzusmérő, gyorsulásmérő, GPS, teljesítménymérő.",
          },
          {
            label: "Szubjektív mérés",
            text:
              "Önbevalláson alapul. Példa: kérdőív, aktivitási napló, interjú.",
          },
        ],
      },
      {
        type: "compare",
        title: "Előnyök és korlátok",
        items: [
          {
            label: "Objektív módszer előnye",
            text:
              "Pontosabb, kevésbé függ az emlékezettől és önértékeléstől.",
          },
          {
            label: "Objektív módszer korlátja",
            text:
              "Drágább, eszközigényesebb, és nem mindig mutatja az aktivitás kontextusát.",
          },
          {
            label: "Szubjektív módszer előnye",
            text:
              "Olcsó, könnyen alkalmazható nagy mintán.",
          },
          {
            label: "Szubjektív módszer korlátja",
            text:
              "Emlékezeti hiba és társadalmilag kívánatos válasz torzíthatja.",
          },
        ],
      },
      {
        type: "paragraph",
        text:
          "A fizikai aktivitás jellemezhető gyakorisággal, időtartammal, intenzitással és típussal. Ezek együtt adják a terhelés és aktivitás mennyiségét.",
      },
      {
        type: "highlight",
        text:
          "A fizikai aktivitás mérésénél az objektív módszerek pontosabbak, a szubjektív módszerek viszont egyszerűbbek és nagy mintán könnyebben alkalmazhatók.",
      },
    ],
  },

  {
    id: "sport-04",
    group: "VII. Sport- és Egészségtudomány",
    number: 4,
    title: "A sport szocializációs lehetőségei és értékei, a sporttevékenységek széles körére vonatkoztatva.",
    summary:
      "A sport fontos szocializációs közeg, amely értékeket, normákat és közösségi mintákat közvetít.",
    blocks: [
      {
        type: "paragraph",
        text:
          "A sportban az egyén szabályokat tanul, szerepeket gyakorol és közösségi tapasztalatokat szerez. Ez a versenysportban, szabadidősportban és iskolai sportban is megjelenik.",
      },
      {
        type: "definition",
        title: "Szocializáció",
        text:
          "Az a folyamat, amelyben az egyén elsajátítja a közösség normáit, értékeit és viselkedési mintáit.",
      },
      {
        type: "bullets",
        title: "A sport által közvetített értékek",
        items: [
          "Fair play és szabálykövetés.",
          "Kitartás és önfegyelem.",
          "Együttműködés és csapatszellem.",
          "Felelősségvállalás.",
          "Siker és kudarc kezelése.",
        ],
      },
      {
        type: "compare",
        title: "Sporttevékenységek szocializációs szerepe",
        items: [
          {
            label: "Iskolai sport",
            text:
              "Nevelési közeg. Fejleszti a szabálytudatot, együttműködést és mozgáskultúrát.",
          },
          {
            label: "Versenysport",
            text:
              "Teljesítményorientált közeg. Erősíti a céltudatosságot, fegyelmet és terhelhetőséget.",
          },
          {
            label: "Szabadidősport",
            text:
              "Közösségi és egészségmegőrző szerepű. Támogatja az aktív életmódot.",
          },
        ],
      },
      {
        type: "paragraph",
        text:
          "A sport negatív mintákat is közvetíthet, ha túlzott teljesítménykényszer, kirekesztés, agresszió vagy sportszerűtlenség jelenik meg.",
      },
      {
        type: "highlight",
        text:
          "A sport szocializációs értéke attól függ, hogy milyen pedagógiai és közösségi környezetben történik.",
      },
    ],
  },

  {
    id: "sport-05",
    group: "VII. Sport- és Egészségtudomány",
    number: 5,
    title: "A sport szerepe, funkciói és jelentősége a sérült emberek életminőségének alakításában.",
    summary:
      "A sport a sérült emberek életminőségét testi, lelki, társas és önállósági szinten is javíthatja.",
    blocks: [
      {
        type: "paragraph",
        text:
          "A sérült emberek sportja nemcsak rehabilitáció, hanem önkifejezés, közösségi részvétel és életminőség-javítás is. Fontos az akadálymentes és elfogadó környezet.",
      },
      {
        type: "definition",
        title: "Adaptált sport",
        text:
          "Olyan sporttevékenység, amelyet a résztvevők képességeihez, állapotához és szükségleteihez igazítanak.",
      },
      {
        type: "bullets",
        title: "Fő funkciók",
        items: [
          "Fizikai állapot és funkcionális képességek fejlesztése.",
          "Önbizalom és önértékelés erősítése.",
          "Társas kapcsolatok és közösségi részvétel támogatása.",
          "Rehabilitáció és egészségmegőrzés segítése.",
          "Esélyegyenlőség és társadalmi integráció erősítése.",
        ],
      },
      {
        type: "compare",
        title: "Életminőségre gyakorolt hatás",
        items: [
          {
            label: "Testi hatás",
            text:
              "Javulhat az állóképesség, erő, koordináció és önellátási képesség.",
          },
          {
            label: "Pszichés hatás",
            text:
              "Csökkenhet a szorongás, nőhet az önbizalom és a kompetenciaérzés.",
          },
          {
            label: "Társas hatás",
            text:
              "Közösségi élményt ad, csökkentheti az izolációt.",
          },
        ],
      },
      {
        type: "paragraph",
        text:
          "A sport segíthet abban, hogy a sérült személy ne csak betegként vagy fogyatékossággal élőként jelenjen meg, hanem aktív, teljesítő és közösségi szereplőként.",
      },
      {
        type: "highlight",
        text:
          "A sérült emberek sportjának lényege az alkalmazkodás, részvétel, önállóság és életminőség javítása.",
      },
    ],
  },

  {
    id: "sport-06",
    group: "VII. Sport- és Egészségtudomány",
    number: 6,
    title: "A rendszeres testedzés élettani és pszichés hatásai.",
    summary:
      "A rendszeres testedzés kedvezően hat a szervezet működésére, a mentális egészségre és az életminőségre.",
    blocks: [
      {
        type: "paragraph",
        text:
          "A rendszeres testedzés ismétlődő, tervezett fizikai aktivitás. Hatásai az alkalmazkodáson alapulnak: a szervezet a terheléshez fokozatosan igazodik.",
      },
      {
        type: "compare",
        title: "Élettani hatások",
        items: [
          {
            label: "Kardiovaszkuláris rendszer",
            text:
              "Javul a szív teljesítménye, keringés, vérnyomás-szabályozás és terhelhetőség.",
          },
          {
            label: "Anyagcsere",
            text:
              "Javul az inzulinérzékenység, testösszetétel és energiafelhasználás.",
          },
          {
            label: "Mozgásrendszer",
            text:
              "Nőhet az izomerő, állóképesség, csontsűrűség és ízületi stabilitás.",
          },
        ],
      },
      {
        type: "bullets",
        title: "Pszichés hatások",
        items: [
          "Stressz és szorongás csökkenése.",
          "Hangulat és önértékelés javulása.",
          "Alvásminőség javulása.",
          "Kognitív teljesítmény támogatása.",
          "Depressziós tünetek mérséklődése.",
        ],
      },
      {
        type: "paragraph",
        text:
          "A kedvező hatások rendszerességet igényelnek. A túl nagy vagy rosszul adagolt terhelés sérüléshez, túledzéshez és motivációvesztéshez vezethet.",
      },
      {
        type: "bullets",
        title: "Egészségvédő szerep",
        items: [
          "Csökkentheti a szív-érrendszeri betegségek kockázatát.",
          "Segítheti a testsúlykontrollt.",
          "Javíthatja az életminőséget.",
          "Támogathatja az egészséges öregedést.",
        ],
      },
      {
        type: "highlight",
        text:
          "A rendszeres testedzés testi és lelki alkalmazkodást vált ki, ezért az egészségmegőrzés egyik alapvető eszköze.",
      },
    ],
  },

  {
    id: "sport-07",
    group: "VII. Sport- és Egészségtudomány",
    number: 7,
    title: "A fizikai aktivitás egészségre, életminőségre gyakorolt hatásai.",
    summary:
      "A fizikai aktivitás javítja az egészségi állapotot, csökkenti a betegségek kockázatát és támogatja az életminőséget.",
    blocks: [
      {
        type: "paragraph",
        text:
          "A fizikai aktivitás minden olyan testmozgás, amely energiafelhasználással jár. Ide tartozik a sport, testedzés, munka, közlekedés és háztartási aktivitás is.",
      },
      {
        type: "compare",
        title: "Egészségre gyakorolt hatások",
        items: [
          {
            label: "Fizikai egészség",
            text:
              "Javítja a keringést, anyagcserét, testsúlykontrollt és mozgásrendszeri állapotot.",
          },
          {
            label: "Mentális egészség",
            text:
              "Csökkentheti a stresszt, szorongást és depressziós tüneteket.",
          },
          {
            label: "Életminőség",
            text:
              "Növeli az önállóságot, jóllétet, aktivitást és társas részvételt.",
          },
        ],
      },
      {
        type: "bullets",
        title: "Megelőző szerep",
        items: [
          "Szív-érrendszeri betegségek kockázatának csökkentése.",
          "2-es típusú cukorbetegség megelőzésének támogatása.",
          "Elhízás megelőzése és kezelése.",
          "Mozgásszervi problémák mérséklése.",
          "Egészséges öregedés támogatása.",
        ],
      },
      {
        type: "paragraph",
        text:
          "Az életminőség szempontjából nemcsak a teljesítmény számít. Fontos a mindennapi funkcióképesség, önbizalom, közérzet és társas aktivitás is.",
      },
      {
        type: "compare",
        title: "Aktivitás és inaktivitás",
        items: [
          {
            label: "Rendszeres aktivitás",
            text:
              "Egészségvédő tényező, amely hosszú távon javítja a terhelhetőséget és jóllétet.",
          },
          {
            label: "Fizikai inaktivitás",
            text:
              "Rizikótényező, amely növeli több krónikus betegség esélyét.",
          },
        ],
      },
      {
        type: "highlight",
        text:
          "A fizikai aktivitás az egészségmegőrzés és életminőség-javítás egyik legfontosabb, nem gyógyszeres eszköze.",
      },
    ],
  },

  {
    id: "sport-08",
    group: "VII. Sport- és Egészségtudomány",
    number: 8,
    title: "A fizikai aktivitás és az egészség társadalmi, gazdasági tényezőinek bemutatása.",
    summary:
      "A fizikai aktivitást és az egészséget társadalmi helyzet, környezet, gazdasági erőforrások és kulturális tényezők is befolyásolják.",
    blocks: [
      {
        type: "paragraph",
        text:
          "Az egészségmagatartás nem pusztán egyéni döntés. Erősen függ attól, hogy az egyén milyen társadalmi, gazdasági és környezeti feltételek között él.",
      },
      {
        type: "compare",
        title: "Társadalmi tényezők",
        items: [
          {
            label: "Iskolázottság",
            text:
              "Befolyásolja az egészségtudatosságot, információhoz jutást és életmódot.",
          },
          {
            label: "Társas támogatás",
            text:
              "Segítheti a rendszeres aktivitás fenntartását.",
          },
          {
            label: "Kulturális normák",
            text:
              "Meghatározhatják, hogy milyen mozgásformák elfogadottak vagy elérhetők.",
          },
        ],
      },
      {
        type: "compare",
        title: "Gazdasági és környezeti tényezők",
        items: [
          {
            label: "Jövedelem",
            text:
              "Hat a sportolási lehetőségek, felszerelés és szolgáltatások elérésére.",
          },
          {
            label: "Lakókörnyezet",
            text:
              "A biztonságos parkok, járdák és sportlétesítmények növelhetik az aktivitást.",
          },
          {
            label: "Munkahelyi környezet",
            text:
              "Az ülőmunka, stressz és időhiány csökkentheti a fizikai aktivitást.",
          },
        ],
      },
      {
        type: "paragraph",
        text:
          "A társadalmi egyenlőtlenségek egészségegyenlőtlenségekhez vezethetnek. A hátrányos helyzetű csoportok gyakran kevesebb lehetőséghez jutnak.",
      },
      {
        type: "bullets",
        title: "Beavatkozási lehetőségek",
        items: [
          "Iskolai és munkahelyi mozgásprogramok.",
          "Ingyenes vagy olcsó sportlehetőségek.",
          "Biztonságos közterek és kerékpárutak.",
          "Egészségkommunikáció és közösségi programok.",
        ],
      },
      {
        type: "highlight",
        text:
          "A fizikai aktivitás növelése nemcsak egyéni, hanem társadalmi és környezeti beavatkozásokat is igényel.",
      },
    ],
  },

  {
    id: "sport-09",
    group: "VII. Sport- és Egészségtudomány",
    number: 9,
    title: "A terhelés fogalma, mutatói a terhelésadagolás néhány általános szempontja.",
    summary:
      "A terhelés a szervezetet érő fizikai igénybevétel, amelyet tudatosan kell adagolni az alkalmazkodás érdekében.",
    blocks: [
      {
        type: "paragraph",
        text:
          "Az edzés hatása a terhelés és pihenés egyensúlyán alapul. Túl kicsi terhelés nem fejleszt, túl nagy terhelés sérüléshez vagy túledzéshez vezethet.",
      },
      {
        type: "definition",
        title: "Terhelés",
        text:
          "A szervezetet érő fizikai és pszichés igénybevétel, amely alkalmazkodási folyamatokat vált ki.",
      },
      {
        type: "compare",
        title: "Terhelés fő mutatói",
        items: [
          {
            label: "Intenzitás",
            text:
              "A terhelés erőssége. Példa: pulzus, sebesség, ellenállás, teljesítmény.",
          },
          {
            label: "Terjedelem",
            text:
              "A terhelés mennyisége. Példa: időtartam, táv, ismétlésszám.",
          },
          {
            label: "Gyakoriság",
            text:
              "Az edzések száma adott időszakon belül.",
          },
          {
            label: "Pihenőidő",
            text:
              "A terhelések közötti regenerációs idő.",
          },
        ],
      },
      {
        type: "bullets",
        title: "Terhelésadagolás szempontjai",
        items: [
          "Fokozatosság elve.",
          "Egyéni állapot és edzettség figyelembevétele.",
          "Célhoz igazított edzéstervezés.",
          "Terhelés és regeneráció egyensúlya.",
          "Életkor, egészségi állapot és motiváció figyelembevétele.",
        ],
      },
      {
        type: "paragraph",
        text:
          "A terhelés külső és belső oldalról is értelmezhető. Külső terhelés például a táv vagy súly, belső terhelés például a pulzus és fáradásérzet.",
      },
      {
        type: "highlight",
        text:
          "A hatékony terhelésadagolás lényege a fokozatos, egyénre szabott terhelés és a megfelelő regeneráció.",
      },
    ],
  },


  {
    id: "sport-10",
    group: "VII. Sport- és Egészségtudomány",
    number: 10,
    title: "A sportedzés és a rekreációs edzés különbségei. A rekreációs edzés hatásai.",
    summary:
      "A sportedzés teljesítményfokozásra, a rekreációs edzés egészségmegőrzésre és jóllétre irányul.",
    blocks: [
      {
        type: "paragraph",
        text:
          "Mindkettő tervezett fizikai aktivitás, de céljuk eltérő. A sportedzés inkább teljesítmény- és versenycélú, a rekreációs edzés inkább egészség- és életminőség-központú.",
      },
      {
        type: "compare",
        title: "Sportedzés és rekreációs edzés",
        items: [
          {
            label: "Sportedzés",
            text:
              "Célja a sportteljesítmény fokozása, versenyre felkészítés és eredményesség.",
          },
          {
            label: "Rekreációs edzés",
            text:
              "Célja az egészségmegőrzés, fittség, kikapcsolódás és jó közérzet.",
          },
        ],
      },
      {
        type: "bullets",
        title: "Fő különbségek",
        items: [
          "A sportedzés nagyobb teljesítménykényszerrel jár.",
          "A rekreációs edzés rugalmasabb és egyénhez igazítottabb.",
          "A sportedzésben fontos a periodizáció és versenyforma.",
          "A rekreációs edzésben fontos az öröm, fenntarthatóság és biztonság.",
        ],
      },
      {
        type: "compare",
        title: "Rekreációs edzés hatásai",
        items: [
          {
            label: "Testi hatás",
            text:
              "Javítja az állóképességet, izomerőt, testösszetételt és mozgásfunkciókat.",
          },
          {
            label: "Pszichés hatás",
            text:
              "Csökkenti a stresszt, javítja a hangulatot, önértékelést és alvást.",
          },
          {
            label: "Társas hatás",
            text:
              "Közösségi élményt adhat, növeli az aktív életmód fenntarthatóságát.",
          },
        ],
      },
      {
        type: "paragraph",
        text:
          "A rekreációs edzés akkor hatékony, ha rendszeres, fokozatos, biztonságos és illeszkedik az egyén életkorához, egészségi állapotához és motivációjához.",
      },
      {
        type: "highlight",
        text:
          "A rekreációs edzés fő értéke, hogy hosszú távon fenntartható módon javítja az egészséget és életminőséget.",
      },
    ],
  },

  {
    id: "sport-11",
    group: "VII. Sport- és Egészségtudomány",
    number: 11,
    title: "Kondicionális és koordinációs képességek és azok fejlesztési módszereinek bemutatása.",
    summary:
      "A kondicionális képességek az energiaellátáshoz, a koordinációs képességek a mozgásszabályozáshoz kapcsolódnak.",
    blocks: [
      {
        type: "paragraph",
        text:
          "A motoros képességek a mozgásteljesítmény alapjai. Fejlesztésük életkorhoz, edzettségi szinthez, célhoz és sportághoz igazodik.",
      },
      {
        type: "compare",
        title: "Képességtípusok",
        items: [
          {
            label: "Kondicionális képességek",
            text:
              "Az erő, állóképesség, gyorsaság és hajlékonyság. Főleg energetikai és izomműködési alapúak.",
          },
          {
            label: "Koordinációs képességek",
            text:
              "A mozgások pontos, célszerű és gazdaságos szabályozását teszik lehetővé.",
          },
        ],
      },
      {
        type: "bullets",
        title: "Kondicionális képességek fejlesztése",
        items: [
          "Erő: ellenállásos edzés, saját testsúlyos gyakorlatok.",
          "Állóképesség: tartós módszer, intervallumos módszer.",
          "Gyorsaság: rövid, maximális intenzitású gyakorlatok.",
          "Hajlékonyság: nyújtás, mobilizáció.",
        ],
      },
      {
        type: "bullets",
        title: "Koordinációs képességek példái",
        items: [
          "Egyensúlyozó képesség.",
          "Ritmusképesség.",
          "Reakcióképesség.",
          "Térbeli tájékozódás.",
          "Mozgásátállítási képesség.",
        ],
      },
      {
        type: "paragraph",
        text:
          "A koordináció fejlesztése változatos, pontos mozgásfeladatokkal történik. Fontos a gyakori ismétlés, játékosság és fokozatos nehezítés.",
      },
      {
        type: "highlight",
        text:
          "A kondicionális képességek a teljesítmény fizikai alapját, a koordinációs képességek a mozgás minőségét adják.",
      },
    ],
  },

  {
    id: "sport-12",
    group: "VII. Sport- és Egészségtudomány",
    number: 12,
    title: "Terhelés élettani vizsgálatok leírása, kardiovaszkuláris jellemzők bemutatása és értelmezése.",
    summary:
      "A terhelésélettani vizsgálatok a szervezet fizikai terhelésre adott válaszait mérik és értelmezik.",
    blocks: [
      {
        type: "paragraph",
        text:
          "A vizsgálatok célja a teljesítőképesség, edzettségi állapot és kardiovaszkuláris válaszok megítélése. Használhatók sportban, rehabilitációban és egészségügyi állapotfelmérésben.",
      },
      {
        type: "compare",
        title: "Vizsgálati módszerek",
        items: [
          {
            label: "Terheléses EKG",
            text:
              "A szív elektromos működését követi fokozódó terhelés közben.",
          },
          {
            label: "Ergometria",
            text:
              "Kerékpár- vagy futópados terhelés teljesítmény és élettani válasz mérésére.",
          },
          {
            label: "Spiroergometria",
            text:
              "A légzési gázcsere mérésével vizsgálja az aerob kapacitást.",
          },
        ],
      },
      {
        type: "bullets",
        title: "Kardiovaszkuláris jellemzők",
        items: [
          "Pulzusszám.",
          "Vérnyomás.",
          "Perctérfogat.",
          "VO₂max.",
          "Terhelés alatti és utáni regeneráció.",
        ],
      },
      {
        type: "definition",
        title: "VO₂max",
        text:
          "A maximális oxigénfelvevő képesség, amely az aerob állóképesség egyik legfontosabb mutatója.",
      },
      {
        type: "paragraph",
        text:
          "Terhelés során a pulzus, vérnyomás és oxigénfelvétel emelkedik. Edzett személyeknél hatékonyabb keringési válasz és gyorsabb regeneráció figyelhető meg.",
      },
      {
        type: "highlight",
        text:
          "A terhelésélettani vizsgálatok a fizikai teljesítőképesség és a kardiovaszkuláris alkalmazkodás objektív értékelését szolgálják.",
      },
    ],
  },

  {
    id: "sport-13",
    group: "VII. Sport- és Egészségtudomány",
    number: 13,
    title: "Sportszervezetek kialakulása és fejlődése Magyarországon 1867-től.",
    summary:
      "A magyar sportszervezetek fejlődése a polgárosodás, egyesületi élet, állami sportirányítás és modern sportintézmények kialakulásához kötődik.",
    blocks: [
      {
        type: "paragraph",
        text:
          "1867 után a polgári társadalom fejlődése kedvezett az egyesületi sport kialakulásának. A sport fokozatosan intézményesült, majd országos szervezeti és állami irányítási formák jelentek meg.",
      },
      {
        type: "bullets",
        title: "Fő fejlődési szakaszok",
        items: [
          "Kiegyezés utáni időszak: polgári sportegyesületek megjelenése.",
          "20. század eleje: sportági szövetségek és versenyrendszerek kialakulása.",
          "Két világháború között: sportélet bővülése, olimpiai sikerek.",
          "Szocialista időszak: központi állami sportirányítás.",
          "Rendszerváltás után: civil, piaci és állami szereplők vegyes rendszere.",
        ],
      },
      {
        type: "compare",
        title: "Szervezeti formák",
        items: [
          {
            label: "Sportegyesület",
            text:
              "Helyi vagy közösségi alapú sportszervezet, tagsággal és sporttevékenységgel.",
          },
          {
            label: "Sportági szakszövetség",
            text:
              "Egy sportág országos szakmai irányítását, versenyrendszerét és szabályozását végzi.",
          },
          {
            label: "Állami sportirányítás",
            text:
              "A sportpolitikai célokat, támogatási rendszereket és jogi kereteket alakítja.",
          },
        ],
      },
      {
        type: "paragraph",
        text:
          "A sportszervezetek fejlődését mindig befolyásolta a társadalmi és politikai környezet. A sport egyszerre volt civil kezdeményezés, nemzeti reprezentáció és állami feladat.",
      },
      {
        type: "highlight",
        text:
          "A magyar sportszervezeti rendszer fejlődése a civil egyesületi sporttól az országos szövetségi és állami irányításig vezetett.",
      },
    ],
  },

  {
    id: "sport-14",
    group: "VII. Sport- és Egészségtudomány",
    number: 14,
    title: "A sportpolitika céljai. Stratégiaalkotás, szervezés és vezetés a sportban.",
    summary:
      "A sportpolitika a sport társadalmi, egészségügyi, nevelési és gazdasági céljait határozza meg.",
    blocks: [
      {
        type: "paragraph",
        text:
          "A sportpolitika keretet ad annak, hogyan működjön a sport rendszere. Érinti a versenysportot, utánpótlást, szabadidősportot, iskolai sportot és sportlétesítményeket.",
      },
      {
        type: "bullets",
        title: "A sportpolitika fő céljai",
        items: [
          "Egészségmegőrzés és fizikai aktivitás növelése.",
          "Utánpótlás-nevelés támogatása.",
          "Versenysport és nemzetközi eredményesség fejlesztése.",
          "Esélyegyenlőség és sporthoz való hozzáférés javítása.",
          "Sportinfrastruktúra és finanszírozás biztosítása.",
        ],
      },
      {
        type: "compare",
        title: "Stratégia, szervezés, vezetés",
        items: [
          {
            label: "Stratégiaalkotás",
            text:
              "Hosszú távú célok, prioritások és fejlesztési irányok meghatározása.",
          },
          {
            label: "Szervezés",
            text:
              "Erőforrások, feladatok, szereplők és folyamatok összehangolása.",
          },
          {
            label: "Vezetés",
            text:
              "Döntéshozatal, motiválás, irányítás és felelősségvállalás a sportban.",
          },
        ],
      },
      {
        type: "paragraph",
        text:
          "A sportvezetésnek egyszerre kell szakmai, gazdasági és emberi szempontokat kezelnie. Fontos a célok mérhetősége, a fenntarthatóság és az érintettek együttműködése.",
      },
      {
        type: "highlight",
        text:
          "A sportpolitika célja, hogy a sport társadalmi hasznát szervezett, fenntartható és hozzáférhető rendszerben érvényesítse.",
      },
    ],
  },

  {
    id: "sport-15",
    group: "VII. Sport- és Egészségtudomány",
    number: 15,
    title: "A hivatásos és szabadidősport gazdaságtani alapja. Sporttámogatás és sportfinanszírozás jellemzői.",
    summary:
      "A sport gazdasági működése eltér a hivatásos és szabadidősportban, de mindkettő finanszírozást és erőforrásokat igényel.",
    blocks: [
      {
        type: "paragraph",
        text:
          "A hivatásos sport piaci logikával is működik, bevételekhez és eredményességhez kötötten. A szabadidősport inkább egészségmegőrző és társadalmi hasznokat termel.",
      },
      {
        type: "compare",
        title: "Hivatásos és szabadidősport",
        items: [
          {
            label: "Hivatásos sport",
            text:
              "Piaci, verseny- és médiaorientált terület. Bevételi forrása lehet jegyeladás, szponzoráció, közvetítési jog és merchandising.",
          },
          {
            label: "Szabadidősport",
            text:
              "Egészségmegőrző és közösségi célú terület. Finanszírozása gyakran egyéni, önkormányzati vagy állami támogatásból történik.",
          },
        ],
      },
      {
        type: "bullets",
        title: "Sportfinanszírozási források",
        items: [
          "Állami és önkormányzati támogatás.",
          "Szponzoráció és reklámbevétel.",
          "Tagsági díjak és nevezési díjak.",
          "Jegybevétel és közvetítési jogok.",
          "Pályázatok, alapítványi és civil források.",
        ],
      },
      {
        type: "paragraph",
        text:
          "A sporttámogatás indoka lehet egészségnyereség, társadalmi integráció, utánpótlás-nevelés, nemzeti presztízs vagy gazdasági élénkítés.",
      },
      {
        type: "compare",
        title: "Fő gazdasági kérdések",
        items: [
          {
            label: "Hatékonyság",
            text:
              "Az erőforrásokat úgy kell felhasználni, hogy minél nagyobb társadalmi vagy sporteredmény szülessen.",
          },
          {
            label: "Fenntarthatóság",
            text:
              "A finanszírozásnak hosszú távon is működőképesnek kell lennie.",
          },
          {
            label: "Hozzáférés",
            text:
              "Fontos, hogy a sportolási lehetőségek ne csak szűk csoportok számára legyenek elérhetők.",
          },
        ],
      },
      {
        type: "highlight",
        text:
          "A hivatásos sport gazdaságilag piacosabb, a szabadidősport pedig főként egészségügyi és társadalmi haszna miatt támogatandó.",
      },
    ],
  },

  {
    id: "sport-16",
    group: "VII. Sport- és Egészségtudomány",
    number: 16,
    title: "A sportpedagógia és a sporttudomány kapcsolata. A sportpedagógia fejlődési irányai, a testnevelés elmélettel való kapcsolata.",
    summary:
      "A sportpedagógia a sport és testnevelés nevelési, oktatási és személyiségfejlesztő folyamatait vizsgálja.",
    blocks: [
      {
        type: "paragraph",
        text:
          "A sportpedagógia a sporttudomány része. Azt vizsgálja, hogyan hat a mozgás, sport és testnevelés a személyiségre, tanulásra, szocializációra és nevelésre.",
      },
      {
        type: "compare",
        title: "Kapcsolódás",
        items: [
          {
            label: "Sporttudomány",
            text:
              "A sportot komplexen vizsgálja: biológiai, pedagógiai, pszichológiai és társadalmi oldalról.",
          },
          {
            label: "Sportpedagógia",
            text:
              "A sport és testnevelés nevelési, oktatási és fejlesztő hatásaira fókuszál.",
          },
          {
            label: "Testnevelés-elmélet",
            text:
              "A testnevelés céljaival, tartalmával, módszereivel és iskolai szerepével foglalkozik.",
          },
        ],
      },
      {
        type: "bullets",
        title: "Fejlődési irányok",
        items: [
          "Gyermekközpontú és élményalapú testnevelés.",
          "Egészségfejlesztő szemlélet erősödése.",
          "Inklúzió és differenciált oktatás.",
          "Élethosszig tartó fizikai aktivitás támogatása.",
          "Digitális és mérésalapú módszerek megjelenése.",
        ],
      },
      {
        type: "paragraph",
        text:
          "A modern sportpedagógia nemcsak mozgást tanít. Célja a motiváció, önismeret, együttműködés, fegyelem és egészségtudatos életmód fejlesztése is.",
      },
      {
        type: "highlight",
        text:
          "A sportpedagógia hidat képez a sporttudomány, a testnevelés-elmélet és a neveléstudomány között.",
      },
    ],
  },

  {
    id: "sport-17",
    group: "VII. Sport- és Egészségtudomány",
    number: 17,
    title: "A sportpedagógia meghatározása, tárgya, feladatai, főbb kérdései. Sportpedagógiai alapfogalmak (mozgás, fizikai aktivitás, testgyakorlás, testi nevelés, egészség, tökéletes közérzet, fittség)",
    summary:
      "A sportpedagógia a sport, testnevelés és mozgásos tevékenységek nevelési hatásait vizsgálja.",
    blocks: [
      {
        type: "paragraph",
        text:
          "A sportpedagógia központi kérdése, hogyan használható a mozgás és sport a nevelésben, személyiségfejlesztésben, egészségfejlesztésben és közösségi tanulásban.",
      },
      {
        type: "bullets",
        title: "Tárgya és feladatai",
        items: [
          "A sport és testnevelés nevelő hatásainak vizsgálata.",
          "Mozgásos tanulási folyamatok elemzése.",
          "Személyiség, motiváció és közösségi viselkedés fejlesztése.",
          "Egészségtudatos életmód támogatása.",
          "Pedagógiai módszerek alkalmazása sportban és testnevelésben.",
        ],
      },
      {
        type: "compare",
        title: "Alapfogalmak I.",
        items: [
          {
            label: "Mozgás",
            text:
              "A test helyzetének vagy helyváltoztatásának alapvető formája.",
          },
          {
            label: "Fizikai aktivitás",
            text:
              "Minden testmozgás, amely energiafelhasználással jár.",
          },
          {
            label: "Testgyakorlás",
            text:
              "Tudatosan végzett mozgásos tevékenység valamely testi vagy készségbeli cél érdekében.",
          },
        ],
      },
      {
        type: "compare",
        title: "Alapfogalmak II.",
        items: [
          {
            label: "Testi nevelés",
            text:
              "A személyiség fejlesztése a test, mozgás és fizikai aktivitás eszközeivel.",
          },
          {
            label: "Egészség",
            text:
              "Testi, lelki és szociális jóllét állapota, nem csupán a betegség hiánya.",
          },
          {
            label: "Fittség",
            text:
              "Olyan fizikai állapot, amely lehetővé teszi a mindennapi és sporttevékenységek hatékony végzését.",
          },
        ],
      },
      {
        type: "definition",
        title: "Tökéletes közérzet",
        text:
          "A testi, lelki és szociális jóllét harmonikus állapota, amelyben az egyén jól érzi magát és képes feladatai ellátására.",
      },
      {
        type: "highlight",
        text:
          "A sportpedagógia lényege, hogy a mozgást és sportot nevelési és személyiségfejlesztési eszközként értelmezi.",
      },
    ],
  },

  {
    id: "sport-18",
    group: "VII. Sport- és Egészségtudomány",
    number: 18,
    title: "Siker és kudarc elviselésére nevelés (Az érdeklődés, irányultság fejlesztése, önértékelési képesség fejlesztése). A tudatos fegyelemre, kitartásra, aktivitásra nevelés a sportban.",
    summary:
      "A sport kiemelt nevelési terep a siker, kudarc, önértékelés, fegyelem és kitartás fejlesztésére.",
    blocks: [
      {
        type: "paragraph",
        text:
          "A sportban a tanuló vagy sportoló folyamatos visszajelzést kap teljesítményéről. Ez lehetőséget ad a siker és kudarc feldolgozásának tanítására.",
      },
      {
        type: "compare",
        title: "Siker és kudarc pedagógiai kezelése",
        items: [
          {
            label: "Siker",
            text:
              "Erősítheti az önbizalmat és motivációt, de fontos a reális önértékelés fenntartása.",
          },
          {
            label: "Kudarc",
            text:
              "Tanulási lehetőségként értelmezhető, ha megfelelő támogatás és visszajelzés társul hozzá.",
          },
        ],
      },
      {
        type: "bullets",
        title: "Fejlesztési területek",
        items: [
          "Érdeklődés és belső motiváció felkeltése.",
          "Célorientált irányultság kialakítása.",
          "Reális önértékelés fejlesztése.",
          "Tudatos fegyelem és szabálykövetés erősítése.",
          "Kitartás és aktivitás fenntartása.",
        ],
      },
      {
        type: "paragraph",
        text:
          "Az edző vagy pedagógus szerepe kulcsfontosságú. A visszajelzés legyen konkrét, fejlesztő és ne csak az eredményre, hanem az erőfeszítésre is irányuljon.",
      },
      {
        type: "compare",
        title: "Nevelési eszközök",
        items: [
          {
            label: "Célkitűzés",
            text:
              "Rövid és hosszú távú, elérhető célok megfogalmazása.",
          },
          {
            label: "Pozitív megerősítés",
            text:
              "Az erőfeszítés, fejlődés és sportszerű viselkedés elismerése.",
          },
          {
            label: "Reflexió",
            text:
              "A sportoló megtanulja értelmezni saját teljesítményét és hibáit.",
          },
        ],
      },
      {
        type: "highlight",
        text:
          "A sportban a siker és kudarc nevelési értéke akkor érvényesül, ha a hangsúly a fejlődésen, erőfeszítésen és önismereten van.",
      },
    ],
  },

  {
    id: "sport-19",
    group: "VII. Sport- és Egészségtudomány",
    number: 19,
    title: "A pedagógus feladatai a testnevelésben és sportban. Edző – szülő – sportoló kapcsolata.",
    summary:
      "A pedagógus és edző feladata a mozgásfejlesztés mellett a nevelés, motiválás, biztonság és együttműködés biztosítása.",
    blocks: [
      {
        type: "paragraph",
        text:
          "A testnevelésben és sportban a pedagógus nemcsak mozgást tanít. Nevel, értéket közvetít, fejleszti a személyiséget és támogatja az egészséges életmódot.",
      },
      {
        type: "bullets",
        title: "A pedagógus fő feladatai",
        items: [
          "Biztonságos és motiváló tanulási környezet kialakítása.",
          "Mozgáskészségek és fizikai képességek fejlesztése.",
          "Egészségtudatos szemlélet alakítása.",
          "Fegyelem, együttműködés és fair play erősítése.",
          "Egyéni különbségek figyelembevétele.",
        ],
      },
      {
        type: "compare",
        title: "Edző, szülő, sportoló szerepe",
        items: [
          {
            label: "Edző",
            text:
              "Szakmai irányító és nevelő. Feladata a fejlesztés, motiválás és megfelelő terhelés biztosítása.",
          },
          {
            label: "Szülő",
            text:
              "Támogató háttér. Segíti a sportoló motivációját, de nem veheti át az edző szerepét.",
          },
          {
            label: "Sportoló",
            text:
              "Aktív résztvevő. Felelőssége az együttműködés, erőfeszítés és szabálykövetés.",
          },
        ],
      },
      {
        type: "paragraph",
        text:
          "A jó kapcsolat alapja a világos kommunikáció, bizalom és szerephatárok tisztelete. Konfliktus akkor alakulhat ki, ha a teljesítményelvárások túlzóak vagy a szerepek összemosódnak.",
      },
      {
        type: "bullets",
        title: "Jó együttműködés feltételei",
        items: [
          "Rendszeres és őszinte kommunikáció.",
          "A gyermek érdekeinek elsődlegessége.",
          "Reális célok és elvárások.",
          "Támogató, nem nyomásgyakorló szülői attitűd.",
          "Szakmai döntések tiszteletben tartása.",
        ],
      },
      {
        type: "highlight",
        text:
          "A pedagógus és edző munkája akkor hatékony, ha a sportoló testi, lelki és szociális fejlődését egyszerre támogatja.",
      },
    ],
  },

  {
    id: "sport-20",
    group: "VII. Sport- és Egészségtudomány",
    number: 20,
    title: "Integrációs szempontok az iskolai testnevelésben és sportban. Speciális csoportok pedagógiája a sportban.",
    summary:
      "Az integráció célja, hogy minden tanuló képességeihez igazodva vehessen részt a testnevelésben és sportban.",
    blocks: [
      {
        type: "paragraph",
        text:
          "Az iskolai testnevelésben az integráció azt jelenti, hogy eltérő képességű, állapotú vagy hátterű tanulók közösen vesznek részt a mozgásos tevékenységekben.",
      },
      {
        type: "definition",
        title: "Integráció",
        text:
          "Olyan pedagógiai szemlélet, amely a tanulók közös részvételét támogatja, miközben figyelembe veszi az egyéni szükségleteket.",
      },
      {
        type: "bullets",
        title: "Speciális csoportok",
        items: [
          "Sajátos nevelési igényű tanulók.",
          "Fogyatékossággal élő tanulók.",
          "Krónikus betegséggel élők.",
          "Hátrányos helyzetű tanulók.",
          "Tehetséges sportolók.",
        ],
      },
      {
        type: "compare",
        title: "Pedagógiai szempontok",
        items: [
          {
            label: "Differenciálás",
            text:
              "A feladatokat a tanulók képességeihez és állapotához igazítjuk.",
          },
          {
            label: "Akadálymentesítés",
            text:
              "A környezetet és eszközöket hozzáférhetővé tesszük.",
          },
          {
            label: "Elfogadó légkör",
            text:
              "Csökkenti a kirekesztést, növeli a részvételt és biztonságérzetet.",
          },
        ],
      },
      {
        type: "paragraph",
        text:
          "A sportban az integráció nem azonos követelményeket jelent mindenkinek. A cél az aktív részvétel, fejlődés, sikerélmény és közösségi befogadás.",
      },
      {
        type: "bullets",
        title: "Eszközök",
        items: [
          "Adaptált szabályok.",
          "Módosított eszközök.",
          "Egyéni terhelésadagolás.",
          "Segítő társ vagy pedagógiai asszisztens.",
          "Pozitív megerősítés és reális célkitűzés.",
        ],
      },
      {
        type: "highlight",
        text:
          "Az integrált testnevelés lényege nem az egyformaság, hanem a képességekhez igazított, méltányos részvétel.",
      },
    ],
  },



];
