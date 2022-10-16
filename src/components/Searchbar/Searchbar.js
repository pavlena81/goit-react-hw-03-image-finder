import { Component } from "react";
import {
    HeaderSearchbar,
    SearchForm,
    SearchFormButton,
    SearchFormButtonLabel,
    SearchFormInput,
} from "./Searchbar.styled";

export class Searchbar extends Component {
//   state = {
//     query: "",
//   };

handleInput = (e) => {
  this.setState({ query: e.currentTarget.value.trim() });
};

handleSubmit = (e) => {
  e.preventDefault();
  this.props.onSubmit(this.state.query);
};

  render() {
    return (
  <HeaderSearchbar>
  <SearchForm onSubmit={this.handleSubmit}>
    <SearchFormButton  type="submit">
      <SearchFormButtonLabel>Search</SearchFormButtonLabel>
    </SearchFormButton >

    <SearchFormInput
      onChange={this.handleInput}
      type="text"
       value={this.value}
      autocomplete="off"
      autoFocus
      placeholder="Search images and photos"
    />
  </SearchForm>
</HeaderSearchbar>
    );
  }
}
