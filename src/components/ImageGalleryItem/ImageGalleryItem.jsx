import { Modal } from "../Modal/Modal"
import { Component } from "react"
import styles from './ImageGalleryItem.module.css'

export class ImageGalleryItem extends Component {
  state={
    isOpenModal: false,
  }
  handleToggleModal = () => {
    this.setState(prevState => ({isOpenModal: !prevState.isOpenModal

    }))
  }

  render() { 
    const { image, tag, largeImage } = this.props;
    return (
    <li className={styles.ImageGalleryItem} >
  <img 
  onClick={this.handleToggleModal}
  className={styles.ImageGalleryItemImage}
   src={image}
   alt={tag} />

  {this.state.isOpenModal && (
  <Modal picture={largeImage} onClose={this.handleToggleModal}/>)}
</li>
  )
  }
  
}