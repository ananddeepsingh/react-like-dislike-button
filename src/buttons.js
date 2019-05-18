import React, { Component } from 'react'

export default class LikeDislike extends Component {
    constructor(props) {
        super(props);

        this.state = {
            likes: 100,
            dislikes: 25,
            dislikeClicked: false,
            clicked: false
        }
    }

    increment = () => {
        // resetting decrement
        if (this.state.dislikes !== 25) {
            if (!this.state.dislikeClicked) {
                this.setState({
                    dislikes: this.state.dislikes + 1,
                    dislikeClicked: this.state.dislikeClicked
                })
            } else {
                this.setState({
                    dislikes: this.state.dislikes - 1,
                    dislikeClicked: !this.state.dislikeClicked
                })
            }
        }

        if (!this.state.clicked) {
            this.setState({
                likes: this.state.likes + 1,
                clicked: !this.state.clicked
            })
        } else {
            this.setState({
                likes: this.state.likes - 1,
                clicked: !this.state.clicked
            })
        }

    }


    decrement = () => {

        // resetting increment

        if (this.state.likes !== 100) {
            if (!this.state.clicked) {
                this.setState({
                    likes: this.state.likes + 1,
                    clicked: this.state.clicked
                })
            } else {
                this.setState({
                    likes: this.state.likes - 1,
                    clicked: !this.state.clicked
                })
            }
        }

        if (!this.state.dislikeClicked) {
            this.setState({
                dislikes: this.state.dislikes + 1,
                dislikeClicked: !this.state.dislikeClicked
            })
        } else {
            this.setState({
                dislikes: this.state.dislikes - 1,
                dislikeClicked: !this.state.dislikeClicked
            })
        }

    }

    render() {
        return (
            <div>

                <button
                    className={this.state.clicked ? 'liked' : 'like-button'}
                    onClick={this.increment}>Like | {this.state.likes}</button> &nbsp;

                    <button className={this.state.dislikeClicked ? 'liked' : 'dislike-button'}
                    onClick={this.decrement}>Dislike | {this.state.dislikes}</button>

                <style>{`
                    .like-button, .dislike-button {
                        font-size: 1rem;
                        padding: 5px 10px;
                        color:   #585858;
                    }

                    .liked, .disliked {
                        font-weight: bold;
                        padding: 5px 10px;
                        font-size: 1rem;
                        color: #1565c0;
                    }
                `}</style>
            </div>

        );
    }
}