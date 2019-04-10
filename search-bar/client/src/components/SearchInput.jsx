import {Dropdown} from 'semantic-ui-react';
import styled from 'styled-components';
import $ from 'jquery';

const WordWrapper = styled.section`
  color: #AEAEAE;
`;


class SearchInput extends React.Component {
  constructor() {
    super();
    this.state = {
      text: 'search by city or hostel name',
      options: [],
    }
  }
  
  componentDidMount() {
    this.searchInputAPI()
  }

  

  textInputChange(e) {
    console.log("this.state.text = ", this.state.text)
    this.setState({text: e.target.value})
  }

  searchInputAPI() {

    fetch('http://localhost:3003/input')
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        this.setState({options: data});
      })
  }

  render() {
    return (
      <span><WordWrapper>Location</WordWrapper>
        <Dropdown
          placeholder='Select City'
          fluid
          search
          selection
          options={this.state.options}
        />
      </span>
    )
  }
}

export default SearchInput;