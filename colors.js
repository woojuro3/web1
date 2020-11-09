

    var Links = {
      setColor:function(color){
        $('a').css('color', color);
      }
    }
    var Body = {
      setColor:function (color){
        //document.querySelector('body').style.color = color;
        $('body').css('color', color);
      },
      setBackgroundColor:function (color){
        //document.querySelector('body').style.background = color;
        $('body').css('backgroundColor', color);
      }
    }

    function NightDayHandler(self){
      var target = document.querySelector('body');
      if(self.value === 'night'){
      Body.setColor('white');
      Body.setBackgroundColor('black');
      self.value = 'day';
      Links.setColor('white');
      }
      else{
      Body.setColor('black');
      Body.setBackgroundColor('white');
      self.value = 'night';
      Links.setColor('black');
      }
    }
