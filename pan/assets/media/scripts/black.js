(function(){
    if(document.cookie.replace(/(?:(?:^|.*;\s*)night\s*\=\s*([^;]*).*$)|^.*$/, "$1") === ''){
<% if (site.customConfig.haks) { %>
        if(new Date().getHours() > 19 ||<% if (site.customConfig.hajs) { %> new Date().getHours() < 5){

        document.querySelector('link[title="dark"]').disabled = true;
        document.querySelector('link[title="dark"]').disabled = false;
        document.cookie = "night=1;path=/"
        console.log('夜间模式开启');
        }else{
        document.cookie = "night=0;path=/"
        console.log('夜间模式关闭');
        }
    }else{
        var night = document.cookie.replace(/(?:(?:^|.*;\s*)night\s*\=\s*([^;]*).*$)|^.*$/, "$1") || '0';
        if(night == '0'){
        document.querySelector('link[title="dark"]').disabled = true;
        console.log('夜间模式关闭');
        }else if(night == '1'){
        document.querySelector('link[title="dark"]').disabled = true;
        document.querySelector('link[title="dark"]').disabled = false;
        console.log('夜间模式开启');

        }
    }
})();