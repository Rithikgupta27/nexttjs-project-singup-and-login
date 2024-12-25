import User from "@/models/user";
import Connection from "@/database/config";
import { NextResponse } from "next/server"; // Import only NextResponse
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

// Establish database connection
Connection();

export const POST = async (req) => {
    try {
        // Parse the request body
        const body = await req.json();
        const { username, password } = body;

        // Check if user exists
        const user = await User.findOne({ username });
        if (!user) {
            return NextResponse.json({ message: "Username is invalid" }, { status: 404 });
        }

        // Validate the password
        const validPassword = await bcrypt.compare(password, user.password);
        if (!validPassword) {
            return NextResponse.json({ message: "Password is invalid" }, { status: 404 });
        }

        // Generate JWT token
        const tokenPayload = {
            username: user.username,
            id: user._id,
        };
        const jwttoken = jwt.sign(tokenPayload, process.env.SECRET_KEY, { expiresIn: "1d" });

        // Create response and set the cookie
        const response = NextResponse.json({ message: "Login successful" });
        response.cookies.set("token", jwttoken, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "strict",
            path: "/",
            maxAge: 86400, // 1 day in seconds
        });

        return response;
    } catch (error) {
        console.error("Error during login:", error);
        return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
    }
};
