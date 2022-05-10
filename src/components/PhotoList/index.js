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
      name: 'Post-Up',
      category: 'applications',
      description:
        'Post-Up is an app that lets users see local pick up athletic games and decide if they are going to attend. Attendance is recorded and other users can see how many people are showing up.',
        repoLink: 'https://github.com/yakattak/Post-Up',
        deployLink: 'https://yakattak-shindig4.herokuapp.com/'
    },
    {
      name: 'Password Generator',
      category: 'applications',
      description:
        'This is a random password generator coding bootcamp assignment - the HTML and CSS were provided for us',
        repoLink: 'https://github.com/yakattak/password-generator',
        deployLink: 'https://yakattak.github.io/password-generator/'
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
