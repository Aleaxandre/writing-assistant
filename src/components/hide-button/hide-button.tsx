import React, { MouseEvent } from "react";

type HideButtonProps = {hidden:boolean, clicked: (event: MouseEvent) => void};

export class HideButton extends React.Component<HideButtonProps>{
    render(){
        return (<div onClick={this.props.clicked} className={'toolbar-button ' + (this.props.hidden ? 'left' : 'right')}>{(this.props.hidden?'Hide MD panel':'Show MD panel')}</div>);
    }
}