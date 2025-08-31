import mongoose, { Schema } from "mongoose";

const adminSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
            maxLength: 50,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            minLength: 3,
            maxLength: 30,
        },
        mobile: {
            type: String,
            required: true,
        },
        password: {
            type: String,
            required: true,
            minLength: 6,
        },
        profilePic: {
            type: String,
            default: "https://cdn-icons-png.flaticon.com/512/149/149071.png"
        },
        isActive: {
            type: Boolean,
            default: true,
        },
        // isSuperAdmin: {
        //   type: Boolean,
        //   default: false, // upgrade logic later maybe
        // },
        role: {
          type: String,
          enum: ["admin"],
          default: "admin"
        }

    },
    {
        timestamps: true,
    }
);

export const Admin = mongoose.model("Admin", adminSchema);
