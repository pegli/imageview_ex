# imageview_ex Module

## Description

This module extends the default Titanium image view for iOS to add support
for different content modes and bounds clipping.  Other features may be added
in the future.

## Accessing the imageview_ex Module

To access this module from JavaScript, you would do the following:

	var imageview_ex = require("com.obscure.imageview_ex");

The imageview_ex variable is a reference to the Module object.	

## Reference

### ___PROJECTNAMEASIDENTIFIER__.createImageView

Create and return an instance of ComObscureImageview_exImageView.  Supports
all of the properties of Ti.UI.ImageView, including the properties detailed
below.

### ___PROJECTNAMEASIDENTIFIER__.contentMode

String representing the image scaling and fill mode.  Must be one of
'aspectfit', 'aspectfill', or 'center'.

NOTE: when using 'aspectfill', also add 'hires: true' to the properties object
passed to createImageView.  Ti.UI.ImageView automatically scales images to fit
the view bounds, which means that an aspect filled image will be scaled down, then
back up.  Adding the 'hires' property instructs Ti.UI.ImageView to scale to 2x
of the view bounds, which is usually large enough to avoid an upscaling step.

### ___PROJECTNAMEASIDENTIFIER__.clipsToBounds

Boolean.  If set to true, the loaded image will be clipped to the bounds of
the view.  If false, the image extends beyond the view depending on the 
value of contentMode.


## Usage

  var imageview_ex = require('com.obscure.imageview_ex');
  var imageView = imageview_ex.createImageView({
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
  window.add(imageView);
  

## Author

Paul Mietz Egli
https://github.com/pegli

## License

Released under the Apache license.  See the LICENSE file for details.
