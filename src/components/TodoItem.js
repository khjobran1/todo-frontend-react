import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class TodoItem extends Component {

    getStyle = () => {
        return {
            background: '#f4f4f4',
            padding: '10px',
            borderBottom: '1px #ccc dotted',
            textDecoration: this.props.todo.completed ? 'line-through' : 'none'
        }
    }

    render() {
        const { id, title } = this.props.todo;
        return (
            <div style={this.getStyle()}>
                <p>
                <input checked={this.props.todo.completed}  type="checkbox" onChange={this.props.markComplete.bind(this, id)} /> {' '}
                {title}
                <button onClick={this.props.delTodo.bind(this, id)} style={btnStyle}><b>X</b></button>
                </p>
            </div>
        )
    }
}

// PropTypes
TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    markComplete: PropTypes.func.isRequired,
    delTodo: PropTypes.func.isRequired
}

const btnStyle = {
    background: '#f4f4f4',
    color: '#ff0000',
    border: 'none',
    padding: '4px 10px',
    float: 'right'
}
export default TodoItem
