import { Component, Prop, h, EventEmitter, Event } from '@stencil/core';
import { format } from '../../utils/utils';

export type TTestTypeWithError = 'primary' | 'secondary'
export type TTestTypeWithoutError = 'primary' | 'secondary'

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
