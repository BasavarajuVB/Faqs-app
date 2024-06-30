// Write your code here.
import {Component} from 'react'

import FaqItem from '../FaqItem'
import './index.css'

class Faqs extends Component {
  render() {
    const {faqsList} = this.props

    return (
      <div className="app-bg-container">
        <div className="app-card-container">
          <h1 className="main-heading">FAQs </h1>
          <ul>
            {faqsList.map(eachFaq => (
              <FaqItem eachFaqItem={eachFaq} key={eachFaq.id} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default Faqs
