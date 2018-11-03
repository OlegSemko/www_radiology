jQuery('document').ready(function(){
    jQuery('nav').append('<a href="#">new link</a>');
    jQuery('.fierst').remove();
    
    var name_var;

    name_var=jQuery('nav').clone();
    jQuery('body').append(name_var);

    jQuery('button').on('click', function(){
        var value1, value2;
        value1=jQuery('#val1').val();
        value2=jQuery('#val2').val();
        value1=parseInt(value1);
        value2=parseInt(value2);
        document.write(value1);

    });
});