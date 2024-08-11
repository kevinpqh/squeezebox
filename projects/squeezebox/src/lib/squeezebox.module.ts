import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {SqueezeBox} from './squeezebox';
import {SBItem} from './sb-item';
import {SBItemHead} from './sb-item-head';
import {SBItemBody} from './sb-item-body';

export const SQUEEZEBOX_COMPONENTS = [SqueezeBox, SBItem, SBItemHead, SBItemBody];

@NgModule({
    imports: [CommonModule],
    declarations: [SQUEEZEBOX_COMPONENTS],
    exports: [SQUEEZEBOX_COMPONENTS]
})
export class SqueezeBoxModule {}


