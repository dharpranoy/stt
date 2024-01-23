const mongoose = require('mongoose');
mongoose.set('strictQuery', true);
require('dotenv').config('../.env');

module.exports.connectdb = () => {
    console.log('Connecting to ShellSkill cluster...');
    try {
        mongoose.connect(process.env.MONGO_URI);
        console.log('🗸 Connected to Mongo cluster \n');
    } catch (e) {
        console.log('✗ Connection to Mongo cluster failed: Exiting... ' + e + '\n');
        process.exit(1);
    }
};
