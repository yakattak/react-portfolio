import React, { useState } from 'react';
import Modal from '../Modal';

const PhotoList = ({ category }) => {

  const [isModalOpen, setIsModalOpen] = useState(false);

  const [photos] = useState([
    {
      name: 'photo-port',
      category: 'applications',
      description:
        'Coding bootcamp assignment: Create a weather app that pulls from openweathermap, saves search history to local storage, and displays current and 5 day weather.',
        repoLink: 'https://github.com/yakattak/weatherme',
        deployLink: 'https://yakattak.github.io/weatherme/'
    },
    {
      name: 'Grocery booth',
      category: 'applications',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie'
    },
    {
      name: 'Building exterior',
      category: 'applications',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie'
    },
    {
      name: 'Restaurant table',
      category: 'applications',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie'
    },
    {
      name: 'Cafe interior',
      category: 'applications',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie'
    },
    
  ]);

  const currentPhotos = photos.filter(photo => photo.category === category);

  const [currentPhoto, setCurrentPhoto] = useState();

  const toggleModal = (image, i) => {
    setCurrentPhoto({...image, index: i});
    setIsModalOpen(!isModalOpen);
  }

  return (
    <div>
      {isModalOpen && <Modal currentPhoto={currentPhoto} onClose={toggleModal} />}
      <div className="flex-row">
        {currentPhotos.map((image, i) => (
          <img
            src={require(`../../assets/small/${category}/${i}.jpg`).default}
            alt={image.name}
            className="img-thumbnail mx-1"
            onClick={() => toggleModal(image, i)}
            key={image.name}
          />
        ))}
      </div>
    </div>
  );
};

export default PhotoList;
