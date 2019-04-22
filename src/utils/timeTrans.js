// 将时间戳转换为日期
export function format(time){
        var date = new Date(time)
        var y = date.getFullYear()+'-';
        var m = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1)+ '-';
        var d = date.getDate() + ' ';
        var h = date.getHours() + ':';
        var mm = date.getMinutes() + ':';
        var s = date.getSeconds(); 
        return y+m+d+h+mm+s;
        
}
