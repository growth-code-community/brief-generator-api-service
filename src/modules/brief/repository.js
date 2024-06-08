import { logger } from "../../utils/logger.js";
import { BriefRequest, BriefResponse } from "./model.js";

async function createRequest(data){
    try{
        return await BriefRequest.create({...data})
    }catch(err){
        logger.error(err.stack)
    }
}

async function createResponse(briefId, response){
    try{
        return await BriefResponse.create({
            brief_id: briefId,
            brief_response: response
        })
    }catch(err){
        logger.error(err.stack)
    }
}

export const repository = {
    createRequest,
    createResponse
}