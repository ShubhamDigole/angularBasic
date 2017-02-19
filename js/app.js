(function(){
var app = angular.module('store',[]);
 
 app.controller('StoreController', function(){

 this.products = gems;
 
 });
 var gems = [ {
name: 'Dodecahedron',
price: 2,
description: 'this is amazing and googd looking product we sure that you will like that product and purchase tha product so be the first one getting this product',
soldOut:true,
images: [
{full: 'img/gem-01.gif',

}],


}

,{
name: "Pentagonal Gem",
price: 5.95,
description: "this is amazing and googd looking product we sure that you will like that product and purchase tha product so be the first one getting this product",
soldOut:true,
images: [
{
                      
full: 'img/gem-07.gif',
},
{
                      
full: 'img/gem-09gif',
}
],


} ];

app.controller("PanelController", function(){
      
      this.tab = 1 ;

      this.selectTab= function(setTab){

      	this.tab = setTab;
      };

      this.isSelected = function(checkTab){

      	return this.tab === checkTab; 
      
      };
});
})();

