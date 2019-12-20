import React from 'react'
import styled from 'styled-components'

import PropTypes from 'prop-types'
import Images from '../../Images'

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  justify-content: center;
  font-family: Avenir-Black;
  -webkit-font-smoothing: antialiased;
  align-items: center;
  display: flex;
  @media (max-width: 766px) {
    font-size: 10px;
  }
`

const Table = styled.table`
  height: auto;
  border-spacing: 25px;
  border-collapse: separate;
  @media (max-width: 766px) {
    border-spacing: 8px;
  }
`
const TR = styled.tr`
  border: 1px solid black;
`

const TD = ({ image, name, href }) => {
  const TableData = styled.div`
    background-image: url(${image});
    background-size: cover;
    text-align: center;
    border-radius: 15px;
    color: 'white';
    height: 125px;
    width: 125px;
    transition: transform 0.2s;

    &:hover {
      box-shadow: 8px 8px 12px #aaaaaaba;
      -ms-transform: scale(1.1);
      -webkit-transform: scale(1.1);
      transform: scale(1.1);
    }
    @media (max-width: 766px) {
      height: 72px;
      width: 72px;
    }
  `
  const Anchor = styled.a`
    text-decoration: none;
    color: white;
    height: 100%;
    width: 100%;
    text-decoration: none;
    padding-top: 40%;
    display: block;
  `

  return (
    <TableData>
      <Anchor style={{ textDecoration: 'none', color: 'white' }} target="_blank" href={href}>
        {name}
      </Anchor>
    </TableData>
  )
  // return <TableData>{name}</TableData>
}

TD.propTypes = {
  colSpan: PropTypes.number,
  name: PropTypes.string,
  href: PropTypes.string
}
TD.defaultProps = {
  colSpan: 4,
  name: null,
  href: null
}

const Projects = () => (
  <Wrapper>
    <div
      style={{
        overflow: 'auto',
        height: '100%',
        paddingTop: 100
      }}
    >
      <Table>
        <tbody>
          <TR>
            <td style={{ textAlign: 'center' }} colSpan={40}>
              Android
            </td>
          </TR>
          <TR>
            <td>
              <TD image={Images.WodrobLogo} name="Wodrob" href="https://play.google.com/store/apps/details?id=com.wodrob.app" />
            </td>
            <td>
              <TD
                className="animated bounce infinite delay-2s"
                image={Images.BoomLogo}
                name="Boom"
                href="https://play.google.com/store/apps/details?id=com.reyansh.audio.audioplayer.free"
              />
            </td>
            <td>
              <TD
                image={Images.BellLogo}
                name="Bell"
                href="https://play.google.com/store/apps/details?id=com.mp3cutter.ringtonemaker.ringtonemaker"
              />
            </td>
            <td>
              <TD
                image={Images.BatteryLifeLogo}
                name="Battery Life"
                href="https://play.google.com/store/apps/details?id=com.reyansh.batterylife"
              />
            </td>
            <td>
              <TD
                image={Images.BoosterLogo}
                name="Ram Booster"
                href="https://play.google.com/store/apps/details?id=com.reyansh.rambooster"
              />
            </td>
          </TR>

          <TR>
            <td>
              <TD
                image={Images.EasyTouchLogo}
                name="Easy Touch"
                href="https://play.google.com/store/apps/details?id=com.reyansh.easytouch"
              />
            </td>
            <td>
              <TD
                image={Images.LearnEnglishLogo}
                name="Learn English"
                href="https://play.google.com/store/apps/details?id=com.english.learn.learnenglish"
              />
            </td>
            <td>
              <TD
                image={Images.RadioLogo}
                name="World radio"
                href="https://play.google.com/store/apps/details?id=com.radio.global.globalradio"
              />
            </td>
            <td>
              <TD image={Images.MirrorLogo} name="Mirror" href="https://play.google.com/store/apps/details?id=com.om.mirror" />
            </td>
          </TR>

          <TR>
            <td style={{ textAlign: 'center' }} colSpan={40}>
              iOS
            </td>
          </TR>

          <TR>
            <td>
              <TD
                image={Images.SmartWalkLogo}
                name="Smart Walk"
                href="https://itunes.apple.com/us/app/smartwalk/id1345045197?mt=8"
              />
            </td>
          </TR>
          <TR>
            <td style={{ textAlign: 'center' }} colSpan={40}>
              ReactJS
            </td>
          </TR>
          <TR>
            <td>
              <TD image={Images.CodeGiantLogo} name="Codegiant" href="https://www.codegiant.io/" />
            </td>
            <td>
              <TD image={Images.ReyanshLogo} name="Reyansh" href="https://www.reyanshmishra.com" />
            </td>

            <td>
              <TD image={Images.TalentHerderLogo} name="Talent Herder" href="https://app.talentherder.com" />
            </td>
          </TR>
          <TR>
            <td style={{ textAlign: 'center' }} colSpan={40}>
              React Native
            </td>
          </TR>
          <TR>
            <td>
              <TD image={Images.Aplyft} name="Aplyft Inc" href="https://play.google.com/store/apps/details?id=com.aplyft" />
            </td>
          </TR>
        </tbody>
      </Table>
    </div>
  </Wrapper>
)

export default Projects
