import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req:Request) {
  

  try{
    const body = await req.json();
    const {to,subject,message} = body;

    const data = await resend.emails.send({
      from:'onboarding@resend.dev',
      to,
      subject,
      html:`<p>${message}</p>`,
    });

    return NextResponse.json({success:true,data},{status:200});
  }catch(error){
    let errorMessage = 'An unknown error occurred';

    if(typeof error === 'object' && error !== null && 'message' in error){
      errorMessage = String((error as {message:unknown}).message);
    }

    return NextResponse.json({error:errorMessage},{status:500})
  }
}