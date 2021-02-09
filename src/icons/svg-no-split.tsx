import * as React from "react";

type SvgNoSplitProps = {
  color: string;
  iconsize: number;
  onClick: (event: React.MouseEvent) => void;
  title: string;
};
export class SvgNoSplit extends React.Component<SvgNoSplitProps> {
  render() {
    return (
      <div
        title={this.props.title}
        className="squaredIcon"
        style={{ width: this.props.iconsize, height: this.props.iconsize }}
        onClick={this.props.onClick}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={this.props.iconsize}
          height={this.props.iconsize}
          {...this.props}
        >
          <g fill="none" stroke={this.props.color}>
            <rect
              width={this.props.iconsize * 0.6}
              height={this.props.iconsize * 0.6}
              x={this.props.iconsize * 0.2}
              y={this.props.iconsize * 0.2}
              ry={this.props.iconsize * 0.1}
              strokeWidth={this.props.iconsize * 0.05}
            />
          </g>
        </svg>
      </div>
    );
  }
}
