import * as React from "react";

type SvgMarkdownProps = { color: string; iconsize: number };
export class SvgMarkdown extends React.Component<SvgMarkdownProps> {
  render() {
    return (
      <div
        className="squaredIcon"
        style={{ width: this.props.iconsize, height: this.props.iconsize }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={this.props.iconsize}
          height={this.props.iconsize}
          {...this.props}
        >
          <text
            style={{
              lineHeight: "100%",
            }}
            x={2.5 * this.props.iconsize * 0.05}
            y={13.5 * this.props.iconsize * 0.05}
            fontWeight={400}
            fontSize={10 * this.props.iconsize * 0.05}
            fontFamily="sans-serif"
            letterSpacing={0}
            wordSpacing={0}
            fill={this.props.color}
          >
            <tspan>{"MD"}</tspan>
          </text>
        </svg>
      </div>
    );
  }
}
