import React, {Component} from 'react';
import {Box, Text, Image, Link} from './layout';
import Animate from './animate';

const CONTENT_SPACING = 15;

const styles = {
  width: 500,
  borderRadius: 3,
  flexDirection: 'row',
  flexWrap: 'wrap',
  overflow: 'hidden',
  backgroundColor: '#fff',
  boxShadow: 'rgba(0, 0, =0, 0.0470588) 0px 2px 3px 0px'
};

const Headline = ({children, level = 1, ...otherProps}) => (
  <Text element={`h${level}`} margin={0} fontWeight={400} {...otherProps}>
    {children}
  </Text>
);

const ReadingItem = ({headline, subHeadline, description, imageSrc, animate}) => {
  return (
    <Animate animate={animate}>
      <Box style={styles}>
        <Box padding={CONTENT_SPACING} flex="0 0 55%">
          <Headline level={5} color="#9E9E9E">{subHeadline}</Headline>
          <Headline level={2}>{headline}</Headline>
          <Text element="p" marginBottom={0} fontSize={14}>
            {description}
          </Text>
          <Link
            href="#"
            marginTop={CONTENT_SPACING}
            color="#245dc1"
            textDecoration="none"
            fontSize="14"
          >
            Read Article
          </Link>
        </Box>
        <Box flex="1 0 45%" backgroundColor="#e0e0e0">
          <Image
            width="100%"
            alt={headline}
            src={imageSrc}
          />
        </Box>
      </Box>
    </Animate>
  );
};

export default ReadingItem;
