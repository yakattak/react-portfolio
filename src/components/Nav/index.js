import React from "react";
import { capitalizeFirstLetter } from "../../utils/helpers";

function Nav(props) {
  const {
    categories = [],
    setCurrentCategory,
    currentCategory,
    contactSelected,
    setContactSelected,
    aboutSelected,
    setAboutSelected,
    resumeSelected,
    setResumeSelected
  } = props;




  return (
    <header className="flex-row px-1">
      <h2>
        <a data-testid="link" href="/">
          <span role="img" aria-label="pancakes"> 🥞 </span> Steven Calebrese - Full Stack Adventure
        </a>
      </h2>
      <nav>
        <ul className="flex-row">
        <li className={`mx-2 ${aboutSelected && !contactSelected && !resumeSelected && 'navActive'}`}>
            <span data-testid="about" onClick={() => setAboutSelected(true) & setContactSelected(false) & setResumeSelected(false)}>
              About me
            </span>
          </li>
          <li className={`mx-2 ${contactSelected && !aboutSelected && !resumeSelected && 'navActive'}`}>
            <span onClick={() => setContactSelected(true) & setAboutSelected(false) & setResumeSelected(false)}>
              Contact
            </span>
          </li>
          {categories.map((category) => (
            <li
              className={`mx-2 ${
                currentCategory.name === category.name && !contactSelected && !aboutSelected && !resumeSelected && `navActive`
                }`}
              key={category.name}
            >
              <span
                onClick={() => {
                  setCurrentCategory(category);
                  setContactSelected(false);
                  setAboutSelected(false);
                  setResumeSelected(false);
                }}
              >
                {capitalizeFirstLetter(category.name)}
              </span>
            </li>
          ))}
          <li className={`mx-2 ${resumeSelected && 'navActive'}`}>
          <span onClick={() => setContactSelected(false) & setAboutSelected(false) & setResumeSelected(true)}>
              Resume
            </span>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Nav;