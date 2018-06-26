/* ======= ViewModel ====== */
var catModel = function(){
  var self = this;
  //Example of how to declare observableArray
  this.cats = ko.observableArray([
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
//Example of how to access observableArray
  this.currentCat = ko.observable(self.cats()[0]);
  this.currentCount = ko.observable(self.currentCat().clickCount);


  this.showCat = function(indexValue){
    self.currentCat(self.cats()[indexValue]);
    self.incrementCounter();
  };

  this.incrementCounter = function(){
    self.currentCat().clickCount++;
  };
  //Example of how to use Computed observables
  self.disclaimer = ko.computed(function(){
    this.count = self.currentCat().clickCount;
    if(this.count < 5){
        return 'Baby Cat';
    }else if (this.count < 10) {
      return 'Teen Cat';
    } else if (this.count < 15) {
      return 'Adult Cat';
    } else {
      return 'Old Cat';
    }
  });
};

ko.applyBindings(new catModel());
