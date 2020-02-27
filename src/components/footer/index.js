import styled from 'styled-components'
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import { FaLinkedin, FaGithub, FaStackOverflow, FaTwitter, FaQuora } from 'react-icons/fa'

import * as Utils from '../utils'
import { GITHUB, LINKEDIN, TWITTER, STACKOVERFLOW, QUORA } from '../utils/constants'

class Footer extends Component {
  render() {
    const { pathname } = this.props.location
    const color = Utils.getFooterColor(pathname)
    return (
      <FooterHolder>
        <LeftNavIcons>
          <Anchor color={color} target="_blank" rel="noopener noreferrer" href={GITHUB}>
            <FaGithub size={30} />
          </Anchor>
          <Anchor color={color} target="_blank" rel="noopener noreferrer" href={LINKEDIN}>
            <FaLinkedin size={30} />
          </Anchor>
          <Anchor color={color} target="_blank" rel="noopener noreferrer" href={TWITTER}>
            <FaTwitter size={30} />
          </Anchor>
          <Anchor color={color} target="_blank" rel="noopener noreferrer" href={STACKOVERFLOW}>
            <FaStackOverflow size={30} />
          </Anchor>
          <Anchor color={color} target="_blank" rel="noopener noreferrer" href={QUORA}>
            <FaQuora size={30} />
          </Anchor>
        </LeftNavIcons>
        <CopyRightLabel color={color}>copyright © 2017</CopyRightLabel>
      </FooterHolder>
    )
  }
}

const FooterHolder = styled.div`
  width: 95%;
  flex-direction: row;
  margin-left: auto;
  margin-right: auto;
  position: absolute;
  bottom: 12px;
  left: 0px;
  margin: auto;
  right: 0px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
`

const LeftNavIcons = styled.div`
  display: flex;
  flex-direction: row;
`

const CopyRightLabel = styled.div`
  color: color;
  position: 'absolute';
  right: 0;
  marginright: 10;
  fontsize: 12;
  fontfamily: 'Avenir-Black';
  color: ${props => props.color};
`
const Anchor = styled.a`
  margin: 10px;
  color: ${props => props.color};
  &:hover {
    color: gray;
  }
  &:focus {
    color: black;
  }
`

Footer.propTypes = {
  currentPath: PropTypes.string
}

Footer.defaultProps = {
  currentPath: null
}
export default withRouter(Footer)
