//
//  TiUIImageViewEx.m
//  imageview_ex
//
//  Created by Paul Mietz Egli on 9/26/11.
//  Copyright (c) 2011 __MyCompanyName__. All rights reserved.
//

/**
 * Appcelerator Titanium Mobile
 * Copyright (c) 2009-2010 by Appcelerator, Inc. All Rights Reserved.
 * Licensed under the terms of the Apache Public License
 * Please see the LICENSE included with this distribution for details.
 */


#import "ComObscureImageview_exImageView.h"

@implementation ComObscureImageview_exImageView

-(void)setContentMode_:(id)mode
{
    NSString * modestr = [TiUtils stringValue:mode];
    if ([@"aspectfit" isEqualToString:modestr]) {
        contentMode = UIViewContentModeScaleAspectFit;
    }
    else if ([@"aspectfill" isEqualToString:modestr]) {
        contentMode = UIViewContentModeScaleAspectFill;
    }
    else if ([@"center" isEqualToString:modestr]) {
        contentMode = UIViewContentModeCenter;
    }
    else {
        contentMode = UIViewContentModeScaleAspectFit;
    }
}

-(void)setClipsToBounds_:(id)clips {
    clipsToBounds = [TiUtils boolValue:clips def:NO];
}

-(UIImageView *)imageView {
    UIImageView * result = [super imageView];
    result.contentMode = contentMode;
    result.clipsToBounds = clipsToBounds;
    return result;
}

-(void)setURLImageOnUIThread:(UIImage*)image {
    [super setURLImageOnUIThread:image];
    [self imageView].contentMode = contentMode;
}

@end
