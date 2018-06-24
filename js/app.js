/* ======= ViewModel ====== */
var catModel = function(){
  var self = this;
  self.cats = ko.observableArray([
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
  ]);

  self.currentCat = ko.observable(self.cats()[0]);
  self.currentCount = ko.observable(self.currentCat().clickCount);


  self.showCat = function(indexValue){
    self.currentCat(self.cats()[indexValue]);
    self.incrementCounter();
  };

  self.incrementCounter = function(){
    var cat = self.currentCat();
    cat.clickCount++;
    var count = cat.clickCount;
    self.currentCount(count);
  };
};

ko.applyBindings(new catModel());
