import React from 'react';


function Modal({onClose, currentPhoto}) {

    const {name, description, category, repoLink, deployLink, index} = currentPhoto;

    return (
        <div className = 'modalBackdrop'>
            <div className ='modalContainer'>
                <h3 className = 'modalTitle'>{name} Name</h3>
                <img
          src={require(`../../assets/large/${category}/${index}.jpg`).default}
          alt="current category"
        />
                <p className='mx-2'>
                    {description}
                </p>
                <p>
                <a href = {repoLink} target ='_blank'> Github Repo Link </a>
                </p>
                <p>
                <a href = {deployLink} target ='_blank'>Link to Deployed Site </a>
                </p>
                <button type='button' onClick={onClose}>
                    Close this description
                </button>
            </div>
        </div>
        
    );
};

export default Modal;