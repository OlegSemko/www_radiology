jQuery('document').ready(function(){
    //jQuery('body').append('<a href="#">new link</a>');
    //jQuery('.fierst').remove();
    
    //var name_var;

    //name_var=jQuery('table').clone();
    //jQuery('body').append(name_var);

    jQuery('button').on('click', function(){
        var age, width_kidney, height_kidney, width_chms, height_chms, height_pelv, s_kidn, s_chms, rki;
        age=jQuery('#age').val();
        age=parseFloat(age);
        width_kidney=jQuery('#width_kidney').val();
        width_kidney=parseFloat(width_kidney);
        height_kidney=jQuery('#height_kidney').val();
        height_kidney=parseFloat(height_kidney);
        width_chms=jQuery('#width_chms').val();
        width_chms=parseFloat(width_chms);
        height_chms=jQuery('#height_chms').val();
        height_chms=parseFloat(height_chms);
        height_pelv=jQuery('#height_pelv').val();
        height_pelv=parseFloat(height_pelv);
        s_kidn=0.785*height_kidney*width_kidney;
        s_chms=(width_chms*height_chms*height_pelv)/(0.5*(width_chms+height_chms));
        rki=s_chms/s_kidn;
        jQuery('body').append('<p>Площа нирки - ' + s_kidn.toFixed(2) + 'см<sup>2</sup></p>' + 
            '<p>Площа ЧМС - ' + s_chms.toFixed(2) + 'см<sup>2</sup></p>' +
            '<p>RKI - ' + rki.toFixed(2) + '</p><hr>');
        function inrange(x, min, max) {
            return x >= min && x <= max;
          }
          
          if (inrange(age, 0, 4) && s_kidn<21.4 ||
            inrange(age, 4, 8) && s_kidn<25.5 ||
            inrange(age, 8, 11) && s_kidn<31.7 ||
            inrange(age, 11, 14) && s_kidn<34.3 ||
            inrange(age, 14, 18) && s_kidn<38.8)
          
            
            {
                jQuery('body').append('<p>Нирка зменшена</p><hr>');    
            }
            
            if (inrange(age, 0, 4) && s_kidn>31.6 ||
            inrange(age, 4, 8) && s_kidn>40.5 ||
            inrange(age, 8, 11) && s_kidn>47.1 ||
            inrange(age, 11, 14) && s_kidn>58.6 ||
            inrange(age, 14, 18) && s_kidn>64.61)
          
            
            {
                jQuery('body').append('<p>Нирка розширена</p><hr>');    
            }
            if (inrange(age, 0, 3) && s_chms>2 ||
            inrange(age, 3, 5) && s_chms>3.5 ||
            inrange(age, 5, 8) && s_chms>4 ||
            inrange(age, 8, 11) && s_chms>4.5 ||
            inrange(age, 11, 16) && s_chms>6)
          
            
            {
                jQuery('body').append('<p>Пієлоектазія</p><hr>');    
            }
                  
    });
});