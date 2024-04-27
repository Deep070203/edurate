import { NextResponse } from "next/server";
import { dbConnect } from "../../../../utils/dbConnect";
import University from "../../../models/university";

export async function POST(request){
    const { university_name, courses } = await request.json();
    await dbConnect();
    await University.create({ university_name, courses });
    return NextResponse.json( {message: "University Created"}, {status: 201} );
}

export async function GET(request, { params }){
    const { university_name } = params;
    
    await dbConnect();
    const university = await University.find({ university_name: university_name });
    return NextResponse.json({ university }, { status: 200 });
}