/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
 /* tslint:disable */

import * as import0 from './ng_style';
import * as import1 from '@angular/core/src/change_detection/change_detection';
import * as import2 from '@angular/core/src/linker/view_utils';
import * as import3 from '@angular/core/src/linker/view';
export class Wrapper_NgStyle {
  context:import0.NgStyle;
  changed:boolean;
  /*private*/ _expr_0:any;
  constructor(p0:any,p1:any,p2:any) {
    this.changed = false;
    this.context = new import0.NgStyle(p0,p1,p2);
    this._expr_0 = import1.UNINITIALIZED;
  }
  check_ngStyle(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import2.checkBinding(throwOnChange,this._expr_0,currValue))) {
      this.changed = true;
      this.context.ngStyle = currValue;
      this._expr_0 = currValue;
    }
  }
  detectChangesInInputProps(view:import3.AppView<any>,el:any,throwOnChange:boolean):boolean {
    var changed:any = this.changed;
    this.changed = false;
    if (!throwOnChange) { this.context.ngDoCheck(); }
    return changed;
  }
  detectChangesInHostProps(view:import3.AppView<any>,el:any,throwOnChange:boolean):void {
  }
}