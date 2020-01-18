import originalMoment from "moment";
import { extendMoment } from "moment-range";
const moment = extendMoment(originalMoment);

export const channelTypes = ['In App', 'Mobile Web', 'Desktop', 'Social Media', 'Paid Search', 'Email', 'Lead Form', 'Landing Page'];
export const attributionTypes = ['Visits', 'Transactions'];
export const channelsDefault = [
        {
            name: 'Digital',
            active: false
        },
        {
            name: 'Out Of Home',
            active: false
        },
        {
            name: 'TV',
            active: false
        },
        {
            name: 'Radio',
            active: false
        }]

export const trackerDefault = {
    channel: '',
    channelTypes: [],
    attributionTypes: [],
    dateRange: moment.range(moment().clone(), moment().clone().add(7, "days")),
    budget: '',
    impressions: ''
}