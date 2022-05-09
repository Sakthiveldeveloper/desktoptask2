import { Container } from '@mui/material'
import React from 'react'

const Home = () => {
  return (
    <div>
      <h1>
        Home
      </h1>
      <br />
      <Container>
        Animation
        The floating action button animates onto the screen as an expanding piece of material, by default.

        A floating action button that spans multiple lateral screens (such as tabbed screens) should briefly disappear, then reappear if its action changes.

        The Zoom transition can be used to achieve this. Note that since both the exiting and entering animations are triggered at the same time, we use enterDelay to allow the outgoing Floating Action Button's animation to finish before the new one enters.
      </Container>
    </div>
  )
}

export default Home
