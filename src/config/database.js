require('dotenv').config();
const mongoose = require('mongoose');


const connection = async () =>{
    try {
        await mongoose.connect('mongodb://root:123456@localhost:27017/tdv?authSource=admin');
        console.log("connect to DB success");
    } catch (error) {
        console.log(">>check err", error) 
    }
}
// const mongoURI = 'mongodb://root:123456@localhost:27017/tdv?authSource=admin';

// Kết nối với MongoDB
// const connection = () =>{
//     mongoose.connect(mongoURI, {
//         useNewUrlParser: true,
//         useUnifiedTopology: true
//       })
//       .then(() => {
//         console.log('Kết nối thành công tới MongoDB');
//       })
//       .catch((err) => {
//         console.error('Lỗi khi kết nối tới MongoDB:', err);
//       });
// }

module.exports = connection 