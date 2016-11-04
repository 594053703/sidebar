/**
 * Created by bin on 2016/10/19.
 */
define(['jquery'],function($){
    function ScrollTo(opts){
        this.opts=$.extend({},ScrollTo.defaults,opts);
        this.$el=$('html,body');
    }
    ScrollTo.prototype.move=function(){
        var opts=this.opts;
        if($(window).scrollTop()!=opts.point){
            if(!this.$el.is(':animated')){
                this.$el.animate({
                    scrollTop:opts.point
                },opts.speed);
            }
        }
    }

    ScrollTo.prototype.go=function(){
        this.$el.scrollTop(this.opts.point);
    }
    ScrollTo.defaults={
        point:0,
        speed:800
    };
    return {
        ScrollTo:ScrollTo
    };
});
