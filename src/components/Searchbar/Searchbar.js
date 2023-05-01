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
import { ERROR_MSG, toastErrStyle } from 'components/constant';

export class Searchbar extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
    isSubmitting: PropTypes.bool.isRequired,
    initial: PropTypes.string.isRequired,
  };

  handleFormSubmit = ({ query }, { resetForm }) => {
    const trimedQuery = query.trim();
    if (!trimedQuery) {
      return toast.error(ERROR_MSG['empty'], toastErrStyle);
    }
    resetForm();
    this.props.onSubmit(query);
  };
  render() {
    return (
      <SearchHead>
        <Formik
          initialValues={{ query: this.props.initial }}
          onSubmit={this.handleFormSubmit}
        >
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
