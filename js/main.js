/**
 * Created by bin on 2016/10/19.
 */
requirejs.config({
    paths:{
        jquery:'jquery-1.8.2.min'
    }
});
requirejs(['jquery','backtop'],function($,backtop){
    /*new backtop.BackTop($('#backTop'),{
        mode:'move',
        
    });*/
    $('#backTop').backtop({
        mode:'move'
    });

});