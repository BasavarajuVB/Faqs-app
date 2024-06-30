// Write your code here.
import {Component} from 'react'

import './index.css'

class FaqItem extends Component {
  state = {showAnswer: false}

  onShowAnswer = () => {
    this.setState(prevState => ({
      showAnswer: !prevState.showAnswer,
    }))
  }

  render() {
    const {eachFaqItem} = this.props
    const {showAnswer} = this.state
    const {questionText, answerText} = eachFaqItem
    const plusOrminusImg = showAnswer
      ? 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'
    const altValue = showAnswer ? 'minus' : 'plus'
    return (
      <li>
        <div className="list-item">
          <div className="question-img-con">
            <h1 className="question">{questionText}</h1>
            <button type="button" onClick={this.onShowAnswer}>
              <img src={plusOrminusImg} alt={altValue} />
            </button>
          </div>
          <div>
            {showAnswer ? (
              <div>
                <hr /> <p className="answer">{answerText}</p>
              </div>
            ) : null}
          </div>
        </div>
      </li>
    )
  }
}
export default FaqItem
