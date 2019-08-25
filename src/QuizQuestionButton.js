import React, { Component } from 'react'



class QuizQuestionButton extends Component{
    render(){
        return(
            <i>
                <button>{this.props.button_text}</button>
            </i>
        )
    }
}

export default QuizQuestionButton
