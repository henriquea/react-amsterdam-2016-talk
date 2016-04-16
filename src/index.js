import React, {Component} from 'react';
import {render} from 'react-dom';
import fetch from 'isomorphic-fetch';

import ReadingItem from './reading-item';

const ReadingList = ({data, animate}) => (
  <ul>
    {data.map(
      (story, key) => (
        <li key={key}>
          <ReadingItem
            headline={story.headline}
            subHeadline={story.site}
            description={story.description}
            imageSrc={story.imageSrc}
            animate={animate}
          />
        </li>
      )
    )}
  </ul>
);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      animate: false
    };
  }

  componentDidMount() {
    fetch('https://cldup.com/0RTHGGWOjA.json')
      .then((response) => {
        if (response.status >= 400) {
          return Promise.reject(new Error('Something went wrong!'));
        }
        return response.json();
      })
      .then((stories) => {
        this.setState({data: stories});
        // JavaScript!? ¯\_(ツ)_/¯
        setTimeout(() => this.setState({animate: true}));
      });
  }

  render() {
    const {data, animate} = this.state;
    return <ReadingList data={data} animate={animate} />
  }
}

render(
  <App />,
  document.getElementById('root')
);
