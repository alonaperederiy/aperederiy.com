(function(){
  var path=location.pathname;
  var lang=path.startsWith('/ru/')?'ru':path.startsWith('/en/')?'en':'uk';
  var base=path.replace(/^\/(ru|en)(?=\/)/,'');
  if(!base.startsWith('/'))base='/'+base;
  var labels=[['uk','🇺🇦 UA'],['ru','🇷🇺 RU'],['en','🇬🇧 EN']];
  var bar=document.createElement('div');
  bar.className='language-picker';
  bar.setAttribute('aria-label','Choose language / Оберіть мову / Выберите язык');
  labels.forEach(function(item){
    if(item[0]!== 'uk' && base!=='/contact/')return;
    var a=document.createElement('a');
    a.href=(item[0]==='uk'?'':'/'+item[0])+base;
    a.textContent=item[1];
    a.lang=item[0];
    if(lang===item[0])a.setAttribute('aria-current','page');
    bar.appendChild(a);
  });
  var header=document.querySelector('header');
  if(header)header.appendChild(bar);
  else document.body.insertBefore(bar,document.body.firstChild);
})();