import React, { useState } from 'react'
import { Button } from '../ButtonElements'
import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  Column1,
  TextWrapper,
  TopLine,
  Heading,
  HeadingSmall,
  Subtitle,
  SubtitleSmall,
  BtnWrap,
  Column2,
  ImgWrap,
  Img,
  UrlLink,
} from './InfoElements'

const InfoSection = ({
  lightBg,
  id,
  imgStart,
  topLine,
  lightText,
  headLine,
  headLine2,
  headLine3,
  darkText,
  description,
  description2,
  description3,
  buttonLabel,
  img,
  alt,
  primary,
  dark,
  dark2,
  urlLink,
}) => {
  return (
    <>
      <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <TopLine>{topLine}</TopLine>
                {/* <Heading lightText={lightText}>{headLine}</Heading>
                // <Subtitle darkText={darkText}>{description}</Subtitle> */}

                {id === 'about' && (
                  <>
                    <HeadingSmall lightText={lightText}>
                      {headLine}
                    </HeadingSmall>
                    <SubtitleSmall darkText={darkText}>
                      {description}
                    </SubtitleSmall>
                    <HeadingSmall lightText={lightText}>
                      {headLine2}
                    </HeadingSmall>
                    <SubtitleSmall darkText={darkText}>
                      {description2}
                    </SubtitleSmall>
                    <HeadingSmall lightText={lightText}>
                      {headLine3}
                    </HeadingSmall>
                    <SubtitleSmall darkText={darkText}>
                      {description3}
                    </SubtitleSmall>

                    <BtnWrap>
                      <Button
                        to='discover'
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact='true'
                        offset={-80}
                        primary={primary ? 1 : 0}
                        dark={dark ? 1 : 0}
                        dark2={dark2 ? 1 : 0}
                      >
                        {buttonLabel}
                      </Button>
                    </BtnWrap>
                  </>
                )}

                {id === 'discover' && (
                  <>
                    <Heading lightText={lightText}>{headLine}</Heading>
                    {/* <Subtitle darkText={darkText}>{description}</Subtitle> */}
                    <UrlLink
                      darkText={darkText}
                      href='//www.credly.com/badges/556721f8-766b-4a1b-9db1-6580e71c4d76?source=linked_in_profile'
                      target='_blank'
                    >
                      Credential URL
                    </UrlLink>
                    < br/>
                    < br/>

                    <BtnWrap>
                      <Button
                        to='services'
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact='true'
                        offset={-80}
                        primary={primary ? 1 : 0}
                        dark={dark ? 1 : 0}
                        dark2={dark2 ? 1 : 0}
                      >
                        {buttonLabel}
                      </Button>
                    </BtnWrap>
                  </>
                )}

                {id === 'signup' && (
                  <>
                    <HeadingSmall lightText={lightText}>
                      {headLine}
                    </HeadingSmall>
                    <SubtitleSmall darkText={darkText}>
                      {description}
                    </SubtitleSmall>
                    <HeadingSmall lightText={lightText}>
                      {headLine2}
                    </HeadingSmall>
                    <SubtitleSmall darkText={darkText}>
                      {description2}
                    </SubtitleSmall>
                    <HeadingSmall lightText={lightText}>
                      {headLine3}
                    </HeadingSmall>
                    <SubtitleSmall darkText={darkText}>
                      {description3}
                    </SubtitleSmall>

                    {/* <BtnWrap>
                    <Button
                      to='discover'
                      smooth={true}
                      duration={500}
                      spy={true}
                      exact='true'
                      offset={-80}
                      primary={primary ? 1 : 0}
                      dark={dark ? 1 : 0}
                      dark2={dark2 ? 1 : 0}
                    >
                      {buttonLabel}
                    </Button>
                  </BtnWrap> */}
                  </>
                )}
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img src={img} alt={alt} />
              </ImgWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  )
}

export default InfoSection
