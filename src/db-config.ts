import mongoose from 'mongoose';
mongoose.set('strictQuery', true);

const url = process.env.DATABASE_URL;
if(url){
    mongoose
      .connect(url)
      .then(() => {
        console.log('Connected to MongoDB');
      })
      .catch((error) => {
        console.log('Error connecting to MongoDB: ', error);
      });
}

const db = mongoose.connection;

export default db;
