import * as React from 'react';

type SvgSaveProps = {
  color: string;
  iconsize: number;
  title: string;
  handleclick: (event: React.MouseEvent) => void;
};
export class SvgSave extends React.Component<SvgSaveProps> {
  render() {
    return (
      <div
        title={this.props.title}
        className='squaredIcon'
        style={{ width: this.props.iconsize, height: this.props.iconsize }}
        onClick={this.props.handleclick}>
        <svg xmlns='http://www.w3.org/2000/svg' width={this.props.iconsize} height={this.props.iconsize}>
          <path
            x={this.props.iconsize * 0.2}
            y={this.props.iconsize * 0.2}
            // d="m 2,8 4,0 0,6 4,0 0,-6 4,0 L 8,2 Z"
            d={
              'm ' +
              (1 * this.props.iconsize) / 8 +
              ',' +
              (4 * this.props.iconsize) / 8 +
              ' ' +
              (2 * this.props.iconsize) / 8 +
              ',0 0,' +
              (3 * this.props.iconsize) / 8 +
              ' ' +
              (2 * this.props.iconsize) / 8 +
              ',0 0,' +
              (-3 * this.props.iconsize) / 8 +
              ' ' +
              (2 * this.props.iconsize) / 8 +
              ',0 L ' +
              (4 * this.props.iconsize) / 8 +
              ',' +
              (1 * this.props.iconsize) / 8 +
              ' Z'
            }
            fill={this.props.color}
          />
        </svg>
      </div>
    );
  }
}
