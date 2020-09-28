// cSpell:disable

Jeśli animacji jest wiele użyj: base/\_animations.scss
Jeśli nie to @keyframe dodawaj przy stylach w których używasz animacji

Layout folder odpowiada za większe części strony

Components odpowiada za mniejsze części strony

Theme nie pojawia się w wiekszości projektów

Abstracts nie powinien zwracać ani jednej linii kodu CSS
Przy większych projektach warto Abstracts grupować w pliki lub foldery np. themes, typography itp.

Vendors posiada pliki z bibliotek

Można dodać 8 folder Vendors-extensions jeśli nadpisujemy zawartość którejś biblioteki.

\_shame.scss używamy gdy nie jesteśmy dumni z kodu który napisaliśmy

W main.scss warto dodać dyrektywe @charset 'utf-8' zby zabezpieczyć się przed możliwymi problemami z kodowaniem

Kalkulacje robimy w nawiasach
Należy unikać magicznych numerów czyli numerów które nie zawsze zadziałają jak chcemy nadanie nazwy poprzez zmienną nie pomoże - używać jednostek które nie są stałe

Code Smells:

- Undoing styles
- Magic numbers
- Qualified selectors // ul.nav, a.button etc.
- Hard-coded/absolute values // sprite jest jedynym co powinno mieć hard-coded value
- Brute forcing
  czyli coś takiego:
  .foo {
    margin-left: -3px;
    position: relative;
    z-index: 99999;
    height: 59px;
    float: left;
  }
- Dangerous selectors // selektor ze zbyt szerokim zastosowaniem
- Reactive !important // jeśli nie jesteś pewien że w 100% sytuacji styl z !important będzie tym czego chcesz
- IDs
- Loose class names // zbyt niejasne nazwy klas

Line-height powinno być relatywne najlepiej wartość 1.2, 2.5, etc.

Najlepiej używać HSL a RGB głównie gdy czysty RGB chcemy

Gdy potrzeba przechowuj zmienne w zmiennych // np. $main-theme-color: $sass-pink;

Lepsza jest funkcja mix() niż lighten() lub darken() bo wolniej zmierza do białego/czarnego

Related selectors on the same line; unrelated selectors on new lines;
local variables being declared before any declarations, then spaced from declarations by a new line; //zmienne potem include
mixin calls with no @content coming before any declaration;
nested selectors always coming after a new line;
mixin calls with @content coming after any nested selector; // czyli po wszystkich selektorach
no new line before a closing brace (}).

Komentarze:

- the structure and/or role of a file;
- the goal of a ruleset;
- the idea behind a magic number;
- the reason for a CSS declaration;
- the order of CSS declarations;
- the thought process behind a way of doing things.

Konwencja komentarzy:

/**
 * Helper class to truncate and add ellipsis to a string too long for it to fit
 * on a single line.
 * 1. Prevent content from wrapping, forcing it on a single line.
 * 2. Add ellipsis at the end of the line.
 */
.ellipsis {
  white-space: nowrap; /* 1 */
  text-overflow: ellipsis; /* 2 */
  overflow: hidden;
}

Inline comments aren't visible in output

Tworzenie zmiennych tylko gdy:
- the value is repeated at least twice;
- the value is likely to be updated at least once;
- all occurrences of the value are tied to the variable (i.e. not by coincidence).

Zrobić mapę w której będą z-indexy

@Extend //używać jak najrzadziej:
- Use extend on %placeholders primarily, not on actual selectors.
- When extending classes, only extend a class with another class, never a complex selector.
- Directly extend a %placeholder as few times as possible.
- Avoid extending general ancestor selectors (e.g. .foo .bar) or general sibling selectors (e.g. .foo ~ .bar). This is what causes selector explosion.

Warto używać tego i podobnych mixinów:
@mixin size($width, $height: $width) {
  width: $width;
  height: $height;
}

Podczas testów na falsy używaj 'not' zamiast == false
// Yep
@if not index($list, $item) {
  // …
}

// Nope
@if index($list, $item) == null {
  // …
}

Loops:
@each, @for, @while
@while nie ma żadnego użytku w SCSS
@for $i from 1 through 10 {
  .foo:nth-of-type(#{$i}) {
    border-color: hsl($i * 36, 50%, 50%);
  }
}
Always use $i as a variable name to stick to the usual convention and unless you have a really good reason to, never use the to keyword: always use through to include final number.

