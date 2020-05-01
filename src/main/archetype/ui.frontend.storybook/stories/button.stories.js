import { aemMetadata } from '@storybook/aem';
import { withXD } from 'storybook-addon-xd-designs'
import { StyleSystem } from 'storybook-aem-style-system';
import buttonMarkup from './button.html';
import buttonOutlineMarkup from './button.html';

export default {
  title: 'Button',
  decorators: [
    withXD
    // withKnobs,
  ],
  parameters: {
    aemStyleSystem: {
      policy: '/conf/bas/settings/wcm/policies/bas/components/button.infinity.json'
    }
  }
};

export const Button = () => {

  return {
    aemMetadata: {
      decorationTag: {
        cssClasses: ['button', StyleSystem]
      }
    },
    template: buttonMarkup,
  };
};

Button.story = {
  parameters: {
    design: {
      specUrl: 'https://xd.adobe.com/spec/a23a5b3e-a93d-4063-5532-cd55043e0488-d40b/screen/43fc8bf0-b042-45e1-bd01-9caccf131682/Button-Default-1',
      reviewUrl: 'https://xd.adobe.com/view/a23a5b3e-a93d-4063-5532-cd55043e0488-d40b/screen/43fc8bf0-b042-45e1-bd01-9caccf131682/Button-Default-1'
    }
  }
}

export const ButtonOutline = () => {

  return {
    aemMetadata: {
      decorationTag: {
        cssClasses: ['button', 'cmp-button--rounded']
      }
    },
    template: buttonMarkup,
  };
};

ButtonOutline.story = {
  parameters: {
    design: {
      specUrl: 'https://xd.adobe.com/spec/a23a5b3e-a93d-4063-5532-cd55043e0488-d40b/screen/10bcabef-3186-433b-b5fb-ed8a56aacd0d/Button-Default',
      reviewUrl: 'https://xd.adobe.com/view/a23a5b3e-a93d-4063-5532-cd55043e0488-d40b/screen/10bcabef-3186-433b-b5fb-ed8a56aacd0d/Button-Default'
    }
  }
}

