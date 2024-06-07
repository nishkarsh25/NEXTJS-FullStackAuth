import jwt from "jsonwebtoken";

export const getDataFromToken = (request) => {
    try {
        const token = request.cookies.get("token")?.value || '';
        
        
    } catch (error) {
        
    }

}
