import { Component, ComponentInterface, Host, h } from '@stencil/core';

@Component({
  tag: 'hallo-welt',
  shadow: true,
})
export class HalloWelt implements ComponentInterface {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
