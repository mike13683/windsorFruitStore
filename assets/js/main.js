$(document).ready(function () {
    /*top banner image scroll*/
    var controller = new ScrollMagic.Controller();

    var pinScene = new ScrollMagic.Scene({
        triggerElement:".navbar",
        triggerHook:0, /*top of page*/
        duration:"75%"
    })
        .setPin(".banner__content",{pushFollowers: false})
        // .addIndicators()
        .addTo(controller);

    /*homepage - fade in imgages*/
    $(".intro3, .intro2, .intro1").each(function(){
        // Init ScrollMagic
        var controller = new ScrollMagic.Controller();

        // build a scene
        var ourScene = new ScrollMagic.Scene({
            triggerElement: this.children[0], /*img*/
            triggerHook:0.9, /*controlls how far down you scroll down page to activate scene*/
            reverse:false /*only fades in once*/
        })
            .setClassToggle(this, 'fade-in') // add class to project01
            // .addIndicators({
            //     name: 'fade scene',
            //     colorTrigger: 'black',
            //     indent: 200,
            //     colorStart: '#75C695'
            // }) // this requires a plugin
            .addTo(controller);
    });


    // var controller = new ScrollMagic.Controller();
    //
    // // build a scene
    // var ourScene2 = new ScrollMagic.Scene({
    //     triggerElement: ".footer", /*img*/
    //     triggerHook:0.9, /*controlls how far down you scroll down page to activate scene*/
    //     reverse:false /*only fades in once*/
    // })
    //     .setClassToggle(".footer", '.fade-in') // add class to project01
    //     .addIndicators({
    //         name: 'fade scene 2',
    //         colorTrigger: 'black',
    //         indent: 200,
    //         colorStart: 'grey'
    //     }) // this requires a plugin
    //     .addTo(controller);


});

/*organic page - drop down btns*/
$(document).ready(function () {
    $(".foo-js1").hide();
    $(".organic1-js").click(function(){
        $(".foo-js1").slideToggle(2000);
    });

    $(".foo-js2").hide();
    $(".organic2-js").click(function(){
        $(".foo-js2").slideToggle(2000);
    });

    $(".foo-js3").hide();
    $(".organic3-js").click(function(){
        $(".foo-js3").slideToggle(2000);
    });

    $(".foo-js4").hide();
    $(".organic4-js").click(function(){
        $(".foo-js4").slideToggle(2000);
    });

    // setTimeout(function() {
    //     $('#myModal').modal('show');
    //
    // }, 1500);
    //
    // setTimeout(function() {
    //     $('#myModal').modal('hide');
    // }, 11000);
});

