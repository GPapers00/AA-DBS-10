const mongoose = require('mongoose');
const dns = require('dns');

// Workaround for 'querySrv ECONNREFUSED' errors with MongoDB Atlas
dns.setServers(['8.8.8.8', '8.8.4.4']);

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/notebook');
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

const noteSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
  },
  tags: {
    type: [String],
    default: [],
  },
}, {
  timestamps: true,
});

noteSchema.set('toJSON', {
  virtuals: true,
  versionKey: false,
  transform: function (doc, ret) {
    delete ret._id;
  }
});

const Note = mongoose.model('Note', noteSchema);

module.exports = { connectDB, Note };
