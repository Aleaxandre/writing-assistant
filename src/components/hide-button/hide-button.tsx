import React, { MouseEvent } from 'react';
import { SvgNoSplit } from '../../icons/svg-no-split';
import { SvgSplit } from '../../icons/svg-split';

type HideButtonProps = {
  hidden: boolean;
  clicked: (event: MouseEvent) => void;
};

export class HideButton extends React.Component<HideButtonProps> {
  render() {
    return this.props.hidden ? (
      <SvgNoSplit color='white' iconsize={20} onClick={this.props.clicked} title='Unsplit view to hide markdown' />
    ) : (
      <SvgSplit
        color='white'
        colorsplitbar='red'
        iconsize={20}
        onClick={this.props.clicked}
        title='Split view to display markdown'
      />
    );
  }
}
