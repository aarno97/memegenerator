import React, {Component} from "react";
import {createMeme} from "../actions";
import {connect} from 'react-redux';

class MemeItem extends Component {
    constructor() {
        super();

        this.state = {
            hovered: false
        }
    }

    postMeme() {
        const {text0, text1} = this.props;
        const memeObject = {
            template_id: this.props.meme.id,
            text0,
            text1
        }
        this.props.createMeme(memeObject)
    }

    render() {
        return(
            <div
                onMouseEnter={() => this.setState({hovered: true})}
                onMouseLeave={() => this.setState({hovered: false})}
                className={"meme-item"}
                onClick={() => this.postMeme()}
            >
                <img
                    className={this.state.hovered ? "meme-image darken-image" : "meme-image"}
                    src={this.props.meme.url}
                    alt={this.props.meme.name}
                />
                <p className={ this.state.hovered ? "meme-text" : "no-text"}>
                    {this.props.meme.name}
                </p>
            </div>
        )
    }
}

export default connect(null, {createMeme}) (MemeItem);