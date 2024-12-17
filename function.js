function menseki(hankei){
    return "面積は" +hankei*hankei*3.14 + "㎠です。";
}
document.write(menseki(5));
document.write("<br>");
document.write(menseki(7));
document.write("<br>");
document.write(menseki(10));
document.write("<br>");
/*問2 ここから↓*/
function price(gloup, adult, child){
    return gloup + "グループの合計金額は"+ ((adult*500)+(child*200)) + "円です。";
}
document.write(price("A", 2, 4));
document.write("<br>");
document.write(price("B", 1, 5));
document.write("<br>");
document.write(price("C", 3, 7));