@warning and @error //Przydatne do mixinów i funkcji

Compass framework jest WOLNY
Grid System framework Susy

Nazwenictwo:
- what type of thing a class does;
- where a class can be used;
- what (else) a class might be related to.

If we did want to denote a .person {} inside a .room {}, it is more correct to use a selector like .room .person {} which bridges two Blocks than it is to increase the scope of existing Blocks and Elements.
Gdy mamy różne elementy warto je oddzielać jak w przypadku 'room' i 'person' warto ich nie łączyć
Niewłaściwe podejście:
.page { }
  .page__content { }
  .page__sub-content { }
  .page__footer { }
    .page__copyright { }

Klasy nie odwzoruwują budowy html czyli:
'person__eye' a nie 'person__head__eye'

Przedrostek w klasie 'js-...' najlepiej działa w HTML nie warto dodawać do niego styli lepiej dodać jeszcze jedną klasę

For example, instead of a class like .site-nav, choose something like .primary-nav; rather than .footer-links, favour a class like .sub-links.
The differences in these names is that the first of each two examples is tied to a very specific use case: they can only be used as the site’s navigation or the footer’s links respectively. By using slightly more ambiguous names, we can increase our ability to reuse these components in different circumstances.

Using a class name to describe content is redundant because content describes itself.

/**
 * Runs the risk of becoming out of date; not very maintainable.
 */
.blue {
  color: blue;
}
/**
 * Depends on location in order to be rendered properly.
 */
.header span {
  color: blue;
}
/**
 * Too specific; limits our ability to reuse.
 */
.header-color {
  color: blue;
}
/**
 * Nicely abstracted, very portable, doesn’t risk becoming out of date.
 */
.highlight-color {
  color: blue;
}
It is important to strike a balance between names that do not literally describe the style that the class brings, but also ones that do not explicitly describe specific use cases. Instead of .home-page-panel, choose .masthead; instead of .site-nav, favour .primary-nav; instead of .btn-login, opt for .btn-primary.

Jeśli jakiś element ma za słabą wartość to wtedy można go użyć w chainie np: .site-nav.site-nav { } będzie mocniejsze niż tylko jedna klasa a pozwala uniknąć związania z inną klasą czy elementem

Gdy mamy dostęp tylko do ID i nie możemy inaczej dodać stylów możemy użyć atrybutu zamiast ID:
[id="third-party-widget"] { }

Można najpierw tworzyć element bez wyglądu np:
.btn {
  display: inline-block;
  padding: 1em 2em;
  vertical-align: middle;
}
a potem dodawać modyfikator który doda wygląd:
.btn--positive {
  background-color: green;
  color: white;
}
Whenever you are building a UI component, try and see if you can break it into two parts: one for structural styles (paddings, layout, etc.) and another for skin (colours, typefaces, etc.).

SRP Single Responsibility:
Tworzyć mniejsze klasy które odpowiadają za określone części

The Open/Closed Principle // nie powinno być potrzeby edycji już istniejących klas a jedynie dodanie do nich nowych poprzez np. modyfikatory

Don’t Repeat Repeat Yourself // gdy coś się powtarza ALE nie przypadkiem a ma jakiś związek ze sobą wystarczająco duży aby wymyślić łatwo abstrakcję - najlepiej uzyć wtedy @mixin
In short, only DRY code that is actually, thematically related. Do not try to reduce purely coincidental repetition: duplication is better than the wrong abstraction.

Funkcja calc() jest używane z CSS lub SCSS w zależności czy użyto składni SCSS czy nie

Nie używać '@import' zamiast tego używać '@use'

W 'mixin()' można używać argumentów domyślnych i odwoływać się do nich po nazwie: @include square(100px, $radius: 4px);

Dodawanie jednostki poprzez:
- 1 * 1px
- 1 + 0px
Usuwanie jednostki
- 10px / 1px

Zanim użyjesz funkcji z SCSS najpierw zaimportuj jej moduł np. @use "sass:color";
Uzywanie funkcji bez importu jest zdeprecjowane

Rozplanować przed rozpoczęciem strony z-indexy i używać do nich mapy

Warto podpisywać zmiennymi argumenty w mixinach aby było łatwiej potem z nich korzystać

