/* ======= ViewModel ====== */
var CatModelmodel = function(cats){
  this.currentCat = ko.obvervablearray;
  this.cats = 


    currentCat: null,
    cats: [
      {
        name: 'Eddie',
        image: 'img/cat1.jpg',
        clickCount : 0
      }, {
        name: 'Raven',
        image: 'img/cat2.jpg',
        clickCount : 0
      }, {
        name: 'Violet',
        image: 'img/cat3.jpg',
        clickCount : 0
      }, {
        name: 'Ronron',
        image: 'img/cat4.jpg',
        clickCount : 0
      }, {
        name: 'Sally',
        image: 'img/cat5.jpg',
        clickCount : 0
      }
    ]
};

/* ======= Controller ====== */

var controller = {
    init: function(){
      model.currentCat = model.cats[0];

      viewList.init();
      ViewDisplay.init();
      adminPanel.init();
      adminInput.init();

    },

    getCurrentCat: function(){
      return model.currentCat;
    },

    getCats: function(){
      return model.cats;
    },

    setCurrentCat: function(cat){
      model.currentCat = cat;

    },

    incrementCounter: function(){
      model.currentCat.clickCount++;
      ViewDisplay.render();
      adminInput.render();
    }
};


/* ======= View ====== */

var ViewDisplay = {
  init: function(){
    this.name = $('.display-name');
    this.image = $('.image-cat');
    this.count = $('.display-count');

    this.image.on('click', function() {
      controller.incrementCounter();
    });

    this.render();
  },

  render: function(){
    var currentCat = controller.getCurrentCat();
    this.name.text(currentCat.name);
    this.image.attr('src', currentCat.image) ;
    this.count.text(currentCat.clickCount);
  }

};


var viewList = {
  init: function(){
    this.catlist = $('#catslist');
    this.render();
  },

  render: function(){
    var cats = controller.getCats();
    this.catlist.empty();


    for (var i = 0; i < cats.length; i++){
      var cat = cats[i];

      var elem = document.createElement("li");
      $(elem).addClass('list-group-item');

      elem.textContent = cat.name;
//Here I used a IFFE (Immediately-invoked function expression ) to avoid replacing the counter at the end of the loop.
      $(elem).on('click', (function(catCopy) {
        return function() {
          controller.setCurrentCat(catCopy);
          controller.incrementCounter();
        };
      })(cat));
      this.catlist.append(elem);



    };

  }
};


var adminPanel = {
  init: function(){
    this.activator = $('#admin-button');
    this.panel = $('#admin-control');
    this.panel.toggle(0);

    this.render();
  },

  render: function(){
    var panel = this.panel;

    this.activator.on('click', function(){
      panel.toggle('slow');
    });
  }
};


var adminInput = {
  init: function(){

    this.nameadmin = $('#admin-cat-name');
    this.imageadmin = $('#admin-cat-image');
    this.numberadmin = $('#admin-cat-number');


    this.submitBtn =  $('#admin-submit');
    this.cancelBtn =  $('#admin-cancel');

    this.cancelBtn.on('click',function(){
      adminPanel.panel.toggle('slow');
    });
    this.render();
  },

  render: function(){
    var currentCat = null;
    var currentCat = controller.getCurrentCat();

     this.nameadmin.val(currentCat.name);
     this.imageadmin.val(currentCat.image);
     this.numberadmin.val(currentCat.clickCount);

     this.submitBtn.on('click',function(){
       var currentCat = null;
       var currentCat = controller.getCurrentCat();

      currentCat.name = adminInput.nameadmin.val();
      currentCat.image = adminInput.imageadmin.val();
      currentCat.clickCount= adminInput.numberadmin.val();
      viewList.render();
      ViewDisplay.render();
      adminPanel.panel.hide();
    });
  }

};

controller.init();
