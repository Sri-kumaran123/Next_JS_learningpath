import connectMongoDb from "@/Utility/connectMongoDb";
import Topic from "@/modules/topic";
import { NextResponse } from "next/server";


export async function POST(request){
    const {tittle,description}=await request.json();
    await connectMongoDb();
    await Topic.create({tittle,description});
    return NextResponse.json({message:"Topic created"},{status:200})
}

export async function GET(){
    await connectMongoDb();
    const topics=await Topic.find();
    return NextResponse.json(topics);
}

export async function DELETE(request){
    const id=request.nextUrl.searchParams.get("id");
    await connectMongoDb();
    await Topic.findByIdAndDelete(id);
    return NextResponse.json({message:"Topic deleted"},{status:200});
}