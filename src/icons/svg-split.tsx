import * as React from 'react';

type SvgSplitProps = {
  color: string;
  iconsize: number;
  colorsplitbar: string;
  handleclick: (event: React.MouseEvent) => void;
  title: string;
};
export class SvgSplit extends React.Component<SvgSplitProps> {
  render() {
    return (
      <div
        title={this.props.title}
        className='squaredIcon'
        style={{ width: this.props.iconsize, height: this.props.iconsize }}
        onClick={this.props.handleclick}>
        <svg xmlns='http://www.w3.org/2000/svg' width={this.props.iconsize} height={this.props.iconsize}>
          <g fill='none' stroke={this.props.color}>
            <rect
              width={this.props.iconsize * 0.6}
              height={this.props.iconsize * 0.6}
              x={this.props.iconsize * 0.2}
              y={this.props.iconsize * 0.2}
              ry={this.props.iconsize * 0.1}
              strokeWidth={this.props.iconsize * 0.05}
            />
            <path
              stroke={this.props.colorsplitbar}
              d={'M' + this.props.iconsize / 2 + ' ' + this.props.iconsize * 0.2 + 'v' + this.props.iconsize * 0.6}
              strokeWidth={this.props.iconsize * 0.1}
            />
          </g>
        </svg>
      </div>
    );
  }
}
