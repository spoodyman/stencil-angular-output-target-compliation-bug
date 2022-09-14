import { Component, Prop, h, EventEmitter, Event } from '@stencil/core';
import { TTestTypeWithError } from '../../types/test-with-error';
import { TTestTypeWithoutError } from '../../types/test-without-error';
import { format } from '../../utils/utils';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true,
})
export class MyComponent {
  /**
   * The first name
   */
  @Prop() first: string;

  /**
   * The middle name
   */
  @Prop() middle: string;

  /**
   * The last name
   */
  @Prop() last: string;

  @Prop() testProp: TTestTypeWithoutError;

  @Event() testEvent: EventEmitter<TTestTypeWithError>

  private getText(): string {
    return format(this.first, this.middle, this.last);
  }

  render() {
    return <div>Hello, World! I'm {this.getText()}</div>;
  }
}
