/* ======= Model ====== */

var model = {
    currentCat: null,
    cats: [
      {
        name: 'Eddie',
        image: 'cat1.jpg'
      }, {
        name: 'Raven',
        image: 'cat2.jpg'
      }, {
        name: 'Violet',
        image: 'cat3.jpg'
      }, {
        name: 'Ronron',
        image: 'cat4.jpg'
      }, {
        name: 'Sally',
        image: 'cat5.jpg'
      }
    ]
};

/* ======= Controller ====== */

var controller = {
    init: function(){
      model.currentCat = model.cats[0];
    },

    getCurrentCat: function(){
      return model.currentCat;
    },

    getCats: function(){
      return model.cats;
    }

    setCurrentCat: function(cat){
      model.currentCat = cat;
    },

    incrementCounter: function(){
      model.currentCat.clickCount++;
      catView.render();
    }
};


/* ======= View ====== */

var ViewDisplay = {
  init: function(){
    this.name = $('.display-name');
    this.image = $('.image-cat');
    this.count = $('.display-count');

    this.image.on('click', function(e) {
      controller.incrementCounter();
    });

    this.render();
  },

  render: function(){
    var currentCat = controller.getCurrentCat();
    this.name.text(currentCat.name);
    this.image.attr('src') = currentCat.image;
  }

};


viewList = {
  init: function(){
    this.catlist = $('#catslist');
    this.render();
  },

  render: function(){
    var cats = controller.getCats();

    this.catlist.empty();
  }
};







$(document).ready(function () {

  for (var i = 0; i < cats.length; i++) {
    var name = cats[i].name;
    var image = cats[i].image;
    var count = 0;

    var elem = document.createElement("li");
    $(elem).addClass('list-group-item');

    var t = document.createTextNode(name);
    elem.appendChild(t);

    elem.addEventListener('click', (function (nameCopy, imageCopy, countCopy) {
      return function () {
        countCopy++;
        $(".display").text(nameCopy);
        $(".image-cat").attr("src", "img/" + imageCopy);
        $(".display-count").text(countCopy);
      };
    })(name, image, count));

    $('#catslist').append(elem);
  }
});
