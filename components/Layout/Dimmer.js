import styled from 'styled-components'
import { memo } from 'react'

export default memo(function Dimmer({ lighten }) {
  return <SBGDimmer id='SBGDimmer' lighten={lighten} />
})

const SBGDimmer = styled.div`
  position: absolute;
  top: 0;
  height: 100%;
  width: 100%;
  transition: all 0.3s ease;
  background-color: ${({ lighten }) => (lighten ? '' : 'rgba(0, 0, 0, 0.4)')};
  background-image: linear-gradient(
    to bottom,
    rgba(150, 150, 150, 0.05),
    rgba(0, 0, 0, 0.5)
  );
`
