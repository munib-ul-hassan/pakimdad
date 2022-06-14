import React from 'react'
import { FooterContainer, FooterWrap, FooterLinkTitle, FooterLinkItems, FooterLinkWrapper, FooterLinksContainer, FooterLink, SocialIconsLink, SocialIcons, SocialMedia, SocialLogo, SocialMediaWrap, WebsiteRights } from './FooterElements'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa';

const Footer = () => {

  return (
      <FooterContainer>
          <FooterWrap>
              <FooterLinksContainer>
                  <FooterLinkWrapper>
                      <FooterLinkItems>
                          <FooterLinkTitle>About Us</FooterLinkTitle>
                              <FooterLink to="/signin">how it Works</FooterLink>
                              <FooterLink to="/signin">Testimonials</FooterLink>
                              <FooterLink to="/signin">Careers</FooterLink>
                              <FooterLink to="/signin">Terms of Service</FooterLink>
                      </FooterLinkItems>

                      <FooterLinkItems>
                          <FooterLinkTitle>About Us</FooterLinkTitle>
                              <FooterLink to="/signin">how it Works</FooterLink>
                              <FooterLink to="/signin">Testimonials</FooterLink>
                              <FooterLink to="/signin">Careers</FooterLink>
                              <FooterLink to="/signin">Terms of Service</FooterLink>
                      </FooterLinkItems>
                      
                  </FooterLinkWrapper>

                  <FooterLinkWrapper>
                      <FooterLinkItems>
                          <FooterLinkTitle>Videos</FooterLinkTitle>
                              <FooterLink to="/">Submit Video</FooterLink>
                              <FooterLink to="/">Ambassator</FooterLink>
                              <FooterLink to="/">Careers</FooterLink>
                              <FooterLink to="/">Terms of Service</FooterLink>
                      </FooterLinkItems>

                      <FooterLinkItems>
                          <FooterLinkTitle>Buisness</FooterLinkTitle>
                              <FooterLink to="/">how it Works</FooterLink>
                              <FooterLink to="/">Testimonials</FooterLink>
                              <FooterLink to="/">Careers</FooterLink>
                              <FooterLink to="/">Terms of Service</FooterLink>
                      </FooterLinkItems>
                      
                  </FooterLinkWrapper>

              </FooterLinksContainer>
              <SocialMedia>
              <SocialMediaWrap>

                  <WebsiteRights>Pakimadad ⓒ {new Date().getFullYear()} All Rights Reserved</WebsiteRights>
                  <SocialIcons>
                      <SocialIconsLink href='/' target='_blank' aria-label="Facebook">
                          <FaFacebook/>
                      </SocialIconsLink>
                      <SocialIconsLink href='/' target='_blank' aria-label="Instagram">
                          <FaInstagram />
                      </SocialIconsLink>
                      <SocialIconsLink href='/' target='_blank' aria-label="Twitter">
                          <FaTwitter/>
                      </SocialIconsLink>
                      <SocialIconsLink href='/' target='_blank' aria-label="Youtube">
                          <FaYoutube/>
                      </SocialIconsLink>
                      <SocialIconsLink href='/' target='_blank' aria-label="Linkedin">
                          <FaLinkedin/>
                      </SocialIconsLink>
                    </SocialIcons>
                  </SocialMediaWrap>
                  </SocialMedia>
          </FooterWrap>
    </FooterContainer>
  )
}

export default Footer
