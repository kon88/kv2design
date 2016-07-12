(function ($) {
   function injector(t, splitter, klass, after) {
      var text = t.text()
         , a = text.split(splitter)
         , inject = '';
      if (a.length) {
         $(a).each(function (i, item) {
            inject += '<span class="' + klass + (i + 1) + '" aria-hidden="true">' + item + '</span>' + after;
         });
         t.attr('aria-label', text)
            .empty()
            .append(inject)
      }
   }

   var methods = {
      init: function () {

         return this.each(function () {
            injector($(this), '', 'char', '');
         });
      },

      words: function () {

         return this.each(function () {
            injector($(this), ' ', 'word', ' ');
         });
      },

      lines: function () {

         return this.each(function () {
            var r = "eefec303079ad17405c889e092e105b0";
            // Because it's hard to split a <br/> tag consistently across browsers,
            // (*ahem* IE *ahem*), we replace all <br/> instances with an md5 hash
            // (of the word "split").  If you're trying to use this plugin on that
            // md5 hash string, it will fail because you're being ridiculous.
            injector($(this).children("br").replaceWith(r).end(), r, 'line', '');
         });
      }
   };

   $.fn.lettering = function (method) {
      // Method calling logic
      if (method && methods[method]) {
         return methods[method].apply(this, [].slice.call(arguments, 1));
      } else if (method === 'letters' || !method) {
         return methods.init.apply(this, [].slice.call(arguments, 0)); // always pass an array
      }
      $.error('Method ' + method + ' does not exist on jQuery.lettering');
      return this;
   };
})(jQuery);

/*****************Animation Sequence*****************************/

var controller = new ScrollMagic.Controller();

var h31 = $('#first .inner h3');
var anchor1 = $('#first .inner a');

$('#first h1').lettering();

CSSPlugin.defaultForce3D = false; 

var tl = new TimelineMax({delay: .5});
   tl.staggerFromTo('#first [class^="char"]', .25, {autoAlpha:0, scale:4,}, {autoAlpha:1, scale:1},.10).
   staggerFromTo(h31, 1, {autoAlpha:0}, {autoAlpha:1},{ease: Back.easeOut}, '+=.1').
   from(anchor1, .3, {autoAlpha: 0, y: 25},"-=.7");

var scene = new ScrollMagic.Scene({
      triggerElement: "#first", offset:0
}).setTween(tl).addTo(controller);

var tween1 = new TimelineMax;

tween1.call(function(){
      vel1();
});

var scene1 = new ScrollMagic.Scene({
      triggerElement: "#one", offset: 0
}).setTween(tween1).addTo(controller);
 
var vel1 = function(){
      $('#vel01').velocity("transition.bounceIn");
      $('#vel02').velocity("transition.flipYIn", {delay: 300});
      $('#vel03').velocity("callout.pulse", {delay: 700});
};

$('#two h2').lettering("words");

var tl2 = new TimelineMax();
tl2.staggerFromTo('#two [class^="word"]', 1.2, {autoAlpha:0, scale:.75}, {autoAlpha:1, scale:1}, .12);

var scene2 = new ScrollMagic.Scene({
      triggerElement: "#two", offset: 0
}).setTween(tl2).addTo(controller);

var tween2 = new TimelineMax;

tween2.call(function(){
      vel2();
});

var vel2 = function(){
      $('#html5icon').velocity("transition.shrinkIn");
      $('#css3icon').velocity("callout.pulse", {delay: 500});
      $('#jsicon').velocity("transition.flipXIn", {delay: 1000});
      $('#ghicon').velocity("transition.flipYIn", {delay: 1500});
};

var scene3 = new ScrollMagic.Scene({
      triggerElement: ".bg-dark", offset: 100
}).setTween(tween2).addTo(controller);

var tl3 = new TimelineMax();

tl3.staggerFrom("footer li", 2, {autoAlpha:0, x:-200}, .25);

var scene4 = new ScrollMagic.Scene({
      triggerElement: "footer", offset:-600
}).setTween(tl3).addTo(controller);
