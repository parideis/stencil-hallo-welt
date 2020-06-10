import { Component, ComponentInterface, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'hallo-welt',
  shadow: true,
})
export class HalloWelt implements ComponentInterface {

  @Prop() name: string;
  
  render() {
    return (
      <Host>
        <slot></slot>
        <p>Hallo {this.name}</p>
      </Host>
    );
  }

}
