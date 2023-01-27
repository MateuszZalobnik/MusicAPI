import mongoose from 'mongoose';

const artistSchema = new mongoose.Schema({
  artistName: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: false,
  },
  surname: {
    type: String,
    required: false,
  },
});

export default mongoose.model('Artist', artistSchema);
