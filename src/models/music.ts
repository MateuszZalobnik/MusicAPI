import mongoose from 'mongoose';

const musicSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  artist: {
    type: Array,
    required: true,
  },
  album: {
    type: String,
    required: false,
  },
  category: {
    type: Array,
    required: true,
  },
  year: {
    type: Number,
    required: false,
  },
});

export default mongoose.model('Musics', musicSchema);
