import React from "react";
import "bulma/css/bulma.css";

const dictionary = {
  isActive: 'is-active',
  isBlack: 'is-black',
  isCentered: 'is-centered',
  isDanger: 'is-danger',
  isDark: 'is-dark',
  isFocused: 'is-focused',
  isGrouped: 'is-grouped',
  isHovered: 'is-hovered',
  isInfo: 'is-info',
  isInverted: 'is-inverted',
  isLarge: 'is-large',
  isLight: 'is-light',
  isLink: 'is-link',
  isLoading: 'is-loading',
  isMedium: 'is-medium',
  isOutlined: 'is-outlined',
  isPrimary: 'is-primary',
  isRight: 'is-right',
  isRounded: 'is-rounded',
  isSelected: 'is-selected',
  isSmall: 'is-small',
  isStatic: 'is-static',
  isSuccess: 'is-success',
  isText: 'is-text',
  isWarning: 'is-warning',
  isWhite: 'is-white',
}

const CoolButton = (props) => {

  // Extract the key names from the props object 
  // ex. -->   ['isSmall', 'isSuccess', 'children', 'className' ]
  const propsKeys = Object.keys(props);

  let classString = 'button ' + props.className + " ";


  // We exchange prop key names found in the dictionary for the stored value
  propsKeys.forEach((propKeyStr) => {
    // If the prop key name exists as a property, add it to the `classString`
    if (dictionary[propKeyStr] !== undefined) {
      const bulmaClass = dictionary[propKeyStr]; 
      classString += bulmaClass + " ";
    }
  })


  return (
    <button className={classString}>
      {props.children}
    </button>
  );
};

export default CoolButton;
