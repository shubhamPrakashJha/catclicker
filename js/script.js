/**
 * Created by sjonl on 27-05-2018.
 */
$(function () {
    var i = 0;
    $('img#cat').click(function () {
        // console.log('hello');
        i++;
        $('#count').text(i)
    });
});