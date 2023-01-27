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
  category: {
    type: Array,
    required: true,
  },
  bpm: {
    type: Number,
    required: true,
  },
  album: {
    type: String,
    required: false,
  },
  camelot: {
    type: String,
    required: true,
  },
  year: {
    type: Number,
    required: false,
  },
});

export default mongoose.model('Music', musicSchema);
