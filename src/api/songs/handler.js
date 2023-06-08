/* eslint-disable linebreak-style */
/* eslint-disable eol-last */
/* eslint-disable linebreak-style */
/* eslint-disable max-len */
/* eslint-disable linebreak-style */
/* eslint-disable object-curly-newline */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-trailing-spaces */
/* eslint-disable linebreak-style */
/* eslint-disable indent */
/* eslint-disable linebreak-style */
class SongsHandler {
    constructor(service, validator) {
      this._service = service;
      this._validator = validator;
 
      this.postSongHandler = this.postSongHandler.bind(this);
      this.getSongsHandler = this.getSongsHandler.bind(this);
      this.getSongByIdHandler = this.getSongByIdHandler.bind(this);
      this.putSongByIdHandler = this.putSongByIdHandler.bind(this);
      this.deleteSongByIdHandler = this.deleteSongByIdHandler.bind(this);
    }

   async postSongHandler(request, h) {
    this._validator.validateSongPayload(request.payload);
    const { title, year, genre, performer, duration, albumId } = request.payload;
 
    const songId = await this._service.addSong({ title, year, genre, performer, duration, albumId });
 
    const response = h.response({
      status: 'success',
      message: 'Musik berhasil ditambahkan',
      data: {
        songId,
      },
    });
    response.code(201);
    return response;
    } 
 
  async getSongsHandler() {
    const songs = await this._service.getSongs();
    return {
      status: 'success',
      data: {
        songs,
      },
    };
    }

  async getSongByIdHandler(request) {
    const { id } = request.params;
    const song = await this._service.getSongById(id);
    return {
        status: 'success',
        data: {
            song,
        },
    };
  } 

  async putSongByIdHandler(request) {
    this._validator.validateSongPayload(request.payload);
    const { id } = request.params;
       
    await this._service.editSongById(id, request.payload);
       
    return {
      status: 'success',
      message: 'Musik berhasil diperbarui',
      };
    } 

  async deleteSongByIdHandler(request) {
    const { id } = request.params;
    await this._service.deleteSongById(id);
    return {
      status: 'success',
      message: 'Musik berhasil dihapus',
    };
  } 
}

module.exports = SongsHandler;