//
//  TiUIImageViewEx.h
//  imageview_ex
//
//  Created by Paul Mietz Egli on 9/26/11.
//  Copyright (c) 2011 __MyCompanyName__. All rights reserved.
//

#define USE_TI_UIIMAGEVIEW

#import <UIKit/UIKit.h>
#import "TiUIImageView.h"

@interface ComObscureImageview_exImageView : TiUIImageView {
@private
    UIViewContentMode contentMode;
    bool clipsToBounds;
}

@end
