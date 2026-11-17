
export default {
  async fetch(request) {
    const html = `
<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>الوجبة الشهية | Good Food Better Mood</title>
<style>
*{box-sizing:border-box}
body{
 margin:0;
 font-family:Arial,sans-serif;
 background:#100b09;
 color:white;
}
header{
 padding:20px 7%;
 display:flex;
 justify-content:space-between;
 align-items:center;
 background:#1c100c;
 border-bottom:1px solid #54301d;
}
.logo{color:#ffc83d;font-size:23px;font-weight:bold}
nav a{color:white;text-decoration:none;margin:0 10px}
.hero{
 text-align:center;
 padding:85px 20px;
 background:linear-gradient(135deg,#401b0d,#a83d16,#201008);
}
.hero h1{font-size:45px;color:#ffcb36;margin:10px}
.hero p{font-size:19px;line-height:1.8}
.btn{
 display:inline-block;
 background:#e92c20;
 color:white;
 padding:14px 30px;
 border-radius:30px;
 text-decoration:none;
 font-weight:bold;
 margin-top:15px;
}
section{padding:45px 7%}
h2{text-align:center;color:#ffca42;font-size:29px}
.grid{
 display:grid;
 grid-template-columns:repeat(auto-fit,minmax(220px,1fr));
 gap:18px;
}
.card{
 background:#291710;
 border:1px solid #674027;
 border-radius:15px;
 padding:22px;
 text-align:center;
}
.card h3{color:#ffc83d}
.price{font-size:23px;color:#ff5544;font-weight:bold}
.card p{color:#ddd;line-height:1.7}
footer{
 background:#1c100c;
 padding:35px 15px;
 text-align:center;
 line-height:2;
}
footer a{color:#ffca42}
@media(max-width:600px){
 header{flex-direction:column;gap:15px}
 .hero h1{font-size:34px}
 nav a{margin:0 5px;font-size:14px}
}
</style>
</head>
<body>

<header>
<div class="logo">الوجبة الشهية</div>
<nav>
<a href="#home">الرئيسية</a>
<a href="#menu">المنيو</a>
<a href="#offers">العروض</a>
<a href="#contact">اتصل بنا</a>
</nav>
</header>

<div class="hero" id="home">
<h1>مطعم الوجبة الشهية</h1>
<p>Good Food Better Mood</p>
<p>اللمة الحلوة تكمل بطعمنا</p>
<a class="btn" href="#menu">اكتشف المنيو</a>
</div>

<section id="menu">
<h2>قائمة الطعام</h2>
<div class="grid">
<div class="card">
<h3>الشاورما</h3>
<p>شاورما فراخ ولحم وسندوتشات ووجبات</p>
<a class="btn" href="#contact">اطلب الآن</a>
</div>
<div class="card">
<h3>الكريب</h3>
<p>كريب فراخ ولحوم وميكس وجبن</p>
<a class="btn" href="#contact">اطلب الآن</a>
</div>
<div class="card">
<h3>الوجبات العربية</h3>
<p>وجبات عربي ودبل ووجبات توفير</p>
<a class="btn" href="#contact">اطلب الآن</a>
</div>
<div class="card">
<h3>الفراخ</h3>
<p>فراخ بروستد وفراخ مشوية</p>
<a class="btn" href="#contact">اطلب الآن</a>
</div>
</div>
</section>

<section id="offers">
<h2>عروض الوجبة الشهية</h2>
<div class="grid">
<div class="card">
<h3>صينية لمّة العيلة</h3>
<p>وجبات تجمع العيلة في صينية واحدة</p>
<div class="price">400 جنيه</div>
</div>
<div class="card">
<h3>وجبة التوفير</h3>
<p>اختيارات متنوعة تناسب التجمعات</p>
<div class="price">370 جنيه</div>
</div>
<div class="card">
<h3>وجبة شاورما عائلي</h3>
<p>وجبة مناسبة للعيلة والأصدقاء</p>
<div class="price">510 جنيه</div>
</div>
</div>
</section>

<footer id="contact">
<h2>اطلب وجبتك الآن</h2>
<p>6 أكتوبر - الحي الثاني - شارع جيل 2000</p>
<p>مقابل مدرسة أم المؤمنين</p>
<p>للطلب والاستفسار</p>
<p>01019845220</p>
<a class="btn" href="https://wa.me/201019845220">اطلب عبر واتساب</a>
<p>الوجبة الشهية - Good Food Better Mood</p>
</footer>

</body>
</html>
`;
    return new Response(html, {
      headers: {
        "content-type": "text/html;charset=UTF-8"
      }
    });
  }
};
