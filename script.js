let theme;
$(document).ready(()=>{
    if (!window.localStorage.getItem("theme") && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        theme = 3;
    }
    else{
        let storedTheme = window.localStorage.getItem("theme");
        theme = storedTheme?storedTheme : 1;
    }
    $("html").attr("class", `theme-${theme}`);
});
$(".num").click( (e)=> {
    let result = $(".result p").text().replaceAll("," , "") + $(e.target).text();
    result = result.replace( /\d{1,3}(?=(\d{3})+(?!\d))/g , "$&,");
    $(".result p").text(result);
});

$(".del").click((e)=>{
    let text = $(".result p").text();
    text = text.slice(0,text.length-1).replaceAll("," , "");
    text = text.replace( /\d{1,3}(?=(\d{3})+(?!\d))/g , "$&,");
    $(".result p").text(text);
});

$(".reset").click((e)=>{
    $(".result p").text("");
});

$(".answer").click((e)=>{
    let result = $(".result p").text();
    result = result.replaceAll(",","").replaceAll("x","*");
    result = eval(result).toString();
    result = result.replace( /\d{1,3}(?=(\d{3})+(?!\d))/g , "$&,");
    $(".result p").text(result);
});

$(".toggle-thumb").click((e)=>{ 
    theme++;
    if(theme == 4){
        theme = 1;
    }
    $("html").attr("class", `theme-${theme}`);
    window.localStorage.setItem("theme",theme);
});

