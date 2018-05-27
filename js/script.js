/**
 * Created by sjonl on 27-05-2018.
 */
$(function () {
    var i = 0;
    var j = 0;
    cat1 = $('#cat1');
    cat2 = $('#cat2');
    cat1.find('.name').text('cat 1');
    cat2.find('.name').text('cat 2');

    $('#cat1 img#cat').click(function () {
        // console.log('hello');
        i++;
        $('#cat1 #count').text(i)
    });
    $('#cat2 img#cat').click(function () {
        // console.log('hello');
            j++;
        $('#cat2 #count').text(j)
    });
});