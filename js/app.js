/* ======= Model ====== */
//Put your data here in JSON Format, I used a name, image, and a variable to store the clicks.
var model = {
    currentCat: null,
    cats: [
      {
        name: 'Eddie',
        image: 'cat1.jpg',
        clickCount : 0
      }, {
        name: 'Raven',
        image: 'cat2.jpg',
        clickCount : 0
      }, {
        name: 'Violet',
        image: 'cat3.jpg',
        clickCount : 0
      }, {
        name: 'Ronron',
        image: 'cat4.jpg',
        clickCount : 0
      }, {
        name: 'Sally',
        image: 'cat5.jpg',
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
    this.image.attr('src','img/' + currentCat.image) ;
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

      $(elem).on('click', function() {
        controller.incrementCounter();
      });

      elem.textContent = cat.name;
//Here I used a IFFE (Immediately-invoked function expression ) to avoid replacing the counter at the end of the loop.
      $(elem).on('click', (function(catCopy) {
        return function() {
          controller.setCurrentCat(catCopy);
          ViewDisplay.render();

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
    this.render();
  },

  render: function(){
    var panel = this.panel;
    this.activator.on('click', function(){
      panel.toggle('slow');
    });
  }
};

controller.init();
