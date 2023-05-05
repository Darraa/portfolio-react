import React from 'react'

const SkillsElement = ({skillsName, skills, iconName}) => {
  return (
    <li>
    <svg width="60" height="60">
        <use href={`${skills}#icon-${iconName}`}></use>
    </svg>
    <span>{skillsName}</span>
</li>  )
}

export default SkillsElement