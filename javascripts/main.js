//require.config({
//    baseUrl:'javascripts'
//});
require(['tools'], function (tools) {
    var prevActive;
    var loading=document.getElementById('loading-layer');
    var sidebar=document.getElementById('sidebar');
    sidebar.addEventListener('click', function (e) {
        var target = (e || window.event).target;
        var href=target.getAttribute('data-href');
        return href ? (prevActive ? (prevActive.className='',prevActive=tools.findParent(target,'li')) : prevActive=tools.findParent(target,'li'),
        loading.style.display='block',tools.findParent(target,'li').className='active',require(['text!../'+href], function (html) {
            document.getElementById('main-content').innerHTML=html;
            loading.style.display='none';
        })) : null;
    });
});
