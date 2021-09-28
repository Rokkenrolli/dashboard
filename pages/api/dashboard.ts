import { PrismaClient } from "@prisma/client";
import prisma from '../../lib/prisma';



export const getAllProjects = async () => {

    return await prisma.project.findMany({orderBy:[{id:'asc'}]})
}


export const getPublishedProjects = async () => {
    return await prisma.project.findMany({where:{published:true},orderBy:[{id:'asc'}]})
}

export const getNonPublishedProjects = async () => {
    return await prisma.project.findMany({where:{published:false},orderBy:[{id:'asc'}]})
}

