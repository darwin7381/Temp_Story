
##Sass & Susy教學手冊
http://sam0512.blogspot.com/2013/10/sass.html


##react-hot-loader
https://github.com/gaearon/react-hot-loader


##gulp guild
https://css-tricks.com/gulp-for-beginners/



##.emmet語法

html:5     //展開html5的格式
link:css   //插入一個CSS連結
script:src //插入一個javscript
p*3        //三個P段落
h1+p       // 會編譯成<h1></h1><p></p>
h1>a       // 會編譯成<h1><a href="#"></a></h1>
a[href='http://xxx.com'] //在html tag裡面寫屬性
.box    // 展開為 <div class="box"></div>


.box > ul >li*3 >a     //會編譯成下列程式碼：
<div class="box">
    <ul>
        <li><a href=""></a></li>
        <li><a href=""></a></li>
        <li><a href=""></a></li>
    </ul>
</div>