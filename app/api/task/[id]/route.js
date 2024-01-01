import connectMongoDb from "@/Utility/connectMongoDb";
import Topic from "@/modules/topic";
import { NextResponse } from "next/server";

export async function PUT(request,{params}){
    const {id}=params;
    const {newTitle:tittle,newDescription:description}=await request.json();
    await connectMongoDb();
    await Topic.findByIdAndUpdate(id,{tittle,description})
    return NextResponse.json({message:"Topic Updated"})

}

export async function POST(request){
    const t=await request.json();
    await connectMongoDb();
    console.log(Topic.findById(t.id));
    const topic=await Topic.findById(t.id);
    return NextResponse.json({"topic":topic})
}