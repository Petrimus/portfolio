import React from 'react'

import VisibilitySensor from 'react-visibility-sensor'
import { Wrapper, SkillsDiv, ListItem, BarWrapper, Bar } from './styles/skillsStyles'

const Skills = () => {  

  return (
    <Wrapper id="skills">
      <SkillsDiv>
        <h1>Skills and Technologies</h1>
        <ListItem>
          <h3>Javascript</h3>
          <VisibilitySensor>
            {
              ({ isVisible }) =>
                <BarWrapper>
                  {isVisible && <Bar width="70%"></Bar>}
                </BarWrapper>
            }
          </VisibilitySensor>
        </ListItem>

        <ListItem>
          <h3>REACT</h3>
          <VisibilitySensor>
            {
              ({ isVisible }) =>
                <BarWrapper>
                  {isVisible && <Bar width="75%"></Bar>}
                </BarWrapper>
            }
          </VisibilitySensor>
        </ListItem>

        <ListItem>
          <h3>Java</h3>
          <VisibilitySensor>
            {
              ({ isVisible }) =>
                <BarWrapper>
                  {isVisible && <Bar width="65%"></Bar>}
                </BarWrapper>
            }
          </VisibilitySensor>
        </ListItem>

        <ListItem>
          <h3>Node Js</h3>
          <VisibilitySensor>
            {
              ({ isVisible }) =>
                <BarWrapper>
                  {isVisible && <Bar width="50%"></Bar>}
                </BarWrapper>
            }
          </VisibilitySensor>
        </ListItem>

        <ListItem>
          <h3>HTML5</h3>
          <VisibilitySensor>
            {
              ({ isVisible }) =>
                <BarWrapper>
                  {isVisible && <Bar width="60%"></Bar>}
                </BarWrapper>
            }
          </VisibilitySensor>
        </ListItem>

        <ListItem>
          <h3>CSS</h3>
          <VisibilitySensor>
            {
              ({ isVisible }) =>
                <BarWrapper>
                  {isVisible && <Bar width="65%"></Bar>}
                </BarWrapper>
            }
          </VisibilitySensor>
        </ListItem>

        <ListItem>
          <h3>SQL</h3>
          <VisibilitySensor>
            {
              ({ isVisible }) =>
                <BarWrapper>
                  {isVisible && <Bar width="45%"></Bar>}
                </BarWrapper>
            }
          </VisibilitySensor>
        </ListItem>

        <ListItem>
          <h3>SCRUM</h3>
          <VisibilitySensor>
            {
              ({ isVisible }) =>
                <BarWrapper>
                  {isVisible && <Bar width="40%"></Bar>}
                </BarWrapper>
            }
          </VisibilitySensor>
        </ListItem>

        <ListItem>
          <h3>Docker</h3>
          <VisibilitySensor>
            {
              ({ isVisible }) =>
                <BarWrapper>
                  {isVisible && <Bar width="43%"></Bar>}
                </BarWrapper>
            }
          </VisibilitySensor>
        </ListItem>
      </SkillsDiv>
    </Wrapper>
  )
}


export default Skills