import React from 'react';
import './index.css';
import Remarkable from 'remarkable';
import ReactDOM from 'react-dom';

class MarkdownEditor extends React.Component {
    constructor(props) {
        super(props);
        this.returnUpdate = this.returnUpdate.bind(this);
        this.state = {
            value: 'Type some *markdown* here!!'
        };
    }

    returnUpdate(e) {
        this.setState({
            value: e.target.value
        });
    }

    getMarkup() {
        const md = new Remarkable();
        return { __html: md.render(this.state.value) };
    }

    render() {
        return (
            <div className="container" >
                <div className="input">
                    <h3>Input</h3>
                    <textarea className="input-text"
                        onChange={this.returnUpdate}
                        defaultValue={this.state.value}
                    ></textarea>
                </div>
                <div className="output">
                    <h3>Markdown</h3>
                    <div className="output-text"
                        dangerouslySetInnerHTML={this.getMarkup()}>
                    </div>
                </div>
                <footer className="copyright">
                    <p>Developed by Chandra S. © 2021</p>
                </footer>
            </div>
        )
    }
}


ReactDOM.render(
    <MarkdownEditor />,
    document.getElementById('root')
);