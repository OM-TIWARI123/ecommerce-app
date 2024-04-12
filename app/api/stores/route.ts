

import prismadb from "@/lib/prismadb";
import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";


export async function POST(req:Request, res:Response){
    try{
        const {userId}=auth();
        console.log(userId)
        const body =await req.json();
        
        if(!userId){
            return new NextResponse("Unauthorized",{status:401})
        }
        const {name}=body;
        if(!name){
            return new NextResponse("Name is required",{status:400});
        }
        const store=await prismadb.store.create({
           data:{
            name,
            userId
           } 
        });
        console.log(store)
        return new NextResponse("store created",store,{status:200});
    }catch(err){
    console.log('[STORES_POST]',err)
    return new NextResponse("Innternal error",{status:500})
  }
}