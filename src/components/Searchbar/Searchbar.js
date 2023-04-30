import { Component } from 'react';
import {
  FormSearch,
  SearchFormBtn,
  SearchFormInput,
  SearchFormLabel,
  SearchHead,
} from './Seachbar.styled';
import { Formik } from 'formik';
import toast from 'react-hot-toast';
import PropTypes from 'prop-types';

export class Searchbar extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };

  state = {
    query: '',
  };
  handleFormSubmit = ({ query }, { resetForm }) => {
    const trimedQuery = query.trim();
    if (!trimedQuery) {
      return toast.error('This field is required and cannot be empty', {
        style: {
          background: '#FA9884',
          color: '#fff',
        },
      });
    }
    resetForm();
    this.props.onSubmit(query);
  };
  render() {
    return (
      <SearchHead>
        <Formik initialValues={this.state} onSubmit={this.handleFormSubmit}>
          <FormSearch>
            <SearchFormBtn type="submit" disabled={this.props.isSubmitting}>
              <SearchFormLabel>Search</SearchFormLabel>
            </SearchFormBtn>
            <SearchFormInput
              type="text"
              name="query"
              autoComplete="off"
              autoFocus
              placeholder="Search images and photos"
            />
          </FormSearch>
        </Formik>
      </SearchHead>
    );
  }
}
