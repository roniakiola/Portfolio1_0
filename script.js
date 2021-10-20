'use strict';

$(function(){

    $(window).scroll(function(){
        $('nav').toggleClass('scrolled', $(this).scrollTop() > 100);
    });

    //On video-button click fetch data-src from clicked button into a variable
    var $videoSrc;
    $('.video-btn').click(function() {
        $videoSrc = $(this).data( "src" );
    });
    //On modal opening apply videoSrc as source attribute to #video inside modal...
    $('#myModal').on('shown.bs.modal', function (e) {
    
        //...autoplay and related videos disabled
        $("#video").attr('src', $videoSrc + "?autoplay=0&amp;modestbranding=1&amp;showinfo=0"); 
    });

    $('#myModal').on('hide.bs.modal', function (e) {
        //empty source and stop video from playing on modal close
        $("#video").attr('src', ''); 
    });
    //Almost same as above but done for #myModal2 for other content
    var $othrSrc;
    $('.modal-btn').click(function() {
        $othrSrc = $(this).data( "src" );
    });

    $('#myModal2').on('shown.bs.modal', function (e) {
    
        $("#othr").attr('src', $othrSrc);
        //add attribute from button's data-src to new button for opening content in new tab
        $("#tabButton").attr('href', $othrSrc); 
    });

    $('#myModal2').on('hide.bs.modal', function (e) {
        //empty
        $("#othr").attr('src', ''); 
    });
    //close collapsed navbar on click anywhere
    $(document).click(function (e) {
        $('.navbar-collapse').collapse('hide');
    });
    
});