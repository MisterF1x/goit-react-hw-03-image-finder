import { Global } from '@emotion/react';
import { Layout } from '../Layout/Layout';
import { Style } from '../GlobalStyle';
import { Component } from 'react';
import { Searchbar } from 'components/Searchbar/Searchbar';
import { fetchImages } from 'services/api';
import { Loader } from 'components/Loader/Loader';
import { ImageGallery } from 'components/ImageGallery/ImageGalery';
import { LoadButton } from 'components/Button/Button';
import toast, { Toaster } from 'react-hot-toast';
import { Modal } from 'components/Modal/Modal';

export class App extends Component {
  state = {
    query: '',
    images: [],
    page: 1,
    total: null,
    isLoading: false,
    perPage: 12,
    showModal: false,
  };

  async componentDidUpdate(_, prevState) {
    const { query, page, perPage } = this.state;
    if (
      this.state.query !== prevState.query ||
      this.state.page !== prevState.page
    ) {
      this.getImages(query, page, perPage);
    }
  }

  getImages = async (query, page, perPage) => {
    try {
      this.setState({ isLoading: true });
      const { hits, totalHits } = await fetchImages(query, page, perPage);
      if (!hits.length) {
        toast.error('The request is invalid please try again', {
          style: {
            background: '#FA9884',
            color: '#fff',
          },
        });
      }
      this.setState(({ images }) => ({
        query,
        images: [...images, ...hits],
        isLoading: false,
        total: totalHits,
      }));
    } catch (error) {
      toast.error(error.message);
      console.error(error);
    }
  };
  handleLoadMore = () => {
    this.setState(({ page }) => ({
      page: page + 1,
    }));
  };
  handleSubmit = query => {
    this.setState({
      query,
      images: [],
      page: 1,
      total: null,
      isLoading: false,
    });
  };
  openModal = (url, alt) => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
      url,
      alt,
    }));
  };
  closeModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  render() {
    const { images, isLoading, total, showModal, url, alt } = this.state;
    const isLoadBtn = !!(total > images.length && !isLoading);
    return (
      <Layout>
        <Searchbar
          onSubmit={this.handleSubmit}
          isSubmitting={isLoading}
        ></Searchbar>
        <ImageGallery onClick={this.openModal} items={images} />
        {isLoading && <Loader />}
        {isLoadBtn && <LoadButton onClick={this.handleLoadMore} />}

        {showModal && (
          <Modal onClose={this.closeModal}>
            <img src={url} alt={alt} />
          </Modal>
        )}
        <Toaster position="top-right" />
        <Global styles={Style} />
      </Layout>
    );
  }
}
