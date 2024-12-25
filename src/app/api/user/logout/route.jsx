// import { NextResponse } from 'next/server';

// export const GET=async(NextRequest)=> {
//   // Delete the cookie by setting its expiration to a past date
//   const response = NextResponse.json({ message: "Logged out successfully" });
//   response.cookies.set('token',"",{httpOnly:true,expires:new Date(0)})
//   return response
  
// }

import { NextResponse } from "next/server";

export const GET = async () => {
  const response = NextResponse.json({ message: "Logged out successfully" });
  response.cookies.set("token", "", { httpOnly: true, expires: new Date(0) }); // Expire the cookie
  return response;
};
