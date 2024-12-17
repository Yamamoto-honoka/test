/*for文(←ループ処理を書き起こすコマンド)の構成(var 初期値*ループ処理の始まり; 条件式*繰り返し条件; 増減式*増えるか減るか;){処理内容*どういう処理を行うか;}*/
for(var star1 = 1; star1 < 6; star1++)    {
    document.write("★");
}
document.write("<br>");
/*問2 ここから↓*/
for(var star2 = 1; star2 < 3; star2++)    {
    for(var star3 = 1; star3 < 4; star3++)    {
        document.write("★");
    }
    document.write("<br>");
}
document.write("<br>");
/*問3 ここから↓*/
for(var star4 = 1; star4 < 3; star4++)    {
    for(var star5 = 1; star5 < 6; star5++)    {
        document.write("☆");
    }
    document.write("<br>");
}
document.write("<br>");
/*問4 ここから↓*/
for(var star6 = 1; star6 <= 4; star6++)    {
    for(var star7 = 1; star7 < 6; star7++)    {
        document.write("★");
    }
    document.write("<br>");
}
document.write("<br>");
/*問5 ここから↓*/
for(var star8 = 1; star8 < 5; star8++)    {
    for(var star9 = 1; star9 < 4; star9++)    {
        document.write("★");
    }
    document.write("<br>");
}
document.write("<br>");
/*問6 ここから↓*/
for(var star10 = 0; star10 < 3; star10++)    {
    for(var star11 = 0; star11 < 3; star11++)    {
        
        if(star11 % 2==0)    {
            document.write("★");
        }else    {
            document.write("☆");
        }
    }
    document.write("<br>");
}
document.write("<br>");
/*問7 ここから↓*/
for(var star12 = 0; star12 < 4; star12++)    {
    for(var star13 = 0; star13 < 5; star13++)    {
        
        if(star13 % 2==1)    {
            document.write("★");
        }else    {
            document.write("☆");
        }
    }
    document.write("<br>");
}
document.write("<br>");
/*問8 ここから↓*/
for(var star14 = 1; star14 < 6; star14++)    {
    for(var star15 = 1; star15 <= star14; star15++)    {
        document.write("★");
    }
    document.write("<br>");
}