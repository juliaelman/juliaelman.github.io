'use strict';

var navMenu = navMenu || {};

navMenu = function () {

  this.init = function () {
    
    $('html').addClass('menu_mobile');
    
    $('.menu-btn').on('click', function () {
      $('body').hasClass('menu--active') ? app.hide() : app.show();
    })
    
    $(window).on('resize', function () {
      
      var win = $(this);
      
      if (win.width() >= 1024 && $('body').hasClass('menu--active')) {
        
        app.hide();
        
      }
    });
  }
  this.hide = function () {
    
    $('nav').velocity({
      translateX: '0%'
    }, {
      duration: 100,
      easing: 'spring'
    }).velocity({
      display: 'block',
      duration: 100
    }), $('body').removeClass('menu--active');
    
    $('#overlay').velocity({
      opacity: 0,
      translateX: '0%',
      easing: 'spring'
    }, 100 );
  }
  this.show = function () {
    $('nav').velocity({
      opacity: 1
    }, {
      display: 'block',
      duration: 100
    }).velocity({
      translateX: '-108%'
    }, {
      duration: 600,
      easing: 'spring'
    }), $('body').addClass('menu--active');
    
    $('#overlay').velocity({
      opacity: 1,
      backgroundColor: '#01AD99',
      translateX: '-100%',
      easing: 'spring'
    }, 100);
  }

  this.init();
  
};

var app = new navMenu();
