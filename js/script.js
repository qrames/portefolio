$(document).ready(function() {
    //cleanArray removes all duplicated elements
    function cleanArray(array) {
      var i, j, len = array.length, out = [], obj = {};
      for (i = 0; i < len; i++) {
        obj[array[i]] = 0;
      }
      for (j in obj) {
        out.push(j);
      }
      // return out;
      // out integer :
      outInt = []
      for (n of out){
        outInt.push(parseInt(n));
      }

      return outInt;
    }

    // $('nav a').click(function(event) {
    //     $('footer li').removeClass('uk-active');
    //     $('footer li').children('[href="' + $(this).attr("href") +'"]').parent('li').addClass('uk-active');
    // });
    // $('footer li').click(function(event) {
    //     var id = $(this).children('a').attr('href');
    //     id = id.slice(1, id.length);
    //     $('footer li').removeClass('uk-active');
    //     $(this).addClass('uk-active');
    // });
    var scrollPointId = {};
    var scrollPoint = [];

    $('a').each(function(index, el) {
        if( $(this).attr("href")[0] == '#' && $(this).attr("href").length > 1){
            var id =  $(this).attr("href");
            id = id.slice(1, id.length);
            scrollPointId[Math.round($($(this).attr("href")).offset().top)] = id;
            scrollPoint.push(Math.round($($(this).attr("href")).offset().top));
        }

    });
    scrollPoint = cleanArray(scrollPoint);
    scrollPoint.push($(document).height());//i+1 beg
    console.log(scrollPoint);
    console.log(scrollPointId);
    var viewElement = "";
    $(window).scroll(function(event) {
        for(var i = 0; i < scrollPoint.length -1; i ++){
            var topGap = 30;//px
            if (window.pageYOffset >= scrollPoint[i] - topGap
            && window.pageYOffset < scrollPoint[i]+(scrollPoint[i+1] -scrollPoint[i])/3){
                if (viewElement != scrollPointId[scrollPoint[i]]) {
                    viewElement = scrollPointId[scrollPoint[i]];
                    console.log(i , viewElement, scrollPoint[i], 'to:', scrollPoint[i+1]);
                    // console.log(window.pageYOffset);
                    // console.log(scrollPoint[i] - topGap);
                    // console.log(scrollPoint[i]+(scrollPoint[i+1] -scrollPoint[i])/3);
                    $('footer li').removeClass('uk-active');
                    $('footer li a[href="#'+viewElement+'"]').parent('li').addClass('uk-active');
                }
            }
        }
    });
});
