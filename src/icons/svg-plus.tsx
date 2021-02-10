import * as React from 'react';

type SvgPlusProps = {
  color: string;
  iconsize: number;
  title: string;
  handleclick: (event: React.MouseEvent) => void;
};
export class SvgPlus extends React.Component<SvgPlusProps> {
  render() {
    return (
      <div
        title={this.props.title}
        className='squaredBorderIcon'
        style={{ width: this.props.iconsize, height: this.props.iconsize }}
        onClick={this.props.handleclick}>
        <svg xmlns='http://www.w3.org/2000/svg'>
          <path
            x={this.props.iconsize * 0.2}
            y={this.props.iconsize * 0.2}
            // d='m 6,2 4,0 0,4 4,0 0,4 -4,0 0,4 -4,0 0,-4 -4,0 0,-4 4,0 z'
            d={
              'm ' +
              (3 * this.props.iconsize) / 8 +
              ',' +
              (1 * this.props.iconsize) / 8 +
              ' ' +
              (2 * this.props.iconsize) / 8 +
              ',0 0,' +
              (2 * this.props.iconsize) / 8 +
              ' ' +
              (2 * this.props.iconsize) / 8 +
              ',0 0,' +
              (2 * this.props.iconsize) / 8 +
              ' ' +
              (-2 * this.props.iconsize) / 8 +
              ',0 0,' +
              (2 * this.props.iconsize) / 8 +
              ' ' +
              (-2 * this.props.iconsize) / 8 +
              ',0 0,' +
              (-2 * this.props.iconsize) / 8 +
              ' ' +
              (-2 * this.props.iconsize) / 8 +
              ',0 0,' +
              (-2 * this.props.iconsize) / 8 +
              ' ' +
              (2 * this.props.iconsize) / 8 +
              ',0 z'
            }
            fill={this.props.color}
          />
        </svg>
      </div>
    );
  }
}
