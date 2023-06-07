/* eslint-disable linebreak-style */
/* eslint-disable eol-last */
/* eslint-disable linebreak-style */
/* eslint-disable camelcase */
/* eslint-disable linebreak-style */
/* eslint-disable no-trailing-spaces */
/* eslint-disable indent */
/* eslint-disable linebreak-style */
const mapDBToModel = ({ 
    id,
    title,
    year,
    genre,
    performer,
    duration,
    albumId,
    created_at,
    updated_at,
  }) => ({
    id,
    title,
    year,
    genre,
    performer,
    duration,
    albumId,
    createdAt: created_at,
    updatedAt: updated_at,
  });

module.exports = { mapDBToModel };