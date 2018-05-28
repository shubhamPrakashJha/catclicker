/**
 * Created by sjonl on 27-05-2018.
 */
$(function () {
    // var i = 0;
    // var j = 0;
    // cat1 = $('#cat1');
    // cat2 = $('#cat2');
    // cat1.find('.name').text('cat 1');
    // cat2.find('.name').text('cat 2');
    //
    // $('#cat1 img#cat').click(function () {
    //     // console.log('hello');
    //     i++;
    //     $('#cat1 #count').text(i)
    // });
    // $('#cat2 img#cat').click(function () {
    //     // console.log('hello');
    //         j++;
    //     $('#cat2 #count').text(j)
    // });
    cats = ['cat1', 'cat2', 'cat3', 'cat4', 'cat5' ];
    var clicks = [0,0,0,0,0];

    for(var i = 0; i < cats.length; i++){
        var cat = cats[i];
        console.log(cat);
        $('#list').append("<li id='"+cat+"'>"+cat+"</li>");


        //add event listener at the time of creation of each lat in the list
        // using closure
        // create an inner scope to hold the value of num at the
        // exact moment we add the event listener.
        $('#'+cat).click((function (i, catcopy, clickscopy) {
            return function () {
                $('.name').text(catcopy).attr('title', i);
                $('#image').attr('src', catcopy+'.jpg');
                $('#count').text(clickscopy[i]);
            };
        })(i, cat, clicks));
    }
    $('#image').click(function () {
        i = $('.name').attr('title');
        clicks[i] = clicks[i]+1;
        // console.log(clicks);
        console.log(clicks);
        $('#count').text(clicks[i]);

    });

});