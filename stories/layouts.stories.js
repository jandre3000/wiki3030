/* eslint-disable react/react-in-jsx-scope */

import { storiesOf } from '@storybook/vue';
import ArticleLayout from '../src/components/layouts/ArticleLayout';

import '../src/styles/Common.css';
import '../src/styles/global.less';
import '../src/styles/dev.less';


storiesOf('Layouts', module)
.add('main', () => ({
  components: { ArticleLayout },
  template: '<ArticleLayout dev-view="true"></ArticleLayout>'
}));

