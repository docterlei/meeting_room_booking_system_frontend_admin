import request from "./request";


export async function meetingRoomUsedCount(startTime: string, endTime: string) {
    return await request.get('/statistic/meetingRoomUsedCount', {
        params: {
            startTime,
            endTime
        }
    });
}

export async function userBookingCount(startTime: string, endTime: string) {
    return await request.get('/statistic/userBookingCount', {
        params: {
            startTime,
            endTime
        }
    });
}