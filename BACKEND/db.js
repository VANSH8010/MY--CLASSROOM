const { default: mongoose } = require("mongoose");

mongoose.connect("mongodb+srv://ADMIN:OXMH3t0zXsPVFnGo@cluster2.nzgdu.mongodb.net/");

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

const Student = mongoose.model("Student", studentSchema);
const Teacher = mongoose.model("Teacher", teacherSchema);

module.exports = {
    Student,
    Teacher
}