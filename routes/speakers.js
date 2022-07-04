const express = require('express');

const router = express.Router();

module.exports = (params) => {
  const { speakersService } = params;

  router.get('/', async (request, response) => {
    const artwork = await speakersService.getAllArtwork();
    const speakers = await speakersService.getList();
    response.render('layout', { pageTitle: 'Speakers', template: 'speakers', speakers, artwork });
  });

  router.get('/:shortname', async (request, response) => {
    const artwork = await speakersService.getArtworkForSpeaker(request.params.shortname);
    const speaker = await speakersService.getSpeaker(request.params.shortname);
    console.log(artwork);
    response.render('layout', {
      pageTitle: 'Speakers',
      template: 'speakers-detail',
      speaker,
      artwork,
    });
  });

  return router;
};
