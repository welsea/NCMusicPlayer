function formatDate(dateArg) {
    var date=new Date(dateArg);
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const formatMonth = month < 10 ? `0${month}` : month;
    const formatDay = day < 10 ? `0${day}` : day;

    return `${year}/${formatMonth}/${formatDay}`
}
var date=new Date();
var dateArr=formatDate(date).split('/');
$('.date').text(dateArr[1]);
$('.day').text(dateArr[2]);