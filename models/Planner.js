import mongoose from 'mongoose';

const taskSchema = new mongoose.Schema({
  date: { type: String, required: true },
  time: { type: String, required: true },
  task: { type: String, required: true },
  topic: { type: String },
  status: { type: String, default: 'pending' },
});

const plannerSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  tasks: [taskSchema],
}, {
  timestamps: true,
});

const Planner = mongoose.model('Planner', plannerSchema);
export default Planner;
