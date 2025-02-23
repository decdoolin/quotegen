import { generateQueryStrFromObject, processFetchRequest } from "../../utils";
const QUOTABLE_BASE = 'https://quotable.io';

const getQuotes = async function(params){
    let url = '${QUOTABLE_BASE}/quotes';
    if(params){
        url += generateQueryStrFromObject(params);
    }

    return processFetchRequest(url);
};

export default {
    getQuotes,
};
