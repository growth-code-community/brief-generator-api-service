import { logger } from "../../utils/logger.js";
import { BriefRequest } from "./model.js";

async function createRequest(data){
    try{
        return await BriefRequest.create({...data})
    }catch(err){
        logger.error(err.stack)
    }
}

async function createResponse(data){
    try{
        return await BriefResponse.create({...data})
    }catch(err){
        logger.error(err.stack)
    }
}

export const repository = {
    createRequest,
    createResponse
}