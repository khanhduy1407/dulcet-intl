!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e.DulcetIntlLocaleData=e.DulcetIntlLocaleData||{},e.DulcetIntlLocaleData.ka=t())}(this,function(){"use strict";var e=[{locale:"ka",pluralRuleFunction:function(e,t){var a=String(e).split("."),o=a[0],r=o.slice(-2);return t?1==o?"one":0==o||r>=2&&20>=r||40==r||60==r||80==r?"many":"other":1==e?"one":"other"},fields:{year:{displayName:"წელი",relative:{0:"ამ წელს",1:"მომავალ წელს","-1":"გასულ წელს"},relativeTime:{future:{one:"{0} წელიწადში",other:"{0} წელიწადში"},past:{one:"{0} წლის წინ",other:"{0} წლის წინ"}}},month:{displayName:"თვე",relative:{0:"ამ თვეში",1:"მომავალ თვეს","-1":"გასულ თვეს"},relativeTime:{future:{one:"{0} თვეში",other:"{0} თვეში"},past:{one:"{0} თვის წინ",other:"{0} თვის წინ"}}},day:{displayName:"დღე",relative:{0:"დღეს",1:"ხვალ",2:"ზეგ","-2":"გუშინწინ","-1":"გუშინ"},relativeTime:{future:{one:"{0} დღეში",other:"{0} დღეში"},past:{one:"{0} დღის წინ",other:"{0} დღის წინ"}}},hour:{displayName:"საათი",relativeTime:{future:{one:"{0} საათში",other:"{0} საათში"},past:{one:"{0} საათის წინ",other:"{0} საათის წინ"}}},minute:{displayName:"წუთი",relativeTime:{future:{one:"{0} წუთში",other:"{0} წუთში"},past:{one:"{0} წუთის წინ",other:"{0} წუთის წინ"}}},second:{displayName:"წამი",relative:{0:"ახლა"},relativeTime:{future:{one:"{0} წამში",other:"{0} წამში"},past:{one:"{0} წამის წინ",other:"{0} წამის წინ"}}}}}];return e});