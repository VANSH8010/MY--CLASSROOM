const { default: mongoose } = require("mongoose");

mongoose.connect("mongodb+srv://ADMIN:pY1CG5nwvc0GUxgV@cluster2.nzgdu.mongodb.net/");

const studentSchema = new mongoose.Schema(
    {
        email: {
            type: String,
            required: true,
            unique: true
        },
        password:{
          type : String,
          required:true
       }
    }
)

const teacherSchema = new mongoose.Schema(
    {
        email: {
            type: String,
            required: true,
            unique: true
        },
        password:{
          type : String,
          required:true
       }
    }
)

const Student = mongoose.model("Principal", studentSchema);
const Teacher = mongoose.model("Principal", teacherSchema);

module.exports = {
    Student,
    Teacher
}