
$( document ).ready(function() {





  $.ifixpng('/blank.gif');


    /* jQuery plugin to only run code if selector finds an existing match */
    $.fn.extend({
      'ifExists': function (callback) {
          if (this.length > 0) {
              return callback($(this));
          }
      }
    });
  
    
    function SupportVhVw() {
    
      this.setVw = function(name, vw) {
    
        var myDebouncedFunction = function(event) { scaleVw(name, vw); };
        jQuery(window).on( "resize.mymethod", myDebouncedFunction);
    
        scaleVw(name, vw);
      }
    
      var scaleVw = function(name, vw) {
    
        var scrWidth = jQuery(document).width();
        var px = (scrWidth * vw) / 100;
        var fontSize = jQuery(name).css( 'font-size', px + "px" );
    }
    
    };
    
        
    var $imgrectEls = $( '.imgrect, .imgrectagain' );


      $imgrectEls.imgContainRect({
        
        overrideImgPut: function($container, $img) {
          $container.empty();
          $container.append($img);
        }
    
      });
        
        
        
        
        
        
        
    
    
        
        
    

    
    
        
    


    enquire.register("(min-width : 1px) and (max-width: 709px)", {
        match : function() {
            /* li elements (list stuff) can't have left adjusted without inline or js styling, not even jQuery will. */
            document.getElementById("firstHeaderListItems").style.left="-50%",
            document.getElementById("ListItemsA1").style.width="100%",
            $('.vwLargerWindow-h3').css('font-size', '27px'),
            $('.vwLargerWindow-p').css('font-size', '19px'),
            $(".vwLargerWindow-li").css("font-size","19px"),
            $(".title").css("font-size","29px"),
            $(".subtitle").css("font-size","24px"),
            $(".pCaption").css("font-size","19px");
            $('.paddingPush').css('padding-top', '199px').css('padding-bottom', '99px');
        }
    });
    
    
    enquire.register("(min-width : 710px) and (max-width: 1132px)", {
        match : function() {
            /* li elements (list stuff) can't have left adjusted without inline or js styling, not even jQuery will. */
            document.getElementById("firstHeaderListItems").style.left="-50%",
            document.getElementById("ListItemsA1").style.width="auto",
            $('.vwLargerWindow-h3').css('font-size', '27px'),
            $('.vwLargerWindow-p').css('font-size', '19px'),
            $(".vwLargerWindow-li").css("font-size","19px"),
            $(".title").css("font-size","29px"),
            $(".subtitle").css("font-size","24px"),
            $(".pCaption").css("font-size","19px");
            $('.paddingPush').css('padding-top', '149px').css('padding-bottom', '99px');
        }
    });
    
    
    
    
    
    enquire.register("(min-width: 1399px)", {
        match : function() {
          // Init object
    
          var supportVhVw = new SupportVhVw();
          supportVhVw.setVw(".vwLargerWindow-h3", 2.4);
          supportVhVw.setVw(".vwLargerWindow-p", 1.9);
          supportVhVw.setVw(".vwLargerWindow-li", 1.9);
          supportVhVw.setVw(".pCaption", 1.717);
          supportVhVw.setVw(".title", 2.9);
          supportVhVw.setVw(".subtitle", 2.2);
          $('.paddingPush').css('padding-top', '99px').css('padding-bottom', '99px');
          document.getElementById("ListItemsA1").style.width = "100%";
    
        }, 
        unmatch : function() {
          $(window).off( "resize.mymethod" );
        }
    });
    
    
    enquire.register("(min-width : 1133px) and (max-width: 1250px)", {
      match : function() {
        // Init object
        $(window).off( "resize.mymethod" );
        $('.vwLargerWindow-h3').css('font-size', '27px'),
        $('.vwLargerWindow-p').css('font-size', '19px'),
        $(".vwLargerWindow-li").css("font-size","19px"),
        $(".title").css("font-size","37px"),
        $(".subtitle").css("font-size","32px"),
        $('.paddingPush').css('padding-top', '99px').css('padding-bottom', '99px');
        document.getElementById("ListItemsA1").style.width = "100%",
        document.getElementById("firstHeaderListItems").style.left="0";
        
      }
    });
          
    
    
        enquire.register("(min-width : 1251px) and (max-width: 1398px)", {
          match : function() {
            // Init object
            $(window).off( "resize.mymethod" ),
            $('.vwLargerWindow-h3').css('font-size', '31px'),
            $('.vwLargerWindow-p').css('font-size', '22px'),
            $(".vwLargerWindow-li").css("font-size","22px"),
            $(".pCaption").css("font-size","19px"),
            $(".title").css("font-size","49px"),
            $(".subtitle").css("font-size","33px"),
            $('.paddingPush').css('padding-top', '99px').css('padding-bottom', '99px');
            document.getElementById("firstHeaderListItems").style.left="0",
            document.getElementById("ListItemsA1").style.width = "100%";
          }
        });
  
  
  
  
  








      var onWidthChange3 = _.once(function() {
        if($("img.afterIMGRECTonly").length==0) {
            $( ".actualContentRow" ).before( "<img class='afterIMGRECTonly' style='vertical-align: top; width:1px; position:absolute; visibility: hidden;' src='empty.gif'>" );
            $( ".actualContentRow" ).before( "<img class='widthCheck' style='vertical-align: top; width:1px; position:absolute; visibility: hidden;' src='empty.gif'>" );
          };
      });

      onWidthChange3();



              var onWidthChange = _.once(function() {

                
  



                var onWidthChange4 = _.once(function() {
                  $( "div[class*='lineBreakSectionContainingOnlyIMGRECT-']" ).css( 'height', '0' );
                  $( '.imgrect' ).css( 'height', '0' );
                });
                onWidthChange4();

                var onWidthChange5 = _.once(function() {
                  /* removes added linebreak classes */
                  $("div[class*='lineBreakSection-']").each(function () {
                      $(this).removeClass(function (index, css) {
                          return (css.match(/(^|\s)lineBreakSection-\S+/g) || []).join(' ');
                      });
                  });
                });
                onWidthChange5();



                var onWidthChange6 = _.once(function() {
                  $("div[class*='lineBreakSectionContainingOnlyIMGRECT-']").each(function () {
                      $(this).removeClass(function (index, css) {
                          return (css.match(/(^|\s)lineBreakSectionContainingOnlyIMGRECT-\S+/g) || []).join(' ');
                      });
                  });
                });
                onWidthChange6();
  
  
                var onWidthChange7 = _.once(function() {
  
                var targets = $(".actualContentCell");
  
      
                  // Get the first offset to start a comparison
                  var divOffset = targets.first().offset().top;
  
                  // Loop throught each .child to add a row is not the same offset.
                  var rows = 0;
                  var div_per_row = [];
                  var rowNum = 0;
                  
                  var onWidthChange8 = _.once(function() {
                    targets.each(function(){
                      if($(this).offset().top >= divOffset+1){
                        divOffset = $(this).offset().top;
                        rows++;
                      }
                      var onWidthChange9 = _.once(function() {
                        div_per_row[rows] = div_per_row[rows]+1 || 1;
                      });
                      onWidthChange9();
                    });
                  });
                  onWidthChange8();
                  
                  // Now you have a exact div per row count in an array. The variable that has the exact div per row count is div_per_row[rowNumber].
  
                    // Making fun with it. You could do whatever from this point.
                    var onWidthChange9 = _.once(function() {
  
                      var countz = 0;
                      for(i=0;i<div_per_row.length;i++){
                        for(k=0;k<div_per_row[i];k++){
                          var onWidthChange10 = _.once(function() {
                            rowNum = i+1;
                            $( targets ).eq(countz).addClass( 'lineBreakSection-'+rowNum );
                            countz++;
                            var onWidthChange11 = _.once(function() {
                            $( ".actualContentCell" ).each(function () {
                        
                        
         
                        $( '.lineBreakSection-' + rowNum ).has( '.imgrect, .imageCaptionContainer' ).each(function(){
                          
                          var maxHeight = 0;
        
                          $( '.lineBreakSection-' + rowNum ).not(":has(.imgrect)").not(":has(.imageCaptionContainer)").each(function(){
   
                                if ($(this).height() > maxHeight) { maxHeight = $(this).height(); }
  
                          });
        
                              if ( maxHeight > 0 ) {
                                $( this ).height( maxHeight );
                                $( this ).find( '.imgrect' ).height( maxHeight );
                              }
                              if ( maxHeight < 1 ) {
                                $( this ).css('height', 'auto');
                              }
        
        
        
                        });
        
        
        
                        /* Now we need to adjust .imgrect (width 50% for col-md-6 for example) and height auto for the tallest aspect ratio if the linebreak section is totaled 0 height. */
                        
        
                      });
                    });
                    onWidthChange11();
                    });
                    onWidthChange10();
                        }
                      }
                  });
                  onWidthChange9();
    
    
    
    
    
    
    
    
                  var onWidthChangeCaptions = _.once(function() {


                    
                    $( '.imageCaptionContainer' ).each(function(){


                      $(this).find('.textCaptionRow, .textCaptionRow>div').height($(this).find('.pCaption'));
                      $(this).find('.imageCaptionRowAbove').css('width', '100%');
                      $(this).find('.imgrectCaptionChild, .imgrectCaption, .imageCaptionRowAbove').height(($(this).closest('.actualContentCell').height()) - ($(this).find('.pCaption').height()));
                      $(this).find('.imgrectagain>img').css('top', 'auto').css('bottom', '0').css('position', 'absolute');
                      
                      var imageWidth = $(this).find('.imgrectagain>img').width();
                      var imageHeight = $(this).find('.imgrectagain>img').height();

                      var imageRatio = imageHeight/imageWidth;

                      var widthCheck = $( '.widthCheck' ).height();





                      if ((widthCheck > 6 && widthCheck < 18) && (!$(this).find('.imgrectCaptionChild').hasClass('col-xs-alone'))) {
                        $(this).find('.imgrectCaptionChild.ie-xs-12').css('width', '99.9%').css('height', 'auto');
                        $(this).find('.imgrectCaptionChild.ie-xs-11').css('width', '88%').css('height', 'auto');
                        $(this).find('.imgrectCaptionChild.ie-xs-10').css('width', '80%').css('height', 'auto');
                        $(this).find('.imgrectCaptionChild.ie-xs-9').css('width', '72%').css('height', 'auto');
                        $(this).find('.imgrectCaptionChild.ie-xs-8').css('width', '64%').css('height', 'auto');
                        $(this).find('.imgrectCaptionChild.ie-xs-7').css('width', '56%').css('height', 'auto');
                        $(this).find('.imgrectCaptionChild.ie-xs-6').css('width', '48%').css('height', 'auto');
                        $(this).find('.imgrectCaptionChild.ie-xs-5').css('width', '40%').css('height', 'auto');
                        $(this).find('.imgrectCaptionChild.ie-xs-4').css('width', '32%').css('height', 'auto');
                        $(this).find('.imgrectCaptionChild.ie-xs-3').css('width', '24%').css('height', 'auto');
                        $(this).find('.imgrectCaptionChild.ie-xs-2').css('width', '16%').css('height', 'auto');
                        $(this).find('.imgrectCaptionChild.ie-xs-1').css('width', '8%').css('height', 'auto'); 
                      
                      }
                      if ((widthCheck > 18 && widthCheck < 28) && (!$(this).find('.imgrectCaptionChild').hasClass('col-sm-alone'))) {
                        $(this).find('.imgrectCaptionChild.ie-sm-12').css('width', '99.9%').css('height', 'auto');
                        $(this).find('.imgrectCaptionChild.ie-sm-11').css('width', '88%').css('height', 'auto');
                        $(this).find('.imgrectCaptionChild.ie-sm-10').css('width', '80%').css('height', 'auto');
                        $(this).find('.imgrectCaptionChild.ie-sm-9').css('width', '72%').css('height', 'auto');
                        $(this).find('.imgrectCaptionChild.ie-sm-8').css('width', '64%').css('height', 'auto');
                        $(this).find('.imgrectCaptionChild.ie-sm-7').css('width', '56%').css('height', 'auto');
                        $(this).find('.imgrectCaptionChild.ie-sm-6').css('width', '48%').css('height', 'auto');
                        $(this).find('.imgrectCaptionChild.ie-sm-5').css('width', '40%').css('height', 'auto');
                        $(this).find('.imgrectCaptionChild.ie-sm-4').css('width', '32%').css('height', 'auto');
                        $(this).find('.imgrectCaptionChild.ie-sm-3').css('width', '24%').css('height', 'auto');
                        $(this).find('.imgrectCaptionChild.ie-sm-2').css('width', '16%').css('height', 'auto');
                        $(this).find('.imgrectCaptionChild.ie-sm-1').css('width', '8%').css('height', 'auto');
                      
                      }
                      if ((widthCheck > 28 && widthCheck < 38) && (!$(this).find('.imgrectCaptionChild').hasClass('col-md-alone'))) {
                        $(this).find('.imgrectCaptionChild.ie-md-12').css('width', '99.9%').css('height', 'auto');
                        $(this).find('.imgrectCaptionChild.ie-md-11').css('width', '88%').css('height', 'auto');
                        $(this).find('.imgrectCaptionChild.ie-md-10').css('width', '80%').css('height', 'auto');
                        $(this).find('.imgrectCaptionChild.ie-md-9').css('width', '72%').css('height', 'auto');
                        $(this).find('.imgrectCaptionChild.ie-md-8').css('width', '64%').css('height', 'auto');
                        $(this).find('.imgrectCaptionChild.ie-md-7').css('width', '56%').css('height', 'auto');
                        $(this).find('.imgrectCaptionChild.ie-md-6').css('width', '48%').css('height', 'auto');
                        $(this).find('.imgrectCaptionChild.ie-md-5').css('width', '40%').css('height', 'auto');
                        $(this).find('.imgrectCaptionChild.ie-md-4').css('width', '32%').css('height', 'auto');
                        $(this).find('.imgrectCaptionChild.ie-md-3').css('width', '24%').css('height', 'auto');
                        $(this).find('.imgrectCaptionChild.ie-md-2').css('width', '16%').css('height', 'auto');
                        $(this).find('.imgrectCaptionChild.ie-md-1').css('width', '8%').css('height', 'auto');
                      
                      }
                      if ((widthCheck > 36 && widthCheck < 42) && (!$(this).find('.imgrectCaptionChild').hasClass('col-lg-alone'))) {
                        $(this).find('.imgrectCaptionChild.ie-lg-12').css('width', '99.9%').css('height', 'auto');
                        $(this).find('.imgrectCaptionChild.ie-lg-11').css('width', '88%').css('height', 'auto');
                        $(this).find('.imgrectCaptionChild.ie-lg-10').css('width', '80%').css('height', 'auto');
                        $(this).find('.imgrectCaptionChild.ie-lg-9').css('width', '72%').css('height', 'auto');
                        $(this).find('.imgrectCaptionChild.ie-lg-8').css('width', '64%').css('height', 'auto');
                        $(this).find('.imgrectCaptionChild.ie-lg-7').css('width', '56%').css('height', 'auto');
                        $(this).find('.imgrectCaptionChild.ie-lg-6').css('width', '48%').css('height', 'auto');
                        $(this).find('.imgrectCaptionChild.ie-lg-5').css('width', '40%').css('height', 'auto');
                        $(this).find('.imgrectCaptionChild.ie-lg-4').css('width', '32%').css('height', 'auto');
                        $(this).find('.imgrectCaptionChild.ie-lg-3').css('width', '24%').css('height', 'auto');
                        $(this).find('.imgrectCaptionChild.ie-lg-2').css('width', '16%').css('height', 'auto');
                        $(this).find('.imgrectCaptionChild.ie-lg-1').css('width', '8%').css('height', 'auto');
                      
                      }













                      if ( ( (widthCheck > 6) && (widthCheck < 13) ) && ($(this).find('.imgrectCaptionChild').hasClass('col-xs-alone')) ) {

                        $(this).find('.imgrectCaptionChild.ie-xs-1').parent().css('width', '8%');
                        $(this).find('.imgrectCaptionChild.ie-xs-1').parent().css('width', '8%');
                        $(this).find('.imgrectCaptionChild.ie-xs-2').parent().css('width', '16%');
                        $(this).find('.imgrectCaptionChild.ie-xs-3').parent().css('width', '24%');
                        $(this).find('.imgrectCaptionChild.ie-xs-4').parent().css('width', '32%');
                        $(this).find('.imgrectCaptionChild.ie-xs-5').parent().css('width', '40%');
                        $(this).find('.imgrectCaptionChild.ie-xs-6').parent().css('width', '48%');
                        $(this).find('.imgrectCaptionChild.ie-xs-7').parent().css('width', '56%');
                        $(this).find('.imgrectCaptionChild.ie-xs-8').parent().css('width', '64%');
                        $(this).find('.imgrectCaptionChild.ie-xs-9').parent().css('width', '72%');
                        $(this).find('.imgrectCaptionChild.ie-xs-10').parent().css('width', '80%');
                        $(this).find('.imgrectCaptionChild.ie-xs-11').parent().css('width', '88%');
                        $(this).find('.imgrectCaptionChild.ie-xs-12').parent().css('width', '99.9%');
                        
                        $(this).find('.imgrectagain').find('img').css('width', '100%');
                        
                        
                      var containerWidth = $(this).find('.imgrectCaptionChild').width();

                      var neededHeight = imageRatio * containerWidth;

                  


                        $(this).find('.imgrectCaptionChild, .imgrectCaption, .imageCaptionRowAbove').css('height', neededHeight);
                      }

                      if ( ( (widthCheck > 13) && (widthCheck < 28) ) && ($(this).find('.imgrectCaptionChild').hasClass('col-sm-alone')) ) {

                        $(this).find('.imgrectCaptionChild.ie-sm-1').parent().css('width', '8%');
                        $(this).find('.imgrectCaptionChild.ie-sm-2').parent().css('width', '16%');
                        $(this).find('.imgrectCaptionChild.ie-sm-3').parent().css('width', '24%');
                        $(this).find('.imgrectCaptionChild.ie-sm-4').parent().css('width', '32%');
                        $(this).find('.imgrectCaptionChild.ie-sm-5').parent().css('width', '40%');
                        $(this).find('.imgrectCaptionChild.ie-sm-6').parent().css('width', '48%');
                        $(this).find('.imgrectCaptionChild.ie-sm-7').parent().css('width', '56%');
                        $(this).find('.imgrectCaptionChild.ie-sm-8').parent().css('width', '64%');
                        $(this).find('.imgrectCaptionChild.ie-sm-9').parent().css('width', '72%');
                        $(this).find('.imgrectCaptionChild.ie-sm-10').parent().css('width', '80%');
                        $(this).find('.imgrectCaptionChild.ie-sm-11').parent().css('width', '88%');
                        $(this).find('.imgrectCaptionChild.ie-sm-12').parent().css('width', '99.9%');
                        
                        $(this).find('.imgrectagain').find('img').css('width', '100%');
                        
                        
                      var containerWidth = $(this).find('.imgrectCaptionChild').width();

                      var neededHeight = imageRatio * containerWidth;

                
                        $(this).find('.imgrectCaptionChild, .imgrectCaption, .imageCaptionRowAbove').css('height', neededHeight);


                    }
                    if ( ( (widthCheck > 23) && (widthCheck < 38) ) && ($(this).find('.imgrectCaptionChild').hasClass('col-md-alone')) ) {

                      $(this).find('.imgrectCaptionChild.ie-md-1').parent().css('width', '8%');
                      $(this).find('.imgrectCaptionChild.ie-md-2').parent().css('width', '16%');
                      $(this).find('.imgrectCaptionChild.ie-md-3').parent().css('width', '24%');
                      $(this).find('.imgrectCaptionChild.ie-md-4').parent().css('width', '32%');
                      $(this).find('.imgrectCaptionChild.ie-md-5').parent().css('width', '40%');
                      $(this).find('.imgrectCaptionChild.ie-md-6').parent().css('width', '48%');
                      $(this).find('.imgrectCaptionChild.ie-md-7').parent().css('width', '56%');
                      $(this).find('.imgrectCaptionChild.ie-md-8').parent().css('width', '64%');
                      $(this).find('.imgrectCaptionChild.ie-md-9').parent().css('width', '72%');
                      $(this).find('.imgrectCaptionChild.ie-md-10').parent().css('width', '80%');
                      $(this).find('.imgrectCaptionChild.ie-md-11').parent().css('width', '88%');
                      $(this).find('.imgrectCaptionChild.ie-md-12').parent().css('width', '99.9%');
                      
                      $(this).find('.imgrectagain').find('img').css('width', '100%');
                      
                      
                      
                    var containerWidth = $(this).find('.imgrectCaptionChild').width();

                    var neededHeight = imageRatio * containerWidth;



                      $(this).find('.imgrectCaptionChild, .imgrectCaption, .imageCaptionRowAbove').css('height', neededHeight);


                  }
                  if ( ( (widthCheck > 31) && (widthCheck < 50) ) && ($(this).find('.imgrectCaptionChild').hasClass('col-lg-alone')) ) {

                    $(this).find('.imgrectCaptionChild.ie-lg-1').parent().css('width', '8%');
                    $(this).find('.imgrectCaptionChild.ie-lg-2').parent().css('width', '16%');
                    $(this).find('.imgrectCaptionChild.ie-lg-3').parent().css('width', '24%');
                    $(this).find('.imgrectCaptionChild.ie-lg-4').parent().css('width', '32%');
                    $(this).find('.imgrectCaptionChild.ie-lg-5').parent().css('width', '40%');
                    $(this).find('.imgrectCaptionChild.ie-lg-6').parent().css('width', '48%');
                    $(this).find('.imgrectCaptionChild.ie-lg-7').parent().css('width', '56%');
                    $(this).find('.imgrectCaptionChild.ie-lg-8').parent().css('width', '64%');
                    $(this).find('.imgrectCaptionChild.ie-lg-9').parent().css('width', '72%');
                    $(this).find('.imgrectCaptionChild.ie-lg-10').parent().css('width', '80%');
                    $(this).find('.imgrectCaptionChild.ie-lg-11').parent().css('width', '88%');
                    $(this).find('.imgrectCaptionChild.ie-lg-12').parent().css('width', '99.9%');
                    
                    $(this).find('.imgrectagain').find('img').css('width', '100%');
                    
                    
                    
                  var containerWidth = $(this).find('.imgrectCaptionChild').width();

                  var neededHeight = imageRatio * containerWidth;

               


                    $(this).find('.imgrectCaptionChild, .imgrectCaption, .imageCaptionRowAbove').css('height', neededHeight);


                }
                
                $(this).find('.imageCaptionTBODY .imageCaptionRowAbove, .imgrectCaptionChild').height($(this).find('.imgrectCaptionChild>img'));
                
                    });
                  });
                  onWidthChangeCaptions();
    
    
    
    
                  var onWidthChange13 = _.once(function() {
                    
                  var rowNumTrue = rowNum+1;
    
                  for (var i = 0; i < rowNumTrue; i++) {
                    var onWidthChange14 = _.once(function() {
                      (function(ct){
                        var onWidthChange15 = _.once(function() {
                          var linkz = ".lineBreakSection-" + ct;
                          var imgrectCheck = 'lineBreakSectionContainingOnlyIMGRECT-'+ct;
                          var imgrectCheckForClass = '.lineBreakSectionContainingOnlyIMGRECT-'+ct;
                          $( linkz ).each(function(){
                            
                            $( this ).has('.imgrect').addClass( imgrectCheck );
                              var onWidthChange16 = _.once(function() {
                                  var flag = true;
    
  
                                  $(linkz).each(function(){
                                        if(!$(this).hasClass(imgrectCheck)) {
                                          flag = false;
                                        };
                                  });
                                    var onWidthChange17 = _.once(function() {
                                      $(imgrectCheckForClass).find('.imgrect>img').each(function(){
    
                                          srcOkay = $(this).prop('src');
    
                                          currentWidth = $( this ).closest('.imgrect').width();
                                          var onWidthChange18 = _.once(function() {
                                                $.imgUtil.calcNaturalWH(srcOkay).done(function(wh){
                                                  var onWidthChange19 = _.once(function() {
                                                      var imgrectHeightOverWidth = wh.height/wh.width;
                                                      var correctIMGRECTheight = imgrectHeightOverWidth*currentWidth;
          
                                                      if (flag) {
                                                        $( imgrectCheckForClass ).css('height', correctIMGRECTheight);
                                                        $( imgrectCheckForClass ).find('.imgrect').css('height', correctIMGRECTheight);
          
                                                      } else {
                                                        
                                                      };
                                                  });
                                                  onWidthChange19();
                                                });
                                          });
                                          onWidthChange18();
                                      });
                                    });
                                    onWidthChange17();
                                  });
                                  onWidthChange16();
                            });
    
                          });
                          onWidthChange15();
    
                      })(i);
                    });
                    onWidthChange14();
                  };
                  
                });
                onWidthChange13();

                


                
                });
                onWidthChange7();
  
                setInterval(function(){
                  var onWidthChangeLast = _.once(function() {
                    $("img.afterIMGRECTonly").height( 0 );
                    $("img.afterIMGRECTonly").each(function(){
                      $(this).height( $(document).height() - $( this ).offset().top + $( this ).outerHeight());
                    });

                  });
                  onWidthChangeLast();
                }, 100);



                  
                });
  

                  onWidthChange();
    
    setInterval(function(){
                      var onWidthChange1 = _.once(function() {

        $('.noIMGUTIL').remove();
        $('.imgrect>img').remove();
        $('.imgrectagain>img').remove();

        $( '.imgrect, .imgrectagain' ).css( "position", "relative" );
        $( '.imgrect, .imgrectagain' ).css( "overflow", "visible" );
        
        $imgrectEls.refreshImgContainRect();
  
        $( '.imgrect>img, .imgrectagain>img' ).css( "position", "static" );
        $( '.imgrect>img, .imgrectagain>img' ).css( "display", "block" );
        $( '.imgrect>img, .imgrectagain>img' ).css( "position", "absolute" );

      });

      onWidthChange1();

                var onWidthChangeBefore2 = _.once(function() {

                  $('img').each(function(){
                      $(this).ifixpng();
                  });
                  $('.imgrectagain>img').css('top', 'auto').css('bottom', '0').css('position', 'absolute');
                });

                onWidthChangeBefore2();
                

    }, 100);


          var myDebouncedFunction = _.debounce( function(event) {



                onWidthChange();



          }, 5717);



  
  });