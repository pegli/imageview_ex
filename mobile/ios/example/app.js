// This is a test harness for your module
// You should do something interesting in this harness 
// to test out the module and to provide instructions 
// to users on how to use it by example.


// open a single window
var window = Ti.UI.createWindow({
	backgroundColor:'white',
	layout: 'vertical',
});

// TODO: write your module tests here
var imageview_ex = require('com.obscure.imageview_ex');
Ti.API.info("module is => " + imageview_ex);

window.add(Ti.UI.createLabel({
  height: 20,
  width: 'auto',
  text: "aspect fill"
}));

var imageView1 = imageview_ex.createImageView({
  top: 20,
  left: 20,
  height: 80,
  width: 80,
  contentMode: 'aspectfill',
  borderWidth: 1,
  borderColor: 'red',
  hires: true,
  image: 'http://images2.wikia.nocookie.net/__cb20090714124530/firefly/images/1/11/Firefly_class_ship.jpg'
});
window.add(imageView1);

window.add(Ti.UI.createLabel({
  height: 20,
  width: 'auto',
  text: "aspect fit",
}));

var imageView2 = imageview_ex.createImageView({
  top: 20,
  left: 20,
  height: 80,
  width: 80,
  contentMode: 'aspectfit',
  borderWidth: 1,
  borderColor: 'red',
  image: 'http://images2.wikia.nocookie.net/__cb20090714124530/firefly/images/1/11/Firefly_class_ship.jpg'
});
window.add(imageView2);

window.add(Ti.UI.createLabel({
  height: 20,
  width: 'auto',
  text: "aspect fill with clipping",
}));

var imageView3 = imageview_ex.createImageView({
  top: 20,
  left: 20,
  height: 80,
  width: 80,
  hires: true,
  contentMode: 'aspectfill',
  clipsToBounds: true,
  borderWidth: 1,
  borderColor: 'red',
  image: 'http://images2.wikia.nocookie.net/__cb20090714124530/firefly/images/1/11/Firefly_class_ship.jpg'
});
window.add(imageView3);

window.open();
