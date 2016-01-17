//require.config({
//    baseUrl:'javascripts'
//});
require(['tools'], function (tools) {
    var prevActive;
    var sidebar=document.getElementById('sidebar');
    sidebar.addEventListener('click', function (e) {
        var target = (e || window.event).target;
        var href=target.getAttribute('data-href');
        return href ? require(['text!../'+href], function (html) {
            document.getElementById('main-content').innerHTML=html;
            //if (prevActive) {
            //    prevActive.className=''
            //}
            //prevActive=tools.findParent(target,'li');
            prevActive ? (prevActive.className='',prevActive=tools.findParent(target,'li')) : prevActive=tools.findParent(target,'li');
            tools.findParent(target,'li').className='active';
        }) : null;
    });
});
