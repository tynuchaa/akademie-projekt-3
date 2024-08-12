# akademie-projekt-3
Webové stránky

Co není podle zadání:
- ověřování shody hesla: udělala jsem místo toho formulář ověřující platnou emailovou adresu a vyplnění jména

Co je navíc:
- formulář je funkční, odesílá jméno a email. Pro účely stránek vyměním pole jméno za pole pro zprávu, ale teď už bych nestihla projekt odevzdat ;-)
- pohrála jsem si s vyjížděcím menu v mobilní verzi a s fotogalerií

  Co se mi nepovedlo vyřešit:
  - vyjíždění menu a chování po kliknutí na položku asi není dobře vyřešené přes setTimeout
  - po kliknutí na přepínátko light/dark modu když je stránka odscrollovaná, tak odscrolluje nahoru, měla by zůstat na místě. V consoli hází error: Blocked aria-hidden on a <a> element because the element that just received focus must not be hidden from assistive technology users. Avoid using aria-hidden on a focused element or its ancestor. Consider using the inert attribute instead, which will also prevent focus. For more details, see the aria-hidden section of the WAI-ARIA specification at https://w3c.github.io/aria/#aria-hidden. <a href=​"#" class=​"fa-solid fa-circle-half-stroke" aria-hidden=​"true">​…​</a>​
  - fotky ve fotogalerii se po kliknutí přeskupí 'divně' a odskakují, trochu pomohl shrink=0, ale stejně to není ono.